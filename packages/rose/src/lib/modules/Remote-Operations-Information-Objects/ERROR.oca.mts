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
 * @summary ERROR
 * @description
 *
 * Report of unsuccessful performance of an operation (ITU-T Rec. X.880 (07/94) §8.3). An error without `&errorCode` cannot be sent in a `ReturnError` PDU — typical for bind errors (X.880 §8.3.5).
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
   * @description Data type of the error parameter. Omit if the error carries no parameter (X.880 §8.3.2).
   */
  readonly '&ParameterType': ParameterType;
  /**
   * @summary &parameterTypeOptional
   * @description If `TRUE`, the parameter may be omitted from `ReturnError`. Present only when `&ParameterType` is present (X.880 §8.3.3).
   */
  readonly '&parameterTypeOptional'?: BOOLEAN;
  /**
   * @summary &ErrorPriority
   * @description Permitted `Priority` values for transferring this error (X.880 §8.3.4, §8.9).
   */
  readonly '&ErrorPriority'?: Priority;
  /**
   * @summary &errorCode
   * @description `Code` identifying this error in `ReturnError`. Unique among errors of a package. Needed except in special cases such as bind errors (X.880 §8.3.5).
   */
  readonly '&errorCode'?: Code;
}

/* eslint-enable */
