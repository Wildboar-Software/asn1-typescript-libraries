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
import {
  Priority,
  _decode_Priority,
  _encode_Priority,
} from '../Remote-Operations-Information-Objects/Priority.ta';
export {
  Priority,
  _decode_Priority,
  _encode_Priority,
} from '../Remote-Operations-Information-Objects/Priority.ta';
import {
  Code,
  _decode_Code,
  _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta';
export {
  Code,
  _decode_Code,
  _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta';

/* START_OF_SYMBOL_DEFINITION ERROR */
/**
 * @summary ERROR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ERROR ::= CLASS {
 *   &ParameterType          OPTIONAL,
 *   &parameterTypeOptional  BOOLEAN OPTIONAL,
 *   &ErrorPriority          Priority OPTIONAL,
 *   &errorCode              Code UNIQUE OPTIONAL
 * }
 * WITH SYNTAX {
 *   [PARAMETER &ParameterType
 *    [OPTIONAL &parameterTypeOptional]]
 *   [PRIORITY &ErrorPriority]
 *   [CODE &errorCode]
 * }
 * ```
 *
 * @interface
 */
export interface ERROR<
  ParameterType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'ERROR';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof ERROR<ParameterType>]: $.ASN1Decoder<
        ERROR<ParameterType>[_K]
      >;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof ERROR<ParameterType>]: $.ASN1Encoder<
        ERROR<ParameterType>[_K]
      >;
    }
  >;
  /**
   * @summary &ParameterType
   */
  readonly '&ParameterType': ParameterType;
  /**
   * @summary &parameterTypeOptional
   */
  readonly '&parameterTypeOptional'?: BOOLEAN;
  /**
   * @summary &ErrorPriority
   */
  readonly '&ErrorPriority'?: Priority;
  /**
   * @summary &errorCode
   */
  readonly '&errorCode'?: Code;
}
/* END_OF_SYMBOL_DEFINITION ERROR */

/* eslint-enable */
