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
import {
    type AttributeCertificate, _decode_AttributeCertificate, _encode_AttributeCertificate
} from "@wildboar/x500/AttributeCertificateDefinitions";



/**
 * @summary CertifiedAttributes
 * @description
 *
 * Certified attributes of the signer: an X.509 attribute
 * certificate as defined in RFC 3281. ETSI TS 101 733 V2.2.1
 * (2013-04) §5.11.3, §7.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertifiedAttributes  ::=  AttributeCertificate
 * ```
 */
export
type CertifiedAttributes = AttributeCertificate; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CertifiedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertifiedAttributes} The decoded data structure.
 */
export const _decode_CertifiedAttributes: $.ASN1Decoder<CertifiedAttributes> = _decode_AttributeCertificate;

/**
 * @summary Encodes a(n) CertifiedAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertifiedAttributes, encoded as an ASN.1 Element.
 */
export const _encode_CertifiedAttributes: $.ASN1Encoder<CertifiedAttributes> = _encode_AttributeCertificate;


/* eslint-enable */
