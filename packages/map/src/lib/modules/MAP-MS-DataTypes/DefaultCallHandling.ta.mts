/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_DefaultCallHandling {
    continueCall = 0,
    releaseCall = 1,
}

/**
 * @summary DefaultCallHandling
 * @description
 *
 * Default call handling if CAMEL service is not available: continueCall or
 * releaseCall. Exception handling: values 2-31 shall be treated as
 * continueCall; values greater than 31 shall be treated as releaseCall (3GPP TS
 * 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultCallHandling  ::=  ENUMERATED {
 *     continueCall (0) ,
 *     releaseCall (1) ,
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type DefaultCallHandling = _enum_for_DefaultCallHandling | ENUMERATED;

/**
 * @summary DefaultCallHandling_continueCall
 * @constant
 * @type {number}
 */
export
const DefaultCallHandling_continueCall: DefaultCallHandling = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary continueCall
 * @constant
 * @type {number}
 */
export
const continueCall: DefaultCallHandling = DefaultCallHandling_continueCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DefaultCallHandling_releaseCall
 * @constant
 * @type {number}
 */
export
const DefaultCallHandling_releaseCall: DefaultCallHandling = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseCall
 * @constant
 * @type {number}
 */
export
const releaseCall: DefaultCallHandling = DefaultCallHandling_releaseCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultCallHandling
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DefaultCallHandling = $._decodeEnumerated;

/**
 * @summary Encodes a(n) DefaultCallHandling into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultCallHandling, encoded as an ASN.1 Element.
 */
export const _encode_DefaultCallHandling = $._encodeEnumerated;


/* eslint-enable */
