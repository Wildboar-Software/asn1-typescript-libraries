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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  ObjectClass,
  _decode_ObjectClass,
  _encode_ObjectClass,
} from '../CMIP-1/ObjectClass.ta';
export {
  ObjectClass,
  _decode_ObjectClass,
  _encode_ObjectClass,
} from '../CMIP-1/ObjectClass.ta';
import { CMIP_ACTION } from '../CMIP-1/CMIP-ACTION.oca';
export { CMIP_ACTION } from '../CMIP-1/CMIP-ACTION.oca';
import { ActionSet } from '../CMIP-1/ActionSet.osa';
export { ActionSet } from '../CMIP-1/ActionSet.osa';
import {
    ActionTypeId,
    _decode_ActionTypeId,
    _encode_ActionTypeId,
} from '../CMIP-1/ActionTypeId.ta';

/* START_OF_SYMBOL_DEFINITION NoSuchArgument_actionId */
/**
 * @summary NoSuchArgument_actionId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchArgument-actionId ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class NoSuchArgument_actionId {
  constructor(
    /**
     * @summary `managedObjectClass`.
     * @public
     * @readonly
     */
    readonly managedObjectClass: OPTIONAL<ObjectClass>,
    /**
     * @summary `actionType`.
     * @public
     * @readonly
     */
    readonly actionType: ActionTypeId
  ) {}

  /**
   * @summary Restructures an object into a NoSuchArgument_actionId
   * @description
   *
   * This takes an `object` and converts it to a `NoSuchArgument_actionId`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NoSuchArgument_actionId`.
   * @returns {NoSuchArgument_actionId}
   */
  public static _from_object(
    _o: { [_K in keyof NoSuchArgument_actionId]: NoSuchArgument_actionId[_K] }
  ): NoSuchArgument_actionId {
    return new NoSuchArgument_actionId(_o.managedObjectClass, _o.actionType);
  }
}
/* END_OF_SYMBOL_DEFINITION NoSuchArgument_actionId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NoSuchArgument_actionId */
/**
 * @summary The Leading Root Component Types of NoSuchArgument_actionId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NoSuchArgument_actionId: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'managedObjectClass',
    true,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec('actionType', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NoSuchArgument_actionId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NoSuchArgument_actionId */
/**
 * @summary The Trailing Root Component Types of NoSuchArgument_actionId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NoSuchArgument_actionId: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NoSuchArgument_actionId */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NoSuchArgument_actionId */
/**
 * @summary The Extension Addition Component Types of NoSuchArgument_actionId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NoSuchArgument_actionId: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NoSuchArgument_actionId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchArgument_actionId */
let _cached_decoder_for_NoSuchArgument_actionId: $.ASN1Decoder<NoSuchArgument_actionId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchArgument_actionId */

/* START_OF_SYMBOL_DEFINITION _decode_NoSuchArgument_actionId */
/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchArgument_actionId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchArgument_actionId} The decoded data structure.
 */
export function _decode_NoSuchArgument_actionId(el: _Element) {
  if (!_cached_decoder_for_NoSuchArgument_actionId) {
    _cached_decoder_for_NoSuchArgument_actionId = function (
      el: _Element
    ): NoSuchArgument_actionId {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let managedObjectClass: OPTIONAL<ObjectClass>;
      let actionType!: ActionTypeId;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        managedObjectClass: (_el: _Element): void => {
          managedObjectClass = _decode_ObjectClass(_el);
        },
        actionType: (_el: _Element): void => {
          actionType = _decode_ActionTypeId(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_NoSuchArgument_actionId,
        _extension_additions_list_spec_for_NoSuchArgument_actionId,
        _root_component_type_list_2_spec_for_NoSuchArgument_actionId,
        undefined
      );
      return new NoSuchArgument_actionId /* SEQUENCE_CONSTRUCTOR_CALL */(
        managedObjectClass,
        actionType
      );
    };
  }
  return _cached_decoder_for_NoSuchArgument_actionId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NoSuchArgument_actionId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchArgument_actionId */
let _cached_encoder_for_NoSuchArgument_actionId: $.ASN1Encoder<NoSuchArgument_actionId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchArgument_actionId */

/* START_OF_SYMBOL_DEFINITION _encode_NoSuchArgument_actionId */
/**
 * @summary Encodes a(n) NoSuchArgument_actionId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchArgument_actionId, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchArgument_actionId(
  value: NoSuchArgument_actionId,
  elGetter: $.ASN1Encoder<NoSuchArgument_actionId>
) {
  if (!_cached_encoder_for_NoSuchArgument_actionId) {
    _cached_encoder_for_NoSuchArgument_actionId = function (
      value: NoSuchArgument_actionId,
      elGetter: $.ASN1Encoder<NoSuchArgument_actionId>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.managedObjectClass === undefined
              ? undefined
              : _encode_ObjectClass(value.managedObjectClass, $.BER),
            /* REQUIRED   */ _encode_ActionTypeId(value.actionType, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_NoSuchArgument_actionId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NoSuchArgument_actionId */

/* eslint-enable */
