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
import { gulsSignedTransformation } from '../GulsSecurityTransformations/gulsSignedTransformation.oa.mjs';
import { PROTECTION_MAPPING } from '../Notation/PROTECTION-MAPPING.oca.mjs';
import { symmetricKeyInformation } from '../GulsSecurityTransformations/symmetricKeyInformation.oa.mjs';
import { asymmetricKeyInformation } from '../GulsSecurityTransformations/asymmetricKeyInformation.oa.mjs';

/**
 * @summary signed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signed PROTECTION-MAPPING ::= {
 *   SECURITY-TRANSFORMATION
 *     {gulsSignedTransformation
 *        {{symmetricKeyInformation | asymmetricKeyInformation}}}
 * }
 * ```
 *
 * @constant
 * @type {PROTECTION_MAPPING}
 * @implements {PROTECTION_MAPPING}
 */
export const signed: PROTECTION_MAPPING = {
  class: 'PROTECTION-MAPPING',
  decoderFor: {},
  encoderFor: {},
  '&SecurityTransformation': [
    gulsSignedTransformation([
      symmetricKeyInformation,
      asymmetricKeyInformation,
    ]),
  ] /* OBJECT_FIELD_SETTING */,
  '&protTransferSyntax': _OID.fromParts(
    [/* genericULS */ 20, /* generalTransferSyntax */ 2],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&bypassPermitted': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
