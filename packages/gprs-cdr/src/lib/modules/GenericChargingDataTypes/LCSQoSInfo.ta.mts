/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LCSQoSInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSQoSInfo  ::=  OCTET STRING ( SIZE( 4 ) )
 * ```
 */
export
type LCSQoSInfo = OCTET_STRING; // OctetStringType

export
const _decode_LCSQoSInfo: $.ASN1Decoder<LCSQoSInfo> = $._decodeOctetString;

export
const _encode_LCSQoSInfo: $.ASN1Encoder<LCSQoSInfo> = $._encodeOctetString;

/* eslint-enable */
