/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertOctetSize } from "../../constraints.mjs";



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

export const _decode_ChallengeResponse: $.ASN1Decoder<ChallengeResponse> = (el: _Element) => {
    const value = $._decodeOctetString(el);
    assertOctetSize(value, 0, 65535, "ChallengeResponse");
    return value;
};

export
const _encode_ChallengeResponse: $.ASN1Encoder<ChallengeResponse> = $._encodeOctetString;

/* eslint-enable */
