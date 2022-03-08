import {Checkout as SourceCheckout} from 'SourceRoute/Checkout/Checkout.component'
import ContentWrapper from 'SourceComponent/ContentWrapper/ContentWrapper.component'
import 'src/route/Checkout/Checkout.extension.style.scss'

class Checkout extends SourceCheckout {

    renderProgressBar() {
        const checkoutStep = this.props.checkoutStep
        const styleFullWidth = {
            'width': '100%' 
        }
        const styleZeroWidth = {
            'width': '0%'
        }
        return <div className='progressBarContainer'>
                    <div className='longLine'>
                        <div className='lineInactive'/>
                        <div className='lineActive' style={styleFullWidth}/>
                    </div>
                    <div className='numberActive'>{checkoutStep === "SHIPPING_STEP" ? "1" : "✓"}</div>
                    <div className='shortLine'>
                        <div className='lineInactive'/>
                        <div className='lineActive' style={checkoutStep === "SHIPPING_STEP" ? styleZeroWidth : styleFullWidth}/>
                    </div>
                    <div className={checkoutStep === "SHIPPING_STEP" ? 'numberInactive' : 'numberActive'}>
                        {checkoutStep !== "DETAILS_STEP" ? "2" : "✓"}
                    </div>
                    <div className='longLine'>
                        <div className='lineInactive'/>
                        <div className='lineActive' style={checkoutStep !== "DETAILS_STEP" ?  styleZeroWidth : styleFullWidth}/>
                    </div>
                </div>
    }
    render() {
        return (
            <main block="Checkout">
                {this.renderProgressBar()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout