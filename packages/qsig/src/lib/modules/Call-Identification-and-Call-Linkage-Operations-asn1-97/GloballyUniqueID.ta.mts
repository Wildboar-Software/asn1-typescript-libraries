/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GloballyUniqueID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GloballyUniqueID  ::=  OCTET STRING (SIZE(1..16))
 * ```
 */
export
type GloballyUniqueID = OCTET_STRING; // OctetStringType

export
const _decode_GloballyUniqueID: $.ASN1Decoder<GloballyUniqueID> = $._decodeOctetString;

export
const _encode_GloballyUniqueID: $.ASN1Encoder<GloballyUniqueID> = $._encodeOctetString;

/* eslint-enable */
