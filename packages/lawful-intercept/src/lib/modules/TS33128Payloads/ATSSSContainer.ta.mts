/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ATSSSContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ATSSSContainer  ::=  OCTET STRING
 * ```
 */
export
type ATSSSContainer = OCTET_STRING; // OctetStringType

export const _decode_ATSSSContainer: $.ASN1Decoder<ATSSSContainer> = $._decodeOctetString;

export const _encode_ATSSSContainer: $.ASN1Encoder<ATSSSContainer> = $._encodeOctetString;


/* eslint-enable */
