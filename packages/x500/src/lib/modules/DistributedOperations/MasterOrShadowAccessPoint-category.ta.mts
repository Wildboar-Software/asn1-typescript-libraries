/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_MasterOrShadowAccessPoint_category {
    master = 0,
    shadow = 1,
    writeableCopy = 2,
}

/**
 * @summary MasterOrShadowAccessPoint_category
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterOrShadowAccessPoint-category ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type MasterOrShadowAccessPoint_category =
    | _enum_for_MasterOrShadowAccessPoint_category
    | ENUMERATED;

/**
 * @summary MasterOrShadowAccessPoint_category_master
 * @constant
 * @type {number}
 */
export const MasterOrShadowAccessPoint_category_master: MasterOrShadowAccessPoint_category = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary master
 * @constant
 * @type {number}
 */
export const master: MasterOrShadowAccessPoint_category = MasterOrShadowAccessPoint_category_master; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MasterOrShadowAccessPoint_category_shadow
 * @constant
 * @type {number}
 */
export const MasterOrShadowAccessPoint_category_shadow: MasterOrShadowAccessPoint_category = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shadow
 * @constant
 * @type {number}
 */
export const shadow: MasterOrShadowAccessPoint_category = MasterOrShadowAccessPoint_category_shadow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MasterOrShadowAccessPoint_category_writeableCopy
 * @constant
 * @type {number}
 */
export const MasterOrShadowAccessPoint_category_writeableCopy: MasterOrShadowAccessPoint_category = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary writeableCopy
 * @constant
 * @type {number}
 */
export const writeableCopy: MasterOrShadowAccessPoint_category = MasterOrShadowAccessPoint_category_writeableCopy; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MasterOrShadowAccessPoint_category: $.ASN1Decoder<MasterOrShadowAccessPoint_category> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MasterOrShadowAccessPoint_category
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterOrShadowAccessPoint_category} The decoded data structure.
 */
export function _decode_MasterOrShadowAccessPoint_category(el: _Element) {
    if (!_cached_decoder_for_MasterOrShadowAccessPoint_category) {
        _cached_decoder_for_MasterOrShadowAccessPoint_category =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_MasterOrShadowAccessPoint_category(el);
}

let _cached_encoder_for_MasterOrShadowAccessPoint_category: $.ASN1Encoder<MasterOrShadowAccessPoint_category> | null = null;

/**
 * @summary Encodes a(n) MasterOrShadowAccessPoint_category into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterOrShadowAccessPoint_category, encoded as an ASN.1 Element.
 */
export function _encode_MasterOrShadowAccessPoint_category(
    value: MasterOrShadowAccessPoint_category,
    elGetter: $.ASN1Encoder<MasterOrShadowAccessPoint_category>
) {
    if (!_cached_encoder_for_MasterOrShadowAccessPoint_category) {
        _cached_encoder_for_MasterOrShadowAccessPoint_category =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_MasterOrShadowAccessPoint_category(
        value,
        elGetter
    );
}


/* eslint-enable */
