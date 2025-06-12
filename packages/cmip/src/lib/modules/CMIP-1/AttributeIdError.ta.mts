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
  AttributeIdError_errorStatus,
  _enum_for_AttributeIdError_errorStatus,
  AttributeIdError_errorStatus_accessDenied /* IMPORTED_LONG_ENUMERATION_ITEM */,
  accessDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeIdError_errorStatus_noSuchAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */,
  noSuchAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AttributeIdError_errorStatus,
  _encode_AttributeIdError_errorStatus,
} from '../CMIP-1/AttributeIdError-errorStatus.ta.mjs';
export {
  AttributeIdError_errorStatus,
  _enum_for_AttributeIdError_errorStatus,
  AttributeIdError_errorStatus_accessDenied /* IMPORTED_LONG_ENUMERATION_ITEM */,
  accessDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeIdError_errorStatus_noSuchAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */,
  noSuchAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AttributeIdError_errorStatus,
  _encode_AttributeIdError_errorStatus,
} from '../CMIP-1/AttributeIdError-errorStatus.ta.mjs';
import {
  AttributeId,
  _decode_AttributeId,
  _encode_AttributeId,
} from '../CMIP-1/AttributeId.ta.mjs';
export {
  AttributeId,
  _decode_AttributeId,
  _encode_AttributeId,
} from '../CMIP-1/AttributeId.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AttributeIdError */
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
/* END_OF_SYMBOL_DEFINITION AttributeIdError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeIdError */
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
    $.hasTag(_TagClass.universal, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec('attributeId', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeIdError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeIdError */
/**
 * @summary The Trailing Root Component Types of AttributeIdError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeIdError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeIdError */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeIdError */
/**
 * @summary The Extension Addition Component Types of AttributeIdError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeIdError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeIdError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIdError */
let _cached_decoder_for_AttributeIdError: $.ASN1Decoder<AttributeIdError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIdError */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeIdError */
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
/* END_OF_SYMBOL_DEFINITION _decode_AttributeIdError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIdError */
let _cached_encoder_for_AttributeIdError: $.ASN1Encoder<AttributeIdError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIdError */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeIdError */
/**
 * @summary Encodes a(n) AttributeIdError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIdError, encoded as an ASN.1 Element.
 */
export function _encode_AttributeIdError(
  value: AttributeIdError,
  elGetter: $.ASN1Encoder<AttributeIdError>
) {
  if (!_cached_encoder_for_AttributeIdError) {
    _cached_encoder_for_AttributeIdError = function (
      value: AttributeIdError,
      elGetter: $.ASN1Encoder<AttributeIdError>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_AttributeIdError */

/* eslint-enable */
