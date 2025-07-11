/* eslint-disable */
import {
  joint_iso_itu_t,
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
  RealizationParameter,
  _decode_RealizationParameter,
  _encode_RealizationParameter,
} from '../Remote-Operations-Realizations/RealizationParameter.ta.mjs';
import { type REALIZATION } from '../Remote-Operations-Information-Objects-extensions/REALIZATION.oca.mjs';

/**
 * @summary aUnitData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aUnitData REALIZATION ::= {
 *   RealizationParameter(WITH COMPONENTS {
 *                          realization-type  (transfer-service)
 *                        })
 *   IDENTIFIED BY
 *     {joint-iso-itu-t association-control(2) abstract-syntax(1) apdus(1)
 *      version(1)}
 * }
 * ```
 *
 * @constant
 * @type {REALIZATION<RealizationParameter>}
 * @implements {REALIZATION<RealizationParameter>}
 */
export const aUnitData: REALIZATION<RealizationParameter> = {
  class: 'TYPE-IDENTIFIER',
  decoderFor: {
    '&Type': _decode_RealizationParameter,
  },
  encoderFor: {
    '&Type': _encode_RealizationParameter,
  },
  '&id': _OID.fromParts(
    [
      /* association-control */ 2,
      /* abstract-syntax */ 1,
      /* apdus */ 1,
      /* version */ 1,
    ],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
