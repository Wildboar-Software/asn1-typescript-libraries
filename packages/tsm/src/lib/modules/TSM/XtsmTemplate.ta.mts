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
import { BiometricCertificate, _decode_BiometricCertificate, _encode_BiometricCertificate } from "../TAI/BiometricCertificate.ta.mjs";



/**
 * @summary XtsmTemplate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XtsmTemplate     ::=      BiometricCertificate
 * ```
 */
export
type XtsmTemplate = BiometricCertificate; // DefinedType

let _cached_decoder_for_XtsmTemplate: $.ASN1Decoder<XtsmTemplate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) XtsmTemplate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_XtsmTemplate (el: _Element): XtsmTemplate {
    if (!_cached_decoder_for_XtsmTemplate) { _cached_decoder_for_XtsmTemplate = _decode_BiometricCertificate; }
    return _cached_decoder_for_XtsmTemplate(el);
}

let _cached_encoder_for_XtsmTemplate: $.ASN1Encoder<XtsmTemplate> | null = null;

/**
 * @summary Encodes a(n) XtsmTemplate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XtsmTemplate, encoded as an ASN.1 Element.
 */
export
function _encode_XtsmTemplate (value: XtsmTemplate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_XtsmTemplate) { _cached_encoder_for_XtsmTemplate = _encode_BiometricCertificate; }
    return _cached_encoder_for_XtsmTemplate(value, elGetter);
}


/* eslint-enable */
