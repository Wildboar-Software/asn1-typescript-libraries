/* eslint-disable */
import {
  GeneralString,
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
 * @summary KerberosString
 * @description
 *
 * Human-readable string constrained to IA5String characters
 * ([RFC 4120 §5.2.1](https://datatracker.ietf.org/doc/html/rfc4120#section-5.2.1)). Replaces unconstrained `GeneralString` from
 * RFC 1510 for interoperability. US-ASCII control characters
 * SHOULD NOT be used in principal or realm names.
 *
 * > In general, US-ASCII control characters should not be used in
 * > KerberosString. Control characters SHOULD NOT be used in
 * > principal names or realm names.
 * >
 * > — [RFC 4120 §5.2.1](https://datatracker.ietf.org/doc/html/rfc4120#section-5.2.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KerberosString   ::=  GeneralString (IA5String)
 * ```
 */
export type KerberosString = GeneralString; // GeneralString




export const _decode_KerberosString = $._decodeGeneralString;




export const _encode_KerberosString = $._encodeGeneralString;


/* eslint-enable */
