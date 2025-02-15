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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
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
} from '../BIP/BioAPI-UNIT-EVENT-TYPE-MASK.ta';
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
} from '../BIP/BioAPI-UNIT-EVENT-TYPE-MASK.ta';

/* START_OF_SYMBOL_DEFINITION EnableCallParams */
/**
 * @summary EnableCallParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnableCallParams ::= SEQUENCE {
 *   bspUuid         BioAPI-UUID,
 *   unitEventTypes  BioAPI-UNIT-EVENT-TYPE-MASK
 * }
 * ```
 *
 * @class
 */
export class EnableCallParams {
  constructor(
    /**
     * @summary `bspUuid`.
     * @public
     * @readonly
     */
    readonly bspUuid: BioAPI_UUID,
    /**
     * @summary `unitEventTypes`.
     * @public
     * @readonly
     */
    readonly unitEventTypes: BioAPI_UNIT_EVENT_TYPE_MASK
  ) {}

  /**
   * @summary Restructures an object into a EnableCallParams
   * @description
   *
   * This takes an `object` and converts it to a `EnableCallParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EnableCallParams`.
   * @returns {EnableCallParams}
   */
  public static _from_object(
    _o: { [_K in keyof EnableCallParams]: EnableCallParams[_K] }
  ): EnableCallParams {
    return new EnableCallParams(_o.bspUuid, _o.unitEventTypes);
  }
}
/* END_OF_SYMBOL_DEFINITION EnableCallParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EnableCallParams */
/**
 * @summary The Leading Root Component Types of EnableCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EnableCallParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspUuid',
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EnableCallParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EnableCallParams */
/**
 * @summary The Trailing Root Component Types of EnableCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EnableCallParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EnableCallParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EnableCallParams */
/**
 * @summary The Extension Addition Component Types of EnableCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EnableCallParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EnableCallParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EnableCallParams */
let _cached_decoder_for_EnableCallParams: $.ASN1Decoder<EnableCallParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EnableCallParams */

/* START_OF_SYMBOL_DEFINITION _decode_EnableCallParams */
/**
 * @summary Decodes an ASN.1 element into a(n) EnableCallParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnableCallParams} The decoded data structure.
 */
export function _decode_EnableCallParams(el: _Element) {
  if (!_cached_decoder_for_EnableCallParams) {
    _cached_decoder_for_EnableCallParams = function (
      el: _Element
    ): EnableCallParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'EnableCallParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspUuid';
      sequence[1].name = 'unitEventTypes';
      let bspUuid!: BioAPI_UUID;
      let unitEventTypes!: BioAPI_UNIT_EVENT_TYPE_MASK;
      bspUuid = _decode_BioAPI_UUID(sequence[0]);
      unitEventTypes = _decode_BioAPI_UNIT_EVENT_TYPE_MASK(sequence[1]);
      return new EnableCallParams(bspUuid, unitEventTypes);
    };
  }
  return _cached_decoder_for_EnableCallParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EnableCallParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EnableCallParams */
let _cached_encoder_for_EnableCallParams: $.ASN1Encoder<EnableCallParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EnableCallParams */

/* START_OF_SYMBOL_DEFINITION _encode_EnableCallParams */
/**
 * @summary Encodes a(n) EnableCallParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnableCallParams, encoded as an ASN.1 Element.
 */
export function _encode_EnableCallParams(
  value: EnableCallParams,
  elGetter: $.ASN1Encoder<EnableCallParams>
) {
  if (!_cached_encoder_for_EnableCallParams) {
    _cached_encoder_for_EnableCallParams = function (
      value: EnableCallParams,
      elGetter: $.ASN1Encoder<EnableCallParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspUuid, $.BER),
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
  return _cached_encoder_for_EnableCallParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EnableCallParams */

/* eslint-enable */
