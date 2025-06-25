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
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.mjs';

/**
 * @summary Transform_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Transform-ResponseParams ::= SEQUENCE {
 *   outputBIRs  SEQUENCE (SIZE (0..max-unsigned-int)) OF BioAPI-BIR-HANDLE
 * }
 * ```
 *
 * @class
 */
export class Transform_ResponseParams {
  constructor(
    /**
     * @summary `outputBIRs`.
     * @public
     * @readonly
     */
    readonly outputBIRs: BioAPI_BIR_HANDLE[]
  ) {}

  /**
   * @summary Restructures an object into a Transform_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `Transform_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Transform_ResponseParams`.
   * @returns {Transform_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof Transform_ResponseParams]: Transform_ResponseParams[_K] }
  ): Transform_ResponseParams {
    return new Transform_ResponseParams(_o.outputBIRs);
  }
}


/**
 * @summary The Leading Root Component Types of Transform_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Transform_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'outputBIRs',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of Transform_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Transform_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Transform_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Transform_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_Transform_ResponseParams: $.ASN1Decoder<Transform_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Transform_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Transform_ResponseParams} The decoded data structure.
 */
export function _decode_Transform_ResponseParams(el: _Element): Transform_ResponseParams {
  if (!_cached_decoder_for_Transform_ResponseParams) {
    _cached_decoder_for_Transform_ResponseParams = function (
      el: _Element
    ): Transform_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'Transform-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'outputBIRs';
      let outputBIRs!: BioAPI_BIR_HANDLE[];
      outputBIRs = $._decodeSequenceOf<BioAPI_BIR_HANDLE>(
        () => _decode_BioAPI_BIR_HANDLE
      )(sequence[0]);
      return new Transform_ResponseParams(outputBIRs);
    };
  }
  return _cached_decoder_for_Transform_ResponseParams(el);
}


let _cached_encoder_for_Transform_ResponseParams: $.ASN1Encoder<Transform_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) Transform_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Transform_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_Transform_ResponseParams(
  value: Transform_ResponseParams,
  elGetter: $.ASN1Encoder<Transform_ResponseParams>
): _Element {
  if (!_cached_encoder_for_Transform_ResponseParams) {
    _cached_encoder_for_Transform_ResponseParams = function (
      value: Transform_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_BIR_HANDLE>(
              () => _encode_BioAPI_BIR_HANDLE,
              $.BER
            )(value.outputBIRs, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Transform_ResponseParams(value, elGetter);
}


/* eslint-enable */
