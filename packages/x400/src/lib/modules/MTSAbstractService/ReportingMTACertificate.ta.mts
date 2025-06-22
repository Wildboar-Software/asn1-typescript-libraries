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
 * @summary ReportingMTACertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingMTACertificate  ::=  Certificates
 * ```
 */
export type ReportingMTACertificate = Certificates; // DefinedType

let _cached_decoder_for_ReportingMTACertificate: $.ASN1Decoder<ReportingMTACertificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingMTACertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportingMTACertificate} The decoded data structure.
 */
export function _decode_ReportingMTACertificate(el: _Element) {
    if (!_cached_decoder_for_ReportingMTACertificate) {
        _cached_decoder_for_ReportingMTACertificate = _decode_Certificates;
    }
    return _cached_decoder_for_ReportingMTACertificate(el);
}

let _cached_encoder_for_ReportingMTACertificate: $.ASN1Encoder<ReportingMTACertificate> | null = null;

/**
 * @summary Encodes a(n) ReportingMTACertificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingMTACertificate, encoded as an ASN.1 Element.
 */
export function _encode_ReportingMTACertificate(
    value: ReportingMTACertificate,
    elGetter: $.ASN1Encoder<ReportingMTACertificate>
) {
    if (!_cached_encoder_for_ReportingMTACertificate) {
        _cached_encoder_for_ReportingMTACertificate = _encode_Certificates;
    }
    return _cached_encoder_for_ReportingMTACertificate(value, elGetter);
}


/* eslint-enable */
