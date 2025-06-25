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
 * @summary ControlUnit_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlUnit-ResponseParams ::= SEQUENCE {outputData  BioAPI-DATA
 * }
 * ```
 *
 * @class
 */
export class ControlUnit_ResponseParams {
  constructor(
    /**
     * @summary `outputData`.
     * @public
     * @readonly
     */
    readonly outputData: BioAPI_DATA
  ) {}

  /**
   * @summary Restructures an object into a ControlUnit_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `ControlUnit_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ControlUnit_ResponseParams`.
   * @returns {ControlUnit_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof ControlUnit_ResponseParams]: ControlUnit_ResponseParams[_K];
    }
  ): ControlUnit_ResponseParams {
    return new ControlUnit_ResponseParams(_o.outputData);
  }
}


/**
 * @summary The Leading Root Component Types of ControlUnit_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ControlUnit_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'outputData',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of ControlUnit_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ControlUnit_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ControlUnit_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ControlUnit_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_ControlUnit_ResponseParams: $.ASN1Decoder<ControlUnit_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ControlUnit_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlUnit_ResponseParams} The decoded data structure.
 */
export function _decode_ControlUnit_ResponseParams(el: _Element): ControlUnit_ResponseParams {
  if (!_cached_decoder_for_ControlUnit_ResponseParams) {
    _cached_decoder_for_ControlUnit_ResponseParams = function (
      el: _Element
    ): ControlUnit_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'ControlUnit-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'outputData';
      let outputData!: BioAPI_DATA;
      outputData = _decode_BioAPI_DATA(sequence[0]);
      return new ControlUnit_ResponseParams(outputData);
    };
  }
  return _cached_decoder_for_ControlUnit_ResponseParams(el);
}


let _cached_encoder_for_ControlUnit_ResponseParams: $.ASN1Encoder<ControlUnit_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) ControlUnit_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlUnit_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_ControlUnit_ResponseParams(
  value: ControlUnit_ResponseParams,
  elGetter: $.ASN1Encoder<ControlUnit_ResponseParams>
): _Element {
  if (!_cached_encoder_for_ControlUnit_ResponseParams) {
    _cached_encoder_for_ControlUnit_ResponseParams = function (
      value: ControlUnit_ResponseParams    ): _Element {
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
  return _cached_encoder_for_ControlUnit_ResponseParams(value, elGetter);
}


/* eslint-enable */
