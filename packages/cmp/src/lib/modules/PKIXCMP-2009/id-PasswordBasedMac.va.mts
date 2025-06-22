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
