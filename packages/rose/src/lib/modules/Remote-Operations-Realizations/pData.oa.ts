/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  RealizationParameter,
  _decode_RealizationParameter,
  _encode_RealizationParameter,
} from '../Remote-Operations-Realizations/RealizationParameter.ta';
export {
  RealizationParameter,
  _decode_RealizationParameter,
  _encode_RealizationParameter,
} from '../Remote-Operations-Realizations/RealizationParameter.ta';
import { REALIZATION } from '../Remote-Operations-Information-Objects-extensions/REALIZATION.oca';
export { REALIZATION } from '../Remote-Operations-Information-Objects-extensions/REALIZATION.oca';

/* START_OF_SYMBOL_DEFINITION pData */
/**
 * @summary pData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pData REALIZATION ::= {
 *   RealizationParameter(WITH COMPONENTS {
 *                          realization-type  (transfer-service)
 *                        })
 *   IDENTIFIED BY
 *     {joint-iso-itu-t remote-operations(4) transfer-realizations(11)
 *      pData-without-concatenation(0)}
 * }
 * ```
 *
 * @constant
 * @type {REALIZATION<RealizationParameter>}
 * @implements {REALIZATION<RealizationParameter>}
 */
export const pData: REALIZATION<RealizationParameter> = {
  class: 'TYPE-IDENTIFIER',
  decoderFor: {
    '&Type': _decode_RealizationParameter,
  },
  encoderFor: {
    '&Type': _encode_RealizationParameter,
  },
  '&id': new _OID(
    [
      /* remote-operations */ 4,
      /* transfer-realizations */ 11,
      /* pData-without-concatenation */ 0,
    ],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pData */

/* eslint-enable */
