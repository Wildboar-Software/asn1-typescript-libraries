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
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.mjs';
import {
  BioAPI_DB_MARKER_HANDLE,
  _decode_BioAPI_DB_MARKER_HANDLE,
  _encode_BioAPI_DB_MARKER_HANDLE,
} from '../BIP/BioAPI-DB-MARKER-HANDLE.ta.mjs';

/**
 * @summary DbGetBIR_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbGetBIR-ResponseParams ::= SEQUENCE {
 *   retrievedBIR  BioAPI-BIR-HANDLE,
 *   markerHandle  BioAPI-DB-MARKER-HANDLE
 * }
 * ```
 *
 * @class
 */
export class DbGetBIR_ResponseParams {
  constructor(
    /**
     * @summary `retrievedBIR`.
     * @public
     * @readonly
     */
    readonly retrievedBIR: BioAPI_BIR_HANDLE,
    /**
     * @summary `markerHandle`.
     * @public
     * @readonly
     */
    readonly markerHandle: BioAPI_DB_MARKER_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a DbGetBIR_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `DbGetBIR_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbGetBIR_ResponseParams`.
   * @returns {DbGetBIR_ResponseParams}
   */
  public static _from_object(
    _o: { [_K in keyof DbGetBIR_ResponseParams]: DbGetBIR_ResponseParams[_K] }
  ): DbGetBIR_ResponseParams {
    return new DbGetBIR_ResponseParams(_o.retrievedBIR, _o.markerHandle);
  }
}


/**
 * @summary The Leading Root Component Types of DbGetBIR_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbGetBIR_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'retrievedBIR',
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
 * @summary The Trailing Root Component Types of DbGetBIR_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbGetBIR_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DbGetBIR_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbGetBIR_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_DbGetBIR_ResponseParams: $.ASN1Decoder<DbGetBIR_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DbGetBIR_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbGetBIR_ResponseParams} The decoded data structure.
 */
export function _decode_DbGetBIR_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_DbGetBIR_ResponseParams) {
    _cached_decoder_for_DbGetBIR_ResponseParams = function (
      el: _Element
    ): DbGetBIR_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'DbGetBIR-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'retrievedBIR';
      sequence[1].name = 'markerHandle';
      let retrievedBIR!: BioAPI_BIR_HANDLE;
      let markerHandle!: BioAPI_DB_MARKER_HANDLE;
      retrievedBIR = _decode_BioAPI_BIR_HANDLE(sequence[0]);
      markerHandle = _decode_BioAPI_DB_MARKER_HANDLE(sequence[1]);
      return new DbGetBIR_ResponseParams(retrievedBIR, markerHandle);
    };
  }
  return _cached_decoder_for_DbGetBIR_ResponseParams(el);
}


let _cached_encoder_for_DbGetBIR_ResponseParams: $.ASN1Encoder<DbGetBIR_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) DbGetBIR_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbGetBIR_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_DbGetBIR_ResponseParams(
  value: DbGetBIR_ResponseParams,
  elGetter: $.ASN1Encoder<DbGetBIR_ResponseParams>
) {
  if (!_cached_encoder_for_DbGetBIR_ResponseParams) {
    _cached_encoder_for_DbGetBIR_ResponseParams = function (
      value: DbGetBIR_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BIR_HANDLE(
              value.retrievedBIR,
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
  return _cached_encoder_for_DbGetBIR_ResponseParams(value, elGetter);
}


/* eslint-enable */
