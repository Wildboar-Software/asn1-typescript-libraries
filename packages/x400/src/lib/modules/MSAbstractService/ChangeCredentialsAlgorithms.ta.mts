/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary ChangeCredentialsAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangeCredentialsAlgorithms  ::=  SET OF OBJECT IDENTIFIER
 * ```
 */
export type ChangeCredentialsAlgorithms = OBJECT_IDENTIFIER[]; // SetOfType

let _cached_decoder_for_ChangeCredentialsAlgorithms: $.ASN1Decoder<ChangeCredentialsAlgorithms> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeCredentialsAlgorithms
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChangeCredentialsAlgorithms} The decoded data structure.
 */
export function _decode_ChangeCredentialsAlgorithms(el: _Element) {
    if (!_cached_decoder_for_ChangeCredentialsAlgorithms) {
        _cached_decoder_for_ChangeCredentialsAlgorithms = $._decodeSetOf<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
        );
    }
    return _cached_decoder_for_ChangeCredentialsAlgorithms(el);
}

let _cached_encoder_for_ChangeCredentialsAlgorithms: $.ASN1Encoder<ChangeCredentialsAlgorithms> | null = null;

/**
 * @summary Encodes a(n) ChangeCredentialsAlgorithms into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeCredentialsAlgorithms, encoded as an ASN.1 Element.
 */
export function _encode_ChangeCredentialsAlgorithms(
    value: ChangeCredentialsAlgorithms,
    elGetter: $.ASN1Encoder<ChangeCredentialsAlgorithms>
) {
    if (!_cached_encoder_for_ChangeCredentialsAlgorithms) {
        _cached_encoder_for_ChangeCredentialsAlgorithms = $._encodeSetOf<OBJECT_IDENTIFIER>(
            () => $._encodeObjectIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_ChangeCredentialsAlgorithms(value, elGetter);
}


/* eslint-enable */
