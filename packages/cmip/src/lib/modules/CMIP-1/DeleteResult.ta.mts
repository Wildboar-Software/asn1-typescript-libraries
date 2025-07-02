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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
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

/**
 * @summary DeleteResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteResult ::= SEQUENCE {
 *   managedObjectClass     ObjectClass OPTIONAL,
 *   managedObjectInstance  ObjectInstance OPTIONAL,
 *   currentTime            [5] IMPLICIT GeneralizedTime OPTIONAL,
 *   ...
 * }
 * ```
 *
 */
export class DeleteResult {
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
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a DeleteResult
   * @description
   *
   * This takes an `object` and converts it to a `DeleteResult`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DeleteResult`.
   * @returns {DeleteResult}
   */
  public static _from_object(
    _o: { [_K in keyof DeleteResult]: DeleteResult[_K] }
  ): DeleteResult {
    return new DeleteResult(
      _o.managedObjectClass,
      _o.managedObjectInstance,
      _o.currentTime,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of DeleteResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteResult: $.ComponentSpec[] = [
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
];


/**
 * @summary The Trailing Root Component Types of DeleteResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteResult: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DeleteResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteResult: $.ComponentSpec[] = [];


let _cached_decoder_for_DeleteResult: $.ASN1Decoder<DeleteResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DeleteResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteResult} The decoded data structure.
 */
export function _decode_DeleteResult(el: _Element): DeleteResult {
  if (!_cached_decoder_for_DeleteResult) {
    _cached_decoder_for_DeleteResult = function (el: _Element): DeleteResult {
      let managedObjectClass: OPTIONAL<ObjectClass>;
      let managedObjectInstance: OPTIONAL<ObjectInstance>;
      let currentTime: OPTIONAL<GeneralizedTime>;
      let _unrecognizedExtensionsList: _Element[] = [];
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
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_DeleteResult,
        _extension_additions_list_spec_for_DeleteResult,
        _root_component_type_list_2_spec_for_DeleteResult,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new DeleteResult (
        managedObjectClass,
        managedObjectInstance,
        currentTime,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_DeleteResult(el);
}


let _cached_encoder_for_DeleteResult: $.ASN1Encoder<DeleteResult> | null = null;


/**
 * @summary Encodes a(n) DeleteResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteResult, encoded as an ASN.1 Element.
 */
export function _encode_DeleteResult(
  value: DeleteResult,
  elGetter: $.ASN1Encoder<DeleteResult>
): _Element {
  if (!_cached_encoder_for_DeleteResult) {
    _cached_encoder_for_DeleteResult = function (
      value: DeleteResult    ): _Element {
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
  return _cached_encoder_for_DeleteResult(value, elGetter);
}


/* eslint-enable */
