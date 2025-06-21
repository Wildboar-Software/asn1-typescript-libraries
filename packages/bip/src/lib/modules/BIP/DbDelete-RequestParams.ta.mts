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
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';

/**
 * @summary DbDelete_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbDelete-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   dbUuid             BioAPI-UUID
 * }
 * ```
 *
 * @class
 */
export class DbDelete_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `dbUuid`.
     * @public
     * @readonly
     */
    readonly dbUuid: BioAPI_UUID
  ) {}

  /**
   * @summary Restructures an object into a DbDelete_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `DbDelete_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbDelete_RequestParams`.
   * @returns {DbDelete_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof DbDelete_RequestParams]: DbDelete_RequestParams[_K] }
  ): DbDelete_RequestParams {
    return new DbDelete_RequestParams(_o.originalBSPHandle, _o.dbUuid);
  }
}


/**
 * @summary The Leading Root Component Types of DbDelete_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbDelete_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'dbUuid',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of DbDelete_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbDelete_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DbDelete_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbDelete_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_DbDelete_RequestParams: $.ASN1Decoder<DbDelete_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DbDelete_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbDelete_RequestParams} The decoded data structure.
 */
export function _decode_DbDelete_RequestParams(el: _Element) {
  if (!_cached_decoder_for_DbDelete_RequestParams) {
    _cached_decoder_for_DbDelete_RequestParams = function (
      el: _Element
    ): DbDelete_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'DbDelete-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'dbUuid';
      let originalBSPHandle!: BioAPI_HANDLE;
      let dbUuid!: BioAPI_UUID;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      dbUuid = _decode_BioAPI_UUID(sequence[1]);
      return new DbDelete_RequestParams(originalBSPHandle, dbUuid);
    };
  }
  return _cached_decoder_for_DbDelete_RequestParams(el);
}


let _cached_encoder_for_DbDelete_RequestParams: $.ASN1Encoder<DbDelete_RequestParams> | null = null;


/**
 * @summary Encodes a(n) DbDelete_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbDelete_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_DbDelete_RequestParams(
  value: DbDelete_RequestParams,
  elGetter: $.ASN1Encoder<DbDelete_RequestParams>
) {
  if (!_cached_encoder_for_DbDelete_RequestParams) {
    _cached_encoder_for_DbDelete_RequestParams = function (
      value: DbDelete_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.dbUuid, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DbDelete_RequestParams(value, elGetter);
}


/* eslint-enable */
