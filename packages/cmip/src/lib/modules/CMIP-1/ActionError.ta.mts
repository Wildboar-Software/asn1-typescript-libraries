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
  ActionErrorInfo,
  _decode_ActionErrorInfo,
  _encode_ActionErrorInfo,
} from '../CMIP-1/ActionErrorInfo.ta.mjs';

/**
 * @summary ActionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionError ::= SEQUENCE {
 *   managedObjectClass     ObjectClass OPTIONAL,
 *   managedObjectInstance  ObjectInstance OPTIONAL,
 *   currentTime            [5] IMPLICIT GeneralizedTime OPTIONAL,
 *   actionErrorInfo        [6]  ActionErrorInfo,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class ActionError {
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
     * @summary `actionErrorInfo`.
     * @public
     * @readonly
     */
    readonly actionErrorInfo: ActionErrorInfo,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a ActionError
   * @description
   *
   * This takes an `object` and converts it to a `ActionError`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ActionError`.
   * @returns {ActionError}
   */
  public static _from_object(
    _o: { [_K in keyof ActionError]: ActionError[_K] }
  ): ActionError {
    return new ActionError(
      _o.managedObjectClass,
      _o.managedObjectInstance,
      _o.currentTime,
      _o.actionErrorInfo,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of ActionError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ActionError: $.ComponentSpec[] = [
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
    'actionErrorInfo',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of ActionError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActionError: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ActionError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActionError: $.ComponentSpec[] = [];


let _cached_decoder_for_ActionError: $.ASN1Decoder<ActionError> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ActionError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionError} The decoded data structure.
 */
export function _decode_ActionError(el: _Element) {
  if (!_cached_decoder_for_ActionError) {
    _cached_decoder_for_ActionError = function (el: _Element): ActionError {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let managedObjectClass: OPTIONAL<ObjectClass>;
      let managedObjectInstance: OPTIONAL<ObjectInstance>;
      let currentTime: OPTIONAL<GeneralizedTime>;
      let actionErrorInfo!: ActionErrorInfo;
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
        actionErrorInfo: (_el: _Element): void => {
          actionErrorInfo = $._decode_explicit<ActionErrorInfo>(
            () => _decode_ActionErrorInfo
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ActionError,
        _extension_additions_list_spec_for_ActionError,
        _root_component_type_list_2_spec_for_ActionError,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new ActionError /* SEQUENCE_CONSTRUCTOR_CALL */(
        managedObjectClass,
        managedObjectInstance,
        currentTime,
        actionErrorInfo,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_ActionError(el);
}


let _cached_encoder_for_ActionError: $.ASN1Encoder<ActionError> | null = null;


/**
 * @summary Encodes a(n) ActionError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionError, encoded as an ASN.1 Element.
 */
export function _encode_ActionError(
  value: ActionError,
  elGetter: $.ASN1Encoder<ActionError>
) {
  if (!_cached_encoder_for_ActionError) {
    _cached_encoder_for_ActionError = function (
      value: ActionError    ): _Element {
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
              /* REQUIRED   */ $._encode_explicit(
                _TagClass.context,
                6,
                () => _encode_ActionErrorInfo,
                $.BER
              )(value.actionErrorInfo, $.BER),
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
  return _cached_encoder_for_ActionError(value, elGetter);
}


/* eslint-enable */
