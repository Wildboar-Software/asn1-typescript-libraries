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
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta';
export {
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta';

/* START_OF_SYMBOL_DEFINITION RegisterBSP_RequestParams */
/**
 * @summary RegisterBSP_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisterBSP-RequestParams ::= SEQUENCE {
 *   bspSchema  BioAPI-BSP-SCHEMA,
 *   update     BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class RegisterBSP_RequestParams {
  constructor(
    /**
     * @summary `bspSchema`.
     * @public
     * @readonly
     */
    readonly bspSchema: BioAPI_BSP_SCHEMA,
    /**
     * @summary `update`.
     * @public
     * @readonly
     */
    readonly update: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a RegisterBSP_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `RegisterBSP_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RegisterBSP_RequestParams`.
   * @returns {RegisterBSP_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof RegisterBSP_RequestParams]: RegisterBSP_RequestParams[_K];
    }
  ): RegisterBSP_RequestParams {
    return new RegisterBSP_RequestParams(_o.bspSchema, _o.update);
  }
}
/* END_OF_SYMBOL_DEFINITION RegisterBSP_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RegisterBSP_RequestParams */
/**
 * @summary The Leading Root Component Types of RegisterBSP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RegisterBSP_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspSchema',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'update',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RegisterBSP_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RegisterBSP_RequestParams */
/**
 * @summary The Trailing Root Component Types of RegisterBSP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RegisterBSP_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RegisterBSP_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RegisterBSP_RequestParams */
/**
 * @summary The Extension Addition Component Types of RegisterBSP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RegisterBSP_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RegisterBSP_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisterBSP_RequestParams */
let _cached_decoder_for_RegisterBSP_RequestParams: $.ASN1Decoder<RegisterBSP_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisterBSP_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_RegisterBSP_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) RegisterBSP_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegisterBSP_RequestParams} The decoded data structure.
 */
export function _decode_RegisterBSP_RequestParams(el: _Element) {
  if (!_cached_decoder_for_RegisterBSP_RequestParams) {
    _cached_decoder_for_RegisterBSP_RequestParams = function (
      el: _Element
    ): RegisterBSP_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'RegisterBSP-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspSchema';
      sequence[1].name = 'update';
      let bspSchema!: BioAPI_BSP_SCHEMA;
      let update!: BOOLEAN;
      bspSchema = _decode_BioAPI_BSP_SCHEMA(sequence[0]);
      update = $._decodeBoolean(sequence[1]);
      return new RegisterBSP_RequestParams(bspSchema, update);
    };
  }
  return _cached_decoder_for_RegisterBSP_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RegisterBSP_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisterBSP_RequestParams */
let _cached_encoder_for_RegisterBSP_RequestParams: $.ASN1Encoder<RegisterBSP_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisterBSP_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_RegisterBSP_RequestParams */
/**
 * @summary Encodes a(n) RegisterBSP_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterBSP_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_RegisterBSP_RequestParams(
  value: RegisterBSP_RequestParams,
  elGetter: $.ASN1Encoder<RegisterBSP_RequestParams>
) {
  if (!_cached_encoder_for_RegisterBSP_RequestParams) {
    _cached_encoder_for_RegisterBSP_RequestParams = function (
      value: RegisterBSP_RequestParams,
      elGetter: $.ASN1Encoder<RegisterBSP_RequestParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BSP_SCHEMA(value.bspSchema, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.update, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RegisterBSP_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RegisterBSP_RequestParams */

/* eslint-enable */
