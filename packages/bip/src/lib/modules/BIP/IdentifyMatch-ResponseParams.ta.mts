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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  BioAPI_CANDIDATE,
  _decode_BioAPI_CANDIDATE,
  _encode_BioAPI_CANDIDATE,
} from '../BIP/BioAPI-CANDIDATE.ta.mjs';

/**
 * @summary IdentifyMatch_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdentifyMatch-ResponseParams ::= SEQUENCE {
 *   candidates
 *     SEQUENCE (SIZE (0..max-unsigned-int)) OF candidate BioAPI-CANDIDATE
 * }
 * ```
 *
 * @class
 */
export class IdentifyMatch_ResponseParams {
  constructor(
    /**
     * @summary `candidates`.
     * @public
     * @readonly
     */
    readonly candidates: BioAPI_CANDIDATE[]
  ) {}

  /**
   * @summary Restructures an object into a IdentifyMatch_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `IdentifyMatch_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `IdentifyMatch_ResponseParams`.
   * @returns {IdentifyMatch_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof IdentifyMatch_ResponseParams]: IdentifyMatch_ResponseParams[_K];
    }
  ): IdentifyMatch_ResponseParams {
    return new IdentifyMatch_ResponseParams(_o.candidates);
  }
}


/**
 * @summary The Leading Root Component Types of IdentifyMatch_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdentifyMatch_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'candidates',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of IdentifyMatch_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdentifyMatch_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of IdentifyMatch_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdentifyMatch_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_IdentifyMatch_ResponseParams: $.ASN1Decoder<IdentifyMatch_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IdentifyMatch_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdentifyMatch_ResponseParams} The decoded data structure.
 */
export function _decode_IdentifyMatch_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_IdentifyMatch_ResponseParams) {
    _cached_decoder_for_IdentifyMatch_ResponseParams = function (
      el: _Element
    ): IdentifyMatch_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'IdentifyMatch-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'candidates';
      let candidates!: BioAPI_CANDIDATE[];
      candidates = $._decodeSequenceOf<BioAPI_CANDIDATE>(
        () => _decode_BioAPI_CANDIDATE
      )(sequence[0]);
      return new IdentifyMatch_ResponseParams(candidates);
    };
  }
  return _cached_decoder_for_IdentifyMatch_ResponseParams(el);
}


let _cached_encoder_for_IdentifyMatch_ResponseParams: $.ASN1Encoder<IdentifyMatch_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) IdentifyMatch_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdentifyMatch_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_IdentifyMatch_ResponseParams(
  value: IdentifyMatch_ResponseParams,
  elGetter: $.ASN1Encoder<IdentifyMatch_ResponseParams>
) {
  if (!_cached_encoder_for_IdentifyMatch_ResponseParams) {
    _cached_encoder_for_IdentifyMatch_ResponseParams = function (
      value: IdentifyMatch_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_CANDIDATE>(
              () => _encode_BioAPI_CANDIDATE,
              $.BER
            )(value.candidates, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_IdentifyMatch_ResponseParams(value, elGetter);
}


/* eslint-enable */
