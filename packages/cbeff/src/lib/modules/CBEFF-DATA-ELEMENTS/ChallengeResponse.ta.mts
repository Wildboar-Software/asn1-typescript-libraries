/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChallengeResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChallengeResponse  ::=  OCTET STRING (SIZE (0..65535))
 * ```
 */
export
type ChallengeResponse = OCTET_STRING; // OctetStringType

export
const _decode_ChallengeResponse: $.ASN1Decoder<ChallengeResponse> = $._decodeOctetString;

export
const _encode_ChallengeResponse: $.ASN1Encoder<ChallengeResponse> = $._encodeOctetString;

/* eslint-enable */
