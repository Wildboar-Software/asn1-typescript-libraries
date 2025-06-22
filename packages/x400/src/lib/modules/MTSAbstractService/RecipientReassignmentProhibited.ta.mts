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
 * @summary RecipientReassignmentProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientReassignmentProhibited  ::=  ENUMERATED {
 *   recipient-reassignment-allowed(0), recipient-reassignment-prohibited(1)
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_RecipientReassignmentProhibited {
    recipient_reassignment_allowed = 0,
    recipient_reassignment_prohibited = 1,
}

/**
 * @summary RecipientReassignmentProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientReassignmentProhibited  ::=  ENUMERATED {
 *   recipient-reassignment-allowed(0), recipient-reassignment-prohibited(1)
 * }
 * ```
 *
 * @enum {number}
 */
export type RecipientReassignmentProhibited = _enum_for_RecipientReassignmentProhibited;

/**
 * @summary RecipientReassignmentProhibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientReassignmentProhibited  ::=  ENUMERATED {
 *   recipient-reassignment-allowed(0), recipient-reassignment-prohibited(1)
 * }
 * ```
 *
 * @enum {number}
 */
export const RecipientReassignmentProhibited = _enum_for_RecipientReassignmentProhibited;

/**
 * @summary RecipientReassignmentProhibited_recipient_reassignment_allowed
 * @constant
 * @type {number}
 */
export const RecipientReassignmentProhibited_recipient_reassignment_allowed: RecipientReassignmentProhibited =
    RecipientReassignmentProhibited.recipient_reassignment_allowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recipient_reassignment_allowed
 * @constant
 * @type {number}
 */
export const recipient_reassignment_allowed: RecipientReassignmentProhibited =
    RecipientReassignmentProhibited.recipient_reassignment_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RecipientReassignmentProhibited_recipient_reassignment_prohibited
 * @constant
 * @type {number}
 */
export const RecipientReassignmentProhibited_recipient_reassignment_prohibited: RecipientReassignmentProhibited =
    RecipientReassignmentProhibited.recipient_reassignment_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recipient_reassignment_prohibited
 * @constant
 * @type {number}
 */
export const recipient_reassignment_prohibited: RecipientReassignmentProhibited =
    RecipientReassignmentProhibited.recipient_reassignment_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RecipientReassignmentProhibited: $.ASN1Decoder<RecipientReassignmentProhibited> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientReassignmentProhibited
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientReassignmentProhibited} The decoded data structure.
 */
export function _decode_RecipientReassignmentProhibited(el: _Element) {
    if (!_cached_decoder_for_RecipientReassignmentProhibited) {
        _cached_decoder_for_RecipientReassignmentProhibited =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_RecipientReassignmentProhibited(el);
}

let _cached_encoder_for_RecipientReassignmentProhibited: $.ASN1Encoder<RecipientReassignmentProhibited> | null = null;

/**
 * @summary Encodes a(n) RecipientReassignmentProhibited into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientReassignmentProhibited, encoded as an ASN.1 Element.
 */
export function _encode_RecipientReassignmentProhibited(
    value: RecipientReassignmentProhibited,
    elGetter: $.ASN1Encoder<RecipientReassignmentProhibited>
) {
    if (!_cached_encoder_for_RecipientReassignmentProhibited) {
        _cached_encoder_for_RecipientReassignmentProhibited =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_RecipientReassignmentProhibited(value, elGetter);
}


/* eslint-enable */
