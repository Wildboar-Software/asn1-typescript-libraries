/* eslint-disable */
import {
  BIT_STRING,
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


/**
 * @summary Protocol_Version
 * @description
 *
 * Versions this entity supports. ISO 8571-4:1988 line 47 defines
 * only `version-1` (0). The initiator sets only version-1;
 * trailing unused bits are omitted (ISO 8571-4:1988 §8.1.1).
 * `version-2` is not in ISO 8571:1988 Parts 1–4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Protocol-Version  ::=  [0] IMPLICIT BIT STRING {version-1(0), version-2(1)
 * }
 * ```
 */
export type Protocol_Version = BIT_STRING;


/**
 * @summary Protocol_Version_version_1
 * @description
 *
 * Bit 0: ISO 8571:1988 protocol. Initiator sets only this bit
 * (ISO 8571-4:1988 §8.1.1).
 *
 * @constant
 */
export const Protocol_Version_version_1: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary version_1
 * @constant
 */
export const version_1: number = Protocol_Version_version_1; /* SHORT_NAMED_BIT */


/**
 * @summary Protocol_Version_version_2
 * @description
 *
 * Bit 1: later protocol version; not in ISO 8571:1988 Parts 1–4.
 *
 * @constant
 */
export const Protocol_Version_version_2: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary version_2
 * @constant
 */
export const version_2: number = Protocol_Version_version_2; /* SHORT_NAMED_BIT */


let _cached_decoder_for_Protocol_Version: $.ASN1Decoder<Protocol_Version> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Protocol_Version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Protocol_Version} The decoded data structure.
 */
export function _decode_Protocol_Version(el: _Element): Protocol_Version {
  if (!_cached_decoder_for_Protocol_Version) {
    _cached_decoder_for_Protocol_Version = $._decode_implicit<Protocol_Version>(
      () => $._decodeBitString
    );
  }
  return _cached_decoder_for_Protocol_Version(el);
}


let _cached_encoder_for_Protocol_Version: $.ASN1Encoder<Protocol_Version> | null = null;


/**
 * @summary Encodes a(n) Protocol_Version into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Protocol_Version, encoded as an ASN.1 Element.
 */
export function _encode_Protocol_Version(
  value: Protocol_Version,
  elGetter: $.ASN1Encoder<Protocol_Version>
): _Element {
  if (!_cached_encoder_for_Protocol_Version) {
    _cached_encoder_for_Protocol_Version = $._encode_implicit(
      _TagClass.context,
      0,
      () => $._encodeBitString,
      $.BER
    );
  }
  return _cached_encoder_for_Protocol_Version(value, elGetter);
}


/* eslint-enable */
