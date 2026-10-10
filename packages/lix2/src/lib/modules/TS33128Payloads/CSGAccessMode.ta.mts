/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSGAccessMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED
 * {
 *     closedMode(1),
 *     hybridMode(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CSGAccessMode {
    closedMode = 1,
    hybridMode = 2,
}

/**
 * @summary CSGAccessMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED
 * {
 *     closedMode(1),
 *     hybridMode(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CSGAccessMode = _enum_for_CSGAccessMode;

/**
 * @summary CSGAccessMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED
 * {
 *     closedMode(1),
 *     hybridMode(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CSGAccessMode = _enum_for_CSGAccessMode;

/**
 * @summary CSGAccessMode_closedMode
 * @constant
 * @type {number}
 */
export
const CSGAccessMode_closedMode: CSGAccessMode = CSGAccessMode.closedMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary closedMode
 * @constant
 * @type {number}
 */
export
const closedMode: CSGAccessMode = CSGAccessMode.closedMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CSGAccessMode_hybridMode
 * @constant
 * @type {number}
 */
export
const CSGAccessMode_hybridMode: CSGAccessMode = CSGAccessMode.hybridMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hybridMode
 * @constant
 * @type {number}
 */
export
const hybridMode: CSGAccessMode = CSGAccessMode.hybridMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CSGAccessMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CSGAccessMode = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CSGAccessMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSGAccessMode, encoded as an ASN.1 Element.
 */
export const _encode_CSGAccessMode = $._encodeEnumerated;


/* eslint-enable */
