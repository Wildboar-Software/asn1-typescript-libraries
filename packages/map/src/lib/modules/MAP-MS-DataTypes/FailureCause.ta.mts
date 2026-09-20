/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FailureCause
 * @description
 *
 * Authentication failure that occurred: wrong user response or wrong network
 * signature (3GPP TS 29.002 V19.1.0 clause 7.6.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureCause  ::=  ENUMERATED {
 *     wrongUserResponse  (0),
 *     wrongNetworkSignature  (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FailureCause {
    wrongUserResponse = 0,
    wrongNetworkSignature = 1,
}

/**
 * @summary FailureCause
 * @description
 *
 * Authentication failure that occurred: wrong user response or wrong network
 * signature (3GPP TS 29.002 V19.1.0 clause 7.6.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureCause  ::=  ENUMERATED {
 *     wrongUserResponse  (0),
 *     wrongNetworkSignature  (1)}
 * ```
 * 
 * @enum {number}
 */
export
type FailureCause = _enum_for_FailureCause;

/**
 * @summary FailureCause
 * @description
 *
 * Authentication failure that occurred: wrong user response or wrong network
 * signature (3GPP TS 29.002 V19.1.0 clause 7.6.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureCause  ::=  ENUMERATED {
 *     wrongUserResponse  (0),
 *     wrongNetworkSignature  (1)}
 * ```
 * 
 * @enum {number}
 */
export
const FailureCause = _enum_for_FailureCause;

/**
 * @summary FailureCause_wrongUserResponse
 * @constant
 * @type {number}
 */
export
const FailureCause_wrongUserResponse: FailureCause = FailureCause.wrongUserResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wrongUserResponse
 * @constant
 * @type {number}
 */
export
const wrongUserResponse: FailureCause = FailureCause.wrongUserResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureCause_wrongNetworkSignature
 * @constant
 * @type {number}
 */
export
const FailureCause_wrongNetworkSignature: FailureCause = FailureCause.wrongNetworkSignature; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wrongNetworkSignature
 * @constant
 * @type {number}
 */
export
const wrongNetworkSignature: FailureCause = FailureCause.wrongNetworkSignature; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) FailureCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FailureCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) FailureCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FailureCause, encoded as an ASN.1 Element.
 */
export const _encode_FailureCause = $._encodeEnumerated;


/* eslint-enable */
