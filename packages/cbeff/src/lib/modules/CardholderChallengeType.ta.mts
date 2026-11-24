/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CardholderChallengeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CardholderChallengeType  ::=  OCTET STRING
 * ```
 */
export
type CardholderChallengeType = OCTET_STRING; // OctetStringType

export
const _decode_CardholderChallengeType: $.ASN1Decoder<CardholderChallengeType> = $._decodeOctetString;

export
const _encode_CardholderChallengeType: $.ASN1Encoder<CardholderChallengeType> = $._encodeOctetString;

/* eslint-enable */
