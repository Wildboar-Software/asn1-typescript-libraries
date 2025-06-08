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
  BioAPI_STRING,
  _decode_BioAPI_STRING,
  _encode_BioAPI_STRING,
} from '../BIP/BioAPI-STRING.ta';
export {
  BioAPI_STRING,
  _decode_BioAPI_STRING,
  _encode_BioAPI_STRING,
} from '../BIP/BioAPI-STRING.ta';
import {
  BioAPI_VERSION,
  _decode_BioAPI_VERSION,
  _encode_BioAPI_VERSION,
} from '../BIP/BioAPI-VERSION.ta';
export {
  BioAPI_VERSION,
  _decode_BioAPI_VERSION,
  _encode_BioAPI_VERSION,
} from '../BIP/BioAPI-VERSION.ta';
import {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta';
export {
  BioAPI_DATA,
  _decode_BioAPI_DATA,
  _encode_BioAPI_DATA,
} from '../BIP/BioAPI-DATA.ta';
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

/* START_OF_SYMBOL_DEFINITION BioAPI_FRAMEWORK_SCHEMA */
/**
 * @summary BioAPI_FRAMEWORK_SCHEMA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-FRAMEWORK-SCHEMA ::= SEQUENCE {
 *   fwProductUuid       BioAPI-UUID,
 *   description         BioAPI-STRING,
 *   path                UTF8String,
 *   specVersion         BioAPI-VERSION,
 *   productVersion      BioAPI-STRING,
 *   vendor              BioAPI-STRING,
 *   propertyUuid        BioAPI-UUID,
 *   property            BioAPI-DATA,
 *   hostingEndpointIRI  EndpointIRI
 * }
 * ```
 *
 * @class
 */
export class BioAPI_FRAMEWORK_SCHEMA {
  constructor(
    /**
     * @summary `fwProductUuid`.
     * @public
     * @readonly
     */
    readonly fwProductUuid: BioAPI_UUID,
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
   * @summary Restructures an object into a BioAPI_FRAMEWORK_SCHEMA
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_FRAMEWORK_SCHEMA`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_FRAMEWORK_SCHEMA`.
   * @returns {BioAPI_FRAMEWORK_SCHEMA}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_FRAMEWORK_SCHEMA]: BioAPI_FRAMEWORK_SCHEMA[_K] }
  ): BioAPI_FRAMEWORK_SCHEMA {
    return new BioAPI_FRAMEWORK_SCHEMA(
      _o.fwProductUuid,
      _o.description,
      _o.path,
      _o.specVersion,
      _o.productVersion,
      _o.vendor,
      _o.propertyUuid,
      _o.property,
      _o.hostingEndpointIRI
    );
  }
}
/* END_OF_SYMBOL_DEFINITION BioAPI_FRAMEWORK_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_FRAMEWORK_SCHEMA */
/**
 * @summary The Leading Root Component Types of BioAPI_FRAMEWORK_SCHEMA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_FRAMEWORK_SCHEMA: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'fwProductUuid',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'description',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'path',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'specVersion',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'productVersion',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'vendor',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'propertyUuid',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'property',
    false,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'hostingEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_FRAMEWORK_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_FRAMEWORK_SCHEMA */
/**
 * @summary The Trailing Root Component Types of BioAPI_FRAMEWORK_SCHEMA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_FRAMEWORK_SCHEMA: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_FRAMEWORK_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_FRAMEWORK_SCHEMA */
/**
 * @summary The Extension Addition Component Types of BioAPI_FRAMEWORK_SCHEMA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_FRAMEWORK_SCHEMA: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_FRAMEWORK_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_FRAMEWORK_SCHEMA */
let _cached_decoder_for_BioAPI_FRAMEWORK_SCHEMA: $.ASN1Decoder<BioAPI_FRAMEWORK_SCHEMA> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_FRAMEWORK_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_FRAMEWORK_SCHEMA */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_FRAMEWORK_SCHEMA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_FRAMEWORK_SCHEMA} The decoded data structure.
 */
export function _decode_BioAPI_FRAMEWORK_SCHEMA(el: _Element) {
  if (!_cached_decoder_for_BioAPI_FRAMEWORK_SCHEMA) {
    _cached_decoder_for_BioAPI_FRAMEWORK_SCHEMA = function (
      el: _Element
    ): BioAPI_FRAMEWORK_SCHEMA {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 9) {
        throw new _ConstructionError(
          'BioAPI-FRAMEWORK-SCHEMA contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'fwProductUuid';
      sequence[1].name = 'description';
      sequence[2].name = 'path';
      sequence[3].name = 'specVersion';
      sequence[4].name = 'productVersion';
      sequence[5].name = 'vendor';
      sequence[6].name = 'propertyUuid';
      sequence[7].name = 'property';
      sequence[8].name = 'hostingEndpointIRI';
      let fwProductUuid!: BioAPI_UUID;
      let description!: BioAPI_STRING;
      let path!: UTF8String;
      let specVersion!: BioAPI_VERSION;
      let productVersion!: BioAPI_STRING;
      let vendor!: BioAPI_STRING;
      let propertyUuid!: BioAPI_UUID;
      let property!: BioAPI_DATA;
      let hostingEndpointIRI!: EndpointIRI;
      fwProductUuid = _decode_BioAPI_UUID(sequence[0]);
      description = _decode_BioAPI_STRING(sequence[1]);
      path = $._decodeUTF8String(sequence[2]);
      specVersion = _decode_BioAPI_VERSION(sequence[3]);
      productVersion = _decode_BioAPI_STRING(sequence[4]);
      vendor = _decode_BioAPI_STRING(sequence[5]);
      propertyUuid = _decode_BioAPI_UUID(sequence[6]);
      property = _decode_BioAPI_DATA(sequence[7]);
      hostingEndpointIRI = _decode_EndpointIRI(sequence[8]);
      return new BioAPI_FRAMEWORK_SCHEMA(
        fwProductUuid,
        description,
        path,
        specVersion,
        productVersion,
        vendor,
        propertyUuid,
        property,
        hostingEndpointIRI
      );
    };
  }
  return _cached_decoder_for_BioAPI_FRAMEWORK_SCHEMA(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_FRAMEWORK_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_FRAMEWORK_SCHEMA */
let _cached_encoder_for_BioAPI_FRAMEWORK_SCHEMA: $.ASN1Encoder<BioAPI_FRAMEWORK_SCHEMA> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_FRAMEWORK_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_FRAMEWORK_SCHEMA */
/**
 * @summary Encodes a(n) BioAPI_FRAMEWORK_SCHEMA into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_FRAMEWORK_SCHEMA, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_FRAMEWORK_SCHEMA(
  value: BioAPI_FRAMEWORK_SCHEMA,
  elGetter: $.ASN1Encoder<BioAPI_FRAMEWORK_SCHEMA>
) {
  if (!_cached_encoder_for_BioAPI_FRAMEWORK_SCHEMA) {
    _cached_encoder_for_BioAPI_FRAMEWORK_SCHEMA = function (
      value: BioAPI_FRAMEWORK_SCHEMA,
      elGetter: $.ASN1Encoder<BioAPI_FRAMEWORK_SCHEMA>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.fwProductUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_STRING(value.description, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.path, $.BER),
            /* REQUIRED   */ _encode_BioAPI_VERSION(value.specVersion, $.BER),
            /* REQUIRED   */ _encode_BioAPI_STRING(value.productVersion, $.BER),
            /* REQUIRED   */ _encode_BioAPI_STRING(value.vendor, $.BER),
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
  return _cached_encoder_for_BioAPI_FRAMEWORK_SCHEMA(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_FRAMEWORK_SCHEMA */

/* eslint-enable */
