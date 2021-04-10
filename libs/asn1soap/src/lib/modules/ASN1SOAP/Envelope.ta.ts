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
import { Header, _decode_Header, _encode_Header } from '../ASN1SOAP/Header.ta';
export { Header, _decode_Header, _encode_Header } from '../ASN1SOAP/Header.ta';
import {
  Envelope_body_or_fault,
  _decode_Envelope_body_or_fault,
  _encode_Envelope_body_or_fault,
} from '../ASN1SOAP/Envelope-body-or-fault.ta';
export {
  Envelope_body_or_fault,
  _decode_Envelope_body_or_fault,
  _encode_Envelope_body_or_fault,
} from '../ASN1SOAP/Envelope-body-or-fault.ta';

/* START_OF_SYMBOL_DEFINITION Envelope */
/**
 * @summary Envelope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Envelope ::= SEQUENCE {
 *   header         Header,
 *   body-or-fault  CHOICE {body   Body,
 *                          fault  Fault}
 * }
 * ```
 *
 * @class
 */
export class Envelope {
  constructor(
    /**
     * @summary `header`.
     * @public
     * @readonly
     */
    readonly header: Header,
    /**
     * @summary `body_or_fault`.
     * @public
     * @readonly
     */
    readonly body_or_fault: Envelope_body_or_fault
  ) {}

  /**
   * @summary Restructures an object into a Envelope
   * @description
   *
   * This takes an `object` and converts it to a `Envelope`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Envelope`.
   * @returns {Envelope}
   */
  public static _from_object(
    _o: { [_K in keyof Envelope]: Envelope[_K] }
  ): Envelope {
    return new Envelope(_o.header, _o.body_or_fault);
  }
}
/* END_OF_SYMBOL_DEFINITION Envelope */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Envelope */
/**
 * @summary The Leading Root Component Types of Envelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Envelope: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'header',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'body-or-fault',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Envelope */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Envelope */
/**
 * @summary The Trailing Root Component Types of Envelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Envelope: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Envelope */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Envelope */
/**
 * @summary The Extension Addition Component Types of Envelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Envelope: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Envelope */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Envelope */
let _cached_decoder_for_Envelope: $.ASN1Decoder<Envelope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Envelope */

/* START_OF_SYMBOL_DEFINITION _decode_Envelope */
/**
 * @summary Decodes an ASN.1 element into a(n) Envelope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Envelope} The decoded data structure.
 */
export function _decode_Envelope(el: _Element) {
  if (!_cached_decoder_for_Envelope) {
    _cached_decoder_for_Envelope = function (el: _Element): Envelope {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Envelope contained only ' + sequence.length.toString() + ' elements.'
        );
      }
      sequence[0].name = 'header';
      sequence[1].name = 'body-or-fault';
      let header!: Header;
      let body_or_fault!: Envelope_body_or_fault;
      header = _decode_Header(sequence[0]);
      body_or_fault = _decode_Envelope_body_or_fault(sequence[1]);
      return new Envelope(header, body_or_fault);
    };
  }
  return _cached_decoder_for_Envelope(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Envelope */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Envelope */
let _cached_encoder_for_Envelope: $.ASN1Encoder<Envelope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Envelope */

/* START_OF_SYMBOL_DEFINITION _encode_Envelope */
/**
 * @summary Encodes a(n) Envelope into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Envelope, encoded as an ASN.1 Element.
 */
export function _encode_Envelope(
  value: Envelope,
  elGetter: $.ASN1Encoder<Envelope>
) {
  if (!_cached_encoder_for_Envelope) {
    _cached_encoder_for_Envelope = function (
      value: Envelope,
      elGetter: $.ASN1Encoder<Envelope>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Header(value.header, $.BER),
            /* REQUIRED   */ _encode_Envelope_body_or_fault(
              value.body_or_fault,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Envelope(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Envelope */

/* eslint-enable */
