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
import { securityTransformations } from '../ObjectIdentifiers/securityTransformations.va.mjs';
import {
  dirSignatureTransformation_XformedDataType,
  _decode_dirSignatureTransformation_XformedDataType,
  _encode_dirSignatureTransformation_XformedDataType,
} from '../GulsSecurityTransformations/dirSignatureTransformation-XformedDataType.ta.mjs';
import { type SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.mjs';

/**
 * @summary dirSignatureTransformation
 * @description
 *
 * Directory SIGNATURE transformation: functionally equivalent to
 * X.509 `SIGNATURE`. Digital signature with appendix; the
 * transformed item is the appendix only. Verification requires
 * the unprotected item as a local input. Initial encoding rules:
 * DER. Signature-verify failure is an error. Services:
 * data-origin authentication, integrity, and (in certain
 * situations) non-repudiation. ITU-T Rec. X.830 (04/95)
 * [Annex D.3](https://www.itu.int/rec/T-REC-X.830-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dirSignatureTransformation SECURITY-TRANSFORMATION ::= {
 *   IDENTIFIER              {securityTransformations dir-signature(3)}
 *   INITIAL-ENCODING-RULES
 *     {joint-iso-itu-t asn1(1) ber-derived(2) distinguished-encoding(1)}
 *   XFORMED-DATA-TYPE
 *     SEQUENCE {algorithmId     AlgorithmIdentifier,
 *               -- of the algorithms used to compute the signature
 *               encipheredHash  BIT STRING}
 * }
 * ```
 *
 * @constant
 * @type {SECURITY_TRANSFORMATION<dirSignatureTransformation_XformedDataType>}
 * @implements {SECURITY_TRANSFORMATION<dirSignatureTransformation_XformedDataType>}
 */
export const dirSignatureTransformation: SECURITY_TRANSFORMATION<dirSignatureTransformation_XformedDataType> = {
  class: 'SECURITY-TRANSFORMATION',
  decoderFor: {
    '&StaticUnprotectedParm': undefined,
    '&DynamicUnprotectedParm': undefined,
    '&XformedDataType': _decode_dirSignatureTransformation_XformedDataType,
    '&QualifierType': undefined,
  },
  encoderFor: {
    '&StaticUnprotectedParm': undefined,
    '&DynamicUnprotectedParm': undefined,
    '&XformedDataType': _encode_dirSignatureTransformation_XformedDataType,
    '&QualifierType': undefined,
  },
  '&sT-Identifier': _OID.fromParts(
    [/* dir-signature */ 3],
    securityTransformations
  ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&initialEncodingRules': _OID.fromParts(
    [/* asn1 */ 1, /* ber-derived */ 2, /* distinguished-encoding */ 1],
    joint_iso_itu_t
  ) /* OBJECT_FIELD_SETTING */,
  '&StaticUnprotectedParm': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&DynamicUnprotectedParm': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&XformedDataType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&QualifierType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
