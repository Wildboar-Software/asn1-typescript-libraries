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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
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
import {
  BioAPI_DB_ACCESS_TYPE,
  _decode_BioAPI_DB_ACCESS_TYPE,
  _encode_BioAPI_DB_ACCESS_TYPE,
} from '../BIP/BioAPI-DB-ACCESS-TYPE.ta.mjs';

/**
 * @summary DbOpen_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbOpen-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   dbUuid             BioAPI-UUID,
 *   accessRequest      BioAPI-DB-ACCESS-TYPE
 * }
 * ```
 *
 */
export class DbOpen_RequestParams {
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
    readonly dbUuid: BioAPI_UUID,
    /**
     * @summary `accessRequest`.
     * @public
     * @readonly
     */
    readonly accessRequest: BioAPI_DB_ACCESS_TYPE
  ) {}

  /**
   * @summary Restructures an object into a DbOpen_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `DbOpen_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbOpen_RequestParams`.
   * @returns {DbOpen_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof DbOpen_RequestParams]: DbOpen_RequestParams[_K] }
  ): DbOpen_RequestParams {
    return new DbOpen_RequestParams(
      _o.originalBSPHandle,
      _o.dbUuid,
      _o.accessRequest
    );
  }
}


/**
 * @summary The Leading Root Component Types of DbOpen_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbOpen_RequestParams: $.ComponentSpec[] = [
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
  new $.ComponentSpec(
    'accessRequest',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of DbOpen_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbOpen_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DbOpen_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbOpen_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_DbOpen_RequestParams: $.ASN1Decoder<DbOpen_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DbOpen_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbOpen_RequestParams} The decoded data structure.
 */
export function _decode_DbOpen_RequestParams(el: _Element): DbOpen_RequestParams {
  if (!_cached_decoder_for_DbOpen_RequestParams) {
    _cached_decoder_for_DbOpen_RequestParams = function (
      el: _Element
    ): DbOpen_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'DbOpen-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'dbUuid';
      sequence[2].name = 'accessRequest';
      let originalBSPHandle!: BioAPI_HANDLE;
      let dbUuid!: BioAPI_UUID;
      let accessRequest!: BioAPI_DB_ACCESS_TYPE;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      dbUuid = _decode_BioAPI_UUID(sequence[1]);
      accessRequest = _decode_BioAPI_DB_ACCESS_TYPE(sequence[2]);
      return new DbOpen_RequestParams(originalBSPHandle, dbUuid, accessRequest);
    };
  }
  return _cached_decoder_for_DbOpen_RequestParams(el);
}


let _cached_encoder_for_DbOpen_RequestParams: $.ASN1Encoder<DbOpen_RequestParams> | null = null;


/**
 * @summary Encodes a(n) DbOpen_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbOpen_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_DbOpen_RequestParams(
  value: DbOpen_RequestParams,
  elGetter: $.ASN1Encoder<DbOpen_RequestParams>
): _Element {
  if (!_cached_encoder_for_DbOpen_RequestParams) {
    _cached_encoder_for_DbOpen_RequestParams = function (
      value: DbOpen_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.dbUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_DB_ACCESS_TYPE(
              value.accessRequest,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DbOpen_RequestParams(value, elGetter);
}


/* eslint-enable */
