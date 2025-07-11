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

/**
 * @summary rTSE
 * @description
 *
 * **WARNING: Because there is a circular dependency from the ROSE modules and
 * RTSE modules, the `CONTRACT` type was removed from this file. Though this
 * object is not a `CONTRACT` in the eyes of TypeScript, this is still a
 * structurally valid `CONTRACT` information object.**
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rTSE CONTRACT ::= {ID  {joint-iso-itu-t reliable-transfer(3) aseID(1)}
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export const rTSE: { class: string, decoderFor: {}, encoderFor: {}, '&id': _OID } = {
  class: 'CONTRACT',
  decoderFor: {},
  encoderFor: {},
  '&id': _OID.fromParts(
    [/* reliable-transfer */ 3, /* aseID */ 1],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
} as const;

/* eslint-enable */
