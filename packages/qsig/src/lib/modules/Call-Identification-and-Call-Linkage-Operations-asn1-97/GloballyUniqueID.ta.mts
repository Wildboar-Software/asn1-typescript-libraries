/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
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
const _decode_GloballyUniqueID = (el: _Element): GloballyUniqueID => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 16) {
        throw new ASN1SizeError("GloballyUniqueID violates SIZE constraint");
    }
    return value;
};

export
const _encode_GloballyUniqueID: $.ASN1Encoder<GloballyUniqueID> = $._encodeOctetString;

/* eslint-enable */
