import React from 'react';
import Image from 'next/image';

export default function CommentsBox() {

    const sizeImg = 25
    return (
        <section className="relative flex items-center justify-center min-h- 35 antialiased bg-white bg-gray-100 min-w-screen">
            <div className="container px-0 mx-auto sm:px-5">
                <div className="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-3/3">
                    <div className="flex flex-row">
                        <Image
                            className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                            alt="Noob master's avatar"
                            src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                            width={sizeImg}
                            height={sizeImg}
                        />
                        <div className="flex-col mt-1">
                            <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                                Noob master
                                <span className="ml-2 text-xs font-normal text-gray-500">2 weeks ago</span>
                            </div>
                            <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                                Wow!!! How did you create this?
                            </div>
                            <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                                {/* Add your SVG icon here */}
                            </button>
                            <button className="inline-flex items-center px-1 -ml-1 flex-column">
                                {/* Add another SVG icon here */}
                            </button>
                        </div>
                    </div>
                    <hr className="my-2 ml-16 border-gray-200" />
                    <div className="flex flex-row pt-1 md-10 md:ml-16">
                        <Image
                            className="w-12 h-12 border-2 border-gray-300 rounded-full"
                            alt="Emily's avatar"
                            src="https://images.unsplash.com/photo-1581624657276-5807462d0a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&faces=1&faceindex=1&facepad=2"
                            width={sizeImg}
                            height={sizeImg}
                        />
                        {/* Add more content here */}
                    </div>
                </div>
            </div>
        </section>
    );
}
