"use client"
import { Check } from "lucide-react"

interface Step {
  title: string
  description: string
}

interface CheckoutWizardProps {
  steps: Step[]
  currentStep: number
  onStepChange: (step: number) => void
}

export default function CheckoutWizard({ steps, currentStep, onStepChange }: CheckoutWizardProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 cursor-pointer transition-colors ${
                index <= currentStep ? "bg-black text-white border-black" : "bg-white text-gray-400 border-gray-300"
              }`}
              onClick={() => onStepChange(index)}
            >
              {index < currentStep ? (
                <Check className="h-5 w-5" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-0.5 mx-2 ${index < currentStep ? "bg-black" : "bg-gray-300"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
