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
 * @summary UnitEventInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitEventInfo ::= SEQUENCE {
 *   hostingEndpointIRI  EndpointIRI,
 *   bspProductUuid      BioAPI-UUID,
 *   unitID              BioAPI-UNIT-ID,
 *   unitSchema          BioAPI-UNIT-SCHEMA OPTIONAL,
 *   unitEventType       BioAPI-UNIT-EVENT-TYPE
 * }
 * ```
 *
 * @class
 */
export class UnitEventInfo {
  constructor(
    /**
     * @summary `hostingEndpointIRI`.
     * @public
     * @readonly
     */
    readonly hostingEndpointIRI: EndpointIRI,
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
   * @summary Restructures an object into a UnitEventInfo
   * @description
   *
   * This takes an `object` and converts it to a `UnitEventInfo`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UnitEventInfo`.
   * @returns {UnitEventInfo}
   */
  public static _from_object(
    _o: { [_K in keyof UnitEventInfo]: UnitEventInfo[_K] }
  ): UnitEventInfo {
    return new UnitEventInfo(
      _o.hostingEndpointIRI,
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
 * @summary The Leading Root Component Types of UnitEventInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnitEventInfo: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'hostingEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'unitID',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'unitSchema',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'unitEventType',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of UnitEventInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnitEventInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of UnitEventInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnitEventInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_UnitEventInfo: $.ASN1Decoder<UnitEventInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnitEventInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnitEventInfo} The decoded data structure.
 */
export function _decode_UnitEventInfo(el: _Element) {
  if (!_cached_decoder_for_UnitEventInfo) {
    _cached_decoder_for_UnitEventInfo = function (el: _Element): UnitEventInfo {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let hostingEndpointIRI!: EndpointIRI;
      let bspProductUuid!: BioAPI_UUID;
      let unitID!: BioAPI_UNIT_ID;
      let unitSchema: OPTIONAL<BioAPI_UNIT_SCHEMA>;
      let unitEventType!: BioAPI_UNIT_EVENT_TYPE;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        hostingEndpointIRI: (_el: _Element): void => {
          hostingEndpointIRI = _decode_EndpointIRI(_el);
        },
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
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_UnitEventInfo,
        _extension_additions_list_spec_for_UnitEventInfo,
        _root_component_type_list_2_spec_for_UnitEventInfo,
        undefined
      );
      return new UnitEventInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
        hostingEndpointIRI,
        bspProductUuid,
        unitID,
        unitSchema,
        unitEventType
      );
    };
  }
  return _cached_decoder_for_UnitEventInfo(el);
}


let _cached_encoder_for_UnitEventInfo: $.ASN1Encoder<UnitEventInfo> | null = null;


/**
 * @summary Encodes a(n) UnitEventInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitEventInfo, encoded as an ASN.1 Element.
 */
export function _encode_UnitEventInfo(
  value: UnitEventInfo,
  elGetter: $.ASN1Encoder<UnitEventInfo>
) {
  if (!_cached_encoder_for_UnitEventInfo) {
    _cached_encoder_for_UnitEventInfo = function (
      value: UnitEventInfo    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EndpointIRI(
              value.hostingEndpointIRI,
              $.BER
            ),
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
  return _cached_encoder_for_UnitEventInfo(value, elGetter);
}


/* eslint-enable */
