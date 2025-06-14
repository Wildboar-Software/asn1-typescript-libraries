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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_MembershipStatus */
/**
 * @summary MembershipStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MembershipStatus  ::=  ENUMERATED {unknown(1), member(2), non-member(3)}
 * ```@enum {number}
 */
export enum _enum_for_MembershipStatus {
    unknown = 1,
    member = 2,
    non_member = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_MembershipStatus */

/* START_OF_SYMBOL_DEFINITION MembershipStatus */
/**
 * @summary MembershipStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MembershipStatus  ::=  ENUMERATED {unknown(1), member(2), non-member(3)}
 * ```@enum {number}
 */
export type MembershipStatus = _enum_for_MembershipStatus;
/* END_OF_SYMBOL_DEFINITION MembershipStatus */

/* START_OF_SYMBOL_DEFINITION MembershipStatus */
/**
 * @summary MembershipStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MembershipStatus  ::=  ENUMERATED {unknown(1), member(2), non-member(3)}
 * ```@enum {number}
 */
export const MembershipStatus = _enum_for_MembershipStatus;
/* END_OF_SYMBOL_DEFINITION MembershipStatus */

/* START_OF_SYMBOL_DEFINITION MembershipStatus_unknown */
/**
 * @summary MembershipStatus_unknown
 * @constant
 * @type {number}
 */
export const MembershipStatus_unknown: MembershipStatus =
    MembershipStatus.unknown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MembershipStatus_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: MembershipStatus =
    MembershipStatus.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION MembershipStatus_member */
/**
 * @summary MembershipStatus_member
 * @constant
 * @type {number}
 */
export const MembershipStatus_member: MembershipStatus =
    MembershipStatus.member; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MembershipStatus_member */

/* START_OF_SYMBOL_DEFINITION member */
/**
 * @summary member
 * @constant
 * @type {number}
 */
export const member: MembershipStatus =
    MembershipStatus.member; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION member */

/* START_OF_SYMBOL_DEFINITION MembershipStatus_non_member */
/**
 * @summary MembershipStatus_non_member
 * @constant
 * @type {number}
 */
export const MembershipStatus_non_member: MembershipStatus =
    MembershipStatus.non_member; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MembershipStatus_non_member */

/* START_OF_SYMBOL_DEFINITION non_member */
/**
 * @summary non_member
 * @constant
 * @type {number}
 */
export const non_member: MembershipStatus =
    MembershipStatus.non_member; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION non_member */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MembershipStatus */
let _cached_decoder_for_MembershipStatus: $.ASN1Decoder<MembershipStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MembershipStatus */

/* START_OF_SYMBOL_DEFINITION _decode_MembershipStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) MembershipStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MembershipStatus} The decoded data structure.
 */
export function _decode_MembershipStatus(el: _Element) {
    if (!_cached_decoder_for_MembershipStatus) {
        _cached_decoder_for_MembershipStatus = $._decodeEnumerated;
    }
    return _cached_decoder_for_MembershipStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MembershipStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MembershipStatus */
let _cached_encoder_for_MembershipStatus: $.ASN1Encoder<MembershipStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MembershipStatus */

/* START_OF_SYMBOL_DEFINITION _encode_MembershipStatus */
/**
 * @summary Encodes a(n) MembershipStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MembershipStatus, encoded as an ASN.1 Element.
 */
export function _encode_MembershipStatus(
    value: MembershipStatus,
    elGetter: $.ASN1Encoder<MembershipStatus>
) {
    if (!_cached_encoder_for_MembershipStatus) {
        _cached_encoder_for_MembershipStatus = $._encodeEnumerated;
    }
    return _cached_encoder_for_MembershipStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MembershipStatus */

/* eslint-enable */
