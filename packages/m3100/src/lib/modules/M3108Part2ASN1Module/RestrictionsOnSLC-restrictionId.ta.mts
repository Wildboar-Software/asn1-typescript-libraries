/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_RestrictionsOnSLC_restrictionId */
export enum _enum_for_RestrictionsOnSLC_restrictionId {
    noRestrictions = 1,
    protectedSLCsOnly = 2,
    protectedDedicatedSLCsOnly = 3,
    dedicatedSLCsOnlyWithProtectedSLCsPreferred = 4,
    dedicatedSLCsPreferredProtectedSLCsRequired = 5,
    dedicatedProtectedSLCsPreferred = 6,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_RestrictionsOnSLC_restrictionId */

/* START_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId */
/**
 * @summary RestrictionsOnSLC_restrictionId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RestrictionsOnSLC-restrictionId ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type RestrictionsOnSLC_restrictionId =
    | _enum_for_RestrictionsOnSLC_restrictionId
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId */

/* START_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId_noRestrictions */
/**
 * @summary RestrictionsOnSLC_restrictionId_noRestrictions
 * @constant
 * @type {number}
 */
export const RestrictionsOnSLC_restrictionId_noRestrictions: RestrictionsOnSLC_restrictionId = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId_noRestrictions */

/* START_OF_SYMBOL_DEFINITION noRestrictions */
/**
 * @summary noRestrictions
 * @constant
 * @type {number}
 */
export const noRestrictions: RestrictionsOnSLC_restrictionId = RestrictionsOnSLC_restrictionId_noRestrictions; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noRestrictions */

/* START_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId_protectedSLCsOnly */
/**
 * @summary RestrictionsOnSLC_restrictionId_protectedSLCsOnly
 * @constant
 * @type {number}
 */
export const RestrictionsOnSLC_restrictionId_protectedSLCsOnly: RestrictionsOnSLC_restrictionId = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId_protectedSLCsOnly */

/* START_OF_SYMBOL_DEFINITION protectedSLCsOnly */
/**
 * @summary protectedSLCsOnly
 * @constant
 * @type {number}
 */
export const protectedSLCsOnly: RestrictionsOnSLC_restrictionId = RestrictionsOnSLC_restrictionId_protectedSLCsOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION protectedSLCsOnly */

/* START_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId_protectedDedicatedSLCsOnly */
/**
 * @summary RestrictionsOnSLC_restrictionId_protectedDedicatedSLCsOnly
 * @constant
 * @type {number}
 */
export const RestrictionsOnSLC_restrictionId_protectedDedicatedSLCsOnly: RestrictionsOnSLC_restrictionId = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId_protectedDedicatedSLCsOnly */

/* START_OF_SYMBOL_DEFINITION protectedDedicatedSLCsOnly */
/**
 * @summary protectedDedicatedSLCsOnly
 * @constant
 * @type {number}
 */
export const protectedDedicatedSLCsOnly: RestrictionsOnSLC_restrictionId = RestrictionsOnSLC_restrictionId_protectedDedicatedSLCsOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION protectedDedicatedSLCsOnly */

/* START_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId_dedicatedSLCsOnlyWithProtectedSLCsPreferred */
/**
 * @summary RestrictionsOnSLC_restrictionId_dedicatedSLCsOnlyWithProtectedSLCsPreferred
 * @constant
 * @type {number}
 */
export const RestrictionsOnSLC_restrictionId_dedicatedSLCsOnlyWithProtectedSLCsPreferred: RestrictionsOnSLC_restrictionId = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId_dedicatedSLCsOnlyWithProtectedSLCsPreferred */

/* START_OF_SYMBOL_DEFINITION dedicatedSLCsOnlyWithProtectedSLCsPreferred */
/**
 * @summary dedicatedSLCsOnlyWithProtectedSLCsPreferred
 * @constant
 * @type {number}
 */
export const dedicatedSLCsOnlyWithProtectedSLCsPreferred: RestrictionsOnSLC_restrictionId = RestrictionsOnSLC_restrictionId_dedicatedSLCsOnlyWithProtectedSLCsPreferred; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dedicatedSLCsOnlyWithProtectedSLCsPreferred */

/* START_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId_dedicatedSLCsPreferredProtectedSLCsRequired */
/**
 * @summary RestrictionsOnSLC_restrictionId_dedicatedSLCsPreferredProtectedSLCsRequired
 * @constant
 * @type {number}
 */
export const RestrictionsOnSLC_restrictionId_dedicatedSLCsPreferredProtectedSLCsRequired: RestrictionsOnSLC_restrictionId = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId_dedicatedSLCsPreferredProtectedSLCsRequired */

/* START_OF_SYMBOL_DEFINITION dedicatedSLCsPreferredProtectedSLCsRequired */
/**
 * @summary dedicatedSLCsPreferredProtectedSLCsRequired
 * @constant
 * @type {number}
 */
export const dedicatedSLCsPreferredProtectedSLCsRequired: RestrictionsOnSLC_restrictionId = RestrictionsOnSLC_restrictionId_dedicatedSLCsPreferredProtectedSLCsRequired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dedicatedSLCsPreferredProtectedSLCsRequired */

/* START_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId_dedicatedProtectedSLCsPreferred */
/**
 * @summary RestrictionsOnSLC_restrictionId_dedicatedProtectedSLCsPreferred
 * @constant
 * @type {number}
 */
export const RestrictionsOnSLC_restrictionId_dedicatedProtectedSLCsPreferred: RestrictionsOnSLC_restrictionId = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RestrictionsOnSLC_restrictionId_dedicatedProtectedSLCsPreferred */

/* START_OF_SYMBOL_DEFINITION dedicatedProtectedSLCsPreferred */
/**
 * @summary dedicatedProtectedSLCsPreferred
 * @constant
 * @type {number}
 */
export const dedicatedProtectedSLCsPreferred: RestrictionsOnSLC_restrictionId = RestrictionsOnSLC_restrictionId_dedicatedProtectedSLCsPreferred; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dedicatedProtectedSLCsPreferred */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RestrictionsOnSLC_restrictionId */
let _cached_decoder_for_RestrictionsOnSLC_restrictionId: $.ASN1Decoder<RestrictionsOnSLC_restrictionId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RestrictionsOnSLC_restrictionId */

/* START_OF_SYMBOL_DEFINITION _decode_RestrictionsOnSLC_restrictionId */
/**
 * @summary Decodes an ASN.1 element into a(n) RestrictionsOnSLC_restrictionId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RestrictionsOnSLC_restrictionId} The decoded data structure.
 */
export function _decode_RestrictionsOnSLC_restrictionId(el: _Element) {
    if (!_cached_decoder_for_RestrictionsOnSLC_restrictionId) {
        _cached_decoder_for_RestrictionsOnSLC_restrictionId =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_RestrictionsOnSLC_restrictionId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RestrictionsOnSLC_restrictionId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RestrictionsOnSLC_restrictionId */
let _cached_encoder_for_RestrictionsOnSLC_restrictionId: $.ASN1Encoder<RestrictionsOnSLC_restrictionId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RestrictionsOnSLC_restrictionId */

/* START_OF_SYMBOL_DEFINITION _encode_RestrictionsOnSLC_restrictionId */
/**
 * @summary Encodes a(n) RestrictionsOnSLC_restrictionId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestrictionsOnSLC_restrictionId, encoded as an ASN.1 Element.
 */
export function _encode_RestrictionsOnSLC_restrictionId(
    value: RestrictionsOnSLC_restrictionId,
    elGetter: $.ASN1Encoder<RestrictionsOnSLC_restrictionId>
) {
    if (!_cached_encoder_for_RestrictionsOnSLC_restrictionId) {
        _cached_encoder_for_RestrictionsOnSLC_restrictionId =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_RestrictionsOnSLC_restrictionId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RestrictionsOnSLC_restrictionId */

/* eslint-enable */
