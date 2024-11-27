import React, { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const ThemeSwitcher = ({ onToggle }) => { 
    const [isDarkMode, setIsDarkMode] = useState(false)
    const handleChange = (checked) => { setIsDarkMode(checked); onToggle(checked); }

    return ( 
        <div className="flex items-center"> 
        <Switch checked={isDarkMode} onCheckedChange={handleChange} id="theme-selector" className="cursor-pointer" /> 
        <Label htmlFor="theme-selector" className="cursor-pointer">Mode...</Label>
        </div> 
    )
}

export default ThemeSwitcher