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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { Header, _decode_Header, _encode_Header } from '../ASN1SOAP/Header.ta.mjs';
import {
  Envelope_body_or_fault,
  _decode_Envelope_body_or_fault,
  _encode_Envelope_body_or_fault,
} from '../ASN1SOAP/Envelope-body-or-fault.ta.mjs';

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
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'body-or-fault',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of Envelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Envelope: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Envelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Envelope: $.ComponentSpec[] = [];


let _cached_decoder_for_Envelope: $.ASN1Decoder<Envelope> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Envelope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Envelope} The decoded data structure.
 */
export function _decode_Envelope(el: _Element): Envelope {
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


let _cached_encoder_for_Envelope: $.ASN1Encoder<Envelope> | null = null;


/**
 * @summary Encodes a(n) Envelope into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Envelope, encoded as an ASN.1 Element.
 */
export function _encode_Envelope(
  value: Envelope,
  elGetter: $.ASN1Encoder<Envelope>
): _Element {
  if (!_cached_encoder_for_Envelope) {
    _cached_encoder_for_Envelope = function (
      value: Envelope    ): _Element {
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


/* eslint-enable */
