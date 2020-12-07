import React, {useState} from 'react';
import Head from 'next/head'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../store/actions/postAction";
import {useEffect} from "react";

export default function Home() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postData.posts);

    useEffect(() => {
        async function load() {
            const resp = await fetch('https://api.github.com/users?per_page=100')
            const json = await resp.json()
            // setData(json)
            dispatch(fetchPosts(json))
        }

        load()
    }, [])


    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                {posts.map((item) =>
                    <div className="person-item" key={item.id}>
                        <div className="preview">
                            <img src={item.avatar_url} alt={item.login}/>
                        </div>
                        <div className="login">{item.login}</div>
                        <div className="link-profile">
                            {item.html_url}
                        </div>
                    </div>
                )}
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo"/>
                </a>
            </footer>
        </div>
    )
}
