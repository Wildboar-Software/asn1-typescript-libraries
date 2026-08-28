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
import { gulsSignatureTransformation } from '../GulsSecurityTransformations/gulsSignatureTransformation.oa.mjs';
import { type PROTECTION_MAPPING } from '../Notation/PROTECTION-MAPPING.oca.mjs';
import { symmetricKeyInformation } from '../GulsSecurityTransformations/symmetricKeyInformation.oa.mjs';
import { asymmetricKeyInformation } from '../GulsSecurityTransformations/asymmetricKeyInformation.oa.mjs';

/**
 * @summary signature
 * @description
 *
 * Maps `PROTECTED {BaseType, signature}` to
 * `gulsSignatureTransformation` with symmetric and asymmetric
 * key information. Services: data-origin authentication,
 * integrity, and (in certain situations) non-repudiation.
 * Distinct from Directory `signature`. ITU-T Rec. X.830 (04/95)
 * [Annex E](https://www.itu.int/rec/T-REC-X.830-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signature PROTECTION-MAPPING ::= {
 *   SECURITY-TRANSFORMATION
 *     {gulsSignatureTransformation
 *        {{symmetricKeyInformation | asymmetricKeyInformation}}}
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
    gulsSignatureTransformation([symmetricKeyInformation, asymmetricKeyInformation]),
  ] /* OBJECT_FIELD_SETTING */,
  '&protTransferSyntax': _OID.fromParts(
    [/* genericULS */ 20, /* generalTransferSyntax */ 2],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&bypassPermitted': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
