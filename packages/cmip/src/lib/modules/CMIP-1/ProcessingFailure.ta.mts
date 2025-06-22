/* eslint-disable */
import {
  OPTIONAL,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
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
  SpecificErrorInfo,
  _decode_SpecificErrorInfo,
  _encode_SpecificErrorInfo,
} from '../CMIP-1/SpecificErrorInfo.ta.mjs';

/**
 * @summary ProcessingFailure
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingFailure ::= SEQUENCE {
 *   managedObjectClass     ObjectClass,
 *   managedObjectInstance  ObjectInstance OPTIONAL,
 *   specificErrorInfo      [5]  SpecificErrorInfo,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class ProcessingFailure {
  constructor(
    /**
     * @summary `managedObjectClass`.
     * @public
     * @readonly
     */
    readonly managedObjectClass: ObjectClass,
    /**
     * @summary `managedObjectInstance`.
     * @public
     * @readonly
     */
    readonly managedObjectInstance: OPTIONAL<ObjectInstance>,
    /**
     * @summary `specificErrorInfo`.
     * @public
     * @readonly
     */
    readonly specificErrorInfo: SpecificErrorInfo,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a ProcessingFailure
   * @description
   *
   * This takes an `object` and converts it to a `ProcessingFailure`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ProcessingFailure`.
   * @returns {ProcessingFailure}
   */
  public static _from_object(
    _o: { [_K in keyof ProcessingFailure]: ProcessingFailure[_K] }
  ): ProcessingFailure {
    return new ProcessingFailure(
      _o.managedObjectClass,
      _o.managedObjectInstance,
      _o.specificErrorInfo,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of ProcessingFailure
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProcessingFailure: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'managedObjectClass',
    false,
    $.hasAnyTag
  ),
  new $.ComponentSpec(
    'managedObjectInstance',
    true,
    $.hasAnyTag
  ),
  new $.ComponentSpec(
    'specificErrorInfo',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
];


/**
 * @summary The Trailing Root Component Types of ProcessingFailure
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProcessingFailure: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ProcessingFailure
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProcessingFailure: $.ComponentSpec[] = [];


let _cached_decoder_for_ProcessingFailure: $.ASN1Decoder<ProcessingFailure> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProcessingFailure
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProcessingFailure} The decoded data structure.
 */
export function _decode_ProcessingFailure(el: _Element) {
  if (!_cached_decoder_for_ProcessingFailure) {
    _cached_decoder_for_ProcessingFailure = function (
      el: _Element
    ): ProcessingFailure {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let managedObjectClass!: ObjectClass;
      let managedObjectInstance: OPTIONAL<ObjectInstance>;
      let specificErrorInfo!: SpecificErrorInfo;
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
        specificErrorInfo: (_el: _Element): void => {
          specificErrorInfo = $._decode_explicit<SpecificErrorInfo>(
            () => _decode_SpecificErrorInfo
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ProcessingFailure,
        _extension_additions_list_spec_for_ProcessingFailure,
        _root_component_type_list_2_spec_for_ProcessingFailure,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new ProcessingFailure /* SEQUENCE_CONSTRUCTOR_CALL */(
        managedObjectClass,
        managedObjectInstance,
        specificErrorInfo,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_ProcessingFailure(el);
}


let _cached_encoder_for_ProcessingFailure: $.ASN1Encoder<ProcessingFailure> | null = null;


/**
 * @summary Encodes a(n) ProcessingFailure into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessingFailure, encoded as an ASN.1 Element.
 */
export function _encode_ProcessingFailure(
  value: ProcessingFailure,
  elGetter: $.ASN1Encoder<ProcessingFailure>
) {
  if (!_cached_encoder_for_ProcessingFailure) {
    _cached_encoder_for_ProcessingFailure = function (
      value: ProcessingFailure    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* REQUIRED   */ _encode_ObjectClass(
                value.managedObjectClass,
                $.BER
              ),
              /* IF_ABSENT  */ value.managedObjectInstance === undefined
                ? undefined
                : _encode_ObjectInstance(value.managedObjectInstance, $.BER),
              /* REQUIRED   */ $._encode_explicit(
                _TagClass.context,
                5,
                () => _encode_SpecificErrorInfo,
                $.BER
              )(value.specificErrorInfo, $.BER),
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
  return _cached_encoder_for_ProcessingFailure(value, elGetter);
}


/* eslint-enable */
