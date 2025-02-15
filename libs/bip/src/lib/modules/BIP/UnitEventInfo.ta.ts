/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta';
export {
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
import {
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta';
export {
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta';
import {
  BioAPI_UNIT_SCHEMA,
  _decode_BioAPI_UNIT_SCHEMA,
  _encode_BioAPI_UNIT_SCHEMA,
} from '../BIP/BioAPI-UNIT-SCHEMA.ta';
export {
  BioAPI_UNIT_SCHEMA,
  _decode_BioAPI_UNIT_SCHEMA,
  _encode_BioAPI_UNIT_SCHEMA,
} from '../BIP/BioAPI-UNIT-SCHEMA.ta';
import {
  BioAPI_UNIT_EVENT_TYPE,
  _enum_for_BioAPI_UNIT_EVENT_TYPE,
  BioAPI_UNIT_EVENT_TYPE_insert /* IMPORTED_LONG_ENUMERATION_ITEM */,
  insert /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_UNIT_EVENT_TYPE_remove /* IMPORTED_LONG_ENUMERATION_ITEM */,
  remove /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_UNIT_EVENT_TYPE_fault /* IMPORTED_LONG_ENUMERATION_ITEM */,
  fault /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_UNIT_EVENT_TYPE_sourcePresent /* IMPORTED_LONG_ENUMERATION_ITEM */,
  sourcePresent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_UNIT_EVENT_TYPE_sourceRemoved /* IMPORTED_LONG_ENUMERATION_ITEM */,
  sourceRemoved /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_UNIT_EVENT_TYPE,
  _encode_BioAPI_UNIT_EVENT_TYPE,
} from '../BIP/BioAPI-UNIT-EVENT-TYPE.ta';
export {
  BioAPI_UNIT_EVENT_TYPE,
  _enum_for_BioAPI_UNIT_EVENT_TYPE,
  BioAPI_UNIT_EVENT_TYPE_insert /* IMPORTED_LONG_ENUMERATION_ITEM */,
  insert /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_UNIT_EVENT_TYPE_remove /* IMPORTED_LONG_ENUMERATION_ITEM */,
  remove /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_UNIT_EVENT_TYPE_fault /* IMPORTED_LONG_ENUMERATION_ITEM */,
  fault /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_UNIT_EVENT_TYPE_sourcePresent /* IMPORTED_LONG_ENUMERATION_ITEM */,
  sourcePresent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_UNIT_EVENT_TYPE_sourceRemoved /* IMPORTED_LONG_ENUMERATION_ITEM */,
  sourceRemoved /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_UNIT_EVENT_TYPE,
  _encode_BioAPI_UNIT_EVENT_TYPE,
} from '../BIP/BioAPI-UNIT-EVENT-TYPE.ta';

/* START_OF_SYMBOL_DEFINITION UnitEventInfo */
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
/* END_OF_SYMBOL_DEFINITION UnitEventInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnitEventInfo */
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
    'unitID',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'unitSchema',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'unitEventType',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnitEventInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnitEventInfo */
/**
 * @summary The Trailing Root Component Types of UnitEventInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnitEventInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnitEventInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnitEventInfo */
/**
 * @summary The Extension Addition Component Types of UnitEventInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnitEventInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnitEventInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnitEventInfo */
let _cached_decoder_for_UnitEventInfo: $.ASN1Decoder<UnitEventInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnitEventInfo */

/* START_OF_SYMBOL_DEFINITION _decode_UnitEventInfo */
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
/* END_OF_SYMBOL_DEFINITION _decode_UnitEventInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnitEventInfo */
let _cached_encoder_for_UnitEventInfo: $.ASN1Encoder<UnitEventInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnitEventInfo */

/* START_OF_SYMBOL_DEFINITION _encode_UnitEventInfo */
/**
 * @summary Encodes a(n) UnitEventInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitEventInfo, encoded as an ASN.1 Element.
 */
export function _encode_UnitEventInfo(
  value: UnitEventInfo,
  elGetter: $.ASN1Encoder<UnitEventInfo>
) {
  if (!_cached_encoder_for_UnitEventInfo) {
    _cached_encoder_for_UnitEventInfo = function (
      value: UnitEventInfo,
      elGetter: $.ASN1Encoder<UnitEventInfo>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_UnitEventInfo */

/* eslint-enable */
