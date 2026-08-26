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
 * @summary KerberosFlags
 * @description
 *
 * Compact boolean-vector bit string for options/flags
 * ([RFC 4120 §5.2.8](https://datatracker.ietf.org/doc/html/rfc4120#section-5.2.8)). SIZE (32..MAX): at least 32 bits MUST be
 * sent (accommodates widespread 32-bit wire practice vs.
 * NamedBit DER truncation in RFC 1510).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KerberosFlags    ::=  BIT STRING (SIZE (32..MAX))
 * ```
 */
export type KerberosFlags = BIT_STRING;




export const _decode_KerberosFlags = $._decodeBitString;




export const _encode_KerberosFlags = $._encodeBitString;


/* eslint-enable */
