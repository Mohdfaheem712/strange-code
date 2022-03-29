import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const ContactForm = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    Feel free to ask us anything!
                  </div>
                <h3 className="mt-0 mb-12">
                  Contact
                  </h3>
                <p className="m-0">
                Have doubt or suggestion to make? Feel free to ask anything. 
                If you have any suggestions, please let me know. 
                Your suggestions are highly appreciated. 
                I appreciate your time and try hard to reply to every single message posted here! 
                Keep dropping your priceless opinions.
                  </p>
              </div>

              <div className={
                classNames(
                  'split-item-form reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                
                <form className="form">
                
                <div className="mt-1">
                    <Input id="name" type="text" label="Name" placeholder="Enter Name Here">
                    </Input>
                </div>

                <div className="mt-12">
                    <Input id="email" type="email" label="Email" placeholder="Enter Email Here">
                    </Input>
                </div>

                <div className="mt-12">
                    <Input id="email" type="textarea" label="Message" placeholder="Enter Your Message Here">
                    </Input>
                </div>
                
                <div className="mt-12">
                <Button color="primary" > Submit</Button>
                </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

ContactForm.propTypes = propTypes;
ContactForm.defaultProps = defaultProps;

export default ContactForm;