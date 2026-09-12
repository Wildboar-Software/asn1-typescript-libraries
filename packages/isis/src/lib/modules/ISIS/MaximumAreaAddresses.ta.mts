/* eslint-disable */
import {
  INTEGER,
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
 * @summary MaximumAreaAddresses
 * @description
 *
 * Configured maximum number of distinct area addresses in this IS's area. Must
 * be the same on every IS in the area or adjacencies may fail to initialise
 * and/or the area may partition. Every IS shall support at least 3. PDU field 0
 * is treated as 3.
 *
 * Replace is permitted only while the managed object is disabled.
 *
 * (ISO/IEC 10589:2002 clauses 7.1.5, 9.5, 11.2.4 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaximumAreaAddresses  ::=  INTEGER(0..254)
 * ```
 */
export type MaximumAreaAddresses = INTEGER;


export const _decode_MaximumAreaAddresses = $._decodeInteger;


export const _encode_MaximumAreaAddresses = $._encodeInteger;


/* eslint-enable */
