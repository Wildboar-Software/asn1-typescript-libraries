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
} from '@wildboar/asn1';

/**
 * @summary id_stc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-stc OBJECT IDENTIFIER ::= { iso(1) identified-organization(3) dod(6) internet(1) security(5)
 *     mechanisms(5) pkix(7) 17 }
 * ```
 *
 * @constant
 */
export const id_stc: OBJECT_IDENTIFIER = _OID.fromParts([
  /* iso */ 1,
  /* identified-organization */ 3,
  /* dod */ 6,
  /* internet */ 1,
  /* security */ 5,
  /* mechanisms */ 5,
  /* pkix */ 7,
  17,
]);

/* eslint-enable */
