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
import {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta';
export {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta';
import {
  GetInfoStatus,
  _decode_GetInfoStatus,
  _encode_GetInfoStatus,
} from '../CMIP-1/GetInfoStatus.ta';
export {
  GetInfoStatus,
  _decode_GetInfoStatus,
  _encode_GetInfoStatus,
} from '../CMIP-1/GetInfoStatus.ta';

/* START_OF_SYMBOL_DEFINITION GetListError */
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
/* END_OF_SYMBOL_DEFINITION GetListError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GetListError */
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
    'getInfoList',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GetListError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GetListError */
/**
 * @summary The Trailing Root Component Types of GetListError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GetListError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GetListError */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GetListError */
/**
 * @summary The Extension Addition Component Types of GetListError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GetListError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GetListError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GetListError */
let _cached_decoder_for_GetListError: $.ASN1Decoder<GetListError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GetListError */

/* START_OF_SYMBOL_DEFINITION _decode_GetListError */
/**
 * @summary Decodes an ASN.1 element into a(n) GetListError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetListError} The decoded data structure.
 */
export function _decode_GetListError(el: _Element) {
  if (!_cached_decoder_for_GetListError) {
    _cached_decoder_for_GetListError = function (el: _Element): GetListError {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let managedObjectClass: OPTIONAL<ObjectClass>;
      let managedObjectInstance: OPTIONAL<ObjectInstance>;
      let currentTime: OPTIONAL<GeneralizedTime>;
      let getInfoList!: GetInfoStatus[];
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
        getInfoList: (_el: _Element): void => {
          getInfoList = $._decode_implicit<GetInfoStatus[]>(() =>
            $._decodeSetOf<GetInfoStatus>(() => _decode_GetInfoStatus)
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
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
      return new GetListError /* SEQUENCE_CONSTRUCTOR_CALL */(
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
/* END_OF_SYMBOL_DEFINITION _decode_GetListError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GetListError */
let _cached_encoder_for_GetListError: $.ASN1Encoder<GetListError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GetListError */

/* START_OF_SYMBOL_DEFINITION _encode_GetListError */
/**
 * @summary Encodes a(n) GetListError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetListError, encoded as an ASN.1 Element.
 */
export function _encode_GetListError(
  value: GetListError,
  elGetter: $.ASN1Encoder<GetListError>
) {
  if (!_cached_encoder_for_GetListError) {
    _cached_encoder_for_GetListError = function (
      value: GetListError,
      elGetter: $.ASN1Encoder<GetListError>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_GetListError */

/* eslint-enable */
