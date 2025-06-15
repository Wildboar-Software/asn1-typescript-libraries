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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';

/**
 * @summary DbStoreBIR_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbStoreBIR-ResponseParams ::= SEQUENCE {birUuid  BioAPI-UUID
 * }
 * ```
 *
 * @class
 */
export class DbStoreBIR_ResponseParams {
  constructor(
    /**
     * @summary `birUuid`.
     * @public
     * @readonly
     */
    readonly birUuid: BioAPI_UUID
  ) {}

  /**
   * @summary Restructures an object into a DbStoreBIR_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `DbStoreBIR_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbStoreBIR_ResponseParams`.
   * @returns {DbStoreBIR_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof DbStoreBIR_ResponseParams]: DbStoreBIR_ResponseParams[_K];
    }
  ): DbStoreBIR_ResponseParams {
    return new DbStoreBIR_ResponseParams(_o.birUuid);
  }
}


/**
 * @summary The Leading Root Component Types of DbStoreBIR_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbStoreBIR_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'birUuid',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of DbStoreBIR_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbStoreBIR_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DbStoreBIR_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbStoreBIR_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_DbStoreBIR_ResponseParams: $.ASN1Decoder<DbStoreBIR_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DbStoreBIR_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbStoreBIR_ResponseParams} The decoded data structure.
 */
export function _decode_DbStoreBIR_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_DbStoreBIR_ResponseParams) {
    _cached_decoder_for_DbStoreBIR_ResponseParams = function (
      el: _Element
    ): DbStoreBIR_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'DbStoreBIR-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'birUuid';
      let birUuid!: BioAPI_UUID;
      birUuid = _decode_BioAPI_UUID(sequence[0]);
      return new DbStoreBIR_ResponseParams(birUuid);
    };
  }
  return _cached_decoder_for_DbStoreBIR_ResponseParams(el);
}


let _cached_encoder_for_DbStoreBIR_ResponseParams: $.ASN1Encoder<DbStoreBIR_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) DbStoreBIR_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbStoreBIR_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_DbStoreBIR_ResponseParams(
  value: DbStoreBIR_ResponseParams,
  elGetter: $.ASN1Encoder<DbStoreBIR_ResponseParams>
) {
  if (!_cached_encoder_for_DbStoreBIR_ResponseParams) {
    _cached_encoder_for_DbStoreBIR_ResponseParams = function (
      value: DbStoreBIR_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([/* REQUIRED   */ _encode_BioAPI_UUID(value.birUuid, $.BER)])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DbStoreBIR_ResponseParams(value, elGetter);
}


/* eslint-enable */
