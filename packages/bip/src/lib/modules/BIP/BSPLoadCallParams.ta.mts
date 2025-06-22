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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
import {
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta.mjs';

/**
 * @summary BSPLoadCallParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BSPLoadCallParams ::= SEQUENCE {
 *   bspUuid                  BioAPI-UUID,
 *   unitEventHandlerAddress  MemoryAddress,
 *   unitEventHandlerContext  MemoryAddress
 * }
 * ```
 *
 * @class
 */
export class BSPLoadCallParams {
  constructor(
    /**
     * @summary `bspUuid`.
     * @public
     * @readonly
     */
    readonly bspUuid: BioAPI_UUID,
    /**
     * @summary `unitEventHandlerAddress`.
     * @public
     * @readonly
     */
    readonly unitEventHandlerAddress: MemoryAddress,
    /**
     * @summary `unitEventHandlerContext`.
     * @public
     * @readonly
     */
    readonly unitEventHandlerContext: MemoryAddress
  ) {}

  /**
   * @summary Restructures an object into a BSPLoadCallParams
   * @description
   *
   * This takes an `object` and converts it to a `BSPLoadCallParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BSPLoadCallParams`.
   * @returns {BSPLoadCallParams}
   */
  public static _from_object(
    _o: { [_K in keyof BSPLoadCallParams]: BSPLoadCallParams[_K] }
  ): BSPLoadCallParams {
    return new BSPLoadCallParams(
      _o.bspUuid,
      _o.unitEventHandlerAddress,
      _o.unitEventHandlerContext
    );
  }
}


/**
 * @summary The Leading Root Component Types of BSPLoadCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BSPLoadCallParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspUuid',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'unitEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'unitEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of BSPLoadCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BSPLoadCallParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BSPLoadCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BSPLoadCallParams: $.ComponentSpec[] = [];


let _cached_decoder_for_BSPLoadCallParams: $.ASN1Decoder<BSPLoadCallParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BSPLoadCallParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BSPLoadCallParams} The decoded data structure.
 */
export function _decode_BSPLoadCallParams(el: _Element) {
  if (!_cached_decoder_for_BSPLoadCallParams) {
    _cached_decoder_for_BSPLoadCallParams = function (
      el: _Element
    ): BSPLoadCallParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'BSPLoadCallParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspUuid';
      sequence[1].name = 'unitEventHandlerAddress';
      sequence[2].name = 'unitEventHandlerContext';
      let bspUuid!: BioAPI_UUID;
      let unitEventHandlerAddress!: MemoryAddress;
      let unitEventHandlerContext!: MemoryAddress;
      bspUuid = _decode_BioAPI_UUID(sequence[0]);
      unitEventHandlerAddress = _decode_MemoryAddress(sequence[1]);
      unitEventHandlerContext = _decode_MemoryAddress(sequence[2]);
      return new BSPLoadCallParams(
        bspUuid,
        unitEventHandlerAddress,
        unitEventHandlerContext
      );
    };
  }
  return _cached_decoder_for_BSPLoadCallParams(el);
}


let _cached_encoder_for_BSPLoadCallParams: $.ASN1Encoder<BSPLoadCallParams> | null = null;


/**
 * @summary Encodes a(n) BSPLoadCallParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSPLoadCallParams, encoded as an ASN.1 Element.
 */
export function _encode_BSPLoadCallParams(
  value: BSPLoadCallParams,
  elGetter: $.ASN1Encoder<BSPLoadCallParams>
) {
  if (!_cached_encoder_for_BSPLoadCallParams) {
    _cached_encoder_for_BSPLoadCallParams = function (
      value: BSPLoadCallParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspUuid, $.BER),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.unitEventHandlerAddress,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.unitEventHandlerContext,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BSPLoadCallParams(value, elGetter);
}


/* eslint-enable */
