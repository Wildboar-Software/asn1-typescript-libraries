/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VlrNo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VlrNo       ::=  OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) )
 * ```
 */
export
type VlrNo = OCTET_STRING; // OctetStringType

export const _decode_VlrNo = (el: _Element): VlrNo => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 9) {
        throw new ASN1SizeError("VlrNo violates SIZE constraint");
    }
    return value;
};

export
const _encode_VlrNo: $.ASN1Encoder<VlrNo> = $._encodeOctetString;

/* eslint-enable */
