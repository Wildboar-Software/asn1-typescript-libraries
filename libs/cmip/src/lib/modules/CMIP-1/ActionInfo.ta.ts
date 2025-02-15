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
import { CMIP_ACTION } from '../CMIP-1/CMIP-ACTION.oca';
export { CMIP_ACTION } from '../CMIP-1/CMIP-ACTION.oca';
import { ActionSet } from '../CMIP-1/ActionSet.osa';
export { ActionSet } from '../CMIP-1/ActionSet.osa';
import {
    ActionTypeId,
    _decode_ActionTypeId,
    _encode_ActionTypeId,
} from '../CMIP-1/ActionTypeId.ta';

/* START_OF_SYMBOL_DEFINITION ActionInfo */
/**
 * @summary ActionInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionInfo ::= SEQUENCE {
 *   actionType     CMIP-ACTION.&id({ActionSet}),
 *   actionInfoArg
 *     [4]  CMIP-ACTION.&Value({ActionSet}{@.actionType}) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ActionInfo {
  constructor(
    /**
     * @summary `actionType`.
     * @public
     * @readonly
     */
    readonly actionType: ActionTypeId,
    /**
     * @summary `actionInfoArg`.
     * @public
     * @readonly
     */
    readonly actionInfoArg: OPTIONAL<_Element>
  ) {}

  /**
   * @summary Restructures an object into a ActionInfo
   * @description
   *
   * This takes an `object` and converts it to a `ActionInfo`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ActionInfo`.
   * @returns {ActionInfo}
   */
  public static _from_object(
    _o: { [_K in keyof ActionInfo]: ActionInfo[_K] }
  ): ActionInfo {
    return new ActionInfo(_o.actionType, _o.actionInfoArg);
  }
}
/* END_OF_SYMBOL_DEFINITION ActionInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ActionInfo */
/**
 * @summary The Leading Root Component Types of ActionInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ActionInfo: $.ComponentSpec[] = [
  new $.ComponentSpec('actionType', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'actionInfoArg',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ActionInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ActionInfo */
/**
 * @summary The Trailing Root Component Types of ActionInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActionInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ActionInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ActionInfo */
/**
 * @summary The Extension Addition Component Types of ActionInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActionInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ActionInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionInfo */
let _cached_decoder_for_ActionInfo: $.ASN1Decoder<ActionInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ActionInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ActionInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionInfo} The decoded data structure.
 */
export function _decode_ActionInfo(el: _Element) {
  if (!_cached_decoder_for_ActionInfo) {
    _cached_decoder_for_ActionInfo = function (el: _Element): ActionInfo {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let actionType!: ActionTypeId;
      let actionInfoArg: OPTIONAL<_Element>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        actionType: (_el: _Element): void => {
          actionType = _decode_ActionTypeId(_el);
        },
        actionInfoArg: (_el: _Element): void => {
          actionInfoArg = $._decode_explicit<_Element>(() => $._decodeAny)(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ActionInfo,
        _extension_additions_list_spec_for_ActionInfo,
        _root_component_type_list_2_spec_for_ActionInfo,
        undefined
      );
      return new ActionInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
        actionType,
        actionInfoArg
      );
    };
  }
  return _cached_decoder_for_ActionInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActionInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionInfo */
let _cached_encoder_for_ActionInfo: $.ASN1Encoder<ActionInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ActionInfo */
/**
 * @summary Encodes a(n) ActionInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionInfo, encoded as an ASN.1 Element.
 */
export function _encode_ActionInfo(
  value: ActionInfo,
  elGetter: $.ASN1Encoder<ActionInfo>
) {
  if (!_cached_encoder_for_ActionInfo) {
    _cached_encoder_for_ActionInfo = function (
      value: ActionInfo,
      elGetter: $.ASN1Encoder<ActionInfo>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_ActionTypeId(value.actionType, $.BER),
            /* IF_ABSENT  */ value.actionInfoArg === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  4,
                  () => $._encodeAny,
                  $.BER
                )(value.actionInfoArg, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ActionInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActionInfo */

/* eslint-enable */
