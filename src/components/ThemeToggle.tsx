'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    setTheme(checked ? 'dark' : 'light')
  }, [checked]);

  return (
    <div className="flex justify-end items-center space-x-2">
      <input
        type="checkbox"
        className="checkbox"
        id="toggle"
        checked={checked}
        onChange={handleChange}
      />
      <label for="toggle" className="label">
        <i className="fas fa-moon text-white"></i>
        <i className='fas fa-sun text-yellow-400'></i>
        <span className='ball'></span>
      </label>
    </div>
  );
}
