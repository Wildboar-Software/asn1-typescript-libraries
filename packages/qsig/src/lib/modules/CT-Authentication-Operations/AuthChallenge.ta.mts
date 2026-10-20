/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthChallenge
 * @description
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
