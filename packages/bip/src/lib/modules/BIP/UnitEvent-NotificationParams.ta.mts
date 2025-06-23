/* eslint-disable */
import {
  OPTIONAL,
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
import {
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta.mjs';
import {
  BioAPI_UNIT_SCHEMA,
  _decode_BioAPI_UNIT_SCHEMA,
  _encode_BioAPI_UNIT_SCHEMA,
} from '../BIP/BioAPI-UNIT-SCHEMA.ta.mjs';
import {
  BioAPI_UNIT_EVENT_TYPE,
  _enum_for_BioAPI_UNIT_EVENT_TYPE,
  _decode_BioAPI_UNIT_EVENT_TYPE,
  _encode_BioAPI_UNIT_EVENT_TYPE,
} from '../BIP/BioAPI-UNIT-EVENT-TYPE.ta.mjs';

/**
 * @summary UnitEvent_NotificationParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitEvent-NotificationParams ::= SEQUENCE {
 *   bspProductUuid  BioAPI-UUID,
 *   unitID          BioAPI-UNIT-ID,
 *   unitSchema      BioAPI-UNIT-SCHEMA OPTIONAL,
 *   unitEventType   BioAPI-UNIT-EVENT-TYPE
 * }
 * ```
 *
 * @class
 */
export class UnitEvent_NotificationParams {
  constructor(
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `unitID`.
     * @public
     * @readonly
     */
    readonly unitID: BioAPI_UNIT_ID,
    /**
     * @summary `unitSchema`.
     * @public
     * @readonly
     */
    readonly unitSchema: OPTIONAL<BioAPI_UNIT_SCHEMA>,
    /**
     * @summary `unitEventType`.
     * @public
     * @readonly
     */
    readonly unitEventType: BioAPI_UNIT_EVENT_TYPE
  ) {}

  /**
   * @summary Restructures an object into a UnitEvent_NotificationParams
   * @description
   *
   * This takes an `object` and converts it to a `UnitEvent_NotificationParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UnitEvent_NotificationParams`.
   * @returns {UnitEvent_NotificationParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof UnitEvent_NotificationParams]: UnitEvent_NotificationParams[_K];
    }
  ): UnitEvent_NotificationParams {
    return new UnitEvent_NotificationParams(
      _o.bspProductUuid,
      _o.unitID,
      _o.unitSchema,
      _o.unitEventType
    );
  }

  /**
   * @summary The enum used as the type of the component `unitEventType`
   * @public
   * @static
   */

  public static _enum_for_unitEventType = _enum_for_BioAPI_UNIT_EVENT_TYPE;
}


/**
 * @summary The Leading Root Component Types of UnitEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnitEvent_NotificationParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'unitID',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'unitSchema',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'unitEventType',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
];


/**
 * @summary The Trailing Root Component Types of UnitEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnitEvent_NotificationParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of UnitEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnitEvent_NotificationParams: $.ComponentSpec[] = [];


let _cached_decoder_for_UnitEvent_NotificationParams: $.ASN1Decoder<UnitEvent_NotificationParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnitEvent_NotificationParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnitEvent_NotificationParams} The decoded data structure.
 */
export function _decode_UnitEvent_NotificationParams(el: _Element) {
  if (!_cached_decoder_for_UnitEvent_NotificationParams) {
    _cached_decoder_for_UnitEvent_NotificationParams = function (
      el: _Element
    ): UnitEvent_NotificationParams {
      let bspProductUuid!: BioAPI_UUID;
      let unitID!: BioAPI_UNIT_ID;
      let unitSchema: OPTIONAL<BioAPI_UNIT_SCHEMA>;
      let unitEventType!: BioAPI_UNIT_EVENT_TYPE;
      const callbacks: $.DecodingMap = {
        bspProductUuid: (_el: _Element): void => {
          bspProductUuid = _decode_BioAPI_UUID(_el);
        },
        unitID: (_el: _Element): void => {
          unitID = _decode_BioAPI_UNIT_ID(_el);
        },
        unitSchema: (_el: _Element): void => {
          unitSchema = _decode_BioAPI_UNIT_SCHEMA(_el);
        },
        unitEventType: (_el: _Element): void => {
          unitEventType = _decode_BioAPI_UNIT_EVENT_TYPE(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_UnitEvent_NotificationParams,
        _extension_additions_list_spec_for_UnitEvent_NotificationParams,
        _root_component_type_list_2_spec_for_UnitEvent_NotificationParams,
        undefined
      );
      return new UnitEvent_NotificationParams (
        bspProductUuid,
        unitID,
        unitSchema,
        unitEventType
      );
    };
  }
  return _cached_decoder_for_UnitEvent_NotificationParams(el);
}


let _cached_encoder_for_UnitEvent_NotificationParams: $.ASN1Encoder<UnitEvent_NotificationParams> | null = null;


/**
 * @summary Encodes a(n) UnitEvent_NotificationParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitEvent_NotificationParams, encoded as an ASN.1 Element.
 */
export function _encode_UnitEvent_NotificationParams(
  value: UnitEvent_NotificationParams,
  elGetter: $.ASN1Encoder<UnitEvent_NotificationParams>
) {
  if (!_cached_encoder_for_UnitEvent_NotificationParams) {
    _cached_encoder_for_UnitEvent_NotificationParams = function (
      value: UnitEvent_NotificationParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UNIT_ID(value.unitID, $.BER),
            /* IF_ABSENT  */ value.unitSchema === undefined
              ? undefined
              : _encode_BioAPI_UNIT_SCHEMA(value.unitSchema, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UNIT_EVENT_TYPE(
              value.unitEventType,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_UnitEvent_NotificationParams(value, elGetter);
}


/* eslint-enable */
