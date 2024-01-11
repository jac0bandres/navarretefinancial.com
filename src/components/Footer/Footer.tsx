import LanguageButton from "../LanguageButton/LanguageButton"

export default function Footer() {
    return(
        <>
            <div className="flex fixed bottom-0 px-5 flex-row items-center w-screen bg-black h-16 text-xs text-gray-500 justify-between">
                <div className="w-1/2">
                <h1>
                    Navarrete Financial
                </h1>
                </div>
                <LanguageButton />
            </div>
        </>
    )
}