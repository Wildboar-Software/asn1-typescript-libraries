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
  type KerberosFlags,
  _decode_KerberosFlags,
  _encode_KerberosFlags,
} from '../KerberosV5Spec2/KerberosFlags.ta.mjs';

/**
 * @summary APOptions
 * @description
 *
 * AP-REQ option bits as `KerberosFlags` ([RFC 4120 §5.5.1](https://datatracker.ietf.org/doc/html/rfc4120#section-5.5.1)).
 * use-session-key(1): ticket encrypted in server TGT session
 * key (user-to-user). mutual-required(2): server MUST reply
 * with `AP-REP`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * APOptions        ::=  KerberosFlags
 * ```
 */
export type APOptions = KerberosFlags; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) APOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {APOptions} The decoded data structure.
 */
export const _decode_APOptions: $.ASN1Decoder<APOptions> = _decode_KerberosFlags;

/**
 * @summary Encodes a(n) APOptions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The APOptions, encoded as an ASN.1 Element.
 */
export const _encode_APOptions: $.ASN1Encoder<APOptions> = _encode_KerberosFlags;


/* eslint-enable */
