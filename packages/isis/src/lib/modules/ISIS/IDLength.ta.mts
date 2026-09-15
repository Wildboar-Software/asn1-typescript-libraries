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
 * @summary IDLength
 * @description
 *
 * Length of the ID field of NSAPs and NETs in this routeing domain (1–8
 * octets). Reported in the `notificationIDLength` parameter when a PDU is
 * discarded for ID-length mismatch. All ISs in a domain must use the same
 * length.
 *
 * The PDU header encoding of this field is a single octet that also allows 0
 * (meaning 6 octets) and 255 (null / zero-length ID); those wire values are not
 * members of this INTEGER subtype.
 *
 * (ISO/IEC 10589:2002 clauses 7.1.3.2, 9.5, 11.2.1.3 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IDLength  ::=  INTEGER(0..8)
 * ```
 */
export type IDLength = INTEGER;


export const _decode_IDLength = $._decodeInteger;


export const _encode_IDLength = $._encodeInteger;


/* eslint-enable */
