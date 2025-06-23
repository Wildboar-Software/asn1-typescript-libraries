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
import {
  GetInfoStatus,
  _decode_GetInfoStatus,
  _encode_GetInfoStatus,
} from '../CMIP-1/GetInfoStatus.ta.mjs';

/**
 * @summary GetListError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GetListError ::= SEQUENCE {
 *   managedObjectClass     ObjectClass OPTIONAL,
 *   managedObjectInstance  ObjectInstance OPTIONAL,
 *   currentTime            [5] IMPLICIT GeneralizedTime OPTIONAL,
 *   getInfoList            [6] IMPLICIT SET OF GetInfoStatus,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class GetListError {
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
     * @summary `getInfoList`.
     * @public
     * @readonly
     */
    readonly getInfoList: GetInfoStatus[],
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a GetListError
   * @description
   *
   * This takes an `object` and converts it to a `GetListError`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GetListError`.
   * @returns {GetListError}
   */
  public static _from_object(
    _o: { [_K in keyof GetListError]: GetListError[_K] }
  ): GetListError {
    return new GetListError(
      _o.managedObjectClass,
      _o.managedObjectInstance,
      _o.currentTime,
      _o.getInfoList,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of GetListError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GetListError: $.ComponentSpec[] = [
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
    'getInfoList',
    false,
    $.hasTag(_TagClass.context, 6)
  ),
];


/**
 * @summary The Trailing Root Component Types of GetListError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GetListError: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of GetListError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GetListError: $.ComponentSpec[] = [];


let _cached_decoder_for_GetListError: $.ASN1Decoder<GetListError> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GetListError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetListError} The decoded data structure.
 */
export function _decode_GetListError(el: _Element) {
  if (!_cached_decoder_for_GetListError) {
    _cached_decoder_for_GetListError = function (el: _Element): GetListError {
      let managedObjectClass: OPTIONAL<ObjectClass>;
      let managedObjectInstance: OPTIONAL<ObjectInstance>;
      let currentTime: OPTIONAL<GeneralizedTime>;
      let getInfoList!: GetInfoStatus[];
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
        getInfoList: (_el: _Element): void => {
          getInfoList = $._decode_implicit<GetInfoStatus[]>(() =>
            $._decodeSetOf<GetInfoStatus>(() => _decode_GetInfoStatus)
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_GetListError,
        _extension_additions_list_spec_for_GetListError,
        _root_component_type_list_2_spec_for_GetListError,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new GetListError (
        managedObjectClass,
        managedObjectInstance,
        currentTime,
        getInfoList,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_GetListError(el);
}


let _cached_encoder_for_GetListError: $.ASN1Encoder<GetListError> | null = null;


/**
 * @summary Encodes a(n) GetListError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetListError, encoded as an ASN.1 Element.
 */
export function _encode_GetListError(
  value: GetListError,
  elGetter: $.ASN1Encoder<GetListError>
) {
  if (!_cached_encoder_for_GetListError) {
    _cached_encoder_for_GetListError = function (
      value: GetListError    ): _Element {
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
              /* REQUIRED   */ $._encode_implicit(
                _TagClass.context,
                6,
                () =>
                  $._encodeSetOf<GetInfoStatus>(
                    () => _encode_GetInfoStatus,
                    $.BER
                  ),
                $.BER
              )(value.getInfoList, $.BER),
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
  return _cached_encoder_for_GetListError(value, elGetter);
}


/* eslint-enable */
