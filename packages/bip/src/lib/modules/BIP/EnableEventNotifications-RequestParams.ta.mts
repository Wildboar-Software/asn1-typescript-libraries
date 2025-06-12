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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
import {
  BioAPI_UNIT_EVENT_TYPE_MASK,
  BioAPI_UNIT_EVENT_TYPE_MASK_insert /* IMPORTED_LONG_NAMED_BIT */,
  insert /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_UNIT_EVENT_TYPE_MASK_remove /* IMPORTED_LONG_NAMED_BIT */,
  remove /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_UNIT_EVENT_TYPE_MASK_fault /* IMPORTED_LONG_NAMED_BIT */,
  fault /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_UNIT_EVENT_TYPE_MASK_sourcePresent /* IMPORTED_LONG_NAMED_BIT */,
  sourcePresent /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_UNIT_EVENT_TYPE_MASK_sourceRemoved /* IMPORTED_LONG_NAMED_BIT */,
  sourceRemoved /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_UNIT_EVENT_TYPE_MASK,
  _encode_BioAPI_UNIT_EVENT_TYPE_MASK,
} from '../BIP/BioAPI-UNIT-EVENT-TYPE-MASK.ta.mjs';
export {
  BioAPI_UNIT_EVENT_TYPE_MASK,
  BioAPI_UNIT_EVENT_TYPE_MASK_insert /* IMPORTED_LONG_NAMED_BIT */,
  insert /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_UNIT_EVENT_TYPE_MASK_remove /* IMPORTED_LONG_NAMED_BIT */,
  remove /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_UNIT_EVENT_TYPE_MASK_fault /* IMPORTED_LONG_NAMED_BIT */,
  fault /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_UNIT_EVENT_TYPE_MASK_sourcePresent /* IMPORTED_LONG_NAMED_BIT */,
  sourcePresent /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_UNIT_EVENT_TYPE_MASK_sourceRemoved /* IMPORTED_LONG_NAMED_BIT */,
  sourceRemoved /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_UNIT_EVENT_TYPE_MASK,
  _encode_BioAPI_UNIT_EVENT_TYPE_MASK,
} from '../BIP/BioAPI-UNIT-EVENT-TYPE-MASK.ta.mjs';

/* START_OF_SYMBOL_DEFINITION EnableEventNotifications_RequestParams */
/**
 * @summary EnableEventNotifications_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnableEventNotifications-RequestParams ::= SEQUENCE {
 *   bspProductUuid  BioAPI-UUID,
 *   unitEventTypes  BioAPI-UNIT-EVENT-TYPE-MASK
 * }
 * ```
 *
 * @class
 */
export class EnableEventNotifications_RequestParams {
  constructor(
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `unitEventTypes`.
     * @public
     * @readonly
     */
    readonly unitEventTypes: BioAPI_UNIT_EVENT_TYPE_MASK
  ) {}

  /**
   * @summary Restructures an object into a EnableEventNotifications_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `EnableEventNotifications_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EnableEventNotifications_RequestParams`.
   * @returns {EnableEventNotifications_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof EnableEventNotifications_RequestParams]: EnableEventNotifications_RequestParams[_K];
    }
  ): EnableEventNotifications_RequestParams {
    return new EnableEventNotifications_RequestParams(
      _o.bspProductUuid,
      _o.unitEventTypes
    );
  }
}
/* END_OF_SYMBOL_DEFINITION EnableEventNotifications_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EnableEventNotifications_RequestParams */
/**
 * @summary The Leading Root Component Types of EnableEventNotifications_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EnableEventNotifications_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'unitEventTypes',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EnableEventNotifications_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EnableEventNotifications_RequestParams */
/**
 * @summary The Trailing Root Component Types of EnableEventNotifications_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EnableEventNotifications_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EnableEventNotifications_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EnableEventNotifications_RequestParams */
/**
 * @summary The Extension Addition Component Types of EnableEventNotifications_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EnableEventNotifications_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EnableEventNotifications_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EnableEventNotifications_RequestParams */
let _cached_decoder_for_EnableEventNotifications_RequestParams: $.ASN1Decoder<EnableEventNotifications_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EnableEventNotifications_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_EnableEventNotifications_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) EnableEventNotifications_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnableEventNotifications_RequestParams} The decoded data structure.
 */
export function _decode_EnableEventNotifications_RequestParams(el: _Element) {
  if (!_cached_decoder_for_EnableEventNotifications_RequestParams) {
    _cached_decoder_for_EnableEventNotifications_RequestParams = function (
      el: _Element
    ): EnableEventNotifications_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'EnableEventNotifications-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspProductUuid';
      sequence[1].name = 'unitEventTypes';
      let bspProductUuid!: BioAPI_UUID;
      let unitEventTypes!: BioAPI_UNIT_EVENT_TYPE_MASK;
      bspProductUuid = _decode_BioAPI_UUID(sequence[0]);
      unitEventTypes = _decode_BioAPI_UNIT_EVENT_TYPE_MASK(sequence[1]);
      return new EnableEventNotifications_RequestParams(
        bspProductUuid,
        unitEventTypes
      );
    };
  }
  return _cached_decoder_for_EnableEventNotifications_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EnableEventNotifications_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EnableEventNotifications_RequestParams */
let _cached_encoder_for_EnableEventNotifications_RequestParams: $.ASN1Encoder<EnableEventNotifications_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EnableEventNotifications_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_EnableEventNotifications_RequestParams */
/**
 * @summary Encodes a(n) EnableEventNotifications_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnableEventNotifications_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_EnableEventNotifications_RequestParams(
  value: EnableEventNotifications_RequestParams,
  elGetter: $.ASN1Encoder<EnableEventNotifications_RequestParams>
) {
  if (!_cached_encoder_for_EnableEventNotifications_RequestParams) {
    _cached_encoder_for_EnableEventNotifications_RequestParams = function (
      value: EnableEventNotifications_RequestParams,
      elGetter: $.ASN1Encoder<EnableEventNotifications_RequestParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UNIT_EVENT_TYPE_MASK(
              value.unitEventTypes,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_EnableEventNotifications_RequestParams(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_EnableEventNotifications_RequestParams */

/* eslint-enable */
