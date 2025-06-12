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
  ObjectClass,
  _decode_ObjectClass,
  _encode_ObjectClass,
} from '../CMIP-1/ObjectClass.ta.js';
export {
  ObjectClass,
  _decode_ObjectClass,
  _encode_ObjectClass,
} from '../CMIP-1/ObjectClass.ta.js';
import {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta.js';
export {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta.js';
import {
  DeleteError_deleteErrorInfo,
  _enum_for_DeleteError_deleteErrorInfo,
  DeleteError_deleteErrorInfo_accessDenied /* IMPORTED_LONG_ENUMERATION_ITEM */,
  accessDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_DeleteError_deleteErrorInfo,
  _encode_DeleteError_deleteErrorInfo,
} from '../CMIP-1/DeleteError-deleteErrorInfo.ta.js';
export {
  DeleteError_deleteErrorInfo,
  _enum_for_DeleteError_deleteErrorInfo,
  DeleteError_deleteErrorInfo_accessDenied /* IMPORTED_LONG_ENUMERATION_ITEM */,
  accessDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_DeleteError_deleteErrorInfo,
  _encode_DeleteError_deleteErrorInfo,
} from '../CMIP-1/DeleteError-deleteErrorInfo.ta.js';

/* START_OF_SYMBOL_DEFINITION DeleteError */
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
/* END_OF_SYMBOL_DEFINITION DeleteError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteError */
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
    'deleteErrorInfo',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteError */
/**
 * @summary The Trailing Root Component Types of DeleteError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteError */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteError */
/**
 * @summary The Extension Addition Component Types of DeleteError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteError */
let _cached_decoder_for_DeleteError: $.ASN1Decoder<DeleteError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteError */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteError */
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
/* END_OF_SYMBOL_DEFINITION _decode_DeleteError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteError */
let _cached_encoder_for_DeleteError: $.ASN1Encoder<DeleteError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteError */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteError */
/**
 * @summary Encodes a(n) DeleteError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteError, encoded as an ASN.1 Element.
 */
export function _encode_DeleteError(
  value: DeleteError,
  elGetter: $.ASN1Encoder<DeleteError>
) {
  if (!_cached_encoder_for_DeleteError) {
    _cached_encoder_for_DeleteError = function (
      value: DeleteError,
      elGetter: $.ASN1Encoder<DeleteError>
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

/* END_OF_SYMBOL_DEFINITION _encode_DeleteError */

/* eslint-enable */
