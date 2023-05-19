"use client";

import {useRouter} from "next/navigation";

import styles from "@/app/login/login.module.scss";
import Locales from "@/locales";

export default function Index() {
    const router = useRouter();

    return (
        <div className={styles["content"]}>
            <h2 className={styles["text"]}>ChatGPT 3.5/4.0</h2>
            <div className={styles["buttons"]}>
                <button
                    className={styles["button"]}
                    onClick={() => router.push("/login")}
                >
                    {Locales.Index.Login}
                </button>
                <button
                    className={styles["button"]}
                    onClick={() => router.push("/register")}
                >
                    {Locales.Index.Register}
                </button>
            </div>
            {/*<h4 className={styles["text"]}>除标准功能外，插件和联网功能开发中 敬请期待...</h4>*/}
        </div>
    );
}
