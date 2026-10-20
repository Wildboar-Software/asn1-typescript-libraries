/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSStatus   ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type SMSStatus = OCTET_STRING; // OctetStringType

export
const _decode_SMSStatus: $.ASN1Decoder<SMSStatus> = $._decodeOctetString;

export
const _encode_SMSStatus: $.ASN1Encoder<SMSStatus> = $._encodeOctetString;

/* eslint-enable */
