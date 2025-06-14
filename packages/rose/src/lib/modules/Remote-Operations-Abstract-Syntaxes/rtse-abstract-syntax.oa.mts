/* eslint-disable */
import {
  joint_iso_itu_t,
  ABSTRACT_SYNTAX,
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
  RTSE_apdus,
  _decode_RTSE_apdus,
  _encode_RTSE_apdus,
} from '../Remote-Operations-Abstract-Syntaxes/RTSE-apdus.ta.mjs';
/* START_OF_SYMBOL_DEFINITION rtse_abstract_syntax */
/**
 * @summary rtse_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rtse-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   RTSE-apdus
 *   IDENTIFIED BY  {joint-iso-itu-t reliable-transfer(3) apdus(0)}
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<RTSE_apdus>}
 * @implements {ABSTRACT_SYNTAX<RTSE_apdus>}
 */
export const rtse_abstract_syntax: ABSTRACT_SYNTAX<RTSE_apdus> = {
  class: 'ABSTRACT-SYNTAX',
  decoderFor: {
    '&Type': _decode_RTSE_apdus,
  },
  encoderFor: {
    '&Type': _encode_RTSE_apdus,
  },
  '&id': new _OID(
    [/* reliable-transfer */ 3, /* apdus */ 0],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&property': undefined,
};
/* END_OF_SYMBOL_DEFINITION rtse_abstract_syntax */

/* eslint-enable */
