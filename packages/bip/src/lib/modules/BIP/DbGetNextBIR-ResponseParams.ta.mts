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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';

/**
 * @summary DbGetNextBIR_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbGetNextBIR-ResponseParams ::= SEQUENCE {
 *   retrievedBIR  BioAPI-BIR-HANDLE,
 *   birUuid       BioAPI-UUID
 * }
 * ```
 *
 * @class
 */
export class DbGetNextBIR_ResponseParams {
  constructor(
    /**
     * @summary `retrievedBIR`.
     * @public
     * @readonly
     */
    readonly retrievedBIR: BioAPI_BIR_HANDLE,
    /**
     * @summary `birUuid`.
     * @public
     * @readonly
     */
    readonly birUuid: BioAPI_UUID
  ) {}

  /**
   * @summary Restructures an object into a DbGetNextBIR_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `DbGetNextBIR_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DbGetNextBIR_ResponseParams`.
   * @returns {DbGetNextBIR_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof DbGetNextBIR_ResponseParams]: DbGetNextBIR_ResponseParams[_K];
    }
  ): DbGetNextBIR_ResponseParams {
    return new DbGetNextBIR_ResponseParams(_o.retrievedBIR, _o.birUuid);
  }
}


/**
 * @summary The Leading Root Component Types of DbGetNextBIR_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DbGetNextBIR_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'retrievedBIR',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'birUuid',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of DbGetNextBIR_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DbGetNextBIR_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DbGetNextBIR_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DbGetNextBIR_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_DbGetNextBIR_ResponseParams: $.ASN1Decoder<DbGetNextBIR_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DbGetNextBIR_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbGetNextBIR_ResponseParams} The decoded data structure.
 */
export function _decode_DbGetNextBIR_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_DbGetNextBIR_ResponseParams) {
    _cached_decoder_for_DbGetNextBIR_ResponseParams = function (
      el: _Element
    ): DbGetNextBIR_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'DbGetNextBIR-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'retrievedBIR';
      sequence[1].name = 'birUuid';
      let retrievedBIR!: BioAPI_BIR_HANDLE;
      let birUuid!: BioAPI_UUID;
      retrievedBIR = _decode_BioAPI_BIR_HANDLE(sequence[0]);
      birUuid = _decode_BioAPI_UUID(sequence[1]);
      return new DbGetNextBIR_ResponseParams(retrievedBIR, birUuid);
    };
  }
  return _cached_decoder_for_DbGetNextBIR_ResponseParams(el);
}


let _cached_encoder_for_DbGetNextBIR_ResponseParams: $.ASN1Encoder<DbGetNextBIR_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) DbGetNextBIR_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbGetNextBIR_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_DbGetNextBIR_ResponseParams(
  value: DbGetNextBIR_ResponseParams,
  elGetter: $.ASN1Encoder<DbGetNextBIR_ResponseParams>
) {
  if (!_cached_encoder_for_DbGetNextBIR_ResponseParams) {
    _cached_encoder_for_DbGetNextBIR_ResponseParams = function (
      value: DbGetNextBIR_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BIR_HANDLE(
              value.retrievedBIR,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.birUuid, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DbGetNextBIR_ResponseParams(value, elGetter);
}


/* eslint-enable */
