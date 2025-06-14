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
  BioAPI_DB_HANDLE,
  _decode_BioAPI_DB_HANDLE,
  _encode_BioAPI_DB_HANDLE,
} from '../BIP/BioAPI-DB-HANDLE.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DbClose_RequestParams */
/**
 * @summary DbClose_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbClose-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   dbHandle           BioAPI-DB-HANDLE
 * }
 * ```
 *
 * @class
 */
export class DbClose_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `dbHandle`.
     * @public
     * @readonly
     */
    readonly dbHandle: BioAPI_DB_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a DbClose_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `DbClose_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbClose_RequestParams`.
   * @returns {DbClose_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof DbClose_RequestParams]: DbClose_RequestParams[_K] }
  ): DbClose_RequestParams {
    return new DbClose_RequestParams(_o.originalBSPHandle, _o.dbHandle);
  }
}
/* END_OF_SYMBOL_DEFINITION DbClose_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DbClose_RequestParams */
/**
 * @summary The Leading Root Component Types of DbClose_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbClose_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'dbHandle',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DbClose_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DbClose_RequestParams */
/**
 * @summary The Trailing Root Component Types of DbClose_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbClose_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DbClose_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DbClose_RequestParams */
/**
 * @summary The Extension Addition Component Types of DbClose_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbClose_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DbClose_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DbClose_RequestParams */
let _cached_decoder_for_DbClose_RequestParams: $.ASN1Decoder<DbClose_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DbClose_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_DbClose_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) DbClose_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbClose_RequestParams} The decoded data structure.
 */
export function _decode_DbClose_RequestParams(el: _Element) {
  if (!_cached_decoder_for_DbClose_RequestParams) {
    _cached_decoder_for_DbClose_RequestParams = function (
      el: _Element
    ): DbClose_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'DbClose-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'dbHandle';
      let originalBSPHandle!: BioAPI_HANDLE;
      let dbHandle!: BioAPI_DB_HANDLE;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      dbHandle = _decode_BioAPI_DB_HANDLE(sequence[1]);
      return new DbClose_RequestParams(originalBSPHandle, dbHandle);
    };
  }
  return _cached_decoder_for_DbClose_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DbClose_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DbClose_RequestParams */
let _cached_encoder_for_DbClose_RequestParams: $.ASN1Encoder<DbClose_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DbClose_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_DbClose_RequestParams */
/**
 * @summary Encodes a(n) DbClose_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbClose_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_DbClose_RequestParams(
  value: DbClose_RequestParams,
  elGetter: $.ASN1Encoder<DbClose_RequestParams>
) {
  if (!_cached_encoder_for_DbClose_RequestParams) {
    _cached_encoder_for_DbClose_RequestParams = function (
      value: DbClose_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_DB_HANDLE(value.dbHandle, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DbClose_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DbClose_RequestParams */

/* eslint-enable */
