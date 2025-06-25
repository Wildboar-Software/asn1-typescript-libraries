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
  BioAPI_BFP_SCHEMA,
  _decode_BioAPI_BFP_SCHEMA,
  _encode_BioAPI_BFP_SCHEMA,
} from '../BIP/BioAPI-BFP-SCHEMA.ta.mjs';

/**
 * @summary BFPRegistrationEvent_NotificationParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BFPRegistrationEvent-NotificationParams ::= SEQUENCE {
 *   bfpSchema  BioAPI-BFP-SCHEMA,
 *   update     BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class BFPRegistrationEvent_NotificationParams {
  constructor(
    /**
     * @summary `bfpSchema`.
     * @public
     * @readonly
     */
    readonly bfpSchema: BioAPI_BFP_SCHEMA,
    /**
     * @summary `update`.
     * @public
     * @readonly
     */
    readonly update: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a BFPRegistrationEvent_NotificationParams
   * @description
   *
   * This takes an `object` and converts it to a `BFPRegistrationEvent_NotificationParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BFPRegistrationEvent_NotificationParams`.
   * @returns {BFPRegistrationEvent_NotificationParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof BFPRegistrationEvent_NotificationParams]: BFPRegistrationEvent_NotificationParams[_K];
    }
  ): BFPRegistrationEvent_NotificationParams {
    return new BFPRegistrationEvent_NotificationParams(_o.bfpSchema, _o.update);
  }
}


/**
 * @summary The Leading Root Component Types of BFPRegistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BFPRegistrationEvent_NotificationParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bfpSchema',
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
 * @summary The Trailing Root Component Types of BFPRegistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BFPRegistrationEvent_NotificationParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BFPRegistrationEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BFPRegistrationEvent_NotificationParams: $.ComponentSpec[] = [];


let _cached_decoder_for_BFPRegistrationEvent_NotificationParams: $.ASN1Decoder<BFPRegistrationEvent_NotificationParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BFPRegistrationEvent_NotificationParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BFPRegistrationEvent_NotificationParams} The decoded data structure.
 */
export function _decode_BFPRegistrationEvent_NotificationParams(el: _Element): BFPRegistrationEvent_NotificationParams {
  if (!_cached_decoder_for_BFPRegistrationEvent_NotificationParams) {
    _cached_decoder_for_BFPRegistrationEvent_NotificationParams = function (
      el: _Element
    ): BFPRegistrationEvent_NotificationParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BFPRegistrationEvent-NotificationParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bfpSchema';
      sequence[1].name = 'update';
      let bfpSchema!: BioAPI_BFP_SCHEMA;
      let update!: BOOLEAN;
      bfpSchema = _decode_BioAPI_BFP_SCHEMA(sequence[0]);
      update = $._decodeBoolean(sequence[1]);
      return new BFPRegistrationEvent_NotificationParams(bfpSchema, update);
    };
  }
  return _cached_decoder_for_BFPRegistrationEvent_NotificationParams(el);
}


let _cached_encoder_for_BFPRegistrationEvent_NotificationParams: $.ASN1Encoder<BFPRegistrationEvent_NotificationParams> | null = null;


/**
 * @summary Encodes a(n) BFPRegistrationEvent_NotificationParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BFPRegistrationEvent_NotificationParams, encoded as an ASN.1 Element.
 */
export function _encode_BFPRegistrationEvent_NotificationParams(
  value: BFPRegistrationEvent_NotificationParams,
  elGetter: $.ASN1Encoder<BFPRegistrationEvent_NotificationParams>
): _Element {
  if (!_cached_encoder_for_BFPRegistrationEvent_NotificationParams) {
    _cached_encoder_for_BFPRegistrationEvent_NotificationParams = function (
      value: BFPRegistrationEvent_NotificationParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_BFP_SCHEMA(value.bfpSchema, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.update, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BFPRegistrationEvent_NotificationParams(
    value,
    elGetter
  );
}


/* eslint-enable */
