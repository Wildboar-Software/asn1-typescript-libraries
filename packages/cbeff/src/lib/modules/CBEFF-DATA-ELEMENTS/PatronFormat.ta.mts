/* eslint-disable */
import {
  OPTIONAL,
  INTEGER,
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

/**
 * @summary PatronFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PatronFormat ::= SEQUENCE {
 *   patron-format-owner  INTEGER(1..65535) OPTIONAL,
 *   patron-format-type   INTEGER(1..65535) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class PatronFormat {
  constructor(
    /**
     * @summary `patron_format_owner`.
     * @public
     * @readonly
     */
    readonly patron_format_owner: OPTIONAL<INTEGER>,
    /**
     * @summary `patron_format_type`.
     * @public
     * @readonly
     */
    readonly patron_format_type: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a PatronFormat
   * @description
   *
   * This takes an `object` and converts it to a `PatronFormat`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PatronFormat`.
   * @returns {PatronFormat}
   */
  public static _from_object(
    _o: { [_K in keyof PatronFormat]: PatronFormat[_K] }
  ): PatronFormat {
    return new PatronFormat(_o.patron_format_owner, _o.patron_format_type);
  }
}

/**
 * @summary The Leading Root Component Types of PatronFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PatronFormat: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'patron-format-owner',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'patron-format-type',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];

/**
 * @summary The Trailing Root Component Types of PatronFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PatronFormat: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PatronFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PatronFormat: $.ComponentSpec[] = [];

let _cached_decoder_for_PatronFormat: $.ASN1Decoder<PatronFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PatronFormat
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PatronFormat} The decoded data structure.
 */
export function _decode_PatronFormat(el: _Element) {
  if (!_cached_decoder_for_PatronFormat) {
    _cached_decoder_for_PatronFormat = function (el: _Element): PatronFormat {
      let patron_format_owner: OPTIONAL<INTEGER>;
      let patron_format_type: OPTIONAL<INTEGER>;
      const callbacks: $.DecodingMap = {
        'patron-format-owner': (_el: _Element): void => {
          patron_format_owner = $._decodeInteger(_el);
        },
        'patron-format-type': (_el: _Element): void => {
          patron_format_type = $._decodeInteger(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PatronFormat,
        _extension_additions_list_spec_for_PatronFormat,
        _root_component_type_list_2_spec_for_PatronFormat,
        undefined
      );
      return new PatronFormat (
        patron_format_owner,
        patron_format_type
      );
    };
  }
  return _cached_decoder_for_PatronFormat(el);
}

let _cached_encoder_for_PatronFormat: $.ASN1Encoder<PatronFormat> | null = null;

/**
 * @summary Encodes a(n) PatronFormat into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PatronFormat, encoded as an ASN.1 Element.
 */
export function _encode_PatronFormat(
  value: PatronFormat,
  elGetter: $.ASN1Encoder<PatronFormat>
) {
  if (!_cached_encoder_for_PatronFormat) {
    _cached_encoder_for_PatronFormat = function (
      value: PatronFormat    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.patron_format_owner === undefined
              ? undefined
              : $._encodeInteger(value.patron_format_owner, $.BER),
            /* IF_ABSENT  */ value.patron_format_type === undefined
              ? undefined
              : $._encodeInteger(value.patron_format_type, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_PatronFormat(value, elGetter);
}


/* eslint-enable */
