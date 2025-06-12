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
  ModifyOperator,
  ModifyOperator_replace /* IMPORTED_LONG_NAMED_INTEGER */,
  replace /* IMPORTED_SHORT_NAMED_INTEGER */,
  ModifyOperator_addValues /* IMPORTED_LONG_NAMED_INTEGER */,
  addValues /* IMPORTED_SHORT_NAMED_INTEGER */,
  ModifyOperator_removeValues /* IMPORTED_LONG_NAMED_INTEGER */,
  removeValues /* IMPORTED_SHORT_NAMED_INTEGER */,
  ModifyOperator_setToDefault /* IMPORTED_LONG_NAMED_INTEGER */,
  setToDefault /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_ModifyOperator,
  _encode_ModifyOperator,
} from '../CMIP-1/ModifyOperator.ta.js';
export {
  ModifyOperator,
  ModifyOperator_replace /* IMPORTED_LONG_NAMED_INTEGER */,
  replace /* IMPORTED_SHORT_NAMED_INTEGER */,
  ModifyOperator_addValues /* IMPORTED_LONG_NAMED_INTEGER */,
  addValues /* IMPORTED_SHORT_NAMED_INTEGER */,
  ModifyOperator_removeValues /* IMPORTED_LONG_NAMED_INTEGER */,
  removeValues /* IMPORTED_SHORT_NAMED_INTEGER */,
  ModifyOperator_setToDefault /* IMPORTED_LONG_NAMED_INTEGER */,
  setToDefault /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_ModifyOperator,
  _encode_ModifyOperator,
} from '../CMIP-1/ModifyOperator.ta.js';
import { CMIP_ATTRIBUTE } from '../CMIP-1/CMIP-ATTRIBUTE.oca.js';
export { CMIP_ATTRIBUTE } from '../CMIP-1/CMIP-ATTRIBUTE.oca.js';
import { AttributeSet } from '../CMIP-1/AttributeSet.osa.js';
export { AttributeSet } from '../CMIP-1/AttributeSet.osa.js';
import {
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '../CMIP-1/AttributeId.ta.js';

/* START_OF_SYMBOL_DEFINITION SetArgument_modificationList_Item */
/**
 * @summary SetArgument_modificationList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SetArgument-modificationList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SetArgument_modificationList_Item {
  constructor(
    /**
     * @summary `modifyOperator`.
     * @public
     * @readonly
     */
    readonly modifyOperator: OPTIONAL<ModifyOperator>,
    /**
     * @summary `attributeId`.
     * @public
     * @readonly
     */
    readonly attributeId: AttributeId,
    /**
     * @summary `attributeValue`.
     * @public
     * @readonly
     */
    readonly attributeValue: OPTIONAL<_Element>
  ) {}

  /**
   * @summary Restructures an object into a SetArgument_modificationList_Item
   * @description
   *
   * This takes an `object` and converts it to a `SetArgument_modificationList_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SetArgument_modificationList_Item`.
   * @returns {SetArgument_modificationList_Item}
   */
  public static _from_object(
    _o: {
      [_K in keyof SetArgument_modificationList_Item]: SetArgument_modificationList_Item[_K];
    }
  ): SetArgument_modificationList_Item {
    return new SetArgument_modificationList_Item(
      _o.modifyOperator,
      _o.attributeId,
      _o.attributeValue
    );
  }

  /**
   * @summary Getter that returns the default value for `modifyOperator`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_modifyOperator() {
    return replace;
  }
}
/* END_OF_SYMBOL_DEFINITION SetArgument_modificationList_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SetArgument_modificationList_Item */
/**
 * @summary The Leading Root Component Types of SetArgument_modificationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SetArgument_modificationList_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'modifyOperator',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec('attributeId', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'attributeValue',
    true,
    $.hasAnyTag,
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SetArgument_modificationList_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SetArgument_modificationList_Item */
/**
 * @summary The Trailing Root Component Types of SetArgument_modificationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SetArgument_modificationList_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SetArgument_modificationList_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SetArgument_modificationList_Item */
/**
 * @summary The Extension Addition Component Types of SetArgument_modificationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SetArgument_modificationList_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SetArgument_modificationList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SetArgument_modificationList_Item */
let _cached_decoder_for_SetArgument_modificationList_Item: $.ASN1Decoder<SetArgument_modificationList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SetArgument_modificationList_Item */

/* START_OF_SYMBOL_DEFINITION _decode_SetArgument_modificationList_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) SetArgument_modificationList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SetArgument_modificationList_Item} The decoded data structure.
 */
export function _decode_SetArgument_modificationList_Item(el: _Element) {
  if (!_cached_decoder_for_SetArgument_modificationList_Item) {
    _cached_decoder_for_SetArgument_modificationList_Item = function (
      el: _Element
    ): SetArgument_modificationList_Item {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let modifyOperator: OPTIONAL<ModifyOperator> =
        SetArgument_modificationList_Item._default_value_for_modifyOperator;
      let attributeId!: AttributeId;
      let attributeValue: OPTIONAL<_Element>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        modifyOperator: (_el: _Element): void => {
          modifyOperator = $._decode_implicit<ModifyOperator>(
            () => _decode_ModifyOperator
          )(_el);
        },
        attributeId: (_el: _Element): void => {
          attributeId = _decode_AttributeId(_el);
        },
        attributeValue: (_el: _Element): void => {
          attributeValue = $._decodeAny(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SetArgument_modificationList_Item,
        _extension_additions_list_spec_for_SetArgument_modificationList_Item,
        _root_component_type_list_2_spec_for_SetArgument_modificationList_Item,
        undefined
      );
      return new SetArgument_modificationList_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
        modifyOperator,
        attributeId,
        attributeValue
      );
    };
  }
  return _cached_decoder_for_SetArgument_modificationList_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SetArgument_modificationList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SetArgument_modificationList_Item */
let _cached_encoder_for_SetArgument_modificationList_Item: $.ASN1Encoder<SetArgument_modificationList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SetArgument_modificationList_Item */

/* START_OF_SYMBOL_DEFINITION _encode_SetArgument_modificationList_Item */
/**
 * @summary Encodes a(n) SetArgument_modificationList_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetArgument_modificationList_Item, encoded as an ASN.1 Element.
 */
export function _encode_SetArgument_modificationList_Item(
  value: SetArgument_modificationList_Item,
  elGetter: $.ASN1Encoder<SetArgument_modificationList_Item>
) {
  if (!_cached_encoder_for_SetArgument_modificationList_Item) {
    _cached_encoder_for_SetArgument_modificationList_Item = function (
      value: SetArgument_modificationList_Item,
      elGetter: $.ASN1Encoder<SetArgument_modificationList_Item>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.modifyOperator === undefined ||
            $.deepEq(
              value.modifyOperator,
              SetArgument_modificationList_Item._default_value_for_modifyOperator
            )
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => _encode_ModifyOperator,
                  $.BER
                )(value.modifyOperator, $.BER),
            /* REQUIRED   */ _encode_AttributeId(value.attributeId, $.BER),
            /* IF_ABSENT  */ value.attributeValue === undefined
              ? undefined
              : $._encodeAny(value.attributeValue, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SetArgument_modificationList_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SetArgument_modificationList_Item */

/* eslint-enable */
