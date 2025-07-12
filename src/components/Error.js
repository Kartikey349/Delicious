import { useRouteError } from "react-router"

export const Error = () => {
    const err = useRouteError();
    return (
        <div>
            OOPs!!! something went wrong.....
            <h1>{err.status}: {err.statusText}</h1>
        </div>
    )
}