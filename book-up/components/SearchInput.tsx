"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    textInput: string;
    select: string;
};

export default function SearchInput() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if(errors.textInput) return
        console.log(data)
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
            <select defaultValue="Book title" className="select w-min"
                {...register("select")}>
                <option>by book</option>
                <option>by author</option>
                <option>by both</option>
            </select>
            <div className={errors.textInput ? 'tooltip rounded-r-md' : ''} data-tip="Search must be more than 3 characters">
                <input type="submit" value="Search" className="btn btn-primary rounded-r-md disabled:text-neutral-content" disabled={!!errors.textInput}/>
            </div>
        </form>
    );
}
