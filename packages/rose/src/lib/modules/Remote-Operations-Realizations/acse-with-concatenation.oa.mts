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
 * @summary acse_with_concatenation
 * @description
 *
 * ACSE association realization with concatenation permitted: TRANSFER PDVs may be carried with Bind/Unbind APDUs on A-ASSOCIATE/A-RELEASE (ITU-T Rec. X.882 (07/94) §8.2.7–8.2.8). TRANSFER during bind/unbind pending is allowed only with a concatenating transfer realization (X.882 §9.2.6 a). OID `{... association-realizations(10) acse-with-concatenation(1)}`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acse-with-concatenation REALIZATION ::= {
 *   RealizationParameter
 *     (WITH COMPONENTS {
 *        realization-type  (association-service),
 *        concatenation     (TRUE)
 *      })
 *   IDENTIFIED BY
 *     {joint-iso-itu-t remote-operations(4) association-realizations(10)
 *      acse-with-concatenation(1)}
 * }
 * ```
 *
 * @constant
 * @type {REALIZATION<RealizationParameter>}
 * @implements {REALIZATION<RealizationParameter>}
 */
export const acse_with_concatenation: REALIZATION<RealizationParameter> = {
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
      /* acse-with-concatenation */ 1,
    ],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
