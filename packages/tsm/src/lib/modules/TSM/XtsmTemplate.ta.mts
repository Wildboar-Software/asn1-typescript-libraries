/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * Reference template as a biometric certificate from ITU-T X.1089
 * (TAI `BiometricCertificate`), signed by a BCA. ITU-T Rec. X.1084
 * (05/2008) §6, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XtsmTemplate     ::=      BiometricCertificate
 * ```
 */
export
type XtsmTemplate = BiometricCertificate; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) XtsmTemplate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_XtsmTemplate: $.ASN1Decoder<XtsmTemplate> = _decode_BiometricCertificate;

/**
 * @summary Encodes a(n) XtsmTemplate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XtsmTemplate, encoded as an ASN.1 Element.
 */
export const _encode_XtsmTemplate: $.ASN1Encoder<XtsmTemplate> = _encode_BiometricCertificate;


/* eslint-enable */
