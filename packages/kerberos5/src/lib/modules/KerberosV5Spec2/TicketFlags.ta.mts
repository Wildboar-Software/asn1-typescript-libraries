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
import {
  KerberosFlags,
  _decode_KerberosFlags,
  _encode_KerberosFlags,
} from '../KerberosV5Spec2/KerberosFlags.ta.mjs';

/**
 * @summary TicketFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TicketFlags      ::=  KerberosFlags
 * ```
 */
export type TicketFlags = KerberosFlags; // DefinedType


let _cached_decoder_for_TicketFlags: $.ASN1Decoder<TicketFlags> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TicketFlags
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TicketFlags} The decoded data structure.
 */
export function _decode_TicketFlags(el: _Element): TicketFlags {
  if (!_cached_decoder_for_TicketFlags) {
    _cached_decoder_for_TicketFlags = _decode_KerberosFlags;
  }
  return _cached_decoder_for_TicketFlags(el);
}


let _cached_encoder_for_TicketFlags: $.ASN1Encoder<TicketFlags> | null = null;


/**
 * @summary Encodes a(n) TicketFlags into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TicketFlags, encoded as an ASN.1 Element.
 */
export function _encode_TicketFlags(
  value: TicketFlags,
  elGetter: $.ASN1Encoder<TicketFlags>
): _Element {
  if (!_cached_encoder_for_TicketFlags) {
    _cached_encoder_for_TicketFlags = _encode_KerberosFlags;
  }
  return _cached_encoder_for_TicketFlags(value, elGetter);
}


/* eslint-enable */
