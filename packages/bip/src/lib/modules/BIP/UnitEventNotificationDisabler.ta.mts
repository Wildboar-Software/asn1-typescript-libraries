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
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta.mjs';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
import {
  BioAPI_UNIT_EVENT_TYPE_MASK,
  _decode_BioAPI_UNIT_EVENT_TYPE_MASK,
  _encode_BioAPI_UNIT_EVENT_TYPE_MASK,
} from '../BIP/BioAPI-UNIT-EVENT-TYPE-MASK.ta.mjs';
/* START_OF_SYMBOL_DEFINITION UnitEventNotificationDisabler */
/**
 * @summary UnitEventNotificationDisabler
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitEventNotificationDisabler ::= SEQUENCE {
 *   referrerEndpointIRI  EndpointIRI,
 *   bspProductUuid       BioAPI-UUID,
 *   unitEventTypes       BioAPI-UNIT-EVENT-TYPE-MASK
 * }
 * ```
 *
 * @class
 */
export class UnitEventNotificationDisabler {
  constructor(
    /**
     * @summary `referrerEndpointIRI`.
     * @public
     * @readonly
     */
    readonly referrerEndpointIRI: EndpointIRI,
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `unitEventTypes`.
     * @public
     * @readonly
     */
    readonly unitEventTypes: BioAPI_UNIT_EVENT_TYPE_MASK
  ) {}

  /**
   * @summary Restructures an object into a UnitEventNotificationDisabler
   * @description
   *
   * This takes an `object` and converts it to a `UnitEventNotificationDisabler`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UnitEventNotificationDisabler`.
   * @returns {UnitEventNotificationDisabler}
   */
  public static _from_object(
    _o: {
      [_K in keyof UnitEventNotificationDisabler]: UnitEventNotificationDisabler[_K];
    }
  ): UnitEventNotificationDisabler {
    return new UnitEventNotificationDisabler(
      _o.referrerEndpointIRI,
      _o.bspProductUuid,
      _o.unitEventTypes
    );
  }
}
/* END_OF_SYMBOL_DEFINITION UnitEventNotificationDisabler */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnitEventNotificationDisabler */
/**
 * @summary The Leading Root Component Types of UnitEventNotificationDisabler
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnitEventNotificationDisabler: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'referrerEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'unitEventTypes',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnitEventNotificationDisabler */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnitEventNotificationDisabler */
/**
 * @summary The Trailing Root Component Types of UnitEventNotificationDisabler
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnitEventNotificationDisabler: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnitEventNotificationDisabler */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnitEventNotificationDisabler */
/**
 * @summary The Extension Addition Component Types of UnitEventNotificationDisabler
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnitEventNotificationDisabler: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnitEventNotificationDisabler */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnitEventNotificationDisabler */
let _cached_decoder_for_UnitEventNotificationDisabler: $.ASN1Decoder<UnitEventNotificationDisabler> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnitEventNotificationDisabler */

/* START_OF_SYMBOL_DEFINITION _decode_UnitEventNotificationDisabler */
/**
 * @summary Decodes an ASN.1 element into a(n) UnitEventNotificationDisabler
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnitEventNotificationDisabler} The decoded data structure.
 */
export function _decode_UnitEventNotificationDisabler(el: _Element) {
  if (!_cached_decoder_for_UnitEventNotificationDisabler) {
    _cached_decoder_for_UnitEventNotificationDisabler = function (
      el: _Element
    ): UnitEventNotificationDisabler {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'UnitEventNotificationDisabler contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'referrerEndpointIRI';
      sequence[1].name = 'bspProductUuid';
      sequence[2].name = 'unitEventTypes';
      let referrerEndpointIRI!: EndpointIRI;
      let bspProductUuid!: BioAPI_UUID;
      let unitEventTypes!: BioAPI_UNIT_EVENT_TYPE_MASK;
      referrerEndpointIRI = _decode_EndpointIRI(sequence[0]);
      bspProductUuid = _decode_BioAPI_UUID(sequence[1]);
      unitEventTypes = _decode_BioAPI_UNIT_EVENT_TYPE_MASK(sequence[2]);
      return new UnitEventNotificationDisabler(
        referrerEndpointIRI,
        bspProductUuid,
        unitEventTypes
      );
    };
  }
  return _cached_decoder_for_UnitEventNotificationDisabler(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnitEventNotificationDisabler */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnitEventNotificationDisabler */
let _cached_encoder_for_UnitEventNotificationDisabler: $.ASN1Encoder<UnitEventNotificationDisabler> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnitEventNotificationDisabler */

/* START_OF_SYMBOL_DEFINITION _encode_UnitEventNotificationDisabler */
/**
 * @summary Encodes a(n) UnitEventNotificationDisabler into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitEventNotificationDisabler, encoded as an ASN.1 Element.
 */
export function _encode_UnitEventNotificationDisabler(
  value: UnitEventNotificationDisabler,
  elGetter: $.ASN1Encoder<UnitEventNotificationDisabler>
) {
  if (!_cached_encoder_for_UnitEventNotificationDisabler) {
    _cached_encoder_for_UnitEventNotificationDisabler = function (
      value: UnitEventNotificationDisabler    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EndpointIRI(
              value.referrerEndpointIRI,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UNIT_EVENT_TYPE_MASK(
              value.unitEventTypes,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_UnitEventNotificationDisabler(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnitEventNotificationDisabler */

/* eslint-enable */
