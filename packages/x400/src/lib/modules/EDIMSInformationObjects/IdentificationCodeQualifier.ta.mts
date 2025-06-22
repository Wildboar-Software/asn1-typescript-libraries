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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary IdentificationCodeQualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdentificationCodeQualifier  ::=
 *   TeletexString(SIZE (1..ub-identification-code-qualifier))
 * ```
 */
export type IdentificationCodeQualifier = TeletexString; // TeletexString

let _cached_decoder_for_IdentificationCodeQualifier: $.ASN1Decoder<IdentificationCodeQualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IdentificationCodeQualifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdentificationCodeQualifier} The decoded data structure.
 */
export function _decode_IdentificationCodeQualifier(el: _Element) {
    if (!_cached_decoder_for_IdentificationCodeQualifier) {
        _cached_decoder_for_IdentificationCodeQualifier =
            $._decodeTeletexString;
    }
    return _cached_decoder_for_IdentificationCodeQualifier(el);
}

let _cached_encoder_for_IdentificationCodeQualifier: $.ASN1Encoder<IdentificationCodeQualifier> | null = null;

/**
 * @summary Encodes a(n) IdentificationCodeQualifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdentificationCodeQualifier, encoded as an ASN.1 Element.
 */
export function _encode_IdentificationCodeQualifier(
    value: IdentificationCodeQualifier,
    elGetter: $.ASN1Encoder<IdentificationCodeQualifier>
) {
    if (!_cached_encoder_for_IdentificationCodeQualifier) {
        _cached_encoder_for_IdentificationCodeQualifier =
            $._encodeTeletexString;
    }
    return _cached_encoder_for_IdentificationCodeQualifier(value, elGetter);
}


/* eslint-enable */
