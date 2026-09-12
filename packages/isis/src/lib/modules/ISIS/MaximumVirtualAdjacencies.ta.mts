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
 * @summary MaximumVirtualAdjacencies
 * @description
 *
 * Maximum number of virtual adjacencies that may be created to repair a
 * partitioned Level 1 area. Resource-limiting: implementations may refuse to
 * decrease it below the number currently in use while the object is enabled.
 *
 * (ISO/IEC 10589:2002 clauses 7.2.10, 11.2.2.3 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaximumVirtualAdjacencies  ::=  INTEGER(0..32)
 * ```
 */
export type MaximumVirtualAdjacencies = INTEGER;


export const _decode_MaximumVirtualAdjacencies = $._decodeInteger;


export const _encode_MaximumVirtualAdjacencies = $._encodeInteger;


/* eslint-enable */
