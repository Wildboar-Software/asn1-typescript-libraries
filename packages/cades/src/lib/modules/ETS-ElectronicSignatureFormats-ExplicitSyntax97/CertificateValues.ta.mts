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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    Certificate, _decode_Certificate, _encode_Certificate
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta.mjs";


/* START_OF_SYMBOL_DEFINITION CertificateValues */
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
/* END_OF_SYMBOL_DEFINITION CertificateValues */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateValues */
let _cached_decoder_for_CertificateValues: $.ASN1Decoder<CertificateValues> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateValues */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateValues */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateValues
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateValues} The decoded data structure.
 */
export
function _decode_CertificateValues (el: _Element) {
    if (!_cached_decoder_for_CertificateValues) { _cached_decoder_for_CertificateValues = $._decodeSequenceOf<Certificate>(() => _decode_Certificate); }
    return _cached_decoder_for_CertificateValues(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateValues */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateValues */
let _cached_encoder_for_CertificateValues: $.ASN1Encoder<CertificateValues> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateValues */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateValues */
/**
 * @summary Encodes a(n) CertificateValues into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateValues, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateValues (value: CertificateValues, elGetter: $.ASN1Encoder<CertificateValues>) {
    if (!_cached_encoder_for_CertificateValues) { _cached_encoder_for_CertificateValues = $._encodeSequenceOf<Certificate>(() => _encode_Certificate, $.BER); }
    return _cached_encoder_for_CertificateValues(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateValues */

/* eslint-enable */
