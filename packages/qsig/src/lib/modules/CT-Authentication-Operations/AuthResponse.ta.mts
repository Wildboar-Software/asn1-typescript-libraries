/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthResponse
 * @description
 *
 * In SS-CTAT, the response the CTM user is expected to return. In SS-CTAN, the
 * response value from the network (ECMA-243 §6.3.1). How either value is
 * computed is outside ECMA-243 (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthResponse  ::=  OCTET STRING (SIZE(1..4))
 * ```
 */
export
type AuthResponse = OCTET_STRING; // OctetStringType

export
const _decode_AuthResponse: $.ASN1Decoder<AuthResponse> = $._decodeOctetString;

export
const _encode_AuthResponse: $.ASN1Encoder<AuthResponse> = $._encodeOctetString;

/* eslint-enable */
