/* eslint-disable */
import {
    INTEGER,
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
 * @summary OriginallySpecifiedRecipientNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginallySpecifiedRecipientNumber  ::=  INTEGER(1..ub-recipients)
 * ```
 */
export type OriginallySpecifiedRecipientNumber = INTEGER;

let _cached_decoder_for_OriginallySpecifiedRecipientNumber: $.ASN1Decoder<OriginallySpecifiedRecipientNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginallySpecifiedRecipientNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginallySpecifiedRecipientNumber} The decoded data structure.
 */
export function _decode_OriginallySpecifiedRecipientNumber(el: _Element) {
    if (!_cached_decoder_for_OriginallySpecifiedRecipientNumber) {
        _cached_decoder_for_OriginallySpecifiedRecipientNumber =
            $._decodeInteger;
    }
    return _cached_decoder_for_OriginallySpecifiedRecipientNumber(el);
}

let _cached_encoder_for_OriginallySpecifiedRecipientNumber: $.ASN1Encoder<OriginallySpecifiedRecipientNumber> | null = null;

/**
 * @summary Encodes a(n) OriginallySpecifiedRecipientNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginallySpecifiedRecipientNumber, encoded as an ASN.1 Element.
 */
export function _encode_OriginallySpecifiedRecipientNumber(
    value: OriginallySpecifiedRecipientNumber,
    elGetter: $.ASN1Encoder<OriginallySpecifiedRecipientNumber>
) {
    if (!_cached_encoder_for_OriginallySpecifiedRecipientNumber) {
        _cached_encoder_for_OriginallySpecifiedRecipientNumber =
            $._encodeInteger;
    }
    return _cached_encoder_for_OriginallySpecifiedRecipientNumber(
        value,
        elGetter
    );
}


/* eslint-enable */
