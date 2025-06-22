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
} from 'asn1-ts';
import {
  RealizationParameter,
  _decode_RealizationParameter,
  _encode_RealizationParameter,
} from '../Remote-Operations-Realizations/RealizationParameter.ta.mjs';
import { REALIZATION } from '../Remote-Operations-Information-Objects-extensions/REALIZATION.oca.mjs';

/**
 * @summary acse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acse REALIZATION ::= {
 *   RealizationParameter
 *     (WITH COMPONENTS {
 *        realization-type  (association-service)
 *      })
 *   IDENTIFIED BY
 *     {joint-iso-itu-t remote-operations(4) association-realizations(10)
 *      acse-without-concatenation(0)}
 * }
 * ```
 *
 * @constant
 * @type {REALIZATION<RealizationParameter>}
 * @implements {REALIZATION<RealizationParameter>}
 */
export const acse: REALIZATION<RealizationParameter> = {
  class: 'TYPE-IDENTIFIER',
  decoderFor: {
    '&Type': _decode_RealizationParameter,
  },
  encoderFor: {
    '&Type': _encode_RealizationParameter,
  },
  '&id': _OID.fromParts(
    [
      /* remote-operations */ 4,
      /* association-realizations */ 10,
      /* acse-without-concatenation */ 0,
    ],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
