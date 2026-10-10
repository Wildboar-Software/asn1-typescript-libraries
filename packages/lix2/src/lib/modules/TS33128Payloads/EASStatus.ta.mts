/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EASStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASStatus  ::=  ENUMERATED
 * {
 *     enabled(1),
 *     disabled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EASStatus {
    enabled = 1,
    disabled = 2,
}

/**
 * @summary EASStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASStatus  ::=  ENUMERATED
 * {
 *     enabled(1),
 *     disabled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EASStatus = _enum_for_EASStatus;

/**
 * @summary EASStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASStatus  ::=  ENUMERATED
 * {
 *     enabled(1),
 *     disabled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EASStatus = _enum_for_EASStatus;

/**
 * @summary EASStatus_enabled
 * @constant
 * @type {number}
 */
export
const EASStatus_enabled: EASStatus = EASStatus.enabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enabled
 * @constant
 * @type {number}
 */
export
const enabled: EASStatus = EASStatus.enabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EASStatus_disabled
 * @constant
 * @type {number}
 */
export
const EASStatus_disabled: EASStatus = EASStatus.disabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disabled
 * @constant
 * @type {number}
 */
export
const disabled: EASStatus = EASStatus.disabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) EASStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EASStatus = $._decodeEnumerated;

/**
 * @summary Encodes a(n) EASStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASStatus, encoded as an ASN.1 Element.
 */
export const _encode_EASStatus = $._encodeEnumerated;


/* eslint-enable */
