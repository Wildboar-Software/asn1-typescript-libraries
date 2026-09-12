/* eslint-disable */
import {
  OCTET_STRING,
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
 * @summary SystemId
 * @description
 *
 * System identifier (the ID field of an NSAP or NET). Length is 1–8 octets and
 * is the same for every system in a routeing domain. Must be unique among
 * systems in an area, and unique among Level 2 ISs in the domain. Combined with
 * each `manualAreaAddresses` entry it forms a valid NET for the IS. Empty
 * string is returned for a designated IS attribute when this system is not
 * taking part in the election.
 *
 * (ISO/IEC 10589:2002 clauses 7.1.3.2, 7.1.4, 11.2.4 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemId  ::=  OCTET STRING(SIZE (0..8))
 * ```
 */
export type SystemId = OCTET_STRING; // OctetStringType


export const _decode_SystemId = $._decodeOctetString;


export const _encode_SystemId = $._encodeOctetString;


/* eslint-enable */
