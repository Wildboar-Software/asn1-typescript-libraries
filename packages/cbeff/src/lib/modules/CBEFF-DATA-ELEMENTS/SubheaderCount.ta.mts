/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubheaderCount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubheaderCount  ::=  INTEGER (0..255)
 * ```
 */
export
type SubheaderCount = INTEGER;

export
const _decode_SubheaderCount: $.ASN1Decoder<SubheaderCount> = $._decodeInteger;

export
const _encode_SubheaderCount: $.ASN1Encoder<SubheaderCount> = $._encodeInteger;

/* eslint-enable */
