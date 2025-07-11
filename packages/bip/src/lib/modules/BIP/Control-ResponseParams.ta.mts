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
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.mjs';

/**
 * @summary Control_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Control-ResponseParams ::= SEQUENCE {outputData  BioAPI-DATA
 * }
 * ```
 *
 */
export class Control_ResponseParams {
  constructor(
    /**
     * @summary `outputData`.
     * @public
     * @readonly
     */
    readonly outputData: BioAPI_DATA
  ) {}

  /**
   * @summary Restructures an object into a Control_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `Control_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Control_ResponseParams`.
   * @returns {Control_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof Control_ResponseParams]: Control_ResponseParams[_K] }
  ): Control_ResponseParams {
    return new Control_ResponseParams(_o.outputData);
  }
}


/**
 * @summary The Leading Root Component Types of Control_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Control_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'outputData',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of Control_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Control_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Control_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Control_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_Control_ResponseParams: $.ASN1Decoder<Control_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Control_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Control_ResponseParams} The decoded data structure.
 */
export function _decode_Control_ResponseParams(el: _Element): Control_ResponseParams {
  if (!_cached_decoder_for_Control_ResponseParams) {
    _cached_decoder_for_Control_ResponseParams = function (
      el: _Element
    ): Control_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'Control-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'outputData';
      let outputData!: BioAPI_DATA;
      outputData = _decode_BioAPI_DATA(sequence[0]);
      return new Control_ResponseParams(outputData);
    };
  }
  return _cached_decoder_for_Control_ResponseParams(el);
}


let _cached_encoder_for_Control_ResponseParams: $.ASN1Encoder<Control_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) Control_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Control_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_Control_ResponseParams(
  value: Control_ResponseParams,
  elGetter: $.ASN1Encoder<Control_ResponseParams>
): _Element {
  if (!_cached_encoder_for_Control_ResponseParams) {
    _cached_encoder_for_Control_ResponseParams = function (
      value: Control_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_DATA(value.outputData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Control_ResponseParams(value, elGetter);
}


/* eslint-enable */
