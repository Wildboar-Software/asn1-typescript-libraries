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
  _decode_Identifier,
  _encode_Identifier,
} from '../Notation/Identifier.ta.mjs';
import { type SE_ERROR } from '../Notation/SE-ERROR.oca.mjs';
import {
    SecurityProblem,
    _decode_SecurityProblem,
    _encode_SecurityProblem,
} from "@wildboar/x500/DirectoryAbstractService";


/**
 * @summary authenticationFailure
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authenticationFailure SE-ERROR ::= {
 *   PARAMETER   DirectoryAbstractService.SecurityProblem
 *   ERROR-CODE  local:1
 * }
 * ```
 *
 * @constant
 * @type {SE_ERROR<DirectoryAbstractService.SecurityProblem>}
 * @implements {SE_ERROR<DirectoryAbstractService.SecurityProblem>}
 */
export const authenticationFailure: SE_ERROR<SecurityProblem> = {
  class: 'SE-ERROR',
  decoderFor: {
    '&ParameterType': _decode_SecurityProblem,
  },
  encoderFor: {
    '&ParameterType': _encode_SecurityProblem,
  },
  '&errorCode': {
    local: 1,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
