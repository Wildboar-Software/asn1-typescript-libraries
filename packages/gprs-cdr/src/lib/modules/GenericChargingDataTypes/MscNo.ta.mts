/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MscNo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MscNo       ::=  OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) )
 * ```
 */
export
type MscNo = OCTET_STRING; // OctetStringType

export const _decode_MscNo = (el: _Element): MscNo => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 9) {
        throw new ASN1SizeError("MscNo violates SIZE constraint");
    }
    return value;
};

export
const _encode_MscNo: $.ASN1Encoder<MscNo> = $._encodeOctetString;

/* eslint-enable */
