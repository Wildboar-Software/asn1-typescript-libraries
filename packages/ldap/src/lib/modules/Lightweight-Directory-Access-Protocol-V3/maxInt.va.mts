/* eslint-disable */
import {
  INTEGER,
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
 * @summary maxInt
 * @description
 *
 * 2^31−1. Upper bound for `MessageID`, `sizeLimit`, and `timeLimit`.
 * Not "unlimited" by itself -- those fields use 0 for "no client limit".
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maxInt INTEGER ::= 2147483647
 * ```
 *
 * @constant
 */
export const maxInt: INTEGER = 2147483647;

/* eslint-enable */
