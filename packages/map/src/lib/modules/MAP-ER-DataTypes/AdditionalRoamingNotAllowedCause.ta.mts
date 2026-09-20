/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AdditionalRoamingNotAllowedCause {
    supportedRAT_TypesNotAllowed = 0,
}

/**
 * @summary AdditionalRoamingNotAllowedCause
 * @description
 * 
 * Additional cause on `RoamingNotAllowedParam`. If this parameter is received
 * by the MSC/VLR or SGSN, `roamingNotAllowedCause` shall be discarded (3GPP TS
 * 29.002 V19.1.0 clause 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalRoamingNotAllowedCause  ::=  ENUMERATED {
 *     supportedRAT-TypesNotAllowed (0),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type AdditionalRoamingNotAllowedCause = _enum_for_AdditionalRoamingNotAllowedCause | ENUMERATED;

/**
 * @summary AdditionalRoamingNotAllowedCause_supportedRAT_TypesNotAllowed
 * @description
 *
 * `supportedRAT-TypesNotAllowed` (0) (3GPP TS 29.002 V19.1.0 clause 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalRoamingNotAllowedCause_supportedRAT_TypesNotAllowed: AdditionalRoamingNotAllowedCause = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supportedRAT_TypesNotAllowed
 * @description
 *
 * `supportedRAT-TypesNotAllowed` (0) (3GPP TS 29.002 V19.1.0 clause 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const supportedRAT_TypesNotAllowed: AdditionalRoamingNotAllowedCause = AdditionalRoamingNotAllowedCause_supportedRAT_TypesNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalRoamingNotAllowedCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AdditionalRoamingNotAllowedCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AdditionalRoamingNotAllowedCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalRoamingNotAllowedCause, encoded as an ASN.1 Element.
 */
export const _encode_AdditionalRoamingNotAllowedCause = $._encodeEnumerated;


/* eslint-enable */
