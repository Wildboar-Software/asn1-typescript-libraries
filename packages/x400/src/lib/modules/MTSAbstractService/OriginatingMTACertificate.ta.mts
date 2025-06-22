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
 * @summary OriginatingMTACertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatingMTACertificate  ::=  Certificates
 * ```
 */
export type OriginatingMTACertificate = Certificates; // DefinedType

let _cached_decoder_for_OriginatingMTACertificate: $.ASN1Decoder<OriginatingMTACertificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatingMTACertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatingMTACertificate} The decoded data structure.
 */
export function _decode_OriginatingMTACertificate(el: _Element) {
    if (!_cached_decoder_for_OriginatingMTACertificate) {
        _cached_decoder_for_OriginatingMTACertificate = _decode_Certificates;
    }
    return _cached_decoder_for_OriginatingMTACertificate(el);
}

let _cached_encoder_for_OriginatingMTACertificate: $.ASN1Encoder<OriginatingMTACertificate> | null = null;

/**
 * @summary Encodes a(n) OriginatingMTACertificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatingMTACertificate, encoded as an ASN.1 Element.
 */
export function _encode_OriginatingMTACertificate(
    value: OriginatingMTACertificate,
    elGetter: $.ASN1Encoder<OriginatingMTACertificate>
) {
    if (!_cached_encoder_for_OriginatingMTACertificate) {
        _cached_encoder_for_OriginatingMTACertificate = _encode_Certificates;
    }
    return _cached_encoder_for_OriginatingMTACertificate(value, elGetter);
}


/* eslint-enable */
