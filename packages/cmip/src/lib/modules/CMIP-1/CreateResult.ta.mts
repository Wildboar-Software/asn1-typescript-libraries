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
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta.mjs';

/**
 * @summary CreateResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateResult ::= SEQUENCE {
 *   managedObjectClass     ObjectClass OPTIONAL,
 *   managedObjectInstance  ObjectInstance OPTIONAL, -- shall be returned if omitted from CreateArgument
 *   currentTime            [5] IMPLICIT GeneralizedTime OPTIONAL,
 *   attributeList          [6] IMPLICIT SET OF Attribute OPTIONAL,
 *   ...
 * }
 * ```
 *
 */
export class CreateResult {
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
   * @summary Restructures an object into a CreateResult
   * @description
   *
   * This takes an `object` and converts it to a `CreateResult`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CreateResult`.
   * @returns {CreateResult}
   */
  public static _from_object(
    _o: { [_K in keyof CreateResult]: CreateResult[_K] }
  ): CreateResult {
    return new CreateResult(
      _o.managedObjectClass,
      _o.managedObjectInstance,
      _o.currentTime,
      _o.attributeList,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of CreateResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CreateResult: $.ComponentSpec[] = [
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
    'attributeList',
    true,
    $.hasTag(_TagClass.context, 6)
  ),
];


/**
 * @summary The Trailing Root Component Types of CreateResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CreateResult: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CreateResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CreateResult: $.ComponentSpec[] = [];


let _cached_decoder_for_CreateResult: $.ASN1Decoder<CreateResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CreateResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateResult} The decoded data structure.
 */
export function _decode_CreateResult(el: _Element): CreateResult {
  if (!_cached_decoder_for_CreateResult) {
    _cached_decoder_for_CreateResult = function (el: _Element): CreateResult {
      let managedObjectClass: OPTIONAL<ObjectClass>;
      let managedObjectInstance: OPTIONAL<ObjectInstance>;
      let currentTime: OPTIONAL<GeneralizedTime>;
      let attributeList: OPTIONAL<Attribute[]>;
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
        attributeList: (_el: _Element): void => {
          attributeList = $._decode_implicit<Attribute[]>(() =>
            $._decodeSetOf<Attribute>(() => _decode_Attribute)
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CreateResult,
        _extension_additions_list_spec_for_CreateResult,
        _root_component_type_list_2_spec_for_CreateResult,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new CreateResult (
        managedObjectClass,
        managedObjectInstance,
        currentTime,
        attributeList,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_CreateResult(el);
}


let _cached_encoder_for_CreateResult: $.ASN1Encoder<CreateResult> | null = null;


/**
 * @summary Encodes a(n) CreateResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateResult, encoded as an ASN.1 Element.
 */
export function _encode_CreateResult(
  value: CreateResult,
  elGetter: $.ASN1Encoder<CreateResult>
): _Element {
  if (!_cached_encoder_for_CreateResult) {
    _cached_encoder_for_CreateResult = function (
      value: CreateResult    ): _Element {
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
  return _cached_encoder_for_CreateResult(value, elGetter);
}


/* eslint-enable */
