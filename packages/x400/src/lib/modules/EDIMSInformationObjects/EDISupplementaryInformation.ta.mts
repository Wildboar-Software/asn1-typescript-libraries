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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary EDISupplementaryInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDISupplementaryInformation  ::=
 *   TeletexString(SIZE (1..ub-supplementary-info-length))
 * ```
 */
export type EDISupplementaryInformation = TeletexString; // TeletexString

let _cached_decoder_for_EDISupplementaryInformation: $.ASN1Decoder<EDISupplementaryInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDISupplementaryInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDISupplementaryInformation} The decoded data structure.
 */
export function _decode_EDISupplementaryInformation(el: _Element) {
    if (!_cached_decoder_for_EDISupplementaryInformation) {
        _cached_decoder_for_EDISupplementaryInformation =
            $._decodeTeletexString;
    }
    return _cached_decoder_for_EDISupplementaryInformation(el);
}

let _cached_encoder_for_EDISupplementaryInformation: $.ASN1Encoder<EDISupplementaryInformation> | null = null;

/**
 * @summary Encodes a(n) EDISupplementaryInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDISupplementaryInformation, encoded as an ASN.1 Element.
 */
export function _encode_EDISupplementaryInformation(
    value: EDISupplementaryInformation,
    elGetter: $.ASN1Encoder<EDISupplementaryInformation>
) {
    if (!_cached_encoder_for_EDISupplementaryInformation) {
        _cached_encoder_for_EDISupplementaryInformation =
            $._encodeTeletexString;
    }
    return _cached_encoder_for_EDISupplementaryInformation(value, elGetter);
}


/* eslint-enable */
