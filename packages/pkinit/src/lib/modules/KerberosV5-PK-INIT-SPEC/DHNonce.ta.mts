/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DHNonce
 * @description
 *
 * Random octet string mixed into the Diffie-Hellman reply key
 * when keys are reused. As {@link AuthPack.clientDHNonce} it
 * must be as long as the longest symmetric key the client
 * supports. As {@link DHRepInfo.serverDHNonce} it must be
 * at least as long as the key that encrypts the AS-REP. Both are
 * empty octet strings in the key derivation when keys are not
 * reused. See {@link DHRepInfo}.
 *
 * [RFC 4556, section 3.2.3.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DHNonce  ::=  OCTET STRING
 * ```
 */
export
type DHNonce = OCTET_STRING; // OctetStringType
export const _decode_DHNonce = $._decodeOctetString;
export const _encode_DHNonce = $._encodeOctetString;


/* eslint-enable */
