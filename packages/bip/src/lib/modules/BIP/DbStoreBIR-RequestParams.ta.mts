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
  BioAPI_INPUT_BIR,
  _decode_BioAPI_INPUT_BIR,
  _encode_BioAPI_INPUT_BIR,
} from '../BIP/BioAPI-INPUT-BIR.ta.mjs';
import {
  BioAPI_DB_HANDLE,
  _decode_BioAPI_DB_HANDLE,
  _encode_BioAPI_DB_HANDLE,
} from '../BIP/BioAPI-DB-HANDLE.ta.mjs';

/**
 * @summary DbStoreBIR_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbStoreBIR-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   birToStore         BioAPI-INPUT-BIR,
 *   dbHandle           BioAPI-DB-HANDLE
 * }
 * ```
 *
 * @class
 */
export class DbStoreBIR_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `birToStore`.
     * @public
     * @readonly
     */
    readonly birToStore: BioAPI_INPUT_BIR,
    /**
     * @summary `dbHandle`.
     * @public
     * @readonly
     */
    readonly dbHandle: BioAPI_DB_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a DbStoreBIR_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `DbStoreBIR_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbStoreBIR_RequestParams`.
   * @returns {DbStoreBIR_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof DbStoreBIR_RequestParams]: DbStoreBIR_RequestParams[_K] }
  ): DbStoreBIR_RequestParams {
    return new DbStoreBIR_RequestParams(
      _o.originalBSPHandle,
      _o.birToStore,
      _o.dbHandle
    );
  }
}


/**
 * @summary The Leading Root Component Types of DbStoreBIR_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbStoreBIR_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'birToStore',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'dbHandle',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of DbStoreBIR_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbStoreBIR_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DbStoreBIR_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbStoreBIR_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_DbStoreBIR_RequestParams: $.ASN1Decoder<DbStoreBIR_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DbStoreBIR_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbStoreBIR_RequestParams} The decoded data structure.
 */
export function _decode_DbStoreBIR_RequestParams(el: _Element) {
  if (!_cached_decoder_for_DbStoreBIR_RequestParams) {
    _cached_decoder_for_DbStoreBIR_RequestParams = function (
      el: _Element
    ): DbStoreBIR_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'DbStoreBIR-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'birToStore';
      sequence[2].name = 'dbHandle';
      let originalBSPHandle!: BioAPI_HANDLE;
      let birToStore!: BioAPI_INPUT_BIR;
      let dbHandle!: BioAPI_DB_HANDLE;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      birToStore = _decode_BioAPI_INPUT_BIR(sequence[1]);
      dbHandle = _decode_BioAPI_DB_HANDLE(sequence[2]);
      return new DbStoreBIR_RequestParams(
        originalBSPHandle,
        birToStore,
        dbHandle
      );
    };
  }
  return _cached_decoder_for_DbStoreBIR_RequestParams(el);
}


let _cached_encoder_for_DbStoreBIR_RequestParams: $.ASN1Encoder<DbStoreBIR_RequestParams> | null = null;


/**
 * @summary Encodes a(n) DbStoreBIR_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbStoreBIR_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_DbStoreBIR_RequestParams(
  value: DbStoreBIR_RequestParams,
  elGetter: $.ASN1Encoder<DbStoreBIR_RequestParams>
) {
  if (!_cached_encoder_for_DbStoreBIR_RequestParams) {
    _cached_encoder_for_DbStoreBIR_RequestParams = function (
      value: DbStoreBIR_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_INPUT_BIR(value.birToStore, $.BER),
            /* REQUIRED   */ _encode_BioAPI_DB_HANDLE(value.dbHandle, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DbStoreBIR_RequestParams(value, elGetter);
}


/* eslint-enable */
