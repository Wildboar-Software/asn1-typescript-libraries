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
import * as $ from '@wildboar/asn1/functional';
import {
  GetResult,
  _decode_GetResult,
  _encode_GetResult,
} from '../CMIP-1/GetResult.ta.mjs';
import {
  GetListError,
  _decode_GetListError,
  _encode_GetListError,
} from '../CMIP-1/GetListError.ta.mjs';
import {
  SetResult,
  _decode_SetResult,
  _encode_SetResult,
} from '../CMIP-1/SetResult.ta.mjs';
import {
  SetListError,
  _decode_SetListError,
  _encode_SetListError,
} from '../CMIP-1/SetListError.ta.mjs';
import {
  ActionResult,
  _decode_ActionResult,
  _encode_ActionResult,
} from '../CMIP-1/ActionResult.ta.mjs';
import {
  ProcessingFailure,
  _decode_ProcessingFailure,
  _encode_ProcessingFailure,
} from '../CMIP-1/ProcessingFailure.ta.mjs';
import {
  DeleteResult,
  _decode_DeleteResult,
  _encode_DeleteResult,
} from '../CMIP-1/DeleteResult.ta.mjs';
import {
  ActionError,
  _decode_ActionError,
  _encode_ActionError,
} from '../CMIP-1/ActionError.ta.mjs';
import {
  DeleteError,
  _decode_DeleteError,
  _encode_DeleteError,
} from '../CMIP-1/DeleteError.ta.mjs';

/**
 * @summary LinkedReplyArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkedReplyArgument  ::=  CHOICE {
 *   getResult          [0] IMPLICIT GetResult,
 *   getListError       [1] IMPLICIT GetListError,
 *   setResult          [2] IMPLICIT SetResult,
 *   setListError       [3] IMPLICIT SetListError,
 *   actionResult       [4] IMPLICIT ActionResult,
 *   processingFailure  [5] IMPLICIT ProcessingFailure,
 *   deleteResult       [6] IMPLICIT DeleteResult,
 *   actionError        [7] IMPLICIT ActionError,
 *   deleteError        [8] IMPLICIT DeleteError
 * }
 * ```
 */
export type LinkedReplyArgument =
  | { getResult: GetResult } /* CHOICE_ALT_ROOT */
  | { getListError: GetListError } /* CHOICE_ALT_ROOT */
  | { setResult: SetResult } /* CHOICE_ALT_ROOT */
  | { setListError: SetListError } /* CHOICE_ALT_ROOT */
  | { actionResult: ActionResult } /* CHOICE_ALT_ROOT */
  | { processingFailure: ProcessingFailure } /* CHOICE_ALT_ROOT */
  | { deleteResult: DeleteResult } /* CHOICE_ALT_ROOT */
  | { actionError: ActionError } /* CHOICE_ALT_ROOT */
  | { deleteError: DeleteError } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_LinkedReplyArgument: $.ASN1Decoder<LinkedReplyArgument> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) LinkedReplyArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LinkedReplyArgument} The decoded data structure.
 */
export function _decode_LinkedReplyArgument(el: _Element): LinkedReplyArgument {
  if (!_cached_decoder_for_LinkedReplyArgument) {
    _cached_decoder_for_LinkedReplyArgument = $._decode_inextensible_choice<LinkedReplyArgument>(
      {
        'CONTEXT 0': [
          'getResult',
          $._decode_implicit<GetResult>(() => _decode_GetResult),
        ],
        'CONTEXT 1': [
          'getListError',
          $._decode_implicit<GetListError>(() => _decode_GetListError),
        ],
        'CONTEXT 2': [
          'setResult',
          $._decode_implicit<SetResult>(() => _decode_SetResult),
        ],
        'CONTEXT 3': [
          'setListError',
          $._decode_implicit<SetListError>(() => _decode_SetListError),
        ],
        'CONTEXT 4': [
          'actionResult',
          $._decode_implicit<ActionResult>(() => _decode_ActionResult),
        ],
        'CONTEXT 5': [
          'processingFailure',
          $._decode_implicit<ProcessingFailure>(
            () => _decode_ProcessingFailure
          ),
        ],
        'CONTEXT 6': [
          'deleteResult',
          $._decode_implicit<DeleteResult>(() => _decode_DeleteResult),
        ],
        'CONTEXT 7': [
          'actionError',
          $._decode_implicit<ActionError>(() => _decode_ActionError),
        ],
        'CONTEXT 8': [
          'deleteError',
          $._decode_implicit<DeleteError>(() => _decode_DeleteError),
        ],
      }
    );
  }
  return _cached_decoder_for_LinkedReplyArgument(el);
}


let _cached_encoder_for_LinkedReplyArgument: $.ASN1Encoder<LinkedReplyArgument> | null = null;


/**
 * @summary Encodes a(n) LinkedReplyArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LinkedReplyArgument, encoded as an ASN.1 Element.
 */
export function _encode_LinkedReplyArgument(
  value: LinkedReplyArgument,
  elGetter: $.ASN1Encoder<LinkedReplyArgument>
): _Element {
  if (!_cached_encoder_for_LinkedReplyArgument) {
    _cached_encoder_for_LinkedReplyArgument = $._encode_choice<LinkedReplyArgument>(
      {
        getResult: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_GetResult,
          $.BER
        ),
        getListError: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_GetListError,
          $.BER
        ),
        setResult: $._encode_implicit(
          _TagClass.context,
          2,
          () => _encode_SetResult,
          $.BER
        ),
        setListError: $._encode_implicit(
          _TagClass.context,
          3,
          () => _encode_SetListError,
          $.BER
        ),
        actionResult: $._encode_implicit(
          _TagClass.context,
          4,
          () => _encode_ActionResult,
          $.BER
        ),
        processingFailure: $._encode_implicit(
          _TagClass.context,
          5,
          () => _encode_ProcessingFailure,
          $.BER
        ),
        deleteResult: $._encode_implicit(
          _TagClass.context,
          6,
          () => _encode_DeleteResult,
          $.BER
        ),
        actionError: $._encode_implicit(
          _TagClass.context,
          7,
          () => _encode_ActionError,
          $.BER
        ),
        deleteError: $._encode_implicit(
          _TagClass.context,
          8,
          () => _encode_DeleteError,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_LinkedReplyArgument(value, elGetter);
}


/* eslint-enable */
