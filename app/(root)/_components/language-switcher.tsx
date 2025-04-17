'use client'

import { useState, useEffect } from 'react'

import { languages } from '@/app/i18n/settings'
import { Globe } from 'lucide-react'

export const LanguageSwitcher = () => {

    const [isOpen, setIsOpen] = useState(false)

    const changeLanguage = (lng: string) => {
        document.cookie = `NEXT_LOCALE=${lng}; path=/; max-age=31536000`
        window.location.href = `/${lng}`
        setIsOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = () => setIsOpen(false)
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <div className="relative z-50">
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(!isOpen)
                }}
                className="flex items-center space-x-1 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
                <Globe className="size-4" />
            </button>

            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-32 rounded-md bg-white shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="py-1">
                        {languages.map((lng) => (
                            <button
                                key={lng}
                                onClick={() => changeLanguage(lng)}
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                            >
                                {lng === 'pt-BR' ? 'Português' : 'English'}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
} 