/* eslint-disable */
import {
  OPTIONAL,
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
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta.mjs';
import {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';
import {
  _decode_RejectProblem,
  _encode_RejectProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/RejectProblem.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ReturnError */
/**
 * @summary ReturnError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnError{ERROR:Errors} ::= SEQUENCE {
 *   invokeId
 *     InvokeId
 *       (CONSTRAINED BY {-- must be that for an outstanding operation -- } !
 *        RejectProblem:returnError-unrecognizedInvocation)
 *       (CONSTRAINED BY {-- which returns an error -- } !
 *        RejectProblem:returnError-errorResponseUnexpected),
 *   errcode
 *     ERROR.&errorCode({Errors} !RejectProblem:returnError-unrecognizedError)
 *       (CONSTRAINED BY {-- must be in the &Errors field of the associated operation --
 *          } !RejectProblem:returnError-unexpectedError),
 *   parameter
 *     ERROR.&ParameterType
 *       ({Errors}{@errcode} !RejectProblem:returnError-mistypedParameter)
 *       OPTIONAL
 * }
 * (CONSTRAINED BY { -- must conform to the above definition --} !
 *  RejectProblem:general-mistypedPDU)
 * ```
 *
 * @class
 */
export class ReturnError {
  constructor(
    /**
     * @summary `invokeId`.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId,
    /**
     * @summary `errcode`.
     * @public
     * @readonly
     */
    readonly errcode: Code,
    /**
     * @summary `parameter`.
     * @public
     * @readonly
     */
    readonly parameter: OPTIONAL<_Element>
  ) {}

  /**
   * @summary Restructures an object into a ReturnError
   * @description
   *
   * This takes an `object` and converts it to a `ReturnError`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ReturnError`.
   * @returns {ReturnError}
   */
  public static _from_object(
    _o: { [_K in keyof ReturnError]: ReturnError[_K] }
  ): ReturnError {
    return new ReturnError(_o.invokeId, _o.errcode, _o.parameter);
  }
}
/* END_OF_SYMBOL_DEFINITION ReturnError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReturnError */
/**
 * @summary The Leading Root Component Types of ReturnError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReturnError: $.ComponentSpec[] = [
  new $.ComponentSpec('invokeId', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec('errcode', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec('parameter', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReturnError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReturnError */
/**
 * @summary The Trailing Root Component Types of ReturnError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReturnError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReturnError */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReturnError */
/**
 * @summary The Extension Addition Component Types of ReturnError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReturnError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReturnError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReturnError */
let _cached_decoder_for_ReturnError: $.ASN1Decoder<ReturnError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReturnError */

/* START_OF_SYMBOL_DEFINITION _decode_ReturnError */
/**
 * @summary Decodes an ASN.1 element into a(n) ReturnError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReturnError} The decoded data structure.
 */
export function _decode_ReturnError(el: _Element) {
  if (!_cached_decoder_for_ReturnError) {
    _cached_decoder_for_ReturnError = function (el: _Element): ReturnError {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let invokeId!: InvokeId;
      let errcode!: Code;
      let parameter: OPTIONAL<_Element>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        invokeId: (_el: _Element): void => {
          invokeId = _decode_InvokeId(_el);
        },
        errcode: (_el: _Element): void => {
          errcode = _decode_Code(_el);
        },
        parameter: (_el: _Element): void => {
          parameter = $._decodeAny(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ReturnError,
        _extension_additions_list_spec_for_ReturnError,
        _root_component_type_list_2_spec_for_ReturnError,
        undefined
      );
      return new ReturnError /* SEQUENCE_CONSTRUCTOR_CALL */(
        invokeId,
        errcode,
        parameter
      );
    };
  }
  return _cached_decoder_for_ReturnError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReturnError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReturnError */
let _cached_encoder_for_ReturnError: $.ASN1Encoder<ReturnError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReturnError */

/* START_OF_SYMBOL_DEFINITION _encode_ReturnError */
/**
 * @summary Encodes a(n) ReturnError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnError, encoded as an ASN.1 Element.
 */
export function _encode_ReturnError(
  value: ReturnError,
  elGetter: $.ASN1Encoder<ReturnError>
) {
  if (!_cached_encoder_for_ReturnError) {
    _cached_encoder_for_ReturnError = function (
      value: ReturnError    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
            /* REQUIRED   */ _encode_Code(value.errcode, $.BER),
            /* IF_ABSENT  */ value.parameter === undefined
              ? undefined
              : $._encodeAny(value.parameter, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ReturnError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReturnError */

/* eslint-enable */
