/* eslint-disable */
import {
  BOOLEAN,
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
  BioAPI_BFP_SCHEMA,
  _decode_BioAPI_BFP_SCHEMA,
  _encode_BioAPI_BFP_SCHEMA,
} from '../BIP/BioAPI-BFP-SCHEMA.ta.mjs';

/**
 * @summary RegisterBFP_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisterBFP-RequestParams ::= SEQUENCE {
 *   bfpSchema  BioAPI-BFP-SCHEMA,
 *   update     BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class RegisterBFP_RequestParams {
  constructor(
    /**
     * @summary `bfpSchema`.
     * @public
     * @readonly
     */
    readonly bfpSchema: BioAPI_BFP_SCHEMA,
    /**
     * @summary `update`.
     * @public
     * @readonly
     */
    readonly update: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a RegisterBFP_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `RegisterBFP_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RegisterBFP_RequestParams`.
   * @returns {RegisterBFP_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof RegisterBFP_RequestParams]: RegisterBFP_RequestParams[_K];
    }
  ): RegisterBFP_RequestParams {
    return new RegisterBFP_RequestParams(_o.bfpSchema, _o.update);
  }
}


/**
 * @summary The Leading Root Component Types of RegisterBFP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RegisterBFP_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bfpSchema',
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


/**
 * @summary The Trailing Root Component Types of RegisterBFP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RegisterBFP_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RegisterBFP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RegisterBFP_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_RegisterBFP_RequestParams: $.ASN1Decoder<RegisterBFP_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RegisterBFP_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegisterBFP_RequestParams} The decoded data structure.
 */
export function _decode_RegisterBFP_RequestParams(el: _Element) {
  if (!_cached_decoder_for_RegisterBFP_RequestParams) {
    _cached_decoder_for_RegisterBFP_RequestParams = function (
      el: _Element
    ): RegisterBFP_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'RegisterBFP-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bfpSchema';
      sequence[1].name = 'update';
      let bfpSchema!: BioAPI_BFP_SCHEMA;
      let update!: BOOLEAN;
      bfpSchema = _decode_BioAPI_BFP_SCHEMA(sequence[0]);
      update = $._decodeBoolean(sequence[1]);
      return new RegisterBFP_RequestParams(bfpSchema, update);
    };
  }
  return _cached_decoder_for_RegisterBFP_RequestParams(el);
}


let _cached_encoder_for_RegisterBFP_RequestParams: $.ASN1Encoder<RegisterBFP_RequestParams> | null = null;


/**
 * @summary Encodes a(n) RegisterBFP_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterBFP_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_RegisterBFP_RequestParams(
  value: RegisterBFP_RequestParams,
  elGetter: $.ASN1Encoder<RegisterBFP_RequestParams>
) {
  if (!_cached_encoder_for_RegisterBFP_RequestParams) {
    _cached_encoder_for_RegisterBFP_RequestParams = function (
      value: RegisterBFP_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BFP_SCHEMA(value.bfpSchema, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.update, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RegisterBFP_RequestParams(value, elGetter);
}


/* eslint-enable */
