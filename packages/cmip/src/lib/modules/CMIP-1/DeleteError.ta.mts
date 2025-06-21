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
  DeleteError_deleteErrorInfo,
  _enum_for_DeleteError_deleteErrorInfo,
  _decode_DeleteError_deleteErrorInfo,
  _encode_DeleteError_deleteErrorInfo,
} from '../CMIP-1/DeleteError-deleteErrorInfo.ta.mjs';

/**
 * @summary DeleteError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteError ::= SEQUENCE {
 *   managedObjectClass     ObjectClass OPTIONAL,
 *   managedObjectInstance  ObjectInstance OPTIONAL,
 *   currentTime            [5] IMPLICIT GeneralizedTime OPTIONAL,
 *   deleteErrorInfo        [6]  ENUMERATED {accessDenied(2), ...
 *                                           },
 *   ...
 * }
 * ```
 *
 * @class
 */
export class DeleteError {
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
     * @summary `deleteErrorInfo`.
     * @public
     * @readonly
     */
    readonly deleteErrorInfo: DeleteError_deleteErrorInfo,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a DeleteError
   * @description
   *
   * This takes an `object` and converts it to a `DeleteError`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DeleteError`.
   * @returns {DeleteError}
   */
  public static _from_object(
    _o: { [_K in keyof DeleteError]: DeleteError[_K] }
  ): DeleteError {
    return new DeleteError(
      _o.managedObjectClass,
      _o.managedObjectInstance,
      _o.currentTime,
      _o.deleteErrorInfo,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary The enum used as the type of the component `deleteErrorInfo`
   * @public
   * @static
   */

  public static _enum_for_deleteErrorInfo = _enum_for_DeleteError_deleteErrorInfo;
}


/**
 * @summary The Leading Root Component Types of DeleteError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteError: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'managedObjectClass',
    true,
    $.hasAnyTag
  ),
  new $.ComponentSpec(
    'managedObjectInstance',
    true,
    $.hasAnyTag
  ),
  new $.ComponentSpec(
    'currentTime',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'deleteErrorInfo',
    false,
    $.hasTag(_TagClass.context, 6)
  ),
];


/**
 * @summary The Trailing Root Component Types of DeleteError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteError: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DeleteError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteError: $.ComponentSpec[] = [];


let _cached_decoder_for_DeleteError: $.ASN1Decoder<DeleteError> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DeleteError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteError} The decoded data structure.
 */
export function _decode_DeleteError(el: _Element) {
  if (!_cached_decoder_for_DeleteError) {
    _cached_decoder_for_DeleteError = function (el: _Element): DeleteError {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let managedObjectClass: OPTIONAL<ObjectClass>;
      let managedObjectInstance: OPTIONAL<ObjectInstance>;
      let currentTime: OPTIONAL<GeneralizedTime>;
      let deleteErrorInfo!: DeleteError_deleteErrorInfo;
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
        deleteErrorInfo: (_el: _Element): void => {
          deleteErrorInfo = $._decode_explicit<DeleteError_deleteErrorInfo>(
            () => _decode_DeleteError_deleteErrorInfo
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_DeleteError,
        _extension_additions_list_spec_for_DeleteError,
        _root_component_type_list_2_spec_for_DeleteError,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new DeleteError /* SEQUENCE_CONSTRUCTOR_CALL */(
        managedObjectClass,
        managedObjectInstance,
        currentTime,
        deleteErrorInfo,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_DeleteError(el);
}


let _cached_encoder_for_DeleteError: $.ASN1Encoder<DeleteError> | null = null;


/**
 * @summary Encodes a(n) DeleteError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteError, encoded as an ASN.1 Element.
 */
export function _encode_DeleteError(
  value: DeleteError,
  elGetter: $.ASN1Encoder<DeleteError>
) {
  if (!_cached_encoder_for_DeleteError) {
    _cached_encoder_for_DeleteError = function (
      value: DeleteError    ): _Element {
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
                () => _encode_DeleteError_deleteErrorInfo,
                $.BER
              )(value.deleteErrorInfo, $.BER),
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
  return _cached_encoder_for_DeleteError(value, elGetter);
}


/* eslint-enable */
