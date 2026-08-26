/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary MsgSigDigest
 * @description
 *
 * `OCTET STRING` digest of the ASN.1 DER-encoded `signedAttrs` of the
 * original `SignedData` `SignerInfo` that requested the signed receipt.
 * Allowed only in signed attributes of a signed receipt; at most one
 * `msgSigDigest` in a signed-attributes set. Attribute OID
 * `id-aa-msgSigDigest` ([RFC 2634 §2.10](https://datatracker.ietf.org/doc/html/rfc2634#section-2.10)).
 *
 * Computed when verifying the original signature ([RFC 2634 §2.4](https://datatracker.ietf.org/doc/html/rfc2634#section-2.4)) and
 * compared during receipt validation ([RFC 2634 §2.6](https://datatracker.ietf.org/doc/html/rfc2634#section-2.6)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MsgSigDigest  ::=  OCTET STRING
 * ```
 */
export type MsgSigDigest = OCTET_STRING; // OctetStringType




export const _decode_MsgSigDigest = $._decodeOctetString;




export const _encode_MsgSigDigest = $._encodeOctetString;


/* eslint-enable */
