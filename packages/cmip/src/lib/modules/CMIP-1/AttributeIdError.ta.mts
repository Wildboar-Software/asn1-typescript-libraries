/* eslint-disable */
import {
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
  AttributeIdError_errorStatus,
  _enum_for_AttributeIdError_errorStatus,
  _decode_AttributeIdError_errorStatus,
  _encode_AttributeIdError_errorStatus,
} from '../CMIP-1/AttributeIdError-errorStatus.ta.mjs';
import {
  AttributeId,
  _decode_AttributeId,
  _encode_AttributeId,
} from '../CMIP-1/AttributeId.ta.mjs';

/**
 * @summary AttributeIdError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIdError ::= SEQUENCE {
 *   errorStatus  ENUMERATED {accessDenied(2), noSuchAttribute(5), ...
 *                            },
 *   attributeId  AttributeId,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class AttributeIdError {
  constructor(
    /**
     * @summary `errorStatus`.
     * @public
     * @readonly
     */
    readonly errorStatus: AttributeIdError_errorStatus,
    /**
     * @summary `attributeId`.
     * @public
     * @readonly
     */
    readonly attributeId: AttributeId,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a AttributeIdError
   * @description
   *
   * This takes an `object` and converts it to a `AttributeIdError`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AttributeIdError`.
   * @returns {AttributeIdError}
   */
  public static _from_object(
    _o: { [_K in keyof AttributeIdError]: AttributeIdError[_K] }
  ): AttributeIdError {
    return new AttributeIdError(
      _o.errorStatus,
      _o.attributeId,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary The enum used as the type of the component `errorStatus`
   * @public
   * @static
   */

  public static _enum_for_errorStatus = _enum_for_AttributeIdError_errorStatus;
}


/**
 * @summary The Leading Root Component Types of AttributeIdError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeIdError: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'errorStatus',
    false,
    $.hasTag(_TagClass.universal, 10)
  ),
  new $.ComponentSpec('attributeId', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of AttributeIdError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeIdError: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AttributeIdError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeIdError: $.ComponentSpec[] = [];


let _cached_decoder_for_AttributeIdError: $.ASN1Decoder<AttributeIdError> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIdError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeIdError} The decoded data structure.
 */
export function _decode_AttributeIdError(el: _Element) {
  if (!_cached_decoder_for_AttributeIdError) {
    _cached_decoder_for_AttributeIdError = function (
      el: _Element
    ): AttributeIdError {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'AttributeIdError contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'errorStatus';
      sequence[1].name = 'attributeId';
      let errorStatus!: AttributeIdError_errorStatus;
      let attributeId!: AttributeId;
      errorStatus = _decode_AttributeIdError_errorStatus(sequence[0]);
      attributeId = _decode_AttributeId(sequence[1]);
      return new AttributeIdError(errorStatus, attributeId, sequence.slice(2));
    };
  }
  return _cached_decoder_for_AttributeIdError(el);
}


let _cached_encoder_for_AttributeIdError: $.ASN1Encoder<AttributeIdError> | null = null;


/**
 * @summary Encodes a(n) AttributeIdError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIdError, encoded as an ASN.1 Element.
 */
export function _encode_AttributeIdError(
  value: AttributeIdError,
  elGetter: $.ASN1Encoder<AttributeIdError>
) {
  if (!_cached_encoder_for_AttributeIdError) {
    _cached_encoder_for_AttributeIdError = function (
      value: AttributeIdError    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* REQUIRED   */ _encode_AttributeIdError_errorStatus(
                value.errorStatus,
                $.BER
              ),
              /* REQUIRED   */ _encode_AttributeId(value.attributeId, $.BER),
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
  return _cached_encoder_for_AttributeIdError(value, elGetter);
}


/* eslint-enable */
