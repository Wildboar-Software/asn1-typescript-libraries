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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Certificate, _decode_Certificate, _encode_Certificate
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary CertificateValues
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateValues  ::=  SEQUENCE OF Certificate
 * ```
 */
export
type CertificateValues = Certificate[]; // SequenceOfType

let _cached_decoder_for_CertificateValues: $.ASN1Decoder<CertificateValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateValues
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateValues} The decoded data structure.
 */
export
function _decode_CertificateValues (el: _Element): CertificateValues {
    if (!_cached_decoder_for_CertificateValues) { _cached_decoder_for_CertificateValues = $._decodeSequenceOf<Certificate>(() => _decode_Certificate); }
    return _cached_decoder_for_CertificateValues(el);
}

let _cached_encoder_for_CertificateValues: $.ASN1Encoder<CertificateValues> | null = null;

/**
 * @summary Encodes a(n) CertificateValues into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateValues, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateValues (value: CertificateValues, elGetter: $.ASN1Encoder<CertificateValues>): _Element {
    if (!_cached_encoder_for_CertificateValues) { _cached_encoder_for_CertificateValues = $._encodeSequenceOf<Certificate>(() => _encode_Certificate, $.DER); }
    return _cached_encoder_for_CertificateValues(value, elGetter);
}


/* eslint-enable */
