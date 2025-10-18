import { RegisterForm } from "@/features/auth/components/register-form";
import { requireUnauth } from "@/lib/auth-utils";

const Page = async () => {
    await requireUnauth()

    return (
        <div className="max-w-3xl flex items-center justify-center mx-auto">
            <RegisterForm />
        </div>
    )
}

export default Page;