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
import { X509Certificate, _decode_X509Certificate, _encode_X509Certificate } from "../TSM/X509Certificate.ta.mjs";



/**
 * @summary Certificates
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Certificates         ::=     SEQUENCE OF X509Certificate
 * ```
 */
export
type Certificates = X509Certificate[]; // SequenceOfType

let _cached_decoder_for_Certificates: $.ASN1Decoder<Certificates> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Certificates
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Certificates (el: _Element): Certificates {
    if (!_cached_decoder_for_Certificates) { _cached_decoder_for_Certificates = $._decodeSequenceOf<X509Certificate>(() => _decode_X509Certificate); }
    return _cached_decoder_for_Certificates(el);
}

let _cached_encoder_for_Certificates: $.ASN1Encoder<Certificates> | null = null;

/**
 * @summary Encodes a(n) Certificates into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Certificates, encoded as an ASN.1 Element.
 */
export
function _encode_Certificates (value: Certificates, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Certificates) { _cached_encoder_for_Certificates = $._encodeSequenceOf<X509Certificate>(() => _encode_X509Certificate, $.BER); }
    return _cached_encoder_for_Certificates(value, elGetter);
}


/* eslint-enable */
