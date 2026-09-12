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
import {
  NonWrappingCounter,
  _decode_NonWrappingCounter,
  _encode_NonWrappingCounter,
} from '../CommonMgt/NonWrappingCounter.ta.mjs';
/**
 * @summary counterInitialValue
 * @description
 *
 * Mandatory initial value of every counter derived from `nonWrappingCounter`.
 *
 * (ISO/IEC 10589:2002 Annex E.1.9 and E.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * counterInitialValue NonWrappingCounter ::= 0
 * ```
 *
 * @constant
 */
export const counterInitialValue: NonWrappingCounter = 0;

/* eslint-enable */
