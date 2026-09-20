/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_DefaultGPRS_Handling {
    continueTransaction = 0,
    releaseTransaction = 1,
}

/**
 * @summary DefaultGPRS_Handling
 * @description
 *
 * Default GPRS session handling if GPRS CAMEL service is not available.
 * Exception handling: values 2-31 shall be treated as continueTransaction;
 * values greater than 31 shall be treated as releaseTransaction (3GPP TS 29.002
 * V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultGPRS-Handling  ::=  ENUMERATED {
 *     continueTransaction (0) ,
 *     releaseTransaction (1) ,
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type DefaultGPRS_Handling = _enum_for_DefaultGPRS_Handling | ENUMERATED;

/**
 * @summary DefaultGPRS_Handling_continueTransaction
 * @constant
 * @type {number}
 */
export
const DefaultGPRS_Handling_continueTransaction: DefaultGPRS_Handling = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary continueTransaction
 * @constant
 * @type {number}
 */
export
const continueTransaction: DefaultGPRS_Handling = DefaultGPRS_Handling_continueTransaction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DefaultGPRS_Handling_releaseTransaction
 * @constant
 * @type {number}
 */
export
const DefaultGPRS_Handling_releaseTransaction: DefaultGPRS_Handling = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseTransaction
 * @constant
 * @type {number}
 */
export
const releaseTransaction: DefaultGPRS_Handling = DefaultGPRS_Handling_releaseTransaction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultGPRS_Handling
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DefaultGPRS_Handling = $._decodeEnumerated;

/**
 * @summary Encodes a(n) DefaultGPRS_Handling into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultGPRS_Handling, encoded as an ASN.1 Element.
 */
export const _encode_DefaultGPRS_Handling = $._encodeEnumerated;


/* eslint-enable */
