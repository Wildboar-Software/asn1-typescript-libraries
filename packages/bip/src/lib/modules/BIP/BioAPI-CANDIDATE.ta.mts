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
  BioAPI_CANDIDATE_bir,
  _decode_BioAPI_CANDIDATE_bir,
  _encode_BioAPI_CANDIDATE_bir,
} from '../BIP/BioAPI-CANDIDATE-bir.ta.mjs';
import {
  BioAPI_FMR,
  _decode_BioAPI_FMR,
  _encode_BioAPI_FMR,
} from '../BIP/BioAPI-FMR.ta.mjs';

/**
 * @summary BioAPI_CANDIDATE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-CANDIDATE ::= SEQUENCE {
 *   bir
 *     CHOICE {birInDatabase     BioAPI-UUID,
 *             birInArray        UnsignedInt,
 *             birInPresetArray  UnsignedInt},
 *   fmrAchieved  BioAPI-FMR
 * }
 * ```
 *
 * @class
 */
export class BioAPI_CANDIDATE {
  constructor(
    /**
     * @summary `bir`.
     * @public
     * @readonly
     */
    readonly bir: BioAPI_CANDIDATE_bir,
    /**
     * @summary `fmrAchieved`.
     * @public
     * @readonly
     */
    readonly fmrAchieved: BioAPI_FMR
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_CANDIDATE
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_CANDIDATE`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_CANDIDATE`.
   * @returns {BioAPI_CANDIDATE}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_CANDIDATE]: BioAPI_CANDIDATE[_K] }
  ): BioAPI_CANDIDATE {
    return new BioAPI_CANDIDATE(_o.bir, _o.fmrAchieved);
  }
}


/**
 * @summary The Leading Root Component Types of BioAPI_CANDIDATE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_CANDIDATE: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bir',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'fmrAchieved',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_CANDIDATE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_CANDIDATE: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_CANDIDATE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_CANDIDATE: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_CANDIDATE: $.ASN1Decoder<BioAPI_CANDIDATE> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_CANDIDATE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_CANDIDATE} The decoded data structure.
 */
export function _decode_BioAPI_CANDIDATE(el: _Element): BioAPI_CANDIDATE {
  if (!_cached_decoder_for_BioAPI_CANDIDATE) {
    _cached_decoder_for_BioAPI_CANDIDATE = function (
      el: _Element
    ): BioAPI_CANDIDATE {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BioAPI-CANDIDATE contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bir';
      sequence[1].name = 'fmrAchieved';
      let bir!: BioAPI_CANDIDATE_bir;
      let fmrAchieved!: BioAPI_FMR;
      bir = _decode_BioAPI_CANDIDATE_bir(sequence[0]);
      fmrAchieved = _decode_BioAPI_FMR(sequence[1]);
      return new BioAPI_CANDIDATE(bir, fmrAchieved);
    };
  }
  return _cached_decoder_for_BioAPI_CANDIDATE(el);
}


let _cached_encoder_for_BioAPI_CANDIDATE: $.ASN1Encoder<BioAPI_CANDIDATE> | null = null;


/**
 * @summary Encodes a(n) BioAPI_CANDIDATE into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_CANDIDATE, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_CANDIDATE(
  value: BioAPI_CANDIDATE,
  elGetter: $.ASN1Encoder<BioAPI_CANDIDATE>
): _Element {
  if (!_cached_encoder_for_BioAPI_CANDIDATE) {
    _cached_encoder_for_BioAPI_CANDIDATE = function (
      value: BioAPI_CANDIDATE    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_CANDIDATE_bir(value.bir, $.BER),
            /* REQUIRED   */ _encode_BioAPI_FMR(value.fmrAchieved, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_CANDIDATE(value, elGetter);
}


/* eslint-enable */
