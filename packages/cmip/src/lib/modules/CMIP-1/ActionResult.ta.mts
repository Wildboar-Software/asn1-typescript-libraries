/* eslint-disable */
import {
  OPTIONAL,
  GeneralizedTime,
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
  ObjectClass,
  _decode_ObjectClass,
  _encode_ObjectClass,
} from '../CMIP-1/ObjectClass.ta.mjs';
import {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta.mjs';
import {
  ActionReply,
  _decode_ActionReply,
  _encode_ActionReply,
} from '../CMIP-1/ActionReply.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ActionResult */
/**
 * @summary ActionResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionResult ::= SEQUENCE {
 *   managedObjectClass     ObjectClass OPTIONAL,
 *   managedObjectInstance  ObjectInstance OPTIONAL,
 *   currentTime            [5] IMPLICIT GeneralizedTime OPTIONAL,
 *   actionReply            [6] IMPLICIT ActionReply OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class ActionResult {
  constructor(
    /**
     * @summary `managedObjectClass`.
     * @public
     * @readonly
     */
    readonly managedObjectClass: OPTIONAL<ObjectClass>,
    /**
     * @summary `managedObjectInstance`.
     * @public
     * @readonly
     */
    readonly managedObjectInstance: OPTIONAL<ObjectInstance>,
    /**
     * @summary `currentTime`.
     * @public
     * @readonly
     */
    readonly currentTime: OPTIONAL<GeneralizedTime>,
    /**
     * @summary `actionReply`.
     * @public
     * @readonly
     */
    readonly actionReply: OPTIONAL<ActionReply>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a ActionResult
   * @description
   *
   * This takes an `object` and converts it to a `ActionResult`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ActionResult`.
   * @returns {ActionResult}
   */
  public static _from_object(
    _o: { [_K in keyof ActionResult]: ActionResult[_K] }
  ): ActionResult {
    return new ActionResult(
      _o.managedObjectClass,
      _o.managedObjectInstance,
      _o.currentTime,
      _o.actionReply,
      _o._unrecognizedExtensionsList
    );
  }
}
/* END_OF_SYMBOL_DEFINITION ActionResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ActionResult */
/**
 * @summary The Leading Root Component Types of ActionResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ActionResult: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'managedObjectClass',
    true,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'managedObjectInstance',
    true,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'currentTime',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'actionReply',
    true,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ActionResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ActionResult */
/**
 * @summary The Trailing Root Component Types of ActionResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActionResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ActionResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ActionResult */
/**
 * @summary The Extension Addition Component Types of ActionResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActionResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ActionResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionResult */
let _cached_decoder_for_ActionResult: $.ASN1Decoder<ActionResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionResult */

/* START_OF_SYMBOL_DEFINITION _decode_ActionResult */
/**
 * @summary Decodes an ASN.1 element into a(n) ActionResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionResult} The decoded data structure.
 */
export function _decode_ActionResult(el: _Element) {
  if (!_cached_decoder_for_ActionResult) {
    _cached_decoder_for_ActionResult = function (el: _Element): ActionResult {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let managedObjectClass: OPTIONAL<ObjectClass>;
      let managedObjectInstance: OPTIONAL<ObjectInstance>;
      let currentTime: OPTIONAL<GeneralizedTime>;
      let actionReply: OPTIONAL<ActionReply>;
      let _unrecognizedExtensionsList: _Element[] = [];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        managedObjectClass: (_el: _Element): void => {
          managedObjectClass = _decode_ObjectClass(_el);
        },
        managedObjectInstance: (_el: _Element): void => {
          managedObjectInstance = _decode_ObjectInstance(_el);
        },
        currentTime: (_el: _Element): void => {
          currentTime = $._decode_implicit<GeneralizedTime>(
            () => $._decodeGeneralizedTime
          )(_el);
        },
        actionReply: (_el: _Element): void => {
          actionReply = $._decode_implicit<ActionReply>(
            () => _decode_ActionReply
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ActionResult,
        _extension_additions_list_spec_for_ActionResult,
        _root_component_type_list_2_spec_for_ActionResult,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new ActionResult /* SEQUENCE_CONSTRUCTOR_CALL */(
        managedObjectClass,
        managedObjectInstance,
        currentTime,
        actionReply,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_ActionResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActionResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionResult */
let _cached_encoder_for_ActionResult: $.ASN1Encoder<ActionResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionResult */

/* START_OF_SYMBOL_DEFINITION _encode_ActionResult */
/**
 * @summary Encodes a(n) ActionResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionResult, encoded as an ASN.1 Element.
 */
export function _encode_ActionResult(
  value: ActionResult,
  elGetter: $.ASN1Encoder<ActionResult>
) {
  if (!_cached_encoder_for_ActionResult) {
    _cached_encoder_for_ActionResult = function (
      value: ActionResult    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* IF_ABSENT  */ value.managedObjectClass === undefined
                ? undefined
                : _encode_ObjectClass(value.managedObjectClass, $.BER),
              /* IF_ABSENT  */ value.managedObjectInstance === undefined
                ? undefined
                : _encode_ObjectInstance(value.managedObjectInstance, $.BER),
              /* IF_ABSENT  */ value.currentTime === undefined
                ? undefined
                : $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => $._encodeGeneralizedTime,
                    $.BER
                  )(value.currentTime, $.BER),
              /* IF_ABSENT  */ value.actionReply === undefined
                ? undefined
                : $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_ActionReply,
                    $.BER
                  )(value.actionReply, $.BER),
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
  return _cached_encoder_for_ActionResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActionResult */

/* eslint-enable */
