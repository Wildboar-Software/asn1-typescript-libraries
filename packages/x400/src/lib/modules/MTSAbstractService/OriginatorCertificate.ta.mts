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
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from '@wildboar/x500/AuthenticationFramework';
/**
 * @summary OriginatorCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorCertificate  ::=  Certificates
 * ```
 */
export type OriginatorCertificate = Certificates; // DefinedType

let _cached_decoder_for_OriginatorCertificate: $.ASN1Decoder<OriginatorCertificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorCertificate} The decoded data structure.
 */
export function _decode_OriginatorCertificate(el: _Element): OriginatorCertificate {
    if (!_cached_decoder_for_OriginatorCertificate) {
        _cached_decoder_for_OriginatorCertificate = _decode_Certificates;
    }
    return _cached_decoder_for_OriginatorCertificate(el);
}

let _cached_encoder_for_OriginatorCertificate: $.ASN1Encoder<OriginatorCertificate> | null = null;

/**
 * @summary Encodes a(n) OriginatorCertificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorCertificate, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorCertificate(
    value: OriginatorCertificate,
    elGetter: $.ASN1Encoder<OriginatorCertificate>
): _Element {
    if (!_cached_encoder_for_OriginatorCertificate) {
        _cached_encoder_for_OriginatorCertificate = _encode_Certificates;
    }
    return _cached_encoder_for_OriginatorCertificate(value, elGetter);
}


/* eslint-enable */
