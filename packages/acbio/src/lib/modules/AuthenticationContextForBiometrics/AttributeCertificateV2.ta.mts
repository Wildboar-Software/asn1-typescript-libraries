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
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from '@wildboar/x500/src/lib/modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs';


/**
 * @summary AttributeCertificateV2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificateV2  ::=  AttributeCertificate
 * ```
 */
export type AttributeCertificateV2 = AttributeCertificate; // DefinedType


let _cached_decoder_for_AttributeCertificateV2: $.ASN1Decoder<AttributeCertificateV2> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateV2
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificateV2} The decoded data structure.
 */
export function _decode_AttributeCertificateV2(el: _Element): AttributeCertificateV2 {
    if (!_cached_decoder_for_AttributeCertificateV2) {
        _cached_decoder_for_AttributeCertificateV2 = _decode_AttributeCertificate;
    }
    return _cached_decoder_for_AttributeCertificateV2(el);
}


let _cached_encoder_for_AttributeCertificateV2: $.ASN1Encoder<AttributeCertificateV2> | null = null;


/**
 * @summary Encodes a(n) AttributeCertificateV2 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateV2, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificateV2(
    value: AttributeCertificateV2,
    elGetter: $.ASN1Encoder<AttributeCertificateV2>
): _Element {
    if (!_cached_encoder_for_AttributeCertificateV2) {
        _cached_encoder_for_AttributeCertificateV2 = _encode_AttributeCertificate;
    }
    return _cached_encoder_for_AttributeCertificateV2(value, elGetter);
}


/* eslint-enable */
