'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export interface ComboboxOption {
  value: string
  label: string
  description?: string
}

interface ComboboxProps {
  options: ComboboxOption[]
  value?: string
  onValueChange: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  className?: string
  disabled?: boolean
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = 'Chọn...',
  searchPlaceholder = 'Tìm kiếm...',
  emptyText = 'Không tìm thấy.',
  className,
  disabled = false
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)

  const selectedOption = options.find((option) => option.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className={cn('justify-between bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600', className)}
          disabled={disabled}
        >
          <span className='truncate'>{selectedOption ? selectedOption.label : placeholder}</span>
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600'>
        <Command className='bg-white dark:bg-gray-800'>
          <CommandInput
            placeholder={searchPlaceholder}
            className='bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
          />
          <CommandEmpty className='text-gray-500 dark:text-gray-400'>{emptyText}</CommandEmpty>
          <CommandGroup className='max-h-[200px] overflow-auto bg-white dark:bg-gray-800'>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  onValueChange(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
                className='hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-gray-100'
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4 text-green-600 dark:text-green-400',
                    value === option.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                <div className='flex-1'>
                  <div className='font-medium'>{option.label}</div>
                  {option.description && (
                    <div className='text-sm text-gray-500 dark:text-gray-400'>{option.description}</div>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
