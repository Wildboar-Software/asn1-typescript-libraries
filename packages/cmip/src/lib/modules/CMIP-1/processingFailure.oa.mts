/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
  _decode_Priority,
  _encode_Priority,
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose';
import type { ERROR } from '@wildboar/rose';
import {
  ProcessingFailure,
  _decode_ProcessingFailure,
  _encode_ProcessingFailure,
} from '../CMIP-1/ProcessingFailure.ta.mjs';

/**
 * @summary processingFailure
 * @description
 *
 * ROSE error local:10. Parameter `ProcessingFailure` is
 * optional in the ROSE APDU. Also a linked-reply
 * alternative for M-GET, M-SET, M-ACTION, and M-DELETE.
 * ITU-T Rec. X.711 (10/97)
 * [§6.4.3](https://www.itu.int/rec/T-REC-X.711-199710-I),
 * §7.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * processingFailure ERROR ::= {
 *   PARAMETER  ProcessingFailure
 *   OPTIONAL   TRUE
 *   PRIORITY   {1}
 *   CODE       local:10
 * }
 * ```
 *
 * @constant
 * @type {ERROR<ProcessingFailure>}
 * @implements {ERROR<ProcessingFailure>}
 */
export const processingFailure: ERROR<ProcessingFailure> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_ProcessingFailure,
  },
  encoderFor: {
    '&ParameterType': _encode_ProcessingFailure,
  },
  '&parameterTypeOptional': false /* OBJECT_FIELD_SETTING */,
  '&errorCode': {
    local: 10,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
