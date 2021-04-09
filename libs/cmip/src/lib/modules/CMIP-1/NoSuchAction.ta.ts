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

/* START_OF_SYMBOL_DEFINITION NoSuchAction */
/**
 * @summary NoSuchAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchAction ::= SEQUENCE {
 *   managedObjectClass  ObjectClass,
 *   actionType          CMIP-ACTION.&id({ActionSet}),
 *   ...
 * }
 * ```
 *
 * @class
 */
export class NoSuchAction {
  constructor(
    /**
     * @summary `managedObjectClass`.
     * @public
     * @readonly
     */
    readonly managedObjectClass: ObjectClass,
    /**
     * @summary `actionType`.
     * @public
     * @readonly
     */
    readonly actionType: ActionTypeId,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a NoSuchAction
   * @description
   *
   * This takes an `object` and converts it to a `NoSuchAction`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NoSuchAction`.
   * @returns {NoSuchAction}
   */
  public static _from_object(
    _o: { [_K in keyof NoSuchAction]: NoSuchAction[_K] }
  ): NoSuchAction {
    return new NoSuchAction(
      _o.managedObjectClass,
      _o.actionType,
      _o._unrecognizedExtensionsList
    );
  }
}
/* END_OF_SYMBOL_DEFINITION NoSuchAction */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NoSuchAction */
/**
 * @summary The Leading Root Component Types of NoSuchAction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NoSuchAction: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'managedObjectClass',
    false,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec('actionType', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NoSuchAction */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NoSuchAction */
/**
 * @summary The Trailing Root Component Types of NoSuchAction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NoSuchAction: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NoSuchAction */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NoSuchAction */
/**
 * @summary The Extension Addition Component Types of NoSuchAction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NoSuchAction: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NoSuchAction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchAction */
let _cached_decoder_for_NoSuchAction: $.ASN1Decoder<NoSuchAction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchAction */

/* START_OF_SYMBOL_DEFINITION _decode_NoSuchAction */
/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchAction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchAction} The decoded data structure.
 */
export function _decode_NoSuchAction(el: _Element) {
  if (!_cached_decoder_for_NoSuchAction) {
    _cached_decoder_for_NoSuchAction = function (el: _Element): NoSuchAction {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'NoSuchAction contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'managedObjectClass';
      sequence[1].name = 'actionType';
      let managedObjectClass!: ObjectClass;
      let actionType!: ActionTypeId;
      managedObjectClass = _decode_ObjectClass(sequence[0]);
      actionType = _decode_ActionTypeId(sequence[1]);
      return new NoSuchAction(
        managedObjectClass,
        actionType,
        sequence.slice(2)
      );
    };
  }
  return _cached_decoder_for_NoSuchAction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NoSuchAction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchAction */
let _cached_encoder_for_NoSuchAction: $.ASN1Encoder<NoSuchAction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchAction */

/* START_OF_SYMBOL_DEFINITION _encode_NoSuchAction */
/**
 * @summary Encodes a(n) NoSuchAction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchAction, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchAction(
  value: NoSuchAction,
  elGetter: $.ASN1Encoder<NoSuchAction>
) {
  if (!_cached_encoder_for_NoSuchAction) {
    _cached_encoder_for_NoSuchAction = function (
      value: NoSuchAction,
      elGetter: $.ASN1Encoder<NoSuchAction>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* REQUIRED   */ _encode_ObjectClass(
                value.managedObjectClass,
                $.BER
              ),
              /* REQUIRED   */ _encode_ActionTypeId(value.actionType, $.BER),
            ],
            value._unrecognizedExtensionsList
              ? value._unrecognizedExtensionsList
              : []
          )
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_NoSuchAction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NoSuchAction */

/* eslint-enable */
