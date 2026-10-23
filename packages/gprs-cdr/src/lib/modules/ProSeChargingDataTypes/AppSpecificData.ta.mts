/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AppSpecificData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AppSpecificData  ::=  OCTET STRING
 * ```
 */
export
type AppSpecificData = OCTET_STRING; // OctetStringType

export
const _decode_AppSpecificData: $.ASN1Decoder<AppSpecificData> = $._decodeOctetString;

export
const _encode_AppSpecificData: $.ASN1Encoder<AppSpecificData> = $._encodeOctetString;

/* eslint-enable */
