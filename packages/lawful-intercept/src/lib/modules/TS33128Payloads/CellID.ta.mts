/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellID  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type CellID = OCTET_STRING; // OctetStringType
export const _decode_CellID: $.ASN1Decoder<CellID> = $._decodeOctetString;
export const _encode_CellID: $.ASN1Encoder<CellID> = $._encodeOctetString;


/* eslint-enable */
