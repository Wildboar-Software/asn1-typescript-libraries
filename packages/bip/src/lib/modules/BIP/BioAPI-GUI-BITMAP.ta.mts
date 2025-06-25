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
  BioAPI_BIR_SUBTYPE_MASK,
  _decode_BioAPI_BIR_SUBTYPE_MASK,
  _encode_BioAPI_BIR_SUBTYPE_MASK,
} from '../BIP/BioAPI-BIR-SUBTYPE-MASK.ta.mjs';
import {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.mjs';
import {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.mjs';

/**
 * @summary BioAPI_GUI_BITMAP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-GUI-BITMAP ::= SEQUENCE {
 *   subtypeMask  BioAPI-BIR-SUBTYPE-MASK,
 *   width        UnsignedInt,
 *   height       UnsignedInt,
 *   bitmap       BioAPI-DATA OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class BioAPI_GUI_BITMAP {
  constructor(
    /**
     * @summary `subtypeMask`.
     * @public
     * @readonly
     */
    readonly subtypeMask: BioAPI_BIR_SUBTYPE_MASK,
    /**
     * @summary `width`.
     * @public
     * @readonly
     */
    readonly width: UnsignedInt,
    /**
     * @summary `height`.
     * @public
     * @readonly
     */
    readonly height: UnsignedInt,
    /**
     * @summary `bitmap`.
     * @public
     * @readonly
     */
    readonly bitmap: OPTIONAL<BioAPI_DATA>
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_GUI_BITMAP
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_GUI_BITMAP`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_GUI_BITMAP`.
   * @returns {BioAPI_GUI_BITMAP}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_GUI_BITMAP]: BioAPI_GUI_BITMAP[_K] }
  ): BioAPI_GUI_BITMAP {
    return new BioAPI_GUI_BITMAP(
      _o.subtypeMask,
      _o.width,
      _o.height,
      _o.bitmap
    );
  }
}


/**
 * @summary The Leading Root Component Types of BioAPI_GUI_BITMAP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_GUI_BITMAP: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'subtypeMask',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'width',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'height',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'bitmap',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_GUI_BITMAP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_GUI_BITMAP: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_GUI_BITMAP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_GUI_BITMAP: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_GUI_BITMAP: $.ASN1Decoder<BioAPI_GUI_BITMAP> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_GUI_BITMAP
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_GUI_BITMAP} The decoded data structure.
 */
export function _decode_BioAPI_GUI_BITMAP(el: _Element): BioAPI_GUI_BITMAP {
  if (!_cached_decoder_for_BioAPI_GUI_BITMAP) {
    _cached_decoder_for_BioAPI_GUI_BITMAP = function (
      el: _Element
    ): BioAPI_GUI_BITMAP {
      let subtypeMask!: BioAPI_BIR_SUBTYPE_MASK;
      let width!: UnsignedInt;
      let height!: UnsignedInt;
      let bitmap: OPTIONAL<BioAPI_DATA>;
      const callbacks: $.DecodingMap = {
        subtypeMask: (_el: _Element): void => {
          subtypeMask = _decode_BioAPI_BIR_SUBTYPE_MASK(_el);
        },
        width: (_el: _Element): void => {
          width = _decode_UnsignedInt(_el);
        },
        height: (_el: _Element): void => {
          height = _decode_UnsignedInt(_el);
        },
        bitmap: (_el: _Element): void => {
          bitmap = _decode_BioAPI_DATA(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_BioAPI_GUI_BITMAP,
        _extension_additions_list_spec_for_BioAPI_GUI_BITMAP,
        _root_component_type_list_2_spec_for_BioAPI_GUI_BITMAP,
        undefined
      );
      return new BioAPI_GUI_BITMAP (
        subtypeMask,
        width,
        height,
        bitmap
      );
    };
  }
  return _cached_decoder_for_BioAPI_GUI_BITMAP(el);
}


let _cached_encoder_for_BioAPI_GUI_BITMAP: $.ASN1Encoder<BioAPI_GUI_BITMAP> | null = null;


/**
 * @summary Encodes a(n) BioAPI_GUI_BITMAP into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_GUI_BITMAP, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_GUI_BITMAP(
  value: BioAPI_GUI_BITMAP,
  elGetter: $.ASN1Encoder<BioAPI_GUI_BITMAP>
): _Element {
  if (!_cached_encoder_for_BioAPI_GUI_BITMAP) {
    _cached_encoder_for_BioAPI_GUI_BITMAP = function (
      value: BioAPI_GUI_BITMAP    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BIR_SUBTYPE_MASK(
              value.subtypeMask,
              $.BER
            ),
            /* REQUIRED   */ _encode_UnsignedInt(value.width, $.BER),
            /* REQUIRED   */ _encode_UnsignedInt(value.height, $.BER),
            /* IF_ABSENT  */ value.bitmap === undefined
              ? undefined
              : _encode_BioAPI_DATA(value.bitmap, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_GUI_BITMAP(value, elGetter);
}


/* eslint-enable */
