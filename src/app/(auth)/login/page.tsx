import { LoginForm } from "@/features/auth/components/login-form"
import { requireUnauth } from "@/lib/auth-utils";

const Page = async () => {
    await requireUnauth();

    return (
        <div className="max-w-3xl flex items-center justify-center mx-auto">
            <LoginForm />
        </div>
    )
}

export default Page;