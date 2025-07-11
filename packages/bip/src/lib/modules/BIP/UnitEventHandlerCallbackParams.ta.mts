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
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta.mjs';
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
 * @summary UnitEventHandlerCallbackParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitEventHandlerCallbackParams ::= SEQUENCE {
 *   unitEventHandlerAddress  MemoryAddress,
 *   unitEventHandlerContext  MemoryAddress,
 *   bspUuid                  BioAPI-UUID,
 *   unitID                   BioAPI-UNIT-ID,
 *   unitSchema               BioAPI-UNIT-SCHEMA OPTIONAL,
 *   unitEventType            BioAPI-UNIT-EVENT-TYPE
 * }
 * ```
 *
 */
export class UnitEventHandlerCallbackParams {
  constructor(
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
    readonly unitEventHandlerContext: MemoryAddress,
    /**
     * @summary `bspUuid`.
     * @public
     * @readonly
     */
    readonly bspUuid: BioAPI_UUID,
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
   * @summary Restructures an object into a UnitEventHandlerCallbackParams
   * @description
   *
   * This takes an `object` and converts it to a `UnitEventHandlerCallbackParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UnitEventHandlerCallbackParams`.
   * @returns {UnitEventHandlerCallbackParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof UnitEventHandlerCallbackParams]: UnitEventHandlerCallbackParams[_K];
    }
  ): UnitEventHandlerCallbackParams {
    return new UnitEventHandlerCallbackParams(
      _o.unitEventHandlerAddress,
      _o.unitEventHandlerContext,
      _o.bspUuid,
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
 * @summary The Leading Root Component Types of UnitEventHandlerCallbackParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnitEventHandlerCallbackParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'unitEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'unitEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'bspUuid',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'unitID',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'unitSchema',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'unitEventType',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
];


/**
 * @summary The Trailing Root Component Types of UnitEventHandlerCallbackParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnitEventHandlerCallbackParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of UnitEventHandlerCallbackParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnitEventHandlerCallbackParams: $.ComponentSpec[] = [];


let _cached_decoder_for_UnitEventHandlerCallbackParams: $.ASN1Decoder<UnitEventHandlerCallbackParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnitEventHandlerCallbackParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnitEventHandlerCallbackParams} The decoded data structure.
 */
export function _decode_UnitEventHandlerCallbackParams(el: _Element): UnitEventHandlerCallbackParams {
  if (!_cached_decoder_for_UnitEventHandlerCallbackParams) {
    _cached_decoder_for_UnitEventHandlerCallbackParams = function (
      el: _Element
    ): UnitEventHandlerCallbackParams {
      let unitEventHandlerAddress!: MemoryAddress;
      let unitEventHandlerContext!: MemoryAddress;
      let bspUuid!: BioAPI_UUID;
      let unitID!: BioAPI_UNIT_ID;
      let unitSchema: OPTIONAL<BioAPI_UNIT_SCHEMA>;
      let unitEventType!: BioAPI_UNIT_EVENT_TYPE;
      const callbacks: $.DecodingMap = {
        unitEventHandlerAddress: (_el: _Element): void => {
          unitEventHandlerAddress = _decode_MemoryAddress(_el);
        },
        unitEventHandlerContext: (_el: _Element): void => {
          unitEventHandlerContext = _decode_MemoryAddress(_el);
        },
        bspUuid: (_el: _Element): void => {
          bspUuid = _decode_BioAPI_UUID(_el);
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
        _root_component_type_list_1_spec_for_UnitEventHandlerCallbackParams,
        _extension_additions_list_spec_for_UnitEventHandlerCallbackParams,
        _root_component_type_list_2_spec_for_UnitEventHandlerCallbackParams,
        undefined
      );
      return new UnitEventHandlerCallbackParams (
        unitEventHandlerAddress,
        unitEventHandlerContext,
        bspUuid,
        unitID,
        unitSchema,
        unitEventType
      );
    };
  }
  return _cached_decoder_for_UnitEventHandlerCallbackParams(el);
}


let _cached_encoder_for_UnitEventHandlerCallbackParams: $.ASN1Encoder<UnitEventHandlerCallbackParams> | null = null;


/**
 * @summary Encodes a(n) UnitEventHandlerCallbackParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitEventHandlerCallbackParams, encoded as an ASN.1 Element.
 */
export function _encode_UnitEventHandlerCallbackParams(
  value: UnitEventHandlerCallbackParams,
  elGetter: $.ASN1Encoder<UnitEventHandlerCallbackParams>
): _Element {
  if (!_cached_encoder_for_UnitEventHandlerCallbackParams) {
    _cached_encoder_for_UnitEventHandlerCallbackParams = function (
      value: UnitEventHandlerCallbackParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_MemoryAddress(
              value.unitEventHandlerAddress,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.unitEventHandlerContext,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspUuid, $.BER),
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
  return _cached_encoder_for_UnitEventHandlerCallbackParams(value, elGetter);
}


/* eslint-enable */
