/* eslint-disable */
import {
  type OCTET_STRING,
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
 * @summary AreaAddress
 * @description
 *
 * Area address of an IS-IS area: the preferred binary encoding of the
 * corresponding NSAP with the last `IDLength + 1` octets (ID and SEL) dropped.
 * All systems that share an area address belong to the same area. An area may
 * have several synonymous addresses via `manualAreaAddresses`.
 *
 * (ISO/IEC 10589:2002 clauses 7.1.5, 7.1.6 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AreaAddress  ::=  OCTET STRING(SIZE (1..20))
 * ```
 */
export type AreaAddress = OCTET_STRING; // OctetStringType


export const _decode_AreaAddress: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;


export const _encode_AreaAddress: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
