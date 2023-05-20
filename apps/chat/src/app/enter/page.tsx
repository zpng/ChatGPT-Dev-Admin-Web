"use client";

import {useRouter} from "next/navigation";

import styles from "@/app/login/login.module.scss";
import Locales from "@/locales";

export default function Index() {
    const router = useRouter();

    return (
        <div className={styles["login-page"]}>
            <div className={styles["content"]}>
                <h1 className={styles["text"]}>ChatGPT 3.5/4.0</h1>
                <h3 className={styles["text"]}>除标准功能外，GPT4最新推出的插件和联网功能开发中 敬请期待...</h3>
                <h4 className={styles["text"]}>限时优惠：目前邀请10人注册可送Pro会员，详情见公告</h4>
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

            </div>
        </div>

    );
}
