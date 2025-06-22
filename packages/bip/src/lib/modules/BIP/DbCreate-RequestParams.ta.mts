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
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.mjs';
import {
  BioAPI_DB_ACCESS_TYPE,
  _decode_BioAPI_DB_ACCESS_TYPE,
  _encode_BioAPI_DB_ACCESS_TYPE,
} from '../BIP/BioAPI-DB-ACCESS-TYPE.ta.mjs';

/**
 * @summary DbCreate_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbCreate-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   dbUuid             BioAPI-UUID,
 *   numberOfRecords    UnsignedInt,
 *   accessRequest      BioAPI-DB-ACCESS-TYPE
 * }
 * ```
 *
 * @class
 */
export class DbCreate_RequestParams {
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
     * @summary `numberOfRecords`.
     * @public
     * @readonly
     */
    readonly numberOfRecords: UnsignedInt,
    /**
     * @summary `accessRequest`.
     * @public
     * @readonly
     */
    readonly accessRequest: BioAPI_DB_ACCESS_TYPE
  ) {}

  /**
   * @summary Restructures an object into a DbCreate_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `DbCreate_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbCreate_RequestParams`.
   * @returns {DbCreate_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof DbCreate_RequestParams]: DbCreate_RequestParams[_K] }
  ): DbCreate_RequestParams {
    return new DbCreate_RequestParams(
      _o.originalBSPHandle,
      _o.dbUuid,
      _o.numberOfRecords,
      _o.accessRequest
    );
  }
}


/**
 * @summary The Leading Root Component Types of DbCreate_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbCreate_RequestParams: $.ComponentSpec[] = [
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
    'numberOfRecords',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'accessRequest',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
];


/**
 * @summary The Trailing Root Component Types of DbCreate_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbCreate_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DbCreate_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbCreate_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_DbCreate_RequestParams: $.ASN1Decoder<DbCreate_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DbCreate_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbCreate_RequestParams} The decoded data structure.
 */
export function _decode_DbCreate_RequestParams(el: _Element) {
  if (!_cached_decoder_for_DbCreate_RequestParams) {
    _cached_decoder_for_DbCreate_RequestParams = function (
      el: _Element
    ): DbCreate_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 4) {
        throw new _ConstructionError(
          'DbCreate-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'dbUuid';
      sequence[2].name = 'numberOfRecords';
      sequence[3].name = 'accessRequest';
      let originalBSPHandle!: BioAPI_HANDLE;
      let dbUuid!: BioAPI_UUID;
      let numberOfRecords!: UnsignedInt;
      let accessRequest!: BioAPI_DB_ACCESS_TYPE;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      dbUuid = _decode_BioAPI_UUID(sequence[1]);
      numberOfRecords = _decode_UnsignedInt(sequence[2]);
      accessRequest = _decode_BioAPI_DB_ACCESS_TYPE(sequence[3]);
      return new DbCreate_RequestParams(
        originalBSPHandle,
        dbUuid,
        numberOfRecords,
        accessRequest
      );
    };
  }
  return _cached_decoder_for_DbCreate_RequestParams(el);
}


let _cached_encoder_for_DbCreate_RequestParams: $.ASN1Encoder<DbCreate_RequestParams> | null = null;


/**
 * @summary Encodes a(n) DbCreate_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbCreate_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_DbCreate_RequestParams(
  value: DbCreate_RequestParams,
  elGetter: $.ASN1Encoder<DbCreate_RequestParams>
) {
  if (!_cached_encoder_for_DbCreate_RequestParams) {
    _cached_encoder_for_DbCreate_RequestParams = function (
      value: DbCreate_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.dbUuid, $.BER),
            /* REQUIRED   */ _encode_UnsignedInt(value.numberOfRecords, $.BER),
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
  return _cached_encoder_for_DbCreate_RequestParams(value, elGetter);
}


/* eslint-enable */
