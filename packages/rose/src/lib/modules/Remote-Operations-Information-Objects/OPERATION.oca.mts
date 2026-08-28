/* eslint-disable */
import {
  BOOLEAN,
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
import { type ERROR } from '../Remote-Operations-Information-Objects/ERROR.oca.mjs';
import {
  Priority,
  _decode_Priority,
  _encode_Priority,
} from '../Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
  Code,
  _decode_Code,
  _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta.mjs';

/**
 * @summary OPERATION
 * @description
 *
 * Function one ROS-object (the invoker) can request of another (the performer). Outcome, if reported, is a result or an error; the performer may invoke `&Linked` operations back at the original invoker during performance (ITU-T Rec. X.880 (07/94) §8.2). An operation without `&operationCode` cannot be sent in an `Invoke` PDU — typical for bind/unbind (X.880 §8.2.13). `&idempotent` was added by X.880 (1994) Amd.1 (11/95) §8.2.14.
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
   * @description Data type of the argument. Omit the field if the operation takes no argument (X.880 §8.2.2).
   */
  readonly '&ArgumentType': ArgumentType;
  /**
   * @summary &argumentTypeOptional
   * @description If `TRUE`, the argument may be omitted from `Invoke`. Present only when `&ArgumentType` is present; absent/`FALSE` means the argument is required (X.880 §8.2.3).
   */
  readonly '&argumentTypeOptional'?: BOOLEAN;
  /**
   * @summary &returnResult
   * @description Whether a result is returned on successful performance (`TRUE` default). If `FALSE`, `&synchronous` must be `FALSE` and `&ResultPriority` omitted (X.880 §8.2.4, §8.2.10, §8.2.12).
   */
  readonly '&returnResult'?: BOOLEAN;
  /**
   * @summary &ResultType
   * @description Data type of a successful result. Omit if no result value is returned. Shall be omitted when `&returnResult` is `FALSE` (X.880 §8.2.5).
   */
  readonly '&ResultType': ResultType;
  /**
   * @summary &resultTypeOptional
   * @description If `TRUE`, the result value may be omitted from `ReturnResult`. Present only when `&ResultType` is present (X.880 §8.2.6).
   */
  readonly '&resultTypeOptional'?: BOOLEAN;
  /**
   * @summary &Errors
   * @description Errors that may report unsuccessful performance. Omitted means unsuccessful performance is impossible or unreported (X.880 §8.2.7).
   */
  readonly '&Errors'?: ERROR[];
  /**
   * @summary &Linked
   * @description Operations the performer may invoke of the original invoker while this operation is outstanding. Omitted means none may be linked (X.880 §8.2.9).
   */
  readonly '&Linked'?: OPERATION[];
  /**
   * @summary &synchronous
   * @description If `TRUE`, the invoker must not invoke another synchronous operation toward the same performer until this one returns. Requires `&returnResult` not `FALSE` (X.880 §8.2.10). Together with `&alwaysReturns`, this replaces the old X.219 operation classes.
   */
  readonly '&synchronous'?: BOOLEAN;
  /**
   * @summary &idempotent
   * @description If `TRUE`, repeated invocation does not change performer state (X.880 (1994) Amd.1 (11/95) §3.3.8, §8.2.14). Default `FALSE`.
   */
  readonly '&idempotent'?: BOOLEAN;
  /**
   * @summary &alwaysReturns
   * @description If `TRUE` (default), the outcome is always returned; at least one of `&returnResult` or `&Errors` must then be present (X.880 §8.2.8).
   */
  readonly '&alwaysReturns'?: BOOLEAN;
  /**
   * @summary &InvokePriority
   * @description Permitted `Priority` values for transferring an invocation of this operation (X.880 §8.2.11, §8.9).
   */
  readonly '&InvokePriority'?: Priority;
  /**
   * @summary &ResultPriority
   * @description Permitted `Priority` values for transferring the result. Omit when `&returnResult` is `FALSE` (X.880 §8.2.12).
   */
  readonly '&ResultPriority'?: Priority;
  /**
   * @summary &operationCode
   * @description `Code` identifying this operation in `Invoke`/`ReturnResult`. Unique among operations of a package. Needed for `Invoke`; bind operations typically omit it (X.880 §8.2.13).
   */
  readonly '&operationCode'?: Code;
}

/* eslint-enable */
