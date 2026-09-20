/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OverrideCategory
 * @description
 *
 * Override Category subscription option: enabled or disabled (3GPP TS 29.002
 * V19.1.0 clauses 7.6.4.4 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OverrideCategory  ::=  ENUMERATED {
 *     overrideEnabled  (0),
 *     overrideDisabled  (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_OverrideCategory {
    overrideEnabled = 0,
    overrideDisabled = 1,
}

/**
 * @summary OverrideCategory
 * @description
 *
 * Override Category subscription option: enabled or disabled (3GPP TS 29.002
 * V19.1.0 clauses 7.6.4.4 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OverrideCategory  ::=  ENUMERATED {
 *     overrideEnabled  (0),
 *     overrideDisabled  (1)}
 * ```
 * 
 * @enum {number}
 */
export
type OverrideCategory = _enum_for_OverrideCategory;

/**
 * @summary OverrideCategory
 * @description
 *
 * Override Category subscription option: enabled or disabled (3GPP TS 29.002
 * V19.1.0 clauses 7.6.4.4 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OverrideCategory  ::=  ENUMERATED {
 *     overrideEnabled  (0),
 *     overrideDisabled  (1)}
 * ```
 * 
 * @enum {number}
 */
export
const OverrideCategory = _enum_for_OverrideCategory;

/**
 * @summary OverrideCategory_overrideEnabled
 * @description
 *
 * `overrideEnabled (0)` (3GPP TS 29.002 V19.1.0 clause 7.6.4.4).
 *
 * @constant
 * @type {number}
 */
export
const OverrideCategory_overrideEnabled: OverrideCategory = OverrideCategory.overrideEnabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overrideEnabled
 * @description
 *
 * `overrideEnabled (0)` (3GPP TS 29.002 V19.1.0 clause 7.6.4.4).
 *
 * @constant
 * @type {number}
 */
export
const overrideEnabled: OverrideCategory = OverrideCategory.overrideEnabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OverrideCategory_overrideDisabled
 * @description
 *
 * `overrideDisabled (1)` (3GPP TS 29.002 V19.1.0 clause 7.6.4.4).
 *
 * @constant
 * @type {number}
 */
export
const OverrideCategory_overrideDisabled: OverrideCategory = OverrideCategory.overrideDisabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overrideDisabled
 * @description
 *
 * `overrideDisabled (1)` (3GPP TS 29.002 V19.1.0 clause 7.6.4.4).
 *
 * @constant
 * @type {number}
 */
export
const overrideDisabled: OverrideCategory = OverrideCategory.overrideDisabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) OverrideCategory
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_OverrideCategory = $._decodeEnumerated;

/**
 * @summary Encodes a(n) OverrideCategory into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OverrideCategory, encoded as an ASN.1 Element.
 */
export const _encode_OverrideCategory = $._encodeEnumerated;


/* eslint-enable */
