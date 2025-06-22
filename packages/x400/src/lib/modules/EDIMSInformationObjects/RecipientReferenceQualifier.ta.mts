/* eslint-disable */
import {
    TeletexString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary RecipientReferenceQualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientReferenceQualifier  ::=
 *   TeletexString(SIZE (1..ub-recipient-reference-qualifier))
 * ```
 */
export type RecipientReferenceQualifier = TeletexString; // TeletexString

let _cached_decoder_for_RecipientReferenceQualifier: $.ASN1Decoder<RecipientReferenceQualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientReferenceQualifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientReferenceQualifier} The decoded data structure.
 */
export function _decode_RecipientReferenceQualifier(el: _Element) {
    if (!_cached_decoder_for_RecipientReferenceQualifier) {
        _cached_decoder_for_RecipientReferenceQualifier =
            $._decodeTeletexString;
    }
    return _cached_decoder_for_RecipientReferenceQualifier(el);
}

let _cached_encoder_for_RecipientReferenceQualifier: $.ASN1Encoder<RecipientReferenceQualifier> | null = null;

/**
 * @summary Encodes a(n) RecipientReferenceQualifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientReferenceQualifier, encoded as an ASN.1 Element.
 */
export function _encode_RecipientReferenceQualifier(
    value: RecipientReferenceQualifier,
    elGetter: $.ASN1Encoder<RecipientReferenceQualifier>
) {
    if (!_cached_encoder_for_RecipientReferenceQualifier) {
        _cached_encoder_for_RecipientReferenceQualifier =
            $._encodeTeletexString;
    }
    return _cached_encoder_for_RecipientReferenceQualifier(value, elGetter);
}


/* eslint-enable */
