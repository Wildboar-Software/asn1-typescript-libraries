/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SubDomainID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubDomainID  ::=  OCTET STRING (SIZE(1..8))
 * ```
 */
export
type SubDomainID = OCTET_STRING; // OctetStringType

export
const _decode_SubDomainID = (el: _Element): SubDomainID => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("SubDomainID violates SIZE constraint");
    }
    return value;
};

export
const _encode_SubDomainID: $.ASN1Encoder<SubDomainID> = $._encodeOctetString;

/* eslint-enable */
