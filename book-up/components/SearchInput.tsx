"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type SearchBy = "book" | "author" | "both";

export type Inputs = {
    textInput: string;
    select: SearchBy;
};

type SearchInputProps = {
    handleSearch: (dataFromSearchInput: Inputs) => void;
}

export default function SearchInput({ handleSearch }: SearchInputProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (errors.textInput) return
        return handleSearch(data)
    }

    return (
        <form className="join w-full bg-neutral rounded-md"
            onSubmit={handleSubmit(onSubmit)}
        >
            <label className="input flex-grow rounded-l-md">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" placeholder={"Search by book title or author's name"}
                    {...register("textInput", { required: true, minLength: 4 })}
                />
            </label>
            <select defaultValue="book" className="select w-min"
                {...register("select")}>
                <option value={'book'}>by book</option>
                <option value={'author'}>by author</option>
                <option value={'both'}>by both</option>
            </select>
            <div className={errors.textInput ? 'tooltip rounded-r-md' : ''} data-tip="Search must be more than 3 characters">
                <input type="submit" value="Search" className="btn btn-primary rounded-r-md disabled:text-neutral-content disabled:border-1 disabled:border-primary" disabled={!!errors.textInput} />
            </div>
        </form>
    );
}
