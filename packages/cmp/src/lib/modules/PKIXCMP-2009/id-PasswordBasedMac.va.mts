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
 * @summary id_PasswordBasedMac
 * @description
 *
 * OID for password-based MAC protection of CMP messages when the
 * sender and recipient share secret information
 * (`1.2.840.113533.7.66.13`) ([RFC 4210 §5.1.3.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.3.1)). Parameters are
 * `PBMParameter`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-PasswordBasedMac OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 *     usa(840) nt(113533) nsn(7) algorithms(66) 13 }
 * ```
 *
 * @constant
 */
export const id_PasswordBasedMac: OBJECT_IDENTIFIER = _OID.fromParts([
  /* iso */ 1,
  /* member-body */ 2,
  /* usa */ 840,
  /* nt */ 113533,
  /* nsn */ 7,
  /* algorithms */ 66,
  13,
]);

/* eslint-enable */
