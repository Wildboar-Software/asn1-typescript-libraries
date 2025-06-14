/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';

/* START_OF_SYMBOL_DEFINITION id_ct */
/**
 * @summary id_ct
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct OBJECT IDENTIFIER ::= { iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs9(9)
 *     id-smime(16) 1 }
 * ```
 *
 * @constant
 */
export const id_ct: OBJECT_IDENTIFIER = new _OID([
  /* iso */ 1,
  /* member-body */ 2,
  /* us */ 840,
  /* rsadsi */ 113549,
  /* pkcs */ 1,
  /* pkcs9 */ 9,
  /* id-smime */ 16,
  1,
]);
/* END_OF_SYMBOL_DEFINITION id_ct */

/* eslint-enable */
