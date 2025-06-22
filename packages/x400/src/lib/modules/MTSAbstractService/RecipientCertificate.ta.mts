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
import * as $ from '@wildboar/asn1/functional';
import {
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificates.ta.mjs';
/**
 * @summary RecipientCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientCertificate  ::=  Certificates
 * ```
 */
export type RecipientCertificate = Certificates; // DefinedType

let _cached_decoder_for_RecipientCertificate: $.ASN1Decoder<RecipientCertificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientCertificate} The decoded data structure.
 */
export function _decode_RecipientCertificate(el: _Element) {
    if (!_cached_decoder_for_RecipientCertificate) {
        _cached_decoder_for_RecipientCertificate = _decode_Certificates;
    }
    return _cached_decoder_for_RecipientCertificate(el);
}

let _cached_encoder_for_RecipientCertificate: $.ASN1Encoder<RecipientCertificate> | null = null;

/**
 * @summary Encodes a(n) RecipientCertificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientCertificate, encoded as an ASN.1 Element.
 */
export function _encode_RecipientCertificate(
    value: RecipientCertificate,
    elGetter: $.ASN1Encoder<RecipientCertificate>
) {
    if (!_cached_encoder_for_RecipientCertificate) {
        _cached_encoder_for_RecipientCertificate = _encode_Certificates;
    }
    return _cached_encoder_for_RecipientCertificate(value, elGetter);
}


/* eslint-enable */
