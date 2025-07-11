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
  BioAPI_DB_HANDLE,
  _decode_BioAPI_DB_HANDLE,
  _encode_BioAPI_DB_HANDLE,
} from '../BIP/BioAPI-DB-HANDLE.ta.mjs';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';

/**
 * @summary DbDeleteBIR_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbDeleteBIR-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   dbHandle           BioAPI-DB-HANDLE,
 *   keyValue           BioAPI-UUID
 * }
 * ```
 *
 */
export class DbDeleteBIR_RequestParams {
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
    readonly dbHandle: BioAPI_DB_HANDLE,
    /**
     * @summary `keyValue`.
     * @public
     * @readonly
     */
    readonly keyValue: BioAPI_UUID
  ) {}

  /**
   * @summary Restructures an object into a DbDeleteBIR_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `DbDeleteBIR_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbDeleteBIR_RequestParams`.
   * @returns {DbDeleteBIR_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof DbDeleteBIR_RequestParams]: DbDeleteBIR_RequestParams[_K];
    }
  ): DbDeleteBIR_RequestParams {
    return new DbDeleteBIR_RequestParams(
      _o.originalBSPHandle,
      _o.dbHandle,
      _o.keyValue
    );
  }
}


/**
 * @summary The Leading Root Component Types of DbDeleteBIR_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbDeleteBIR_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'dbHandle',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'keyValue',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of DbDeleteBIR_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbDeleteBIR_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DbDeleteBIR_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbDeleteBIR_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_DbDeleteBIR_RequestParams: $.ASN1Decoder<DbDeleteBIR_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DbDeleteBIR_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbDeleteBIR_RequestParams} The decoded data structure.
 */
export function _decode_DbDeleteBIR_RequestParams(el: _Element): DbDeleteBIR_RequestParams {
  if (!_cached_decoder_for_DbDeleteBIR_RequestParams) {
    _cached_decoder_for_DbDeleteBIR_RequestParams = function (
      el: _Element
    ): DbDeleteBIR_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'DbDeleteBIR-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'dbHandle';
      sequence[2].name = 'keyValue';
      let originalBSPHandle!: BioAPI_HANDLE;
      let dbHandle!: BioAPI_DB_HANDLE;
      let keyValue!: BioAPI_UUID;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      dbHandle = _decode_BioAPI_DB_HANDLE(sequence[1]);
      keyValue = _decode_BioAPI_UUID(sequence[2]);
      return new DbDeleteBIR_RequestParams(
        originalBSPHandle,
        dbHandle,
        keyValue
      );
    };
  }
  return _cached_decoder_for_DbDeleteBIR_RequestParams(el);
}


let _cached_encoder_for_DbDeleteBIR_RequestParams: $.ASN1Encoder<DbDeleteBIR_RequestParams> | null = null;


/**
 * @summary Encodes a(n) DbDeleteBIR_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbDeleteBIR_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_DbDeleteBIR_RequestParams(
  value: DbDeleteBIR_RequestParams,
  elGetter: $.ASN1Encoder<DbDeleteBIR_RequestParams>
): _Element {
  if (!_cached_encoder_for_DbDeleteBIR_RequestParams) {
    _cached_encoder_for_DbDeleteBIR_RequestParams = function (
      value: DbDeleteBIR_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_DB_HANDLE(value.dbHandle, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.keyValue, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DbDeleteBIR_RequestParams(value, elGetter);
}


/* eslint-enable */
