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
  BioAPI_DB_MARKER_HANDLE,
  _decode_BioAPI_DB_MARKER_HANDLE,
  _encode_BioAPI_DB_MARKER_HANDLE,
} from '../BIP/BioAPI-DB-MARKER-HANDLE.ta.mjs';

/**
 * @summary DbFreeMarker_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbFreeMarker-RequestParams ::= SEQUENCE {
 *   originalBSPHandle  BioAPI-HANDLE,
 *   markerHandle       BioAPI-DB-MARKER-HANDLE
 * }
 * ```
 *
 * @class
 */
export class DbFreeMarker_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `markerHandle`.
     * @public
     * @readonly
     */
    readonly markerHandle: BioAPI_DB_MARKER_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a DbFreeMarker_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `DbFreeMarker_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbFreeMarker_RequestParams`.
   * @returns {DbFreeMarker_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof DbFreeMarker_RequestParams]: DbFreeMarker_RequestParams[_K];
    }
  ): DbFreeMarker_RequestParams {
    return new DbFreeMarker_RequestParams(
      _o.originalBSPHandle,
      _o.markerHandle
    );
  }
}


/**
 * @summary The Leading Root Component Types of DbFreeMarker_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbFreeMarker_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
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
 * @summary The Trailing Root Component Types of DbFreeMarker_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbFreeMarker_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DbFreeMarker_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbFreeMarker_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_DbFreeMarker_RequestParams: $.ASN1Decoder<DbFreeMarker_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DbFreeMarker_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbFreeMarker_RequestParams} The decoded data structure.
 */
export function _decode_DbFreeMarker_RequestParams(el: _Element) {
  if (!_cached_decoder_for_DbFreeMarker_RequestParams) {
    _cached_decoder_for_DbFreeMarker_RequestParams = function (
      el: _Element
    ): DbFreeMarker_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'DbFreeMarker-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      sequence[1].name = 'markerHandle';
      let originalBSPHandle!: BioAPI_HANDLE;
      let markerHandle!: BioAPI_DB_MARKER_HANDLE;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      markerHandle = _decode_BioAPI_DB_MARKER_HANDLE(sequence[1]);
      return new DbFreeMarker_RequestParams(originalBSPHandle, markerHandle);
    };
  }
  return _cached_decoder_for_DbFreeMarker_RequestParams(el);
}


let _cached_encoder_for_DbFreeMarker_RequestParams: $.ASN1Encoder<DbFreeMarker_RequestParams> | null = null;


/**
 * @summary Encodes a(n) DbFreeMarker_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbFreeMarker_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_DbFreeMarker_RequestParams(
  value: DbFreeMarker_RequestParams,
  elGetter: $.ASN1Encoder<DbFreeMarker_RequestParams>
) {
  if (!_cached_encoder_for_DbFreeMarker_RequestParams) {
    _cached_encoder_for_DbFreeMarker_RequestParams = function (
      value: DbFreeMarker_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
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
  return _cached_encoder_for_DbFreeMarker_RequestParams(value, elGetter);
}


/* eslint-enable */
