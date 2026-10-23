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
  CMPCertificate,
  _decode_CMPCertificate,
  _encode_CMPCertificate,
} from '../PKIXCMP-2009/CMPCertificate.ta.mjs';

/**
 * @summary OOBCert
 * @description
 *
 * Out-of-band root CA public key carried as a self-signed certificate
 * ([RFC 4210 §5.2.5](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.5)). MUST be self-signed; subject and issuer MUST be
 * identical; if subject is NULL, `subjectAltName` and `issuerAltName`
 * MUST be present and equal; other extensions must be suitable for a
 * self-signed certificate.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OOBCert  ::=  CMPCertificate
 * ```
 */
export type OOBCert = CMPCertificate; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) OOBCert
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OOBCert} The decoded data structure.
 */
export const _decode_OOBCert: $.ASN1Decoder<OOBCert> = _decode_CMPCertificate;

/**
 * @summary Encodes a(n) OOBCert into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OOBCert, encoded as an ASN.1 Element.
 */
export const _encode_OOBCert: $.ASN1Encoder<OOBCert> = _encode_CMPCertificate;


/* eslint-enable */
