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
 * @summary id_DHBasedMac
 * @description
 *
 * OID for Diffie-Hellman-based MAC protection of CMP messages
 * (`1.2.840.113533.7.66.30`) ([RFC 4210 §5.1.3.2](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.3.2)). Parameters are
 * `DHBMParameter`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-DHBasedMac OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 *     usa(840) nt(113533) nsn(7) algorithms(66) 30 }
 * ```
 *
 * @constant
 */
export const id_DHBasedMac: OBJECT_IDENTIFIER = _OID.fromParts([
  /* iso */ 1,
  /* member-body */ 2,
  /* usa */ 840,
  /* nt */ 113533,
  /* nsn */ 7,
  /* algorithms */ 66,
  30,
]);

/* eslint-enable */
