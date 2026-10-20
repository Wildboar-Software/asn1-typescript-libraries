/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSServiceArea
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSServiceArea  ::=  OCTET STRING
 * ```
 */
export
type MBMSServiceArea = OCTET_STRING; // OctetStringType

export
const _decode_MBMSServiceArea: $.ASN1Decoder<MBMSServiceArea> = $._decodeOctetString;

export
const _encode_MBMSServiceArea: $.ASN1Encoder<MBMSServiceArea> = $._encodeOctetString;

/* eslint-enable */
