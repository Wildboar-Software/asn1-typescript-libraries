/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SubaddressInformation
 * @description
 *
 * Octets of a user-specified subaddress, coded according to user requirements
 * (ECMA-165 Annex B Table B.1). Table B.1 allows 1 to 20 octets and notes that
 * some networks limit the value, for example to 4 octets. It does not define
 * the contents.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubaddressInformation  ::=  OCTET STRING (SIZE(1..20))
 * ```
 */
export
type SubaddressInformation = OCTET_STRING; // OctetStringType

export
const _decode_SubaddressInformation = (el: _Element): SubaddressInformation => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("SubaddressInformation violates SIZE constraint");
    }
    return value;
};

export
const _encode_SubaddressInformation: $.ASN1Encoder<SubaddressInformation> = $._encodeOctetString;

/* eslint-enable */
