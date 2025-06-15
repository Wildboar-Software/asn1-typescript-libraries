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
} from 'asn1-ts';
import {
  NonWrappingCounter,
  _decode_NonWrappingCounter,
  _encode_NonWrappingCounter,
} from '../CommonMgt/NonWrappingCounter.ta.mjs';
/**
 * @summary counterInitialValue
 * @description
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
