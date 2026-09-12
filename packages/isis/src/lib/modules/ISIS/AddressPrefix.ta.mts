/* eslint-disable */
import {
  BIT_STRING,
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

/**
 * @summary AddressPrefix
 * @description
 *
 * NSAP address prefix used to name a destination area or a reachable address at
 * a domain boundary. Encoded per clause 7.1.6; size shall be a multiple of four
 * because the protocol represents prefixes as semi-octets. Matching against a
 * destination NSAP is defined in clause 7.1.7.
 *
 * (ISO/IEC 10589:2002 clauses 7.1.6, 7.1.7, 11.2.1.2 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddressPrefix  ::=
 *   BIT STRING
 *     (SIZE (0..160))
 * ```
 */
export type AddressPrefix = BIT_STRING;


export const _decode_AddressPrefix = $._decodeBitString;


export const _encode_AddressPrefix = $._encodeBitString;


/* eslint-enable */
