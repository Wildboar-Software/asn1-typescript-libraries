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
 * @summary KDCOptions
 * @description
 *
 * KDC request option bits as `KerberosFlags` ([RFC 4120 §5.4.1](https://datatracker.ietf.org/doc/html/rfc4120#section-5.4.1),
 * [RFC 4120 §2](https://datatracker.ietf.org/doc/html/rfc4120#section-2)). Includes forwardable(1), forwarded(2),
 * proxiable(3), proxy(4), allow-postdate(5), postdated(6),
 * renewable(8), disable-transited-check(26), renewable-ok(27),
 * enc-tkt-in-skey(28), renew(30), validate(31).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KDCOptions       ::=  KerberosFlags
 * ```
 */
export type KDCOptions = KerberosFlags; // DefinedType


let _cached_decoder_for_KDCOptions: $.ASN1Decoder<KDCOptions> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KDCOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KDCOptions} The decoded data structure.
 */
export function _decode_KDCOptions(el: _Element): KDCOptions {
  if (!_cached_decoder_for_KDCOptions) {
    _cached_decoder_for_KDCOptions = _decode_KerberosFlags;
  }
  return _cached_decoder_for_KDCOptions(el);
}


let _cached_encoder_for_KDCOptions: $.ASN1Encoder<KDCOptions> | null = null;


/**
 * @summary Encodes a(n) KDCOptions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KDCOptions, encoded as an ASN.1 Element.
 */
export function _encode_KDCOptions(
  value: KDCOptions,
  elGetter: $.ASN1Encoder<KDCOptions>
): _Element {
  if (!_cached_encoder_for_KDCOptions) {
    _cached_encoder_for_KDCOptions = _encode_KerberosFlags;
  }
  return _cached_encoder_for_KDCOptions(value, elGetter);
}


/* eslint-enable */
