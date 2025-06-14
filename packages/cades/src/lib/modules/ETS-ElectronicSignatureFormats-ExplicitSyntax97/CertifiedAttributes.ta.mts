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
    AttributeCertificate, _decode_AttributeCertificate, _encode_AttributeCertificate
} from "@wildboar/x500/src/lib/modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";



/* START_OF_SYMBOL_DEFINITION CertifiedAttributes */
/**
 * @summary CertifiedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertifiedAttributes  ::=  AttributeCertificate
 * ```
 */
export
type CertifiedAttributes = AttributeCertificate; // DefinedType
/* END_OF_SYMBOL_DEFINITION CertifiedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertifiedAttributes */
let _cached_decoder_for_CertifiedAttributes: $.ASN1Decoder<CertifiedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertifiedAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_CertifiedAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) CertifiedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertifiedAttributes} The decoded data structure.
 */
export
function _decode_CertifiedAttributes (el: _Element) {
    if (!_cached_decoder_for_CertifiedAttributes) { _cached_decoder_for_CertifiedAttributes = _decode_AttributeCertificate; }
    return _cached_decoder_for_CertifiedAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertifiedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertifiedAttributes */
let _cached_encoder_for_CertifiedAttributes: $.ASN1Encoder<CertifiedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertifiedAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_CertifiedAttributes */
/**
 * @summary Encodes a(n) CertifiedAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertifiedAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_CertifiedAttributes (value: CertifiedAttributes, elGetter: $.ASN1Encoder<CertifiedAttributes>) {
    if (!_cached_encoder_for_CertifiedAttributes) { _cached_encoder_for_CertifiedAttributes = _encode_AttributeCertificate; }
    return _cached_encoder_for_CertifiedAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertifiedAttributes */

/* eslint-enable */
