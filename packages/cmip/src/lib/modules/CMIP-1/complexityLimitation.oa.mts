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
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
  ComplexityLimitation,
  _decode_ComplexityLimitation,
  _encode_ComplexityLimitation,
} from '../CMIP-1/ComplexityLimitation.ta.mjs';
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs';

/**
 * @summary complexityLimitation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * complexityLimitation ERROR ::= {
 *   PARAMETER  ComplexityLimitation
 *   OPTIONAL   TRUE
 *   PRIORITY   {1}
 *   CODE       local:20
 * }
 * ```
 *
 * @constant
 * @type {ERROR<ComplexityLimitation>}
 * @implements {ERROR<ComplexityLimitation>}
 */
export const complexityLimitation: ERROR<ComplexityLimitation> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_ComplexityLimitation,
  },
  encoderFor: {
    '&ParameterType': _encode_ComplexityLimitation,
  },
  '&parameterTypeOptional': false /* OBJECT_FIELD_SETTING */,
  '&errorCode': {
    local: 20,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
