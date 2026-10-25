/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthChallenge
 * @description
 *
 * Randomly generated authentication parameter (ECMA-243 §6.3.1). In SS-CTAT the
 * network produces it. In SS-CTAN it is the challenge received from the CTM
 * user (§7.5.1.1). Generation is outside ECMA-243 (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthChallenge  ::=  OCTET STRING (SIZE(1..8))
 * ```
 */
export
type AuthChallenge = OCTET_STRING; // OctetStringType

export
const _decode_AuthChallenge: $.ASN1Decoder<AuthChallenge> = $._decodeOctetString;

export
const _encode_AuthChallenge: $.ASN1Encoder<AuthChallenge> = $._encodeOctetString;

/* eslint-enable */
