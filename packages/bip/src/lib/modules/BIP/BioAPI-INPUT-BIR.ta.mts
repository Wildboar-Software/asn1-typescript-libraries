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
  BioAPI_INPUT_BIR_inputBIR,
  _decode_BioAPI_INPUT_BIR_inputBIR,
  _encode_BioAPI_INPUT_BIR_inputBIR,
} from '../BIP/BioAPI-INPUT-BIR-inputBIR.ta.mjs';

/**
 * @summary BioAPI_INPUT_BIR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-INPUT-BIR ::= SEQUENCE {
 *   inputBIR
 *     CHOICE {birInDB   BioAPI-DBBIR-ID,
 *             birInBSP  BioAPI-BIR-HANDLE,
 *             bir       BioAPI-BIR}
 * }
 * ```
 *
 * @class
 */
export class BioAPI_INPUT_BIR {
  constructor(
    /**
     * @summary `inputBIR`.
     * @public
     * @readonly
     */
    readonly inputBIR: BioAPI_INPUT_BIR_inputBIR
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_INPUT_BIR
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_INPUT_BIR`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_INPUT_BIR`.
   * @returns {BioAPI_INPUT_BIR}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_INPUT_BIR]: BioAPI_INPUT_BIR[_K] }
  ): BioAPI_INPUT_BIR {
    return new BioAPI_INPUT_BIR(_o.inputBIR);
  }
}


/**
 * @summary The Leading Root Component Types of BioAPI_INPUT_BIR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_INPUT_BIR: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'inputBIR',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_INPUT_BIR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_INPUT_BIR: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_INPUT_BIR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_INPUT_BIR: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_INPUT_BIR: $.ASN1Decoder<BioAPI_INPUT_BIR> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_INPUT_BIR
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_INPUT_BIR} The decoded data structure.
 */
export function _decode_BioAPI_INPUT_BIR(el: _Element): BioAPI_INPUT_BIR {
  if (!_cached_decoder_for_BioAPI_INPUT_BIR) {
    _cached_decoder_for_BioAPI_INPUT_BIR = function (
      el: _Element
    ): BioAPI_INPUT_BIR {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'BioAPI-INPUT-BIR contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'inputBIR';
      let inputBIR!: BioAPI_INPUT_BIR_inputBIR;
      inputBIR = _decode_BioAPI_INPUT_BIR_inputBIR(sequence[0]);
      return new BioAPI_INPUT_BIR(inputBIR);
    };
  }
  return _cached_decoder_for_BioAPI_INPUT_BIR(el);
}


let _cached_encoder_for_BioAPI_INPUT_BIR: $.ASN1Encoder<BioAPI_INPUT_BIR> | null = null;


/**
 * @summary Encodes a(n) BioAPI_INPUT_BIR into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_INPUT_BIR, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_INPUT_BIR(
  value: BioAPI_INPUT_BIR,
  elGetter: $.ASN1Encoder<BioAPI_INPUT_BIR>
): _Element {
  if (!_cached_encoder_for_BioAPI_INPUT_BIR) {
    _cached_encoder_for_BioAPI_INPUT_BIR = function (
      value: BioAPI_INPUT_BIR    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_INPUT_BIR_inputBIR(
              value.inputBIR,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_INPUT_BIR(value, elGetter);
}


/* eslint-enable */
