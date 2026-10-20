/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ValidityPeriodSemi
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ValidityPeriodSemi  ::=  OCTET STRING (SIZE(3))
 * ```
 */
export
type ValidityPeriodSemi = OCTET_STRING; // OctetStringType

export
const _decode_ValidityPeriodSemi: $.ASN1Decoder<ValidityPeriodSemi> = $._decodeOctetString;

export
const _encode_ValidityPeriodSemi: $.ASN1Encoder<ValidityPeriodSemi> = $._encodeOctetString;

/* eslint-enable */
