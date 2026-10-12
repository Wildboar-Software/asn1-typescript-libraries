/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GlobalCellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GlobalCellID     ::=  OCTET STRING  (SIZE (5..7))
 * ```
 */
export
type GlobalCellID = OCTET_STRING; // OctetStringType
export const _decode_GlobalCellID: $.ASN1Decoder<GlobalCellID> = $._decodeOctetString;
export const _encode_GlobalCellID: $.ASN1Encoder<GlobalCellID> = $._encodeOctetString;


/* eslint-enable */
