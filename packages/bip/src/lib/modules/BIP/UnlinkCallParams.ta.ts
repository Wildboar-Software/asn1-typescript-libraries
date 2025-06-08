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

/* START_OF_SYMBOL_DEFINITION UnlinkCallParams */
/**
 * @summary UnlinkCallParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnlinkCallParams ::= SEQUENCE {slaveEndpointIRI  EndpointIRI
 * }
 * ```
 *
 * @class
 */
export class UnlinkCallParams {
  constructor(
    /**
     * @summary `slaveEndpointIRI`.
     * @public
     * @readonly
     */
    readonly slaveEndpointIRI: EndpointIRI
  ) {}

  /**
   * @summary Restructures an object into a UnlinkCallParams
   * @description
   *
   * This takes an `object` and converts it to a `UnlinkCallParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UnlinkCallParams`.
   * @returns {UnlinkCallParams}
   */
  public static _from_object(
    _o: { [_K in keyof UnlinkCallParams]: UnlinkCallParams[_K] }
  ): UnlinkCallParams {
    return new UnlinkCallParams(_o.slaveEndpointIRI);
  }
}
/* END_OF_SYMBOL_DEFINITION UnlinkCallParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnlinkCallParams */
/**
 * @summary The Leading Root Component Types of UnlinkCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnlinkCallParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'slaveEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnlinkCallParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnlinkCallParams */
/**
 * @summary The Trailing Root Component Types of UnlinkCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnlinkCallParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnlinkCallParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnlinkCallParams */
/**
 * @summary The Extension Addition Component Types of UnlinkCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnlinkCallParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnlinkCallParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnlinkCallParams */
let _cached_decoder_for_UnlinkCallParams: $.ASN1Decoder<UnlinkCallParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnlinkCallParams */

/* START_OF_SYMBOL_DEFINITION _decode_UnlinkCallParams */
/**
 * @summary Decodes an ASN.1 element into a(n) UnlinkCallParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnlinkCallParams} The decoded data structure.
 */
export function _decode_UnlinkCallParams(el: _Element) {
  if (!_cached_decoder_for_UnlinkCallParams) {
    _cached_decoder_for_UnlinkCallParams = function (
      el: _Element
    ): UnlinkCallParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'UnlinkCallParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'slaveEndpointIRI';
      let slaveEndpointIRI!: EndpointIRI;
      slaveEndpointIRI = _decode_EndpointIRI(sequence[0]);
      return new UnlinkCallParams(slaveEndpointIRI);
    };
  }
  return _cached_decoder_for_UnlinkCallParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnlinkCallParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnlinkCallParams */
let _cached_encoder_for_UnlinkCallParams: $.ASN1Encoder<UnlinkCallParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnlinkCallParams */

/* START_OF_SYMBOL_DEFINITION _encode_UnlinkCallParams */
/**
 * @summary Encodes a(n) UnlinkCallParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnlinkCallParams, encoded as an ASN.1 Element.
 */
export function _encode_UnlinkCallParams(
  value: UnlinkCallParams,
  elGetter: $.ASN1Encoder<UnlinkCallParams>
) {
  if (!_cached_encoder_for_UnlinkCallParams) {
    _cached_encoder_for_UnlinkCallParams = function (
      value: UnlinkCallParams,
      elGetter: $.ASN1Encoder<UnlinkCallParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EndpointIRI(value.slaveEndpointIRI, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_UnlinkCallParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnlinkCallParams */

/* eslint-enable */
