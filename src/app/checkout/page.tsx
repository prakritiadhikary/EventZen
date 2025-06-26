"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import CheckoutWizard from "@/components/checkout-wizard"
import { useCart } from "@/hooks/use-cart"
import { CreditCard, Shield } from "lucide-react"

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const steps = [
    { title: "Tickets", description: "Select your tickets" },
    { title: "Payment", description: "Choose payment method" },
  ]

  const { total, applyCoupon, couponCode, setCouponCode } = useCart()

  const handleCompletePurchase = () => {
    // Handle purchase completion
    console.log("Purchase completed")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">EventZen Checkout</h1>

          <CheckoutWizard steps={steps} currentStep={currentStep} onStepChange={setCurrentStep} />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {/* Left Column - Forms */}
            <div className="space-y-6">
              {/* Ticket Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Ticket Quantity</CardTitle>
                  <CardDescription>Choose the number of tickets you&apos;d like to purchase.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="ticket-quantity">Number of Tickets</Label>
                      <Input id="ticket-quantity" type="number" min="1" placeholder="Enter Quantity" className="mt-1" />
                    </div>
                    <Button className="w-full">Continue</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Coupon Code */}
              <Card>
                <CardHeader>
                  <CardTitle>Coupon Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="coupon-code">Enter Coupon Code</Label>
                      <Input
                        id="coupon-code"
                        placeholder="COUPON123"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                    </div>
                    <Button onClick={applyCoupon} variant="outline" className="w-full">
                      Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Choose your payment method.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex-1">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          <div>
                            <div className="font-medium">Credit Card</div>
                            <div className="text-sm text-gray-500">Visa, MasterCard, American Express</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          <div>
                            <div className="font-medium">PayPal</div>
                            <div className="text-sm text-gray-500">Pay securely with your PayPal account</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Payment Details */}
              {paymentMethod === "credit-card" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input
                        id="card-number"
                        placeholder="XXXX XXXX XXXX XXXX"
                        value={paymentDetails.cardNumber}
                        onChange={(e) => setPaymentDetails((prev) => ({ ...prev, cardNumber: e.target.value }))}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry-date">Expiry Date</Label>
                        <Input
                          id="expiry-date"
                          placeholder="MM/YY"
                          value={paymentDetails.expiryDate}
                          onChange={(e) => setPaymentDetails((prev) => ({ ...prev, expiryDate: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="XXX"
                          value={paymentDetails.cvv}
                          onChange={(e) => setPaymentDetails((prev) => ({ ...prev, cvv: e.target.value }))}
                        />
                      </div>
                    </div>
                    <Button onClick={handleCompletePurchase} className="w-full">
                      Complete Purchase
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Column - Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Price Summary</CardTitle>
                  <CardDescription>Check your purchase summary below.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Ticket Price</span>
                    <span>$50</span>
                  </div>
                  <div className="text-sm text-gray-500">Standard</div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$100</span>
                  </div>
                  <div className="text-sm text-gray-500">Includes Taxes</div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Apply Coupon
                  </Button>
                </CardContent>
              </Card>

              {/* Success Message */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Thank You!</h3>
                      <p className="text-sm text-gray-600">Your purchase was successful.</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm">Share with Friends</Button>
                    <Button size="sm" variant="outline">
                      View Receipt
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
