/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSTime    ::=  OCTET STRING ( SIZE( 8 ) )
 * ```
 */
export
type MBMSTime = OCTET_STRING; // OctetStringType

export
const _decode_MBMSTime: $.ASN1Decoder<MBMSTime> = $._decodeOctetString;

export
const _encode_MBMSTime: $.ASN1Encoder<MBMSTime> = $._encodeOctetString;

/* eslint-enable */
