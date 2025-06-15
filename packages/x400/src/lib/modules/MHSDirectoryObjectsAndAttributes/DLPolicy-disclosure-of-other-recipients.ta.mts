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

/**
 * @summary DLPolicy_disclosure_of_other_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-disclosure-of-other-recipients ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_DLPolicy_disclosure_of_other_recipients {
    unchanged = 0,
    disclosure_of_other_recipients_prohibited = 1,
    disclosure_of_other_recipients_allowed = 2,
}

/**
 * @summary DLPolicy_disclosure_of_other_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-disclosure-of-other-recipients ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type DLPolicy_disclosure_of_other_recipients = _enum_for_DLPolicy_disclosure_of_other_recipients;

/**
 * @summary DLPolicy_disclosure_of_other_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-disclosure-of-other-recipients ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const DLPolicy_disclosure_of_other_recipients = _enum_for_DLPolicy_disclosure_of_other_recipients;

/**
 * @summary DLPolicy_disclosure_of_other_recipients_unchanged
 * @constant
 * @type {number}
 */
export const DLPolicy_disclosure_of_other_recipients_unchanged: DLPolicy_disclosure_of_other_recipients =
    DLPolicy_disclosure_of_other_recipients.unchanged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unchanged
 * @constant
 * @type {number}
 */
export const unchanged: DLPolicy_disclosure_of_other_recipients =
    DLPolicy_disclosure_of_other_recipients.unchanged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DLPolicy_disclosure_of_other_recipients_disclosure_of_other_recipients_prohibited
 * @constant
 * @type {number}
 */
export const DLPolicy_disclosure_of_other_recipients_disclosure_of_other_recipients_prohibited: DLPolicy_disclosure_of_other_recipients =
    DLPolicy_disclosure_of_other_recipients.disclosure_of_other_recipients_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disclosure_of_other_recipients_prohibited
 * @constant
 * @type {number}
 */
export const disclosure_of_other_recipients_prohibited: DLPolicy_disclosure_of_other_recipients =
    DLPolicy_disclosure_of_other_recipients.disclosure_of_other_recipients_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DLPolicy_disclosure_of_other_recipients_disclosure_of_other_recipients_allowed
 * @constant
 * @type {number}
 */
export const DLPolicy_disclosure_of_other_recipients_disclosure_of_other_recipients_allowed: DLPolicy_disclosure_of_other_recipients =
    DLPolicy_disclosure_of_other_recipients.disclosure_of_other_recipients_allowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disclosure_of_other_recipients_allowed
 * @constant
 * @type {number}
 */
export const disclosure_of_other_recipients_allowed: DLPolicy_disclosure_of_other_recipients =
    DLPolicy_disclosure_of_other_recipients.disclosure_of_other_recipients_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DLPolicy_disclosure_of_other_recipients: $.ASN1Decoder<DLPolicy_disclosure_of_other_recipients> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DLPolicy_disclosure_of_other_recipients
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLPolicy_disclosure_of_other_recipients} The decoded data structure.
 */
export function _decode_DLPolicy_disclosure_of_other_recipients(el: _Element) {
    if (!_cached_decoder_for_DLPolicy_disclosure_of_other_recipients) {
        _cached_decoder_for_DLPolicy_disclosure_of_other_recipients =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_DLPolicy_disclosure_of_other_recipients(el);
}

let _cached_encoder_for_DLPolicy_disclosure_of_other_recipients: $.ASN1Encoder<DLPolicy_disclosure_of_other_recipients> | null = null;

/**
 * @summary Encodes a(n) DLPolicy_disclosure_of_other_recipients into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLPolicy_disclosure_of_other_recipients, encoded as an ASN.1 Element.
 */
export function _encode_DLPolicy_disclosure_of_other_recipients(
    value: DLPolicy_disclosure_of_other_recipients,
    elGetter: $.ASN1Encoder<DLPolicy_disclosure_of_other_recipients>
) {
    if (!_cached_encoder_for_DLPolicy_disclosure_of_other_recipients) {
        _cached_encoder_for_DLPolicy_disclosure_of_other_recipients =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_DLPolicy_disclosure_of_other_recipients(
        value,
        elGetter
    );
}


/* eslint-enable */
