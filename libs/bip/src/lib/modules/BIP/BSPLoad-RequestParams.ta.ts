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

/* START_OF_SYMBOL_DEFINITION BSPLoad_RequestParams */
/**
 * @summary BSPLoad_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BSPLoad-RequestParams ::= SEQUENCE {
 *   bspProductUuid         BioAPI-UUID,
 *   unitEventSubscription  BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class BSPLoad_RequestParams {
  constructor(
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `unitEventSubscription`.
     * @public
     * @readonly
     */
    readonly unitEventSubscription: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a BSPLoad_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `BSPLoad_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BSPLoad_RequestParams`.
   * @returns {BSPLoad_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof BSPLoad_RequestParams]: BSPLoad_RequestParams[_K] }
  ): BSPLoad_RequestParams {
    return new BSPLoad_RequestParams(
      _o.bspProductUuid,
      _o.unitEventSubscription
    );
  }
}
/* END_OF_SYMBOL_DEFINITION BSPLoad_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BSPLoad_RequestParams */
/**
 * @summary The Leading Root Component Types of BSPLoad_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BSPLoad_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'unitEventSubscription',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BSPLoad_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BSPLoad_RequestParams */
/**
 * @summary The Trailing Root Component Types of BSPLoad_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BSPLoad_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BSPLoad_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BSPLoad_RequestParams */
/**
 * @summary The Extension Addition Component Types of BSPLoad_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BSPLoad_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BSPLoad_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BSPLoad_RequestParams */
let _cached_decoder_for_BSPLoad_RequestParams: $.ASN1Decoder<BSPLoad_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BSPLoad_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_BSPLoad_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) BSPLoad_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BSPLoad_RequestParams} The decoded data structure.
 */
export function _decode_BSPLoad_RequestParams(el: _Element) {
  if (!_cached_decoder_for_BSPLoad_RequestParams) {
    _cached_decoder_for_BSPLoad_RequestParams = function (
      el: _Element
    ): BSPLoad_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BSPLoad-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspProductUuid';
      sequence[1].name = 'unitEventSubscription';
      let bspProductUuid!: BioAPI_UUID;
      let unitEventSubscription!: BOOLEAN;
      bspProductUuid = _decode_BioAPI_UUID(sequence[0]);
      unitEventSubscription = $._decodeBoolean(sequence[1]);
      return new BSPLoad_RequestParams(bspProductUuid, unitEventSubscription);
    };
  }
  return _cached_decoder_for_BSPLoad_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BSPLoad_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BSPLoad_RequestParams */
let _cached_encoder_for_BSPLoad_RequestParams: $.ASN1Encoder<BSPLoad_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BSPLoad_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_BSPLoad_RequestParams */
/**
 * @summary Encodes a(n) BSPLoad_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSPLoad_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_BSPLoad_RequestParams(
  value: BSPLoad_RequestParams,
  elGetter: $.ASN1Encoder<BSPLoad_RequestParams>
) {
  if (!_cached_encoder_for_BSPLoad_RequestParams) {
    _cached_encoder_for_BSPLoad_RequestParams = function (
      value: BSPLoad_RequestParams,
      elGetter: $.ASN1Encoder<BSPLoad_RequestParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ $._encodeBoolean(
              value.unitEventSubscription,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BSPLoad_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BSPLoad_RequestParams */

/* eslint-enable */
