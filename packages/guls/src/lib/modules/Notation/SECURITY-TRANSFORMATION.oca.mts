/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary SECURITY_TRANSFORMATION
 * @description
 *
 * Information object class for one security transformation: an
 * encoding process (and usually a decoding process) applied to
 * protect data in transfer or storage. Identified by OID; used
 * with the generic protecting transfer syntax (X.833) and/or
 * `PROTECTED`. Default initial encoding rules are CER. A
 * complete specification must also describe encoding/decoding
 * processes, local inputs, outputs, parameters, qualifiers, and
 * errors. ITU-T Rec. X.830 (04/95) [§7.2](https://www.itu.int/rec/T-REC-X.830-199504-I), Annex A.
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
   * @description
   *
   * OID used in protocol to name this transformation.
   * UNIQUE. ITU-T Rec. X.830 (04/95) §7.2, Annex A.
   */
  readonly '&sT-Identifier'?: OBJECT_IDENTIFIER;
  /**
   * @summary &initialEncodingRules
   * @description
   *
   * Default rules used to encode an ASN.1 unprotected item
   * to a bit string before the transformation encoding
   * process. Default is CER; a transformation may override
   * this with a static parameter. ITU-T Rec. X.830 (04/95)
   * §7.1.4, §7.2.
   */
  readonly '&initialEncodingRules'?: OBJECT_IDENTIFIER;
  /**
   * @summary &StaticUnprotectedParm
   * @description
   *
   * Type of static unprotected parameters (constant for a
   * security association; sent when the transformation is
   * first applied). ITU-T Rec. X.830 (04/95) §7.1.3, §7.2.
   */
  readonly '&StaticUnprotectedParm': StaticUnprotectedParm;
  /**
   * @summary &DynamicUnprotectedParm
   * @description
   *
   * Type of dynamic unprotected parameters (may change
   * during a security association). ITU-T Rec. X.830 (04/95)
   * §7.1.3, §7.2.
   */
  readonly '&DynamicUnprotectedParm': DynamicUnprotectedParm;
  /**
   * @summary &XformedDataType
   * @description
   *
   * Type of the value produced by the transformation
   * encoding process. ITU-T Rec. X.830 (04/95) §7.1, §7.2.
   */
  readonly '&XformedDataType': XformedDataType;
  /**
   * @summary &QualifierType
   * @description
   *
   * Type of the qualifier used with `PROTECTED-Q` (e.g. a
   * security-association id, algorithm, or key id).
   * ITU-T Rec. X.830 (04/95) §7.2, §8.2.
   */
  readonly '&QualifierType': QualifierType;
}

/* eslint-enable */
