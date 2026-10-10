/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IPAddress_iP_type {
    iPV4 = 0,
    iPV6 = 1,
}

/**
 * @summary IPAddress_iP_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPAddress-iP-type ::= ENUMERATED {
 *     iPV4(0),
 *     iPV6(1),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IPAddress_iP_type = _enum_for_IPAddress_iP_type | ENUMERATED;

/**
 * @summary IPAddress_iP_type_iPV4
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_type_iPV4: IPAddress_iP_type = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV4
 * @constant
 * @type {number}
 */
export
const iPV4: IPAddress_iP_type = IPAddress_iP_type_iPV4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPAddress_iP_type_iPV6
 * @constant
 * @type {number}
 */
export
const IPAddress_iP_type_iPV6: IPAddress_iP_type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV6
 * @constant
 * @type {number}
 */
export
const iPV6: IPAddress_iP_type = IPAddress_iP_type_iPV6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) IPAddress_iP_type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IPAddress_iP_type = $._decodeEnumerated;

/**
 * @summary Encodes a(n) IPAddress_iP_type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPAddress_iP_type, encoded as an ASN.1 Element.
 */
export const _encode_IPAddress_iP_type = $._encodeEnumerated;


/* eslint-enable */
