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
  dirSignedTransformation_XformedDataType,
  _decode_dirSignedTransformation_XformedDataType,
  _encode_dirSignedTransformation_XformedDataType,
} from '../GulsSecurityTransformations/dirSignedTransformation-XformedDataType.ta.mjs';
import { type SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.mjs';

/**
 * @summary dirSignedTransformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dirSignedTransformation SECURITY-TRANSFORMATION ::= {
 *   IDENTIFIER              {securityTransformations dir-signed(2)}
 *   INITIAL-ENCODING-RULES
 *     {joint-iso-itu-t asn1(1) ber-derived(2) distinguished-encoding(1)}
 *   XFORMED-DATA-TYPE
 *     SEQUENCE {toBeSigned
 *                 ABSTRACT-SYNTAX.&Type
 *                   (CONSTRAINED BY {
 *
 *                      -- this type is constrained to being the to-be-signed type -- }),
 *               algorithmId     AlgorithmIdentifier,
 *               -- of the algorithms used to compute the signature
 *               encipheredHash  BIT STRING}
 * }
 * ```
 *
 * @constant
 * @type {SECURITY_TRANSFORMATION<dirSignedTransformation_XformedDataType>}
 * @implements {SECURITY_TRANSFORMATION<dirSignedTransformation_XformedDataType>}
 */
export const dirSignedTransformation: SECURITY_TRANSFORMATION<dirSignedTransformation_XformedDataType> = {
  class: 'SECURITY-TRANSFORMATION',
  decoderFor: {
    '&StaticUnprotectedParm': undefined,
    '&DynamicUnprotectedParm': undefined,
    '&XformedDataType': _decode_dirSignedTransformation_XformedDataType,
    '&QualifierType': undefined,
  },
  encoderFor: {
    '&StaticUnprotectedParm': undefined,
    '&DynamicUnprotectedParm': undefined,
    '&XformedDataType': _encode_dirSignedTransformation_XformedDataType,
    '&QualifierType': undefined,
  },
  '&sT-Identifier': _OID.fromParts(
    [/* dir-signed */ 2],
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
