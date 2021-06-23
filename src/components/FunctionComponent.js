import React from 'react'

//cú pháp component: rfc
export default function FunctionComponent() {
    //Lệnh return chứa giao diện của thẻ. Lưu ý giao diện của thẻ phải được bao phủ bởi 1 thẻ duy nhất thường là thẻ div
    return (
        <div className="p-2 bg-dark m-2 text-white">
            <div className = "text-white display-4">Title</div>
            <div>
                content content content content content content content content
            </div>
        </div>
    )
}
