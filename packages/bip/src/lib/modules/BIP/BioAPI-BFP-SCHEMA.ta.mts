/* eslint-disable */
import {
  UTF8String,
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
  BioAPI_VERSION,
  _decode_BioAPI_VERSION,
  _encode_BioAPI_VERSION,
} from '../BIP/BioAPI-VERSION.ta.mjs';
import {
  BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
} from '../BIP/BioAPI-BIR-BIOMETRIC-DATA-FORMAT.ta.mjs';
import {
  BioAPI_BIR_BIOMETRIC_TYPE,
  _decode_BioAPI_BIR_BIOMETRIC_TYPE,
  _encode_BioAPI_BIR_BIOMETRIC_TYPE,
} from '../BIP/BioAPI-BIR-BIOMETRIC-TYPE.ta.mjs';
import {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta.mjs';
import {
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta.mjs';

/**
 * @summary BioAPI_BFP_SCHEMA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BFP-SCHEMA ::= SEQUENCE {
 *   bfpProductUuid      BioAPI-UUID,
 *   category            BioAPI-CATEGORY,
 *   description         BioAPI-STRING,
 *   path                UTF8String,
 *   specVersion         BioAPI-VERSION,
 *   productVersion      BioAPI-STRING,
 *   vendor              BioAPI-STRING,
 *   supportedFormats
 *     SEQUENCE (SIZE (0..max-unsigned-int)) OF format
 *       BioAPI-BIR-BIOMETRIC-DATA-FORMAT,
 *   factorsMask         BioAPI-BIR-BIOMETRIC-TYPE,
 *   propertyUuid        BioAPI-UUID,
 *   property            BioAPI-DATA,
 *   hostingEndpointIRI  EndpointIRI
 * }
 * ```
 *
 */
export class BioAPI_BFP_SCHEMA {
  constructor(
    /**
     * @summary `bfpProductUuid`.
     * @public
     * @readonly
     */
    readonly bfpProductUuid: BioAPI_UUID,
    /**
     * @summary `category`.
     * @public
     * @readonly
     */
    readonly category: BioAPI_CATEGORY,
    /**
     * @summary `description`.
     * @public
     * @readonly
     */
    readonly description: BioAPI_STRING,
    /**
     * @summary `path`.
     * @public
     * @readonly
     */
    readonly path: UTF8String,
    /**
     * @summary `specVersion`.
     * @public
     * @readonly
     */
    readonly specVersion: BioAPI_VERSION,
    /**
     * @summary `productVersion`.
     * @public
     * @readonly
     */
    readonly productVersion: BioAPI_STRING,
    /**
     * @summary `vendor`.
     * @public
     * @readonly
     */
    readonly vendor: BioAPI_STRING,
    /**
     * @summary `supportedFormats`.
     * @public
     * @readonly
     */
    readonly supportedFormats: BioAPI_BIR_BIOMETRIC_DATA_FORMAT[],
    /**
     * @summary `factorsMask`.
     * @public
     * @readonly
     */
    readonly factorsMask: BioAPI_BIR_BIOMETRIC_TYPE,
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
     * @summary `hostingEndpointIRI`.
     * @public
     * @readonly
     */
    readonly hostingEndpointIRI: EndpointIRI
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_BFP_SCHEMA
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_BFP_SCHEMA`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_BFP_SCHEMA`.
   * @returns {BioAPI_BFP_SCHEMA}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_BFP_SCHEMA]: BioAPI_BFP_SCHEMA[_K] }
  ): BioAPI_BFP_SCHEMA {
    return new BioAPI_BFP_SCHEMA(
      _o.bfpProductUuid,
      _o.category,
      _o.description,
      _o.path,
      _o.specVersion,
      _o.productVersion,
      _o.vendor,
      _o.supportedFormats,
      _o.factorsMask,
      _o.propertyUuid,
      _o.property,
      _o.hostingEndpointIRI
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
 * @summary The Leading Root Component Types of BioAPI_BFP_SCHEMA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_BFP_SCHEMA: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bfpProductUuid',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'category',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'description',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'path',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'specVersion',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'productVersion',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'vendor',
    false,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'supportedFormats',
    false,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'factorsMask',
    false,
    $.hasTag(_TagClass.context, 8)
  ),
  new $.ComponentSpec(
    'propertyUuid',
    false,
    $.hasTag(_TagClass.context, 9)
  ),
  new $.ComponentSpec(
    'property',
    false,
    $.hasTag(_TagClass.context, 10)
  ),
  new $.ComponentSpec(
    'hostingEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 11)
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_BFP_SCHEMA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_BFP_SCHEMA: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_BFP_SCHEMA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_BFP_SCHEMA: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_BFP_SCHEMA: $.ASN1Decoder<BioAPI_BFP_SCHEMA> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BFP_SCHEMA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BFP_SCHEMA} The decoded data structure.
 */
export function _decode_BioAPI_BFP_SCHEMA(el: _Element): BioAPI_BFP_SCHEMA {
  if (!_cached_decoder_for_BioAPI_BFP_SCHEMA) {
    _cached_decoder_for_BioAPI_BFP_SCHEMA = function (
      el: _Element
    ): BioAPI_BFP_SCHEMA {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 12) {
        throw new _ConstructionError(
          'BioAPI-BFP-SCHEMA contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bfpProductUuid';
      sequence[1].name = 'category';
      sequence[2].name = 'description';
      sequence[3].name = 'path';
      sequence[4].name = 'specVersion';
      sequence[5].name = 'productVersion';
      sequence[6].name = 'vendor';
      sequence[7].name = 'supportedFormats';
      sequence[8].name = 'factorsMask';
      sequence[9].name = 'propertyUuid';
      sequence[10].name = 'property';
      sequence[11].name = 'hostingEndpointIRI';
      let bfpProductUuid!: BioAPI_UUID;
      let category!: BioAPI_CATEGORY;
      let description!: BioAPI_STRING;
      let path!: UTF8String;
      let specVersion!: BioAPI_VERSION;
      let productVersion!: BioAPI_STRING;
      let vendor!: BioAPI_STRING;
      let supportedFormats!: BioAPI_BIR_BIOMETRIC_DATA_FORMAT[];
      let factorsMask!: BioAPI_BIR_BIOMETRIC_TYPE;
      let propertyUuid!: BioAPI_UUID;
      let property!: BioAPI_DATA;
      let hostingEndpointIRI!: EndpointIRI;
      bfpProductUuid = _decode_BioAPI_UUID(sequence[0]);
      category = _decode_BioAPI_CATEGORY(sequence[1]);
      description = _decode_BioAPI_STRING(sequence[2]);
      path = $._decodeUTF8String(sequence[3]);
      specVersion = _decode_BioAPI_VERSION(sequence[4]);
      productVersion = _decode_BioAPI_STRING(sequence[5]);
      vendor = _decode_BioAPI_STRING(sequence[6]);
      supportedFormats = $._decodeSequenceOf<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>(
        () => _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT
      )(sequence[7]);
      factorsMask = _decode_BioAPI_BIR_BIOMETRIC_TYPE(sequence[8]);
      propertyUuid = _decode_BioAPI_UUID(sequence[9]);
      property = _decode_BioAPI_DATA(sequence[10]);
      hostingEndpointIRI = _decode_EndpointIRI(sequence[11]);
      return new BioAPI_BFP_SCHEMA(
        bfpProductUuid,
        category,
        description,
        path,
        specVersion,
        productVersion,
        vendor,
        supportedFormats,
        factorsMask,
        propertyUuid,
        property,
        hostingEndpointIRI
      );
    };
  }
  return _cached_decoder_for_BioAPI_BFP_SCHEMA(el);
}


let _cached_encoder_for_BioAPI_BFP_SCHEMA: $.ASN1Encoder<BioAPI_BFP_SCHEMA> | null = null;


/**
 * @summary Encodes a(n) BioAPI_BFP_SCHEMA into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BFP_SCHEMA, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BFP_SCHEMA(
  value: BioAPI_BFP_SCHEMA,
  elGetter: $.ASN1Encoder<BioAPI_BFP_SCHEMA>
): _Element {
  if (!_cached_encoder_for_BioAPI_BFP_SCHEMA) {
    _cached_encoder_for_BioAPI_BFP_SCHEMA = function (
      value: BioAPI_BFP_SCHEMA    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bfpProductUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_CATEGORY(value.category, $.BER),
            /* REQUIRED   */ _encode_BioAPI_STRING(value.description, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.path, $.BER),
            /* REQUIRED   */ _encode_BioAPI_VERSION(value.specVersion, $.BER),
            /* REQUIRED   */ _encode_BioAPI_STRING(value.productVersion, $.BER),
            /* REQUIRED   */ _encode_BioAPI_STRING(value.vendor, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>(
              () => _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
              $.BER
            )(value.supportedFormats, $.BER),
            /* REQUIRED   */ _encode_BioAPI_BIR_BIOMETRIC_TYPE(
              value.factorsMask,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.propertyUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_DATA(value.property, $.BER),
            /* REQUIRED   */ _encode_EndpointIRI(
              value.hostingEndpointIRI,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_BFP_SCHEMA(value, elGetter);
}


/* eslint-enable */
