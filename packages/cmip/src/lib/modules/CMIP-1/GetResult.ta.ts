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
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta.js';
export {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta.js';

/* START_OF_SYMBOL_DEFINITION GetResult */
/**
 * @summary GetResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GetResult ::= SEQUENCE {
 *   managedObjectClass     ObjectClass OPTIONAL,
 *   managedObjectInstance  ObjectInstance OPTIONAL,
 *   currentTime            [5] IMPLICIT GeneralizedTime OPTIONAL,
 *   attributeList          [6] IMPLICIT SET OF Attribute OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class GetResult {
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
     * @summary `attributeList`.
     * @public
     * @readonly
     */
    readonly attributeList: OPTIONAL<Attribute[]>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a GetResult
   * @description
   *
   * This takes an `object` and converts it to a `GetResult`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GetResult`.
   * @returns {GetResult}
   */
  public static _from_object(
    _o: { [_K in keyof GetResult]: GetResult[_K] }
  ): GetResult {
    return new GetResult(
      _o.managedObjectClass,
      _o.managedObjectInstance,
      _o.currentTime,
      _o.attributeList,
      _o._unrecognizedExtensionsList
    );
  }
}
/* END_OF_SYMBOL_DEFINITION GetResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GetResult */
/**
 * @summary The Leading Root Component Types of GetResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GetResult: $.ComponentSpec[] = [
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
    'attributeList',
    true,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GetResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GetResult */
/**
 * @summary The Trailing Root Component Types of GetResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GetResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GetResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GetResult */
/**
 * @summary The Extension Addition Component Types of GetResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GetResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GetResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GetResult */
let _cached_decoder_for_GetResult: $.ASN1Decoder<GetResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GetResult */

/* START_OF_SYMBOL_DEFINITION _decode_GetResult */
/**
 * @summary Decodes an ASN.1 element into a(n) GetResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetResult} The decoded data structure.
 */
export function _decode_GetResult(el: _Element) {
  if (!_cached_decoder_for_GetResult) {
    _cached_decoder_for_GetResult = function (el: _Element): GetResult {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let managedObjectClass: OPTIONAL<ObjectClass>;
      let managedObjectInstance: OPTIONAL<ObjectInstance>;
      let currentTime: OPTIONAL<GeneralizedTime>;
      let attributeList: OPTIONAL<Attribute[]>;
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
        attributeList: (_el: _Element): void => {
          attributeList = $._decode_implicit<Attribute[]>(() =>
            $._decodeSetOf<Attribute>(() => _decode_Attribute)
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_GetResult,
        _extension_additions_list_spec_for_GetResult,
        _root_component_type_list_2_spec_for_GetResult,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new GetResult /* SEQUENCE_CONSTRUCTOR_CALL */(
        managedObjectClass,
        managedObjectInstance,
        currentTime,
        attributeList,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_GetResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GetResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GetResult */
let _cached_encoder_for_GetResult: $.ASN1Encoder<GetResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GetResult */

/* START_OF_SYMBOL_DEFINITION _encode_GetResult */
/**
 * @summary Encodes a(n) GetResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetResult, encoded as an ASN.1 Element.
 */
export function _encode_GetResult(
  value: GetResult,
  elGetter: $.ASN1Encoder<GetResult>
) {
  if (!_cached_encoder_for_GetResult) {
    _cached_encoder_for_GetResult = function (
      value: GetResult,
      elGetter: $.ASN1Encoder<GetResult>
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
              /* IF_ABSENT  */ value.attributeList === undefined
                ? undefined
                : $._encode_implicit(
                    _TagClass.context,
                    6,
                    () =>
                      $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER),
                    $.BER
                  )(value.attributeList, $.BER),
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
  return _cached_encoder_for_GetResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GetResult */

/* eslint-enable */
