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
  SetInfoStatus,
  _decode_SetInfoStatus,
  _encode_SetInfoStatus,
} from '../CMIP-1/SetInfoStatus.ta';
export {
  SetInfoStatus,
  _decode_SetInfoStatus,
  _encode_SetInfoStatus,
} from '../CMIP-1/SetInfoStatus.ta';

/* START_OF_SYMBOL_DEFINITION SetListError */
/**
 * @summary SetListError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SetListError ::= SEQUENCE {
 *   managedObjectClass     ObjectClass OPTIONAL,
 *   managedObjectInstance  ObjectInstance OPTIONAL,
 *   currentTime            [5] IMPLICIT GeneralizedTime OPTIONAL,
 *   setInfoList            [6] IMPLICIT SET OF SetInfoStatus,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class SetListError {
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
     * @summary `setInfoList`.
     * @public
     * @readonly
     */
    readonly setInfoList: SetInfoStatus[],
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a SetListError
   * @description
   *
   * This takes an `object` and converts it to a `SetListError`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SetListError`.
   * @returns {SetListError}
   */
  public static _from_object(
    _o: { [_K in keyof SetListError]: SetListError[_K] }
  ): SetListError {
    return new SetListError(
      _o.managedObjectClass,
      _o.managedObjectInstance,
      _o.currentTime,
      _o.setInfoList,
      _o._unrecognizedExtensionsList
    );
  }
}
/* END_OF_SYMBOL_DEFINITION SetListError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SetListError */
/**
 * @summary The Leading Root Component Types of SetListError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SetListError: $.ComponentSpec[] = [
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
    'setInfoList',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SetListError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SetListError */
/**
 * @summary The Trailing Root Component Types of SetListError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SetListError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SetListError */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SetListError */
/**
 * @summary The Extension Addition Component Types of SetListError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SetListError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SetListError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SetListError */
let _cached_decoder_for_SetListError: $.ASN1Decoder<SetListError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SetListError */

/* START_OF_SYMBOL_DEFINITION _decode_SetListError */
/**
 * @summary Decodes an ASN.1 element into a(n) SetListError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SetListError} The decoded data structure.
 */
export function _decode_SetListError(el: _Element) {
  if (!_cached_decoder_for_SetListError) {
    _cached_decoder_for_SetListError = function (el: _Element): SetListError {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let managedObjectClass: OPTIONAL<ObjectClass>;
      let managedObjectInstance: OPTIONAL<ObjectInstance>;
      let currentTime: OPTIONAL<GeneralizedTime>;
      let setInfoList!: SetInfoStatus[];
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
        setInfoList: (_el: _Element): void => {
          setInfoList = $._decode_implicit<SetInfoStatus[]>(() =>
            $._decodeSetOf<SetInfoStatus>(() => _decode_SetInfoStatus)
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SetListError,
        _extension_additions_list_spec_for_SetListError,
        _root_component_type_list_2_spec_for_SetListError,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new SetListError /* SEQUENCE_CONSTRUCTOR_CALL */(
        managedObjectClass,
        managedObjectInstance,
        currentTime,
        setInfoList,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_SetListError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SetListError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SetListError */
let _cached_encoder_for_SetListError: $.ASN1Encoder<SetListError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SetListError */

/* START_OF_SYMBOL_DEFINITION _encode_SetListError */
/**
 * @summary Encodes a(n) SetListError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetListError, encoded as an ASN.1 Element.
 */
export function _encode_SetListError(
  value: SetListError,
  elGetter: $.ASN1Encoder<SetListError>
) {
  if (!_cached_encoder_for_SetListError) {
    _cached_encoder_for_SetListError = function (
      value: SetListError,
      elGetter: $.ASN1Encoder<SetListError>
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
                  $._encodeSetOf<SetInfoStatus>(
                    () => _encode_SetInfoStatus,
                    $.BER
                  ),
                $.BER
              )(value.setInfoList, $.BER),
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
  return _cached_encoder_for_SetListError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SetListError */

/* eslint-enable */
