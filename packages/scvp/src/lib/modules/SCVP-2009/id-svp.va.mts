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
 * @summary id_svp
 * @description
 *
 * Arc for SCVP validation policy/algorithm OIDs (`id-svp`) ([RFC 5055 §3.2.4](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-svp OBJECT IDENTIFIER ::= { iso(1) identified-organization(3) dod(6) internet(1) security(5)
 *     mechanisms(5) pkix(7) 19 }
 * ```
 *
 * @constant
 */
export const id_svp: OBJECT_IDENTIFIER = _OID.fromParts([
  /* iso */ 1,
  /* identified-organization */ 3,
  /* dod */ 6,
  /* internet */ 1,
  /* security */ 5,
  /* mechanisms */ 5,
  /* pkix */ 7,
  19,
]);

/* eslint-enable */
