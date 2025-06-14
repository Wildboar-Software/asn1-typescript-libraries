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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BFPUnregistrationEvent_NotificationParams */
/**
 * @summary BFPUnregistrationEvent_NotificationParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BFPUnregistrationEvent-NotificationParams ::= SEQUENCE {
 *   bfpProductUuid  BioAPI-UUID
 * }
 * ```
 *
 * @class
 */
export class BFPUnregistrationEvent_NotificationParams {
  constructor(
    /**
     * @summary `bfpProductUuid`.
     * @public
     * @readonly
     */
    readonly bfpProductUuid: BioAPI_UUID
  ) {}

  /**
   * @summary Restructures an object into a BFPUnregistrationEvent_NotificationParams
   * @description
   *
   * This takes an `object` and converts it to a `BFPUnregistrationEvent_NotificationParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BFPUnregistrationEvent_NotificationParams`.
   * @returns {BFPUnregistrationEvent_NotificationParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof BFPUnregistrationEvent_NotificationParams]: BFPUnregistrationEvent_NotificationParams[_K];
    }
  ): BFPUnregistrationEvent_NotificationParams {
    return new BFPUnregistrationEvent_NotificationParams(_o.bfpProductUuid);
  }
}
/* END_OF_SYMBOL_DEFINITION BFPUnregistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BFPUnregistrationEvent_NotificationParams */
/**
 * @summary The Leading Root Component Types of BFPUnregistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BFPUnregistrationEvent_NotificationParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bfpProductUuid',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BFPUnregistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BFPUnregistrationEvent_NotificationParams */
/**
 * @summary The Trailing Root Component Types of BFPUnregistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BFPUnregistrationEvent_NotificationParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BFPUnregistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BFPUnregistrationEvent_NotificationParams */
/**
 * @summary The Extension Addition Component Types of BFPUnregistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BFPUnregistrationEvent_NotificationParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BFPUnregistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BFPUnregistrationEvent_NotificationParams */
let _cached_decoder_for_BFPUnregistrationEvent_NotificationParams: $.ASN1Decoder<BFPUnregistrationEvent_NotificationParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BFPUnregistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _decode_BFPUnregistrationEvent_NotificationParams */
/**
 * @summary Decodes an ASN.1 element into a(n) BFPUnregistrationEvent_NotificationParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BFPUnregistrationEvent_NotificationParams} The decoded data structure.
 */
export function _decode_BFPUnregistrationEvent_NotificationParams(
  el: _Element
) {
  if (!_cached_decoder_for_BFPUnregistrationEvent_NotificationParams) {
    _cached_decoder_for_BFPUnregistrationEvent_NotificationParams = function (
      el: _Element
    ): BFPUnregistrationEvent_NotificationParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'BFPUnregistrationEvent-NotificationParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bfpProductUuid';
      let bfpProductUuid!: BioAPI_UUID;
      bfpProductUuid = _decode_BioAPI_UUID(sequence[0]);
      return new BFPUnregistrationEvent_NotificationParams(bfpProductUuid);
    };
  }
  return _cached_decoder_for_BFPUnregistrationEvent_NotificationParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BFPUnregistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BFPUnregistrationEvent_NotificationParams */
let _cached_encoder_for_BFPUnregistrationEvent_NotificationParams: $.ASN1Encoder<BFPUnregistrationEvent_NotificationParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BFPUnregistrationEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _encode_BFPUnregistrationEvent_NotificationParams */
/**
 * @summary Encodes a(n) BFPUnregistrationEvent_NotificationParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BFPUnregistrationEvent_NotificationParams, encoded as an ASN.1 Element.
 */
export function _encode_BFPUnregistrationEvent_NotificationParams(
  value: BFPUnregistrationEvent_NotificationParams,
  elGetter: $.ASN1Encoder<BFPUnregistrationEvent_NotificationParams>
) {
  if (!_cached_encoder_for_BFPUnregistrationEvent_NotificationParams) {
    _cached_encoder_for_BFPUnregistrationEvent_NotificationParams = function (
      value: BFPUnregistrationEvent_NotificationParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bfpProductUuid, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BFPUnregistrationEvent_NotificationParams(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_BFPUnregistrationEvent_NotificationParams */

/* eslint-enable */
