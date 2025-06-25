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
 * @summary InvalidAccessControlFilter_errorId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvalidAccessControlFilter-errorId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_InvalidAccessControlFilter_errorId {
    duplicateId = 0,
    heterogeneousId = 1,
    invalidId = 2,
}

/**
 * @summary InvalidAccessControlFilter_errorId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvalidAccessControlFilter-errorId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type InvalidAccessControlFilter_errorId = _enum_for_InvalidAccessControlFilter_errorId;

/**
 * @summary InvalidAccessControlFilter_errorId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvalidAccessControlFilter-errorId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const InvalidAccessControlFilter_errorId = _enum_for_InvalidAccessControlFilter_errorId;

/**
 * @summary InvalidAccessControlFilter_errorId_duplicateId
 * @constant
 * @type {number}
 */
export const InvalidAccessControlFilter_errorId_duplicateId: InvalidAccessControlFilter_errorId =
    InvalidAccessControlFilter_errorId.duplicateId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateId
 * @constant
 * @type {number}
 */
export const duplicateId: InvalidAccessControlFilter_errorId =
    InvalidAccessControlFilter_errorId.duplicateId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvalidAccessControlFilter_errorId_heterogeneousId
 * @constant
 * @type {number}
 */
export const InvalidAccessControlFilter_errorId_heterogeneousId: InvalidAccessControlFilter_errorId =
    InvalidAccessControlFilter_errorId.heterogeneousId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary heterogeneousId
 * @constant
 * @type {number}
 */
export const heterogeneousId: InvalidAccessControlFilter_errorId =
    InvalidAccessControlFilter_errorId.heterogeneousId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvalidAccessControlFilter_errorId_invalidId
 * @constant
 * @type {number}
 */
export const InvalidAccessControlFilter_errorId_invalidId: InvalidAccessControlFilter_errorId =
    InvalidAccessControlFilter_errorId.invalidId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidId
 * @constant
 * @type {number}
 */
export const invalidId: InvalidAccessControlFilter_errorId =
    InvalidAccessControlFilter_errorId.invalidId; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_InvalidAccessControlFilter_errorId: $.ASN1Decoder<InvalidAccessControlFilter_errorId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvalidAccessControlFilter_errorId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvalidAccessControlFilter_errorId} The decoded data structure.
 */
export function _decode_InvalidAccessControlFilter_errorId(el: _Element): InvalidAccessControlFilter_errorId {
    if (!_cached_decoder_for_InvalidAccessControlFilter_errorId) {
        _cached_decoder_for_InvalidAccessControlFilter_errorId =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_InvalidAccessControlFilter_errorId(el);
}

let _cached_encoder_for_InvalidAccessControlFilter_errorId: $.ASN1Encoder<InvalidAccessControlFilter_errorId> | null = null;

/**
 * @summary Encodes a(n) InvalidAccessControlFilter_errorId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvalidAccessControlFilter_errorId, encoded as an ASN.1 Element.
 */
export function _encode_InvalidAccessControlFilter_errorId(
    value: InvalidAccessControlFilter_errorId,
    elGetter: $.ASN1Encoder<InvalidAccessControlFilter_errorId>
): _Element {
    if (!_cached_encoder_for_InvalidAccessControlFilter_errorId) {
        _cached_encoder_for_InvalidAccessControlFilter_errorId =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_InvalidAccessControlFilter_errorId(
        value,
        elGetter
    );
}


/* eslint-enable */
