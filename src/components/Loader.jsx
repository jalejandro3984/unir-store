import React from "react";
import { InfinitySpin } from "react-loader-spinner";

export const Loader = ({visible}) => {
    return (
        <div className="loader">
            <InfinitySpin
                visible={visible}
                width="200"
                color="#2f2f2f"
                ariaLabel="infinity-spin-loading"
            />
        </div>
    );
}