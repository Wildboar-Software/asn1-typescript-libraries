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
import {
  BioAPI_DB_MARKER_HANDLE,
  _decode_BioAPI_DB_MARKER_HANDLE,
  _encode_BioAPI_DB_MARKER_HANDLE,
} from '../BIP/BioAPI-DB-MARKER-HANDLE.ta.mjs';

/**
 * @summary DbOpen_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbOpen-ResponseParams ::= SEQUENCE {
 *   dbHandle      BioAPI-DB-HANDLE,
 *   markerHandle  BioAPI-DB-MARKER-HANDLE
 * }
 * ```
 *
 * @class
 */
export class DbOpen_ResponseParams {
  constructor(
    /**
     * @summary `dbHandle`.
     * @public
     * @readonly
     */
    readonly dbHandle: BioAPI_DB_HANDLE,
    /**
     * @summary `markerHandle`.
     * @public
     * @readonly
     */
    readonly markerHandle: BioAPI_DB_MARKER_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a DbOpen_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `DbOpen_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbOpen_ResponseParams`.
   * @returns {DbOpen_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof DbOpen_ResponseParams]: DbOpen_ResponseParams[_K] }
  ): DbOpen_ResponseParams {
    return new DbOpen_ResponseParams(_o.dbHandle, _o.markerHandle);
  }
}


/**
 * @summary The Leading Root Component Types of DbOpen_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbOpen_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'dbHandle',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'markerHandle',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of DbOpen_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbOpen_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DbOpen_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbOpen_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_DbOpen_ResponseParams: $.ASN1Decoder<DbOpen_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DbOpen_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbOpen_ResponseParams} The decoded data structure.
 */
export function _decode_DbOpen_ResponseParams(el: _Element): DbOpen_ResponseParams {
  if (!_cached_decoder_for_DbOpen_ResponseParams) {
    _cached_decoder_for_DbOpen_ResponseParams = function (
      el: _Element
    ): DbOpen_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'DbOpen-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'dbHandle';
      sequence[1].name = 'markerHandle';
      let dbHandle!: BioAPI_DB_HANDLE;
      let markerHandle!: BioAPI_DB_MARKER_HANDLE;
      dbHandle = _decode_BioAPI_DB_HANDLE(sequence[0]);
      markerHandle = _decode_BioAPI_DB_MARKER_HANDLE(sequence[1]);
      return new DbOpen_ResponseParams(dbHandle, markerHandle);
    };
  }
  return _cached_decoder_for_DbOpen_ResponseParams(el);
}


let _cached_encoder_for_DbOpen_ResponseParams: $.ASN1Encoder<DbOpen_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) DbOpen_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbOpen_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_DbOpen_ResponseParams(
  value: DbOpen_ResponseParams,
  elGetter: $.ASN1Encoder<DbOpen_ResponseParams>
): _Element {
  if (!_cached_encoder_for_DbOpen_ResponseParams) {
    _cached_encoder_for_DbOpen_ResponseParams = function (
      value: DbOpen_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_DB_HANDLE(value.dbHandle, $.BER),
            /* REQUIRED   */ _encode_BioAPI_DB_MARKER_HANDLE(
              value.markerHandle,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DbOpen_ResponseParams(value, elGetter);
}


/* eslint-enable */
