/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
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
export const _decode_GlobalCellID: $.ASN1Decoder<GlobalCellID> = (el: _Element): GlobalCellID => {
    const value = $._decodeOctetString(el);
    if (value.length < 5 || value.length > 7) {
        throw new ASN1SizeError("GlobalCellID violates SIZE constraint");
    }
    return value;
};
export const _encode_GlobalCellID: $.ASN1Encoder<GlobalCellID> = $._encodeOctetString;


/* eslint-enable */
