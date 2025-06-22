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
import { dirEncryptedTransformation } from '../GulsSecurityTransformations/dirEncryptedTransformation.oa.mjs';
import { PROTECTION_MAPPING } from '../Notation/PROTECTION-MAPPING.oca.mjs';

/**
 * @summary confidentiality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * confidentiality PROTECTION-MAPPING ::= {
 *   SECURITY-TRANSFORMATION  {dirEncryptedTransformation}
 *   BYPASS-PERMITTED         TRUE
 * }
 * ```
 *
 * @constant
 * @type {PROTECTION_MAPPING}
 * @implements {PROTECTION_MAPPING}
 */
export const confidentiality: PROTECTION_MAPPING = {
  class: 'PROTECTION-MAPPING',
  decoderFor: {},
  encoderFor: {},
  '&SecurityTransformation': [
    dirEncryptedTransformation,
  ] /* OBJECT_FIELD_SETTING */,
  '&bypassPermitted': false /* OBJECT_FIELD_SETTING */,
  '&protTransferSyntax': _OID.fromParts(
    [/* genericULS */ 20, /* generalTransferSyntax */ 2],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
