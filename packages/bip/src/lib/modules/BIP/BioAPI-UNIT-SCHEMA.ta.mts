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
} from 'asn1-ts';
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
  BioAPI_CATEGORY,
  _enum_for_BioAPI_CATEGORY,
  _decode_BioAPI_CATEGORY,
  _encode_BioAPI_CATEGORY,
} from '../BIP/BioAPI-CATEGORY.ta.mjs';
import {
  BioAPI_STRING,
  _decode_BioAPI_STRING,
  _encode_BioAPI_STRING,
} from '../BIP/BioAPI-STRING.ta.mjs';
import {
  BioAPI_UNIT_EVENT_TYPE_MASK,
  _decode_BioAPI_UNIT_EVENT_TYPE_MASK,
  _encode_BioAPI_UNIT_EVENT_TYPE_MASK,
} from '../BIP/BioAPI-UNIT-EVENT-TYPE-MASK.ta.mjs';
import {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.mjs';
import {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.mjs';

/**
 * @summary BioAPI_UNIT_SCHEMA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-UNIT-SCHEMA ::= SEQUENCE {
 *   bspProductUuid          BioAPI-UUID,
 *   unitManagerProductUuid  BioAPI-UUID,
 *   unitId                  BioAPI-UNIT-ID,
 *   category                BioAPI-CATEGORY,
 *   unitProperties          BioAPI-UUID,
 *   vendorInformation       BioAPI-STRING,
 *   supportedUnitEvents     BioAPI-UNIT-EVENT-TYPE-MASK,
 *   propertyUuid            BioAPI-UUID,
 *   property                BioAPI-DATA,
 *   hardwareVersion         BioAPI-STRING,
 *   firmwareVersion         BioAPI-STRING,
 *   softwareVersion         BioAPI-STRING,
 *   hardwareSerialNumber    BioAPI-STRING,
 *   authenticatedHardware   BOOLEAN,
 *   maxBSPDbSize            UnsignedInt,
 *   maxIdentify             UnsignedInt
 * }
 * ```
 *
 * @class
 */
export class BioAPI_UNIT_SCHEMA {
  constructor(
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `unitManagerProductUuid`.
     * @public
     * @readonly
     */
    readonly unitManagerProductUuid: BioAPI_UUID,
    /**
     * @summary `unitId`.
     * @public
     * @readonly
     */
    readonly unitId: BioAPI_UNIT_ID,
    /**
     * @summary `category`.
     * @public
     * @readonly
     */
    readonly category: BioAPI_CATEGORY,
    /**
     * @summary `unitProperties`.
     * @public
     * @readonly
     */
    readonly unitProperties: BioAPI_UUID,
    /**
     * @summary `vendorInformation`.
     * @public
     * @readonly
     */
    readonly vendorInformation: BioAPI_STRING,
    /**
     * @summary `supportedUnitEvents`.
     * @public
     * @readonly
     */
    readonly supportedUnitEvents: BioAPI_UNIT_EVENT_TYPE_MASK,
    /**
     * @summary `propertyUuid`.
     * @public
     * @readonly
     */
    readonly propertyUuid: BioAPI_UUID,
    /**
     * @summary `property`.
     * @public
     * @readonly
     */
    readonly property: BioAPI_DATA,
    /**
     * @summary `hardwareVersion`.
     * @public
     * @readonly
     */
    readonly hardwareVersion: BioAPI_STRING,
    /**
     * @summary `firmwareVersion`.
     * @public
     * @readonly
     */
    readonly firmwareVersion: BioAPI_STRING,
    /**
     * @summary `softwareVersion`.
     * @public
     * @readonly
     */
    readonly softwareVersion: BioAPI_STRING,
    /**
     * @summary `hardwareSerialNumber`.
     * @public
     * @readonly
     */
    readonly hardwareSerialNumber: BioAPI_STRING,
    /**
     * @summary `authenticatedHardware`.
     * @public
     * @readonly
     */
    readonly authenticatedHardware: BOOLEAN,
    /**
     * @summary `maxBSPDbSize`.
     * @public
     * @readonly
     */
    readonly maxBSPDbSize: UnsignedInt,
    /**
     * @summary `maxIdentify`.
     * @public
     * @readonly
     */
    readonly maxIdentify: UnsignedInt
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_UNIT_SCHEMA
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_UNIT_SCHEMA`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_UNIT_SCHEMA`.
   * @returns {BioAPI_UNIT_SCHEMA}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_UNIT_SCHEMA]: BioAPI_UNIT_SCHEMA[_K] }
  ): BioAPI_UNIT_SCHEMA {
    return new BioAPI_UNIT_SCHEMA(
      _o.bspProductUuid,
      _o.unitManagerProductUuid,
      _o.unitId,
      _o.category,
      _o.unitProperties,
      _o.vendorInformation,
      _o.supportedUnitEvents,
      _o.propertyUuid,
      _o.property,
      _o.hardwareVersion,
      _o.firmwareVersion,
      _o.softwareVersion,
      _o.hardwareSerialNumber,
      _o.authenticatedHardware,
      _o.maxBSPDbSize,
      _o.maxIdentify
    );
  }

  /**
   * @summary The enum used as the type of the component `category`
   * @public
   * @static
   */

  public static _enum_for_category = _enum_for_BioAPI_CATEGORY;
}


/**
 * @summary The Leading Root Component Types of BioAPI_UNIT_SCHEMA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_UNIT_SCHEMA: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'unitManagerProductUuid',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'unitId',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'category',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'unitProperties',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'vendorInformation',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'supportedUnitEvents',
    false,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'propertyUuid',
    false,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'property',
    false,
    $.hasTag(_TagClass.context, 8)
  ),
  new $.ComponentSpec(
    'hardwareVersion',
    false,
    $.hasTag(_TagClass.context, 9)
  ),
  new $.ComponentSpec(
    'firmwareVersion',
    false,
    $.hasTag(_TagClass.context, 10)
  ),
  new $.ComponentSpec(
    'softwareVersion',
    false,
    $.hasTag(_TagClass.context, 11)
  ),
  new $.ComponentSpec(
    'hardwareSerialNumber',
    false,
    $.hasTag(_TagClass.context, 12)
  ),
  new $.ComponentSpec(
    'authenticatedHardware',
    false,
    $.hasTag(_TagClass.context, 13)
  ),
  new $.ComponentSpec(
    'maxBSPDbSize',
    false,
    $.hasTag(_TagClass.context, 14)
  ),
  new $.ComponentSpec(
    'maxIdentify',
    false,
    $.hasTag(_TagClass.context, 15)
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_UNIT_SCHEMA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_UNIT_SCHEMA: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_UNIT_SCHEMA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_UNIT_SCHEMA: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_UNIT_SCHEMA: $.ASN1Decoder<BioAPI_UNIT_SCHEMA> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_UNIT_SCHEMA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_UNIT_SCHEMA} The decoded data structure.
 */
export function _decode_BioAPI_UNIT_SCHEMA(el: _Element) {
  if (!_cached_decoder_for_BioAPI_UNIT_SCHEMA) {
    _cached_decoder_for_BioAPI_UNIT_SCHEMA = function (
      el: _Element
    ): BioAPI_UNIT_SCHEMA {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 16) {
        throw new _ConstructionError(
          'BioAPI-UNIT-SCHEMA contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspProductUuid';
      sequence[1].name = 'unitManagerProductUuid';
      sequence[2].name = 'unitId';
      sequence[3].name = 'category';
      sequence[4].name = 'unitProperties';
      sequence[5].name = 'vendorInformation';
      sequence[6].name = 'supportedUnitEvents';
      sequence[7].name = 'propertyUuid';
      sequence[8].name = 'property';
      sequence[9].name = 'hardwareVersion';
      sequence[10].name = 'firmwareVersion';
      sequence[11].name = 'softwareVersion';
      sequence[12].name = 'hardwareSerialNumber';
      sequence[13].name = 'authenticatedHardware';
      sequence[14].name = 'maxBSPDbSize';
      sequence[15].name = 'maxIdentify';
      let bspProductUuid!: BioAPI_UUID;
      let unitManagerProductUuid!: BioAPI_UUID;
      let unitId!: BioAPI_UNIT_ID;
      let category!: BioAPI_CATEGORY;
      let unitProperties!: BioAPI_UUID;
      let vendorInformation!: BioAPI_STRING;
      let supportedUnitEvents!: BioAPI_UNIT_EVENT_TYPE_MASK;
      let propertyUuid!: BioAPI_UUID;
      let property!: BioAPI_DATA;
      let hardwareVersion!: BioAPI_STRING;
      let firmwareVersion!: BioAPI_STRING;
      let softwareVersion!: BioAPI_STRING;
      let hardwareSerialNumber!: BioAPI_STRING;
      let authenticatedHardware!: BOOLEAN;
      let maxBSPDbSize!: UnsignedInt;
      let maxIdentify!: UnsignedInt;
      bspProductUuid = _decode_BioAPI_UUID(sequence[0]);
      unitManagerProductUuid = _decode_BioAPI_UUID(sequence[1]);
      unitId = _decode_BioAPI_UNIT_ID(sequence[2]);
      category = _decode_BioAPI_CATEGORY(sequence[3]);
      unitProperties = _decode_BioAPI_UUID(sequence[4]);
      vendorInformation = _decode_BioAPI_STRING(sequence[5]);
      supportedUnitEvents = _decode_BioAPI_UNIT_EVENT_TYPE_MASK(sequence[6]);
      propertyUuid = _decode_BioAPI_UUID(sequence[7]);
      property = _decode_BioAPI_DATA(sequence[8]);
      hardwareVersion = _decode_BioAPI_STRING(sequence[9]);
      firmwareVersion = _decode_BioAPI_STRING(sequence[10]);
      softwareVersion = _decode_BioAPI_STRING(sequence[11]);
      hardwareSerialNumber = _decode_BioAPI_STRING(sequence[12]);
      authenticatedHardware = $._decodeBoolean(sequence[13]);
      maxBSPDbSize = _decode_UnsignedInt(sequence[14]);
      maxIdentify = _decode_UnsignedInt(sequence[15]);
      return new BioAPI_UNIT_SCHEMA(
        bspProductUuid,
        unitManagerProductUuid,
        unitId,
        category,
        unitProperties,
        vendorInformation,
        supportedUnitEvents,
        propertyUuid,
        property,
        hardwareVersion,
        firmwareVersion,
        softwareVersion,
        hardwareSerialNumber,
        authenticatedHardware,
        maxBSPDbSize,
        maxIdentify
      );
    };
  }
  return _cached_decoder_for_BioAPI_UNIT_SCHEMA(el);
}


let _cached_encoder_for_BioAPI_UNIT_SCHEMA: $.ASN1Encoder<BioAPI_UNIT_SCHEMA> | null = null;


/**
 * @summary Encodes a(n) BioAPI_UNIT_SCHEMA into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_UNIT_SCHEMA, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_UNIT_SCHEMA(
  value: BioAPI_UNIT_SCHEMA,
  elGetter: $.ASN1Encoder<BioAPI_UNIT_SCHEMA>
) {
  if (!_cached_encoder_for_BioAPI_UNIT_SCHEMA) {
    _cached_encoder_for_BioAPI_UNIT_SCHEMA = function (
      value: BioAPI_UNIT_SCHEMA    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UUID(
              value.unitManagerProductUuid,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UNIT_ID(value.unitId, $.BER),
            /* REQUIRED   */ _encode_BioAPI_CATEGORY(value.category, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.unitProperties, $.BER),
            /* REQUIRED   */ _encode_BioAPI_STRING(
              value.vendorInformation,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UNIT_EVENT_TYPE_MASK(
              value.supportedUnitEvents,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.propertyUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_DATA(value.property, $.BER),
            /* REQUIRED   */ _encode_BioAPI_STRING(
              value.hardwareVersion,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_STRING(
              value.firmwareVersion,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_STRING(
              value.softwareVersion,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_STRING(
              value.hardwareSerialNumber,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBoolean(
              value.authenticatedHardware,
              $.BER
            ),
            /* REQUIRED   */ _encode_UnsignedInt(value.maxBSPDbSize, $.BER),
            /* REQUIRED   */ _encode_UnsignedInt(value.maxIdentify, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_UNIT_SCHEMA(value, elGetter);
}


/* eslint-enable */
