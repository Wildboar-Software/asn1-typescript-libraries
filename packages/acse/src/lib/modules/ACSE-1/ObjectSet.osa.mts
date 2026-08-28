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
import { type MECHANISM_NAME } from '../ACSE-1/MECHANISM-NAME.oca.mjs';
/**
 * @summary ObjectSet
 * @description
 *
 * Extensible object set of `MECHANISM-NAME` objects. The published
 * module initializes it empty (`{...}`); implementations populate it
 * with the mechanisms they support. ITU-T Rec. X.227 bis (1998) §9.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectSet MECHANISM-NAME ::= {...}
 * ```
 *
 * @constant
 * @type {MECHANISM_NAME[]}
 *
 */
export const ObjectSet: MECHANISM_NAME[] = [];

/* eslint-enable */
