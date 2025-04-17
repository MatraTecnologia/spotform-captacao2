import Image from 'next/image'
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io'

import logo from '@/public/logo.svg'
import Video from './_components/video'
import tagsImage from '@/public/tags.jpg'
import traqueamentoImage from '@/public/traqueamento.jpg'
import functionalityGif from '@/public/gif/functionality.gif'
import { LanguageSwitcher } from './_components/language-switcher'
import { LeadFormButton } from './_components/lead-form-button'

import { CreateSpotLeadSheet } from '@/features/spot-leads/components/create-spot-lead-sheet'
import { FacebookPixel } from '@/components/facebook-pixel'
import { useTranslation } from '@/app/i18n'

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await useTranslation(lng)

    return (
        <>
            <main className="flex-1 bg-black text-white">
                <div className="sticky top-0 z-40 flex flex-col items-center justify-center gap-4 bg-black px-4 py-4 md:py-8">
                    <div className="absolute right-4 top-4">
                        <LanguageSwitcher />
                    </div>

                    <h2 className="text-center text-lg font-bold leading-tight md:text-2xl">
                        🔥{' '}
                        <strong className="text-[#921fee]">
                            {t('header.title')}
                        </strong>
                    </h2>

                    <LeadFormButton title={t('header.button')} />
                </div>

                <section className="flex flex-col items-center justify-center gap-6 bg-white px-4 py-6 text-black md:py-8">
                    <Image
                        priority
                        src={logo}
                        alt="Spotform"
                        draggable={false}
                        className="pointer-events-none max-h-14 w-full select-none object-contain"
                    />

                    <h2 className="max-w-4xl px-4 text-center text-base font-normal leading-tight md:text-[1.5rem]">
                        <strong>{t('intro.subtitle').split('!')[0]}! </strong>
                        <strong className="text-[#921fee]">
                            {t('intro.subtitle').split('!')[1]}!
                        </strong>
                    </h2>

                    <h2 className="text-center text-xs md:text-[1.25rem]">
                        {t('intro.reports')}
                    </h2>

                    <Video src="/main-video.mp4" lng={lng} />

                    <div className="space-y-2 text-center">
                        <p className="text-md font-bold">{t('intro.support')}</p>

                        <ul className="font-semibold text-[#921fee]">
                            <li>{t('intro.benefits.networking')}</li>
                            <li>{t('intro.benefits.integration')}</li>
                            <li>{t('intro.benefits.notifications')}</li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-center">
                        <LeadFormButton title={t('header.button')} />
                    </div>
                </section>

                <section className="flex items-center justify-center bg-[#0c0c0c] px-4 py-6">
                    <div className="flex max-w-[78.125rem] flex-col gap-4 md:flex-row md:gap-8">
                        <div className="flex flex-col items-center gap-4 text-center md:space-y-6">
                            <h2 className="text-lg font-bold leading-tight md:text-xl">
                                {t('challenge.title')}
                            </h2>

                            <p className="leading-tight text-[#b6b6b6]">
                                {t('challenge.solution')}
                            </p>

                            <h2 className="text-lg font-bold leading-tight md:text-xl">
                                <strong className="text-[#921fee]">
                                    {t('features.title').split('-')[0]}
                                </strong>{' '}
                                - {t('features.title').split('-')[1]}
                            </h2>

                            <p className="leading-tight text-[#b6b6b6]">
                                {t('features.feature1')}
                            </p>

                            <Image
                                unoptimized
                                draggable={false}
                                src={functionalityGif}
                                alt="Funcionalidades SpotForm"
                                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
                            />

                            <p className="leading-tight text-[#b6b6b6]">
                                {t('features.feature2')}
                            </p>

                            <Image
                                priority
                                draggable={false}
                                src={traqueamentoImage}
                                alt="Rastreamento: Facebook Pixel, Google Analytics, Redirecionamento WhatsApp"
                                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
                            />

                            <p className="leading-tight text-[#b6b6b6]">
                                {t('features.feature3')}
                            </p>

                            <Image
                                priority
                                src={tagsImage}
                                draggable={false}
                                alt="Tags personalizadas"
                                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
                            />
                        </div>
                    </div>
                </section>

                <section className="flex items-center justify-center bg-[#170c20] px-4 py-6 md:py-12">
                    <div className="flex max-w-[78.125rem] flex-col items-center justify-center gap-4 md:gap-8">


                        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                            <div className="space-y-4 text-center md:space-y-6">
                                <h2 className="text-balance text-lg font-bold leading-tight md:text-2xl">
                                    {t('unique.title')}
                                </h2>

                                <p className="leading-tight text-[#b6b6b6]">
                                    {t('unique.description1')}
                                </p>

                                <p className="leading-tight text-[#b6b6b6]">
                                    {t('unique.description2')}
                                </p>

                                <p className="leading-tight text-[#b6b6b6]">
                                    {t('unique.description3')}
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto w-full space-y-4 py-4 md:space-y-6">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#930000] bg-[#5b0c0c] p-6 text-center text-[#e41326]">
                                    <IoIosCloseCircle className="size-8" />
                                    <p className="font-bold">
                                        {t('benefits.negative1')}
                                    </p>
                                </div>

                                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#930000] bg-[#5b0c0c] p-6 text-center text-[#e41326]">
                                    <IoIosCloseCircle className="size-8" />
                                    <p className="font-bold">
                                        {t('benefits.negative2')}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                                    <IoIosCheckmarkCircle className="size-8" />
                                    <p className="font-bold">
                                        {t('benefits.positive1')}
                                    </p>
                                </div>

                                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                                    <IoIosCheckmarkCircle className="size-8" />
                                    <p className="font-bold">
                                        {t('benefits.positive2')}
                                    </p>
                                </div>

                                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                                    <IoIosCheckmarkCircle className="size-8" />
                                    <p className="font-bold">
                                        {t('benefits.positive3')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="py-2 text-center leading-tight">
                            {t('conclusion')}
                        </p>
                    </div>
                </section>
            </main>

            <FacebookPixel />
            <CreateSpotLeadSheet />
        </>
    )
} 