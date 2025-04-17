'use client'

import { usePathname } from 'next/navigation'
import { languages } from '@/app/i18n/settings'
import { Globe } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export const LanguageSwitcher = () => {

    const pathname = usePathname()
    const currentLang = pathname.split('/')[1]

    const changeLanguage = (lng: string) => {
        try {
            // Definir o cookie
            document.cookie = `NEXT_LOCALE=${lng}; path=/; max-age=31536000`

            // Construir o novo caminho diretamente em vez de usar replace
            // para evitar problemas com nós DOM
            const pathWithoutLang = pathname.substring(currentLang.length + 1) || ''
            const newPath = `/${lng}/${pathWithoutLang}`

            // Navegar para o novo caminho com redirecionamento completo
            // para evitar problemas de DOM parcial
            window.location.href = newPath
        } catch (error) {
            console.error("Erro ao mudar idioma:", error);
            // Fallback para navegação simples
            window.location.href = `/${lng}`
        }
    }

    return (
        <div className="relative z-50">
            <Select
                defaultValue={currentLang}
                onValueChange={changeLanguage}
                // Chave única para forçar remontagem e evitar problemas de DOM
                key={`lang-select-${currentLang}`}
            >
                <SelectTrigger
                    className="w-[120px] h-8 bg-white/10 border-transparent text-white hover:bg-white/20 focus:bg-white/20 focus:ring-offset-0 focus:ring-0"
                >
                    <Globe className="mr-2 size-4" />
                    <SelectValue>
                        {currentLang === 'pt-BR' ? 'Português' : 'English'}
                    </SelectValue>
                </SelectTrigger>
                <SelectContent
                    className="bg-zinc-900 border-zinc-800 text-white"
                    position="popper"
                >
                    {languages.map((lng) => (
                        <SelectItem
                            key={lng}
                            value={lng}
                            className="text-white focus:bg-white/10 focus:text-white data-[state=checked]:bg-white/20"
                        >
                            {lng === 'pt-BR' ? 'Português' : 'English'}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
} 