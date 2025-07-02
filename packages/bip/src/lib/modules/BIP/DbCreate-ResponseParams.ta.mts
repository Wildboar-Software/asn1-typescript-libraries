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
  BioAPI_DB_HANDLE,
  _decode_BioAPI_DB_HANDLE,
  _encode_BioAPI_DB_HANDLE,
} from '../BIP/BioAPI-DB-HANDLE.ta.mjs';

/**
 * @summary DbCreate_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbCreate-ResponseParams ::= SEQUENCE {dbHandle  BioAPI-DB-HANDLE
 * }
 * ```
 *
 */
export class DbCreate_ResponseParams {
  constructor(
    /**
     * @summary `dbHandle`.
     * @public
     * @readonly
     */
    readonly dbHandle: BioAPI_DB_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a DbCreate_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `DbCreate_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbCreate_ResponseParams`.
   * @returns {DbCreate_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof DbCreate_ResponseParams]: DbCreate_ResponseParams[_K] }
  ): DbCreate_ResponseParams {
    return new DbCreate_ResponseParams(_o.dbHandle);
  }
}


/**
 * @summary The Leading Root Component Types of DbCreate_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbCreate_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'dbHandle',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of DbCreate_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbCreate_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DbCreate_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbCreate_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_DbCreate_ResponseParams: $.ASN1Decoder<DbCreate_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DbCreate_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbCreate_ResponseParams} The decoded data structure.
 */
export function _decode_DbCreate_ResponseParams(el: _Element): DbCreate_ResponseParams {
  if (!_cached_decoder_for_DbCreate_ResponseParams) {
    _cached_decoder_for_DbCreate_ResponseParams = function (
      el: _Element
    ): DbCreate_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'DbCreate-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'dbHandle';
      let dbHandle!: BioAPI_DB_HANDLE;
      dbHandle = _decode_BioAPI_DB_HANDLE(sequence[0]);
      return new DbCreate_ResponseParams(dbHandle);
    };
  }
  return _cached_decoder_for_DbCreate_ResponseParams(el);
}


let _cached_encoder_for_DbCreate_ResponseParams: $.ASN1Encoder<DbCreate_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) DbCreate_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbCreate_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_DbCreate_ResponseParams(
  value: DbCreate_ResponseParams,
  elGetter: $.ASN1Encoder<DbCreate_ResponseParams>
): _Element {
  if (!_cached_encoder_for_DbCreate_ResponseParams) {
    _cached_encoder_for_DbCreate_ResponseParams = function (
      value: DbCreate_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_DB_HANDLE(value.dbHandle, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DbCreate_ResponseParams(value, elGetter);
}


/* eslint-enable */
