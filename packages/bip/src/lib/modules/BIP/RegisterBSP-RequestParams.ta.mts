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
import * as $ from '@wildboar/asn1/functional';
import {
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta.mjs';

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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'update',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of RegisterBSP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RegisterBSP_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RegisterBSP_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RegisterBSP_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_RegisterBSP_RequestParams: $.ASN1Decoder<RegisterBSP_RequestParams> | null = null;


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


let _cached_encoder_for_RegisterBSP_RequestParams: $.ASN1Encoder<RegisterBSP_RequestParams> | null = null;


/**
 * @summary Encodes a(n) RegisterBSP_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterBSP_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_RegisterBSP_RequestParams(
  value: RegisterBSP_RequestParams,
  elGetter: $.ASN1Encoder<RegisterBSP_RequestParams>
) {
  if (!_cached_encoder_for_RegisterBSP_RequestParams) {
    _cached_encoder_for_RegisterBSP_RequestParams = function (
      value: RegisterBSP_RequestParams    ): _Element {
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


/* eslint-enable */
