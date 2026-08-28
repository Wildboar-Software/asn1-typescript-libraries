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
import { dirSignatureTransformation } from '../GulsSecurityTransformations/dirSignatureTransformation.oa.mjs';
import { type PROTECTION_MAPPING } from '../Notation/PROTECTION-MAPPING.oca.mjs';

/**
 * @summary signature
 * @description
 *
 * Directory mapping so `PROTECTED {BaseType, signature}` is a
 * functionally equivalent replacement of X.509 `SIGNATURE`
 * `BaseType` (`dirSignatureTransformation`). Services:
 * data-origin authentication, integrity, and (in certain
 * situations) non-repudiation. Distinct from GULS `signature`.
 * ITU-T Rec. X.830 (04/95) [Annex E](https://www.itu.int/rec/T-REC-X.830-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signature PROTECTION-MAPPING ::= {
 *   SECURITY-TRANSFORMATION  {dirSignatureTransformation}
 * }
 * ```
 *
 * @constant
 * @type {PROTECTION_MAPPING}
 * @implements {PROTECTION_MAPPING}
 */
export const signature: PROTECTION_MAPPING = {
  class: 'PROTECTION-MAPPING',
  decoderFor: {},
  encoderFor: {},
  '&SecurityTransformation': [
    dirSignatureTransformation,
  ] /* OBJECT_FIELD_SETTING */,
  '&protTransferSyntax': _OID.fromParts(
    [/* genericULS */ 20, /* generalTransferSyntax */ 2],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&bypassPermitted': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
