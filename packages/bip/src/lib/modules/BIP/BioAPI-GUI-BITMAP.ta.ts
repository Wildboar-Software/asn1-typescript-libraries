/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
  BioAPI_BIR_SUBTYPE_MASK,
  BioAPI_BIR_SUBTYPE_MASK_left /* IMPORTED_LONG_NAMED_BIT */,
  left /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right /* IMPORTED_LONG_NAMED_BIT */,
  right /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_thumb /* IMPORTED_LONG_NAMED_BIT */,
  left_thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger /* IMPORTED_LONG_NAMED_BIT */,
  left_pointerfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_middlefinger /* IMPORTED_LONG_NAMED_BIT */,
  left_middlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_ringfinger /* IMPORTED_LONG_NAMED_BIT */,
  left_ringfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_littlefinger /* IMPORTED_LONG_NAMED_BIT */,
  left_littlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_thumb /* IMPORTED_LONG_NAMED_BIT */,
  right_thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger /* IMPORTED_LONG_NAMED_BIT */,
  right_pointerfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_middlefinger /* IMPORTED_LONG_NAMED_BIT */,
  right_middlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_ringfinger /* IMPORTED_LONG_NAMED_BIT */,
  right_ringfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_littlefinger /* IMPORTED_LONG_NAMED_BIT */,
  right_littlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_palm /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_palm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_backofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_wrist /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_palm /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_palm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_backofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_wrist /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_BIR_SUBTYPE_MASK,
  _encode_BioAPI_BIR_SUBTYPE_MASK,
} from '../BIP/BioAPI-BIR-SUBTYPE-MASK.ta.js';
export {
  BioAPI_BIR_SUBTYPE_MASK,
  BioAPI_BIR_SUBTYPE_MASK_left /* IMPORTED_LONG_NAMED_BIT */,
  left /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right /* IMPORTED_LONG_NAMED_BIT */,
  right /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_thumb /* IMPORTED_LONG_NAMED_BIT */,
  left_thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger /* IMPORTED_LONG_NAMED_BIT */,
  left_pointerfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_middlefinger /* IMPORTED_LONG_NAMED_BIT */,
  left_middlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_ringfinger /* IMPORTED_LONG_NAMED_BIT */,
  left_ringfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_littlefinger /* IMPORTED_LONG_NAMED_BIT */,
  left_littlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_thumb /* IMPORTED_LONG_NAMED_BIT */,
  right_thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger /* IMPORTED_LONG_NAMED_BIT */,
  right_pointerfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_middlefinger /* IMPORTED_LONG_NAMED_BIT */,
  right_middlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_ringfinger /* IMPORTED_LONG_NAMED_BIT */,
  right_ringfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_littlefinger /* IMPORTED_LONG_NAMED_BIT */,
  right_littlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_palm /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_palm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_backofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_wrist /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_palm /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_palm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_backofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_wrist /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_BIR_SUBTYPE_MASK,
  _encode_BioAPI_BIR_SUBTYPE_MASK,
} from '../BIP/BioAPI-BIR-SUBTYPE-MASK.ta.js';
import {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.js';
export {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.js';
import {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.js';
export {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.js';

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_BITMAP */
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
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_BITMAP */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_GUI_BITMAP */
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
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'width',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'height',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bitmap',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_GUI_BITMAP */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_GUI_BITMAP */
/**
 * @summary The Trailing Root Component Types of BioAPI_GUI_BITMAP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_GUI_BITMAP: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_GUI_BITMAP */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_GUI_BITMAP */
/**
 * @summary The Extension Addition Component Types of BioAPI_GUI_BITMAP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_GUI_BITMAP: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_GUI_BITMAP */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_GUI_BITMAP */
let _cached_decoder_for_BioAPI_GUI_BITMAP: $.ASN1Decoder<BioAPI_GUI_BITMAP> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_GUI_BITMAP */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_BITMAP */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_GUI_BITMAP
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_GUI_BITMAP} The decoded data structure.
 */
export function _decode_BioAPI_GUI_BITMAP(el: _Element) {
  if (!_cached_decoder_for_BioAPI_GUI_BITMAP) {
    _cached_decoder_for_BioAPI_GUI_BITMAP = function (
      el: _Element
    ): BioAPI_GUI_BITMAP {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let subtypeMask!: BioAPI_BIR_SUBTYPE_MASK;
      let width!: UnsignedInt;
      let height!: UnsignedInt;
      let bitmap: OPTIONAL<BioAPI_DATA>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
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
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_BioAPI_GUI_BITMAP,
        _extension_additions_list_spec_for_BioAPI_GUI_BITMAP,
        _root_component_type_list_2_spec_for_BioAPI_GUI_BITMAP,
        undefined
      );
      return new BioAPI_GUI_BITMAP /* SEQUENCE_CONSTRUCTOR_CALL */(
        subtypeMask,
        width,
        height,
        bitmap
      );
    };
  }
  return _cached_decoder_for_BioAPI_GUI_BITMAP(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_BITMAP */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_BITMAP */
let _cached_encoder_for_BioAPI_GUI_BITMAP: $.ASN1Encoder<BioAPI_GUI_BITMAP> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_BITMAP */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_BITMAP */
/**
 * @summary Encodes a(n) BioAPI_GUI_BITMAP into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_GUI_BITMAP, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_GUI_BITMAP(
  value: BioAPI_GUI_BITMAP,
  elGetter: $.ASN1Encoder<BioAPI_GUI_BITMAP>
) {
  if (!_cached_encoder_for_BioAPI_GUI_BITMAP) {
    _cached_encoder_for_BioAPI_GUI_BITMAP = function (
      value: BioAPI_GUI_BITMAP,
      elGetter: $.ASN1Encoder<BioAPI_GUI_BITMAP>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_BITMAP */

/* eslint-enable */
