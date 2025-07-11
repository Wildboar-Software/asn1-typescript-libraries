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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  Date_Time,
  _decode_Date_Time,
  _encode_Date_Time,
} from '../CBEFF-DATA-ELEMENTS/Date-Time.ta.mjs';
/**
 * @summary BIRValidityPeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIRValidityPeriod ::= SEQUENCE {
 *   not-valid-before  Date-Time OPTIONAL,
 *   not-valid-after   Date-Time OPTIONAL
 * }
 * ```
 *
 */
export class BIRValidityPeriod {
  constructor(
    /**
     * @summary `not_valid_before`.
     * @public
     * @readonly
     */
    readonly not_valid_before: OPTIONAL<Date_Time>,
    /**
     * @summary `not_valid_after`.
     * @public
     * @readonly
     */
    readonly not_valid_after: OPTIONAL<Date_Time>
  ) {}

  /**
   * @summary Restructures an object into a BIRValidityPeriod
   * @description
   *
   * This takes an `object` and converts it to a `BIRValidityPeriod`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BIRValidityPeriod`.
   * @returns {BIRValidityPeriod}
   */
  public static _from_object(
    _o: { [_K in keyof BIRValidityPeriod]: BIRValidityPeriod[_K] }
  ): BIRValidityPeriod {
    return new BIRValidityPeriod(_o.not_valid_before, _o.not_valid_after);
  }
}

/**
 * @summary The Leading Root Component Types of BIRValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BIRValidityPeriod: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'not-valid-before',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'not-valid-after',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];

/**
 * @summary The Trailing Root Component Types of BIRValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BIRValidityPeriod: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BIRValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BIRValidityPeriod: $.ComponentSpec[] = [];

let _cached_decoder_for_BIRValidityPeriod: $.ASN1Decoder<BIRValidityPeriod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BIRValidityPeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIRValidityPeriod} The decoded data structure.
 */
export function _decode_BIRValidityPeriod(el: _Element): BIRValidityPeriod {
  if (!_cached_decoder_for_BIRValidityPeriod) {
    _cached_decoder_for_BIRValidityPeriod = function (
      el: _Element
    ): BIRValidityPeriod {
      let not_valid_before: OPTIONAL<Date_Time>;
      let not_valid_after: OPTIONAL<Date_Time>;
      const callbacks: $.DecodingMap = {
        'not-valid-before': (_el: _Element): void => {
          not_valid_before = _decode_Date_Time(_el);
        },
        'not-valid-after': (_el: _Element): void => {
          not_valid_after = _decode_Date_Time(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_BIRValidityPeriod,
        _extension_additions_list_spec_for_BIRValidityPeriod,
        _root_component_type_list_2_spec_for_BIRValidityPeriod,
        undefined
      );
      return new BIRValidityPeriod (
        not_valid_before,
        not_valid_after
      );
    };
  }
  return _cached_decoder_for_BIRValidityPeriod(el);
}

let _cached_encoder_for_BIRValidityPeriod: $.ASN1Encoder<BIRValidityPeriod> | null = null;

/**
 * @summary Encodes a(n) BIRValidityPeriod into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIRValidityPeriod, encoded as an ASN.1 Element.
 */
export function _encode_BIRValidityPeriod(
  value: BIRValidityPeriod,
  elGetter: $.ASN1Encoder<BIRValidityPeriod>
): _Element {
  if (!_cached_encoder_for_BIRValidityPeriod) {
    _cached_encoder_for_BIRValidityPeriod = function (
      value: BIRValidityPeriod    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.not_valid_before === undefined
              ? undefined
              : _encode_Date_Time(value.not_valid_before, $.BER),
            /* IF_ABSENT  */ value.not_valid_after === undefined
              ? undefined
              : _encode_Date_Time(value.not_valid_after, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BIRValidityPeriod(value, elGetter);
}


/* eslint-enable */
