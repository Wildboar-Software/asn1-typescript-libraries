/* eslint-disable */
import {
  REAL,
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
 * @summary Double
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Double  ::=     REAL (0 | MINUS-INFINITY | PLUS-INFINITY | NOT-A-NUMBER | WITH COMPONENTS {
 *             mantissa(-9007199254740991..9007199254740991),
 *             base(2),
 *             exponent(-1075..970)})
 * ```
 */
export type Double = REAL; // RealType




export const _decode_Double = $._decodeReal;




export const _encode_Double = $._encodeReal;


/* eslint-enable */
