/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CUG_Interlock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-Interlock  ::=  OCTET STRING(SIZE (4))
 * ```
 */
export
type CUG_Interlock = OCTET_STRING; // OctetStringType

export
const _decode_CUG_Interlock: $.ASN1Decoder<CUG_Interlock> = $._decodeOctetString;

export
const _encode_CUG_Interlock: $.ASN1Encoder<CUG_Interlock> = $._encodeOctetString;

/* eslint-enable */
