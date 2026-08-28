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
import { AnyURI, _decode_AnyURI, _encode_AnyURI } from '../XSD/AnyURI.ta.mjs';

/**
 * @summary ultimateReceiver
 * @description
 *
 * Default SOAP role for a header block: the ultimate receiver.
 * Omitted from the SOAP `role` attribute when this default applies.
 * ITU-T Rec. X.892 (05/2005)
 * [§7.2.2.3](https://www.itu.int/rec/T-REC-X.892-200505-I), Annex A.
 * W3C SOAP 1.2 Part 1
 * [§2.2](https://www.w3.org/TR/2003/REC-soap12-part1-20030624/#soaproles).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ultimateReceiver AnyURI ::= "http://www.w3.org/2003/05/soap-envelope/role/UltimateReceiver"
 * ```
 *
 * @constant
 */
export const ultimateReceiver: AnyURI =
  'http://www.w3.org/2003/05/soap-envelope/role/UltimateReceiver';

/* eslint-enable */
