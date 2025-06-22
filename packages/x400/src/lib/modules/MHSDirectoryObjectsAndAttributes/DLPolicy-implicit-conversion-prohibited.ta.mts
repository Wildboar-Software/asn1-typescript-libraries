/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary DLPolicy_implicit_conversion_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-implicit-conversion-prohibited ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DLPolicy_implicit_conversion_prohibited {
    unchanged = 0,
    implicit_conversion_allowed = 1,
    implicit_conversion_prohibited = 2,
}

/**
 * @summary DLPolicy_implicit_conversion_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-implicit-conversion-prohibited ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type DLPolicy_implicit_conversion_prohibited = _enum_for_DLPolicy_implicit_conversion_prohibited;

/**
 * @summary DLPolicy_implicit_conversion_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-implicit-conversion-prohibited ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const DLPolicy_implicit_conversion_prohibited = _enum_for_DLPolicy_implicit_conversion_prohibited;

/**
 * @summary DLPolicy_implicit_conversion_prohibited_unchanged
 * @constant
 * @type {number}
 */
export const DLPolicy_implicit_conversion_prohibited_unchanged: DLPolicy_implicit_conversion_prohibited =
    DLPolicy_implicit_conversion_prohibited.unchanged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unchanged
 * @constant
 * @type {number}
 */
export const unchanged: DLPolicy_implicit_conversion_prohibited =
    DLPolicy_implicit_conversion_prohibited.unchanged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DLPolicy_implicit_conversion_prohibited_implicit_conversion_allowed
 * @constant
 * @type {number}
 */
export const DLPolicy_implicit_conversion_prohibited_implicit_conversion_allowed: DLPolicy_implicit_conversion_prohibited =
    DLPolicy_implicit_conversion_prohibited.implicit_conversion_allowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary implicit_conversion_allowed
 * @constant
 * @type {number}
 */
export const implicit_conversion_allowed: DLPolicy_implicit_conversion_prohibited =
    DLPolicy_implicit_conversion_prohibited.implicit_conversion_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DLPolicy_implicit_conversion_prohibited_implicit_conversion_prohibited
 * @constant
 * @type {number}
 */
export const DLPolicy_implicit_conversion_prohibited_implicit_conversion_prohibited: DLPolicy_implicit_conversion_prohibited =
    DLPolicy_implicit_conversion_prohibited.implicit_conversion_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary implicit_conversion_prohibited
 * @constant
 * @type {number}
 */
export const implicit_conversion_prohibited: DLPolicy_implicit_conversion_prohibited =
    DLPolicy_implicit_conversion_prohibited.implicit_conversion_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DLPolicy_implicit_conversion_prohibited: $.ASN1Decoder<DLPolicy_implicit_conversion_prohibited> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DLPolicy_implicit_conversion_prohibited
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLPolicy_implicit_conversion_prohibited} The decoded data structure.
 */
export function _decode_DLPolicy_implicit_conversion_prohibited(el: _Element) {
    if (!_cached_decoder_for_DLPolicy_implicit_conversion_prohibited) {
        _cached_decoder_for_DLPolicy_implicit_conversion_prohibited =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_DLPolicy_implicit_conversion_prohibited(el);
}

let _cached_encoder_for_DLPolicy_implicit_conversion_prohibited: $.ASN1Encoder<DLPolicy_implicit_conversion_prohibited> | null = null;

/**
 * @summary Encodes a(n) DLPolicy_implicit_conversion_prohibited into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLPolicy_implicit_conversion_prohibited, encoded as an ASN.1 Element.
 */
export function _encode_DLPolicy_implicit_conversion_prohibited(
    value: DLPolicy_implicit_conversion_prohibited,
    elGetter: $.ASN1Encoder<DLPolicy_implicit_conversion_prohibited>
) {
    if (!_cached_encoder_for_DLPolicy_implicit_conversion_prohibited) {
        _cached_encoder_for_DLPolicy_implicit_conversion_prohibited =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_DLPolicy_implicit_conversion_prohibited(
        value,
        elGetter
    );
}


/* eslint-enable */
