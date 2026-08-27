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
import { type INFO_TYPE_AND_VALUE } from '../PKIXCMP-2009/INFO-TYPE-AND-VALUE.oca.mjs';

/**
 * @summary SupportedInfoSet
 * @description
 *
 * Information object set of supported `INFO-TYPE-AND-VALUE` types for
 * open typing of `InfoTypeAndValue` (CMP module; see
 * [RFC 4210 §5.3.19](https://datatracker.ietf.org/doc/html/rfc4210#section-5.3.19) for defined id-it usages).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedInfoSet INFO-TYPE-AND-VALUE ::= { ... }
 * ```
 *
 * @constant
 * @type {INFO_TYPE_AND_VALUE[]}
 *
 */
export const SupportedInfoSet: INFO_TYPE_AND_VALUE[] = [];

/* eslint-enable */
