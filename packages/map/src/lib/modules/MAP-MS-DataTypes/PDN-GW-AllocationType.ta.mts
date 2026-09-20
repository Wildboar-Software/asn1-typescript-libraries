/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDN_GW_AllocationType
 * @description
 *
 * Whether the PDN GW identity was allocated statically or dynamically.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDN-GW-AllocationType  ::=  ENUMERATED {
 *     static    (0),
 *     dynamic    (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PDN_GW_AllocationType {
    static_ = 0,
    dynamic = 1,
}

/**
 * @summary PDN_GW_AllocationType
 * @description
 *
 * Whether the PDN GW identity was allocated statically or dynamically.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDN-GW-AllocationType  ::=  ENUMERATED {
 *     static    (0),
 *     dynamic    (1)}
 * ```
 * 
 * @enum {number}
 */
export
type PDN_GW_AllocationType = _enum_for_PDN_GW_AllocationType;

/**
 * @summary PDN_GW_AllocationType
 * @description
 *
 * Whether the PDN GW identity was allocated statically or dynamically.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDN-GW-AllocationType  ::=  ENUMERATED {
 *     static    (0),
 *     dynamic    (1)}
 * ```
 * 
 * @enum {number}
 */
export
const PDN_GW_AllocationType = _enum_for_PDN_GW_AllocationType;

/**
 * @summary PDN_GW_AllocationType_static_
 * @constant
 * @type {number}
 */
export
const PDN_GW_AllocationType_static_: PDN_GW_AllocationType = PDN_GW_AllocationType.static_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary static_
 * @constant
 * @type {number}
 */
export
const static_: PDN_GW_AllocationType = PDN_GW_AllocationType.static_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDN_GW_AllocationType_dynamic
 * @constant
 * @type {number}
 */
export
const PDN_GW_AllocationType_dynamic: PDN_GW_AllocationType = PDN_GW_AllocationType.dynamic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamic
 * @constant
 * @type {number}
 */
export
const dynamic: PDN_GW_AllocationType = PDN_GW_AllocationType.dynamic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) PDN_GW_AllocationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PDN_GW_AllocationType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PDN_GW_AllocationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDN_GW_AllocationType, encoded as an ASN.1 Element.
 */
export const _encode_PDN_GW_AllocationType = $._encodeEnumerated;


/* eslint-enable */
