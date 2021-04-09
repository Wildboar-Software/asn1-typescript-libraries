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
import { ERROR } from '../Remote-Operations-Information-Objects/ERROR.oca';
export { ERROR } from '../Remote-Operations-Information-Objects/ERROR.oca';
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

/* START_OF_SYMBOL_DEFINITION OPERATION */
/**
 * @summary OPERATION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPERATION ::= CLASS {
 *   &ArgumentType          OPTIONAL,
 *   &argumentTypeOptional  BOOLEAN OPTIONAL,
 *   &returnResult          BOOLEAN DEFAULT TRUE,
 *   &ResultType            OPTIONAL,
 *   &resultTypeOptional    BOOLEAN OPTIONAL,
 *   &Errors                ERROR OPTIONAL,
 *   &Linked                OPERATION OPTIONAL,
 *   &synchronous           BOOLEAN DEFAULT FALSE,
 *   &idempotent            BOOLEAN DEFAULT FALSE,
 *   &alwaysReturns         BOOLEAN DEFAULT TRUE,
 *   &InvokePriority        Priority OPTIONAL,
 *   &ResultPriority        Priority OPTIONAL,
 *   &operationCode         Code UNIQUE OPTIONAL
 * }
 * WITH SYNTAX {
 *   [ARGUMENT &ArgumentType
 *    [OPTIONAL &argumentTypeOptional]]
 *   [RESULT &ResultType
 *    [OPTIONAL &resultTypeOptional]]
 *   [RETURN RESULT &returnResult]
 *   [ERRORS &Errors]
 *   [LINKED &Linked]
 *   [SYNCHRONOUS &synchronous]
 *   [IDEMPOTENT &idempotent]
 *   [ALWAYS RESPONDS &alwaysReturns]
 *   [INVOKE PRIORITY &InvokePriority]
 *   [RESULT-PRIORITY &ResultPriority]
 *   [CODE &operationCode]
 * }
 * ```
 *
 * @interface
 */
export interface OPERATION<
  ArgumentType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
  ResultType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
  /**
   * @summary A fixed string that can be used for external programs to determine the object class of this object.
   */
  readonly class: 'OPERATION';
  /**
   * @summary A map of type fields to their corresponding decoders.
   */
  readonly decoderFor: Partial<
    {
      // For decoding types supplied in type fields
      [_K in keyof OPERATION<ArgumentType, ResultType>]: $.ASN1Decoder<
        OPERATION<ArgumentType, ResultType>[_K]
      >;
    }
  >;
  /**
   * @summary A map of type fields to their corresponding encoders.
   */
  readonly encoderFor: Partial<
    {
      // For encoding types supplied in type fields
      [_K in keyof OPERATION<ArgumentType, ResultType>]: $.ASN1Encoder<
        OPERATION<ArgumentType, ResultType>[_K]
      >;
    }
  >;
  /**
   * @summary &ArgumentType
   */
  readonly '&ArgumentType': ArgumentType;
  /**
   * @summary &argumentTypeOptional
   */
  readonly '&argumentTypeOptional'?: BOOLEAN;
  /**
   * @summary &returnResult
   */
  readonly '&returnResult'?: BOOLEAN;
  /**
   * @summary &ResultType
   */
  readonly '&ResultType': ResultType;
  /**
   * @summary &resultTypeOptional
   */
  readonly '&resultTypeOptional'?: BOOLEAN;
  /**
   * @summary &Errors
   */
  readonly '&Errors'?: ERROR[];
  /**
   * @summary &Linked
   */
  readonly '&Linked'?: OPERATION[];
  /**
   * @summary &synchronous
   */
  readonly '&synchronous'?: BOOLEAN;
  /**
   * @summary &idempotent
   */
  readonly '&idempotent'?: BOOLEAN;
  /**
   * @summary &alwaysReturns
   */
  readonly '&alwaysReturns'?: BOOLEAN;
  /**
   * @summary &InvokePriority
   */
  readonly '&InvokePriority'?: Priority;
  /**
   * @summary &ResultPriority
   */
  readonly '&ResultPriority'?: Priority;
  /**
   * @summary &operationCode
   */
  readonly '&operationCode'?: Code;
}
/* END_OF_SYMBOL_DEFINITION OPERATION */

/* eslint-enable */
