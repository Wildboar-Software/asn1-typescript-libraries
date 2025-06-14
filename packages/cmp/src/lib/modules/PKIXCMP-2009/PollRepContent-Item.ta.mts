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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  PKIFreeText,
  _decode_PKIFreeText,
  _encode_PKIFreeText,
} from '../PKIXCMP-2009/PKIFreeText.ta.mjs';
/* START_OF_SYMBOL_DEFINITION PollRepContent_Item */
/**
 * @summary PollRepContent_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PollRepContent-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class PollRepContent_Item {
  constructor(
    /**
     * @summary `certReqId`.
     * @public
     * @readonly
     */
    readonly certReqId: INTEGER,
    /**
     * @summary `checkAfter`.
     * @public
     * @readonly
     */
    readonly checkAfter: INTEGER,
    /**
     * @summary `reason`.
     * @public
     * @readonly
     */
    readonly reason: OPTIONAL<PKIFreeText>
  ) {}

  /**
   * @summary Restructures an object into a PollRepContent_Item
   * @description
   *
   * This takes an `object` and converts it to a `PollRepContent_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PollRepContent_Item`.
   * @returns {PollRepContent_Item}
   */
  public static _from_object(
    _o: { [_K in keyof PollRepContent_Item]: PollRepContent_Item[_K] }
  ): PollRepContent_Item {
    return new PollRepContent_Item(_o.certReqId, _o.checkAfter, _o.reason);
  }
}
/* END_OF_SYMBOL_DEFINITION PollRepContent_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PollRepContent_Item */
/**
 * @summary The Leading Root Component Types of PollRepContent_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PollRepContent_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'certReqId',
    false,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'checkAfter',
    false,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'reason',
    true,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PollRepContent_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PollRepContent_Item */
/**
 * @summary The Trailing Root Component Types of PollRepContent_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PollRepContent_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PollRepContent_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PollRepContent_Item */
/**
 * @summary The Extension Addition Component Types of PollRepContent_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PollRepContent_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PollRepContent_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PollRepContent_Item */
let _cached_decoder_for_PollRepContent_Item: $.ASN1Decoder<PollRepContent_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PollRepContent_Item */

/* START_OF_SYMBOL_DEFINITION _decode_PollRepContent_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) PollRepContent_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PollRepContent_Item} The decoded data structure.
 */
export function _decode_PollRepContent_Item(el: _Element) {
  if (!_cached_decoder_for_PollRepContent_Item) {
    _cached_decoder_for_PollRepContent_Item = function (
      el: _Element
    ): PollRepContent_Item {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let certReqId!: INTEGER;
      let checkAfter!: INTEGER;
      let reason: OPTIONAL<PKIFreeText>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        certReqId: (_el: _Element): void => {
          certReqId = $._decodeInteger(_el);
        },
        checkAfter: (_el: _Element): void => {
          checkAfter = $._decodeInteger(_el);
        },
        reason: (_el: _Element): void => {
          reason = _decode_PKIFreeText(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PollRepContent_Item,
        _extension_additions_list_spec_for_PollRepContent_Item,
        _root_component_type_list_2_spec_for_PollRepContent_Item,
        undefined
      );
      return new PollRepContent_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
        certReqId,
        checkAfter,
        reason
      );
    };
  }
  return _cached_decoder_for_PollRepContent_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PollRepContent_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PollRepContent_Item */
let _cached_encoder_for_PollRepContent_Item: $.ASN1Encoder<PollRepContent_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PollRepContent_Item */

/* START_OF_SYMBOL_DEFINITION _encode_PollRepContent_Item */
/**
 * @summary Encodes a(n) PollRepContent_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PollRepContent_Item, encoded as an ASN.1 Element.
 */
export function _encode_PollRepContent_Item(
  value: PollRepContent_Item,
  elGetter: $.ASN1Encoder<PollRepContent_Item>
) {
  if (!_cached_encoder_for_PollRepContent_Item) {
    _cached_encoder_for_PollRepContent_Item = function (
      value: PollRepContent_Item    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.certReqId, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.checkAfter, $.BER),
            /* IF_ABSENT  */ value.reason === undefined
              ? undefined
              : _encode_PKIFreeText(value.reason, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_PollRepContent_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PollRepContent_Item */

/* eslint-enable */
