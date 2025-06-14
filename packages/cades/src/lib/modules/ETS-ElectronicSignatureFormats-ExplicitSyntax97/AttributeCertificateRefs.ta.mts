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
import { OtherCertID, _decode_OtherCertID, _encode_OtherCertID } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherCertID.ta.mjs";
/* START_OF_SYMBOL_DEFINITION AttributeCertificateRefs */
/**
 * @summary AttributeCertificateRefs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeCertificateRefs  ::=  SEQUENCE OF OtherCertID
 * ```
 */
export
type AttributeCertificateRefs = OtherCertID[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AttributeCertificateRefs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificateRefs */
let _cached_decoder_for_AttributeCertificateRefs: $.ASN1Decoder<AttributeCertificateRefs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificateRefs */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeCertificateRefs */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateRefs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificateRefs} The decoded data structure.
 */
export
function _decode_AttributeCertificateRefs (el: _Element) {
    if (!_cached_decoder_for_AttributeCertificateRefs) { _cached_decoder_for_AttributeCertificateRefs = $._decodeSequenceOf<OtherCertID>(() => _decode_OtherCertID); }
    return _cached_decoder_for_AttributeCertificateRefs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeCertificateRefs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificateRefs */
let _cached_encoder_for_AttributeCertificateRefs: $.ASN1Encoder<AttributeCertificateRefs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificateRefs */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeCertificateRefs */
/**
 * @summary Encodes a(n) AttributeCertificateRefs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateRefs, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeCertificateRefs (value: AttributeCertificateRefs, elGetter: $.ASN1Encoder<AttributeCertificateRefs>) {
    if (!_cached_encoder_for_AttributeCertificateRefs) { _cached_encoder_for_AttributeCertificateRefs = $._encodeSequenceOf<OtherCertID>(() => _encode_OtherCertID, $.BER); }
    return _cached_encoder_for_AttributeCertificateRefs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeCertificateRefs */

/* eslint-enable */
