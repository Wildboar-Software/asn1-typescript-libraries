/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SubDomainID
 * @description
 *
 * Switching-function-specific linkage identifier (ECMA-314 Annex D).
 * Globally unique only together with switchingSubDomainName. Length 1..8
 * octets. When two assignments collide, the higher binary value is kept
 * (§6.5.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-314/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
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
