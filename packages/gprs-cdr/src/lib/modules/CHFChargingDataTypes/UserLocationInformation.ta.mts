/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserLocationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserLocationInformation  ::=  OCTET STRING
 * ```
 */
export
type UserLocationInformation = OCTET_STRING; // OctetStringType

export
const _decode_UserLocationInformation: $.ASN1Decoder<UserLocationInformation> = $._decodeOctetString;

export
const _encode_UserLocationInformation: $.ASN1Encoder<UserLocationInformation> = $._encodeOctetString;

/* eslint-enable */
