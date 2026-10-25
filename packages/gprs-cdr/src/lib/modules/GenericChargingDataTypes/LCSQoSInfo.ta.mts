/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LCSQoSInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSQoSInfo  ::=  OCTET STRING ( SIZE( 4 ) )
 * ```
 */
export
type LCSQoSInfo = OCTET_STRING; // OctetStringType

export const _decode_LCSQoSInfo = (el: _Element): LCSQoSInfo => {
    const value = $._decodeOctetString(el);
    if (value.length !== 4) {
        throw new ASN1SizeError("LCSQoSInfo violates SIZE constraint");
    }
    return value;
};

export
const _encode_LCSQoSInfo: $.ASN1Encoder<LCSQoSInfo> = $._encodeOctetString;

/* eslint-enable */
