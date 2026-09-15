/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallAssociatedServices
 * @description
 *
 * Call-associated services. BIT STRING advertised in ACSE user-information
 * listing which CSTA services or events this association will use. ECMA-285
 * §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallAssociatedServices  ::=  BIT STRING
 * {    associateData                        ( 0),
 *         cancelTelephonyTones                    ( 1),
 *         changeConnectionInformation                ( 5),
 *         generateDigits                        ( 2),
 *         generateTelephonyTones                    ( 3),
 *         sendUserInformation                    ( 4) }
 * ```
 */
export
type CallAssociatedServices = BIT_STRING;

/**
 * @summary CallAssociatedServices_associateData
 * @description Advertises `associateData` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallAssociatedServices_associateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary associateData
 * @description Alias of {@link CallAssociatedServices_associateData}.
 * @constant
 */
export
const associateData: number = CallAssociatedServices_associateData; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedServices_cancelTelephonyTones
 * @description
 * Advertises `cancelTelephonyTones` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallAssociatedServices_cancelTelephonyTones: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cancelTelephonyTones
 * @description Alias of {@link CallAssociatedServices_cancelTelephonyTones}.
 * @constant
 */
export
const cancelTelephonyTones: number = CallAssociatedServices_cancelTelephonyTones; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedServices_changeConnectionInformation
 * @description
 * Advertises `changeConnectionInformation` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallAssociatedServices_changeConnectionInformation: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary changeConnectionInformation
 * @description
 * Alias of {@link CallAssociatedServices_changeConnectionInformation}.
 * @constant
 */
export
const changeConnectionInformation: number = CallAssociatedServices_changeConnectionInformation; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedServices_generateDigits
 * @description Advertises `generateDigits` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallAssociatedServices_generateDigits: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary generateDigits
 * @description Alias of {@link CallAssociatedServices_generateDigits}.
 * @constant
 */
export
const generateDigits: number = CallAssociatedServices_generateDigits; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedServices_generateTelephonyTones
 * @description
 * Advertises `generateTelephonyTones` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallAssociatedServices_generateTelephonyTones: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary generateTelephonyTones
 * @description Alias of {@link CallAssociatedServices_generateTelephonyTones}.
 * @constant
 */
export
const generateTelephonyTones: number = CallAssociatedServices_generateTelephonyTones; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedServices_sendUserInformation
 * @description
 * Advertises `sendUserInformation` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const CallAssociatedServices_sendUserInformation: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary sendUserInformation
 * @description Alias of {@link CallAssociatedServices_sendUserInformation}.
 * @constant
 */
export
const sendUserInformation: number = CallAssociatedServices_sendUserInformation; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallAssociatedServices: $.ASN1Decoder<CallAssociatedServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallAssociatedServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallAssociatedServices (el: _Element): CallAssociatedServices {
    if (!_cached_decoder_for_CallAssociatedServices) { _cached_decoder_for_CallAssociatedServices = $._decodeBitString; }
    return _cached_decoder_for_CallAssociatedServices(el);
}

let _cached_encoder_for_CallAssociatedServices: $.ASN1Encoder<CallAssociatedServices> | null = null;

/**
 * @summary Encodes a(n) CallAssociatedServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallAssociatedServices, encoded as an ASN.1 Element.
 */
export
function _encode_CallAssociatedServices (value: CallAssociatedServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallAssociatedServices) { _cached_encoder_for_CallAssociatedServices = $._encodeBitString; }
    return _cached_encoder_for_CallAssociatedServices(value, elGetter);
}


/* eslint-enable */
