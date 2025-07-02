/* eslint-disable */
import {
  BOOLEAN,
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
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta.mjs';

/**
 * @summary BSPRegistrationEvent_NotificationParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BSPRegistrationEvent-NotificationParams ::= SEQUENCE {
 *   bspSchema  BioAPI-BSP-SCHEMA,
 *   update     BOOLEAN
 * }
 * ```
 *
 */
export class BSPRegistrationEvent_NotificationParams {
  constructor(
    /**
     * @summary `bspSchema`.
     * @public
     * @readonly
     */
    readonly bspSchema: BioAPI_BSP_SCHEMA,
    /**
     * @summary `update`.
     * @public
     * @readonly
     */
    readonly update: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a BSPRegistrationEvent_NotificationParams
   * @description
   *
   * This takes an `object` and converts it to a `BSPRegistrationEvent_NotificationParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BSPRegistrationEvent_NotificationParams`.
   * @returns {BSPRegistrationEvent_NotificationParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof BSPRegistrationEvent_NotificationParams]: BSPRegistrationEvent_NotificationParams[_K];
    }
  ): BSPRegistrationEvent_NotificationParams {
    return new BSPRegistrationEvent_NotificationParams(_o.bspSchema, _o.update);
  }
}


/**
 * @summary The Leading Root Component Types of BSPRegistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BSPRegistrationEvent_NotificationParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspSchema',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'update',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of BSPRegistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BSPRegistrationEvent_NotificationParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BSPRegistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BSPRegistrationEvent_NotificationParams: $.ComponentSpec[] = [];


let _cached_decoder_for_BSPRegistrationEvent_NotificationParams: $.ASN1Decoder<BSPRegistrationEvent_NotificationParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BSPRegistrationEvent_NotificationParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BSPRegistrationEvent_NotificationParams} The decoded data structure.
 */
export function _decode_BSPRegistrationEvent_NotificationParams(el: _Element): BSPRegistrationEvent_NotificationParams {
  if (!_cached_decoder_for_BSPRegistrationEvent_NotificationParams) {
    _cached_decoder_for_BSPRegistrationEvent_NotificationParams = function (
      el: _Element
    ): BSPRegistrationEvent_NotificationParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BSPRegistrationEvent-NotificationParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspSchema';
      sequence[1].name = 'update';
      let bspSchema!: BioAPI_BSP_SCHEMA;
      let update!: BOOLEAN;
      bspSchema = _decode_BioAPI_BSP_SCHEMA(sequence[0]);
      update = $._decodeBoolean(sequence[1]);
      return new BSPRegistrationEvent_NotificationParams(bspSchema, update);
    };
  }
  return _cached_decoder_for_BSPRegistrationEvent_NotificationParams(el);
}


let _cached_encoder_for_BSPRegistrationEvent_NotificationParams: $.ASN1Encoder<BSPRegistrationEvent_NotificationParams> | null = null;


/**
 * @summary Encodes a(n) BSPRegistrationEvent_NotificationParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSPRegistrationEvent_NotificationParams, encoded as an ASN.1 Element.
 */
export function _encode_BSPRegistrationEvent_NotificationParams(
  value: BSPRegistrationEvent_NotificationParams,
  elGetter: $.ASN1Encoder<BSPRegistrationEvent_NotificationParams>
): _Element {
  if (!_cached_encoder_for_BSPRegistrationEvent_NotificationParams) {
    _cached_encoder_for_BSPRegistrationEvent_NotificationParams = function (
      value: BSPRegistrationEvent_NotificationParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BSP_SCHEMA(value.bspSchema, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.update, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BSPRegistrationEvent_NotificationParams(
    value,
    elGetter
  );
}


/* eslint-enable */
