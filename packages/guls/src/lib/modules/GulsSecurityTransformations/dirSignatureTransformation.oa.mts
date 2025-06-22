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
import { securityTransformations } from '../ObjectIdentifiers/securityTransformations.va.mjs';
import {
  dirSignatureTransformation_XformedDataType,
  _decode_dirSignatureTransformation_XformedDataType,
  _encode_dirSignatureTransformation_XformedDataType,
} from '../GulsSecurityTransformations/dirSignatureTransformation-XformedDataType.ta.mjs';
import { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.mjs';

/**
 * @summary dirSignatureTransformation
 * @description
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
