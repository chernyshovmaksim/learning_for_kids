import React from 'react'

type Props = {}

const testTailwind = (props: Props) => {
    return (
        <div>
            <div className="container mx-auto">
                <h1 className="text-blue-800 font-black text-4xl">
                    Tailwind css works
                </h1>
            </div>
        </div>
    )
}

export default testTailwind
