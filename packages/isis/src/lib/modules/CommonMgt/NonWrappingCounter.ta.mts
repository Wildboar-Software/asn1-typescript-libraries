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
 * @summary NonWrappingCounter
 * @description
 *
 * Generic non-wrapping counter (0..2^64−1). Never instantiated directly; IS-IS
 * event counters are derived from it and shall start at 0 and increase
 * monotonically. Implementations need not keep 64 bits if all achievable values
 * fit in fewer.
 *
 * (ISO/IEC 10589:2002 Annex E.1.9 and E.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonWrappingCounter  ::=  INTEGER(0..18446744073709551615)
 * ```
 */
export type NonWrappingCounter = INTEGER;


export const _decode_NonWrappingCounter = $._decodeInteger;


export const _encode_NonWrappingCounter = $._encodeInteger;


/* eslint-enable */
