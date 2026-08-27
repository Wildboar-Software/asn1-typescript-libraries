/* eslint-disable */
import {
  BIT_STRING,
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
 * @summary PKIProtection
 * @description
 *
 * Integrity protection bits for a `PKIMessage` ([RFC 4210 §5.1.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.3)).
 * Computed over the DER encoding of `ProtectedPart`. MAY contain a
 * MAC (password-based or DH-based) or a digital signature
 * ([RFC 4210 §5.1.3.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.3.1)–[RFC 4210 §5.1.3.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.3.3)). OPTIONAL when external
 * protection is used instead.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIProtection  ::=  BIT STRING
 * ```
 */
export type PKIProtection = BIT_STRING;




export const _decode_PKIProtection = $._decodeBitString;




export const _encode_PKIProtection = $._encodeBitString;


/* eslint-enable */
