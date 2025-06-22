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
  BioAPI_DATE,
  _decode_BioAPI_DATE,
  _encode_BioAPI_DATE,
} from '../BIP/BioAPI-DATE.ta.mjs';
import {
  BioAPI_TIME,
  _decode_BioAPI_TIME,
  _encode_BioAPI_TIME,
} from '../BIP/BioAPI-TIME.ta.mjs';

/**
 * @summary BioAPI_DTG
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-DTG ::= SEQUENCE {date  BioAPI-DATE,
 *                          time  BioAPI-TIME
 * }
 * ```
 *
 * @class
 */
export class BioAPI_DTG {
  constructor(
    /**
     * @summary `date`.
     * @public
     * @readonly
     */
    readonly date: BioAPI_DATE,
    /**
     * @summary `time`.
     * @public
     * @readonly
     */
    readonly time: BioAPI_TIME
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_DTG
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_DTG`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_DTG`.
   * @returns {BioAPI_DTG}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_DTG]: BioAPI_DTG[_K] }
  ): BioAPI_DTG {
    return new BioAPI_DTG(_o.date, _o.time);
  }
}


/**
 * @summary The Leading Root Component Types of BioAPI_DTG
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_DTG: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'date',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'time',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_DTG
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_DTG: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_DTG
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_DTG: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_DTG: $.ASN1Decoder<BioAPI_DTG> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_DTG
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_DTG} The decoded data structure.
 */
export function _decode_BioAPI_DTG(el: _Element) {
  if (!_cached_decoder_for_BioAPI_DTG) {
    _cached_decoder_for_BioAPI_DTG = function (el: _Element): BioAPI_DTG {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BioAPI-DTG contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'date';
      sequence[1].name = 'time';
      let date!: BioAPI_DATE;
      let time!: BioAPI_TIME;
      date = _decode_BioAPI_DATE(sequence[0]);
      time = _decode_BioAPI_TIME(sequence[1]);
      return new BioAPI_DTG(date, time);
    };
  }
  return _cached_decoder_for_BioAPI_DTG(el);
}


let _cached_encoder_for_BioAPI_DTG: $.ASN1Encoder<BioAPI_DTG> | null = null;


/**
 * @summary Encodes a(n) BioAPI_DTG into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_DTG, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_DTG(
  value: BioAPI_DTG,
  elGetter: $.ASN1Encoder<BioAPI_DTG>
) {
  if (!_cached_encoder_for_BioAPI_DTG) {
    _cached_encoder_for_BioAPI_DTG = function (
      value: BioAPI_DTG    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_DATE(value.date, $.BER),
            /* REQUIRED   */ _encode_BioAPI_TIME(value.time, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_DTG(value, elGetter);
}


/* eslint-enable */
