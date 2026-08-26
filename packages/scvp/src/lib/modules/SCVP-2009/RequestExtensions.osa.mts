/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import type { EXTENSION } from '@wildboar/x500/AuthenticationFramework';

/**
 * @summary RequestExtensions
 * @description
 *
 * Extension object set for `CVRequest.requestExtensions`
 * (extensible; RFC 5055 defines none) ([RFC 5055 §3.7](https://datatracker.ietf.org/doc/html/rfc5055#section-3.7)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestExtensions EXTENSION ::= {...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const RequestExtensions: EXTENSION[] = [];

/* eslint-enable */
