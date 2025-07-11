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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';

/**
 * @summary BSPUnregistrationEvent_NotificationParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BSPUnregistrationEvent-NotificationParams ::= SEQUENCE {
 *   bspProductUuid  BioAPI-UUID
 * }
 * ```
 *
 */
export class BSPUnregistrationEvent_NotificationParams {
  constructor(
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID
  ) {}

  /**
   * @summary Restructures an object into a BSPUnregistrationEvent_NotificationParams
   * @description
   *
   * This takes an `object` and converts it to a `BSPUnregistrationEvent_NotificationParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BSPUnregistrationEvent_NotificationParams`.
   * @returns {BSPUnregistrationEvent_NotificationParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof BSPUnregistrationEvent_NotificationParams]: BSPUnregistrationEvent_NotificationParams[_K];
    }
  ): BSPUnregistrationEvent_NotificationParams {
    return new BSPUnregistrationEvent_NotificationParams(_o.bspProductUuid);
  }
}


/**
 * @summary The Leading Root Component Types of BSPUnregistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BSPUnregistrationEvent_NotificationParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of BSPUnregistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BSPUnregistrationEvent_NotificationParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BSPUnregistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BSPUnregistrationEvent_NotificationParams: $.ComponentSpec[] = [];


let _cached_decoder_for_BSPUnregistrationEvent_NotificationParams: $.ASN1Decoder<BSPUnregistrationEvent_NotificationParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BSPUnregistrationEvent_NotificationParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BSPUnregistrationEvent_NotificationParams} The decoded data structure.
 */
export function _decode_BSPUnregistrationEvent_NotificationParams(
  el: _Element
): BSPUnregistrationEvent_NotificationParams {
  if (!_cached_decoder_for_BSPUnregistrationEvent_NotificationParams) {
    _cached_decoder_for_BSPUnregistrationEvent_NotificationParams = function (
      el: _Element
    ): BSPUnregistrationEvent_NotificationParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'BSPUnregistrationEvent-NotificationParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspProductUuid';
      let bspProductUuid!: BioAPI_UUID;
      bspProductUuid = _decode_BioAPI_UUID(sequence[0]);
      return new BSPUnregistrationEvent_NotificationParams(bspProductUuid);
    };
  }
  return _cached_decoder_for_BSPUnregistrationEvent_NotificationParams(el);
}


let _cached_encoder_for_BSPUnregistrationEvent_NotificationParams: $.ASN1Encoder<BSPUnregistrationEvent_NotificationParams> | null = null;


/**
 * @summary Encodes a(n) BSPUnregistrationEvent_NotificationParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSPUnregistrationEvent_NotificationParams, encoded as an ASN.1 Element.
 */
export function _encode_BSPUnregistrationEvent_NotificationParams(
  value: BSPUnregistrationEvent_NotificationParams,
  elGetter: $.ASN1Encoder<BSPUnregistrationEvent_NotificationParams>
): _Element {
  if (!_cached_encoder_for_BSPUnregistrationEvent_NotificationParams) {
    _cached_encoder_for_BSPUnregistrationEvent_NotificationParams = function (
      value: BSPUnregistrationEvent_NotificationParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BSPUnregistrationEvent_NotificationParams(
    value,
    elGetter
  );
}


/* eslint-enable */
