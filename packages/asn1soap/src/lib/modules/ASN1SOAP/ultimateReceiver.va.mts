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
} from 'asn1-ts';
import { AnyURI, _decode_AnyURI, _encode_AnyURI } from '../XSD/AnyURI.ta.mjs';

/**
 * @summary ultimateReceiver
 * @description
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
