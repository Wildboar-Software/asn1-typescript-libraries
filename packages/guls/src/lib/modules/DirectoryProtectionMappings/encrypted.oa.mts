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
import { dirEncryptedTransformation } from '../GulsSecurityTransformations/dirEncryptedTransformation.oa.mjs';
import { type PROTECTION_MAPPING } from '../Notation/PROTECTION-MAPPING.oca.mjs';

/**
 * @summary encrypted
 * @description
 *
 * Directory mapping so `PROTECTED {BaseType, encrypted}`
 * replaces X.509 `ENCRYPTED {BaseType}` with an identical
 * bit-encoding (`dirEncryptedTransformation`). Service:
 * confidentiality. Bypass not permitted. Distinct from GULS
 * `confidentiality`. ITU-T Rec. X.830 (04/95)
 * [Annex E](https://www.itu.int/rec/T-REC-X.830-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encrypted PROTECTION-MAPPING ::= {
 *   SECURITY-TRANSFORMATION  {dirEncryptedTransformation}
 * }
 * ```
 *
 * @constant
 * @type {PROTECTION_MAPPING}
 * @implements {PROTECTION_MAPPING}
 */
export const encrypted: PROTECTION_MAPPING = {
  class: 'PROTECTION-MAPPING',
  decoderFor: {},
  encoderFor: {},
  '&SecurityTransformation': [
    dirEncryptedTransformation,
  ] /* OBJECT_FIELD_SETTING */,
  '&protTransferSyntax': _OID.fromParts(
    [/* genericULS */ 20, /* generalTransferSyntax */ 2],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&bypassPermitted': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
