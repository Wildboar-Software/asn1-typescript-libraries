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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION KEY_INFORMATION */
/**
 * @summary KEY_INFORMATION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEY-INFORMATION ::= CLASS
 *    -- This information object class definition is for use when
 *   -- specifying key information relating to particular classes
 *   -- of protection mechanisms (e.g. symmetric, asymmetric).
 *   -- It may be useful in defining various security transformations.
 *   {
 *   &kiClass  CHOICE {local   INTEGER,
 *                         -- local objects can only be defined within this
 *                         -- ASN.1 module.
 *                         global  OBJECT IDENTIFIER
 *                         -- global objects are defined elsewhere
 *   } UNIQUE,
 *   &KiType
 * }WITH SYNTAX {KEY-INFO-CLASS &kiClass
 *               KEY-INFO-TYPE &KiType
 * }
 * ```
 *
 * @interface
 */
export interface KEY_INFORMATION<
  KiType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'KEY-INFORMATION';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof KEY_INFORMATION<KiType>]: $.ASN1Decoder<
        KEY_INFORMATION<KiType>[_K]
      >;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof KEY_INFORMATION<KiType>]: $.ASN1Encoder<
        KEY_INFORMATION<KiType>[_K]
      >;
    }
  >;
  /**
   * @summary &kiClass
   */
  readonly '&kiClass'?: { local: INTEGER } | { global: OBJECT_IDENTIFIER };
  /**
   * @summary &KiType
   */
  readonly '&KiType': KiType;
}
/* END_OF_SYMBOL_DEFINITION KEY_INFORMATION */

/* eslint-enable */
