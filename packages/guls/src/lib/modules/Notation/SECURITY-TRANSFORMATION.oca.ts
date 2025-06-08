/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION SECURITY_TRANSFORMATION */
/**
 * @summary SECURITY_TRANSFORMATION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SECURITY-TRANSFORMATION ::= CLASS
 *    -- This information object class definition is for use when
 *   -- specifying a particular instance of a security transformation.
 *   {
 *   &sT-Identifier           OBJECT IDENTIFIER UNIQUE,
 *   -- Identifier to be used in signalling the application
 *   -- of the particular security transformation
 *   &initialEncodingRules    OBJECT IDENTIFIER DEFAULT {joint-iso-ccitt
 *                                                           asn1(1)
 *                                                           ber-derived(2)
 *                                                           canonical-encoding(0)},
 *   -- Default initial encoding rules to generate a bit
 *   -- string prior to applying the encoding process of a
 *   -- security transformation.
 *   &StaticUnprotectedParm   OPTIONAL,
 *   -- ASN.1 type for conveying static unprotected parameters
 *   &DynamicUnprotectedParm  OPTIONAL,
 *   -- ASN.1 type for conveying dynamic unprotected parameters
 *   &XformedDataType         ,
 *   -- ASN.1 type of the ASN.1 value produced by the security
 *   -- transformations encoding process
 *   &QualifierType           OPTIONAL
 *   -- &QualifierType specifies the ASN.1 type of the qualifier
 *   -- parameter used with the PROTECTED-Q notation.
 * }
 * WITH SYNTAX
 *  -- The following syntax is used to specify a particular security
 * -- transformation.
 * {
 *   IDENTIFIER &sT-Identifier
 *   [INITIAL-ENCODING-RULES &initialEncodingRules]
 *   [STATIC-UNPROT-PARM &StaticUnprotectedParm]
 *   [DYNAMIC-UNPROT-PARM &DynamicUnprotectedParm]
 *   XFORMED-DATA-TYPE &XformedDataType
 *   [QUALIFIER-TYPE &QualifierType]
 * }
 * ```
 *
 * @interface
 */
export interface SECURITY_TRANSFORMATION<
  StaticUnprotectedParm = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
  DynamicUnprotectedParm = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
  XformedDataType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
  QualifierType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'SECURITY-TRANSFORMATION';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof SECURITY_TRANSFORMATION<
        StaticUnprotectedParm,
        DynamicUnprotectedParm,
        XformedDataType,
        QualifierType
      >]: $.ASN1Decoder<
        SECURITY_TRANSFORMATION<
          StaticUnprotectedParm,
          DynamicUnprotectedParm,
          XformedDataType,
          QualifierType
        >[_K]
      >;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof SECURITY_TRANSFORMATION<
        StaticUnprotectedParm,
        DynamicUnprotectedParm,
        XformedDataType,
        QualifierType
      >]: $.ASN1Encoder<
        SECURITY_TRANSFORMATION<
          StaticUnprotectedParm,
          DynamicUnprotectedParm,
          XformedDataType,
          QualifierType
        >[_K]
      >;
    }
  >;
  /**
   * @summary &sT-Identifier
   */
  readonly '&sT-Identifier'?: OBJECT_IDENTIFIER;
  /**
   * @summary &initialEncodingRules
   */
  readonly '&initialEncodingRules'?: OBJECT_IDENTIFIER;
  /**
   * @summary &StaticUnprotectedParm
   */
  readonly '&StaticUnprotectedParm': StaticUnprotectedParm;
  /**
   * @summary &DynamicUnprotectedParm
   */
  readonly '&DynamicUnprotectedParm': DynamicUnprotectedParm;
  /**
   * @summary &XformedDataType
   */
  readonly '&XformedDataType': XformedDataType;
  /**
   * @summary &QualifierType
   */
  readonly '&QualifierType': QualifierType;
}
/* END_OF_SYMBOL_DEFINITION SECURITY_TRANSFORMATION */

/* eslint-enable */
