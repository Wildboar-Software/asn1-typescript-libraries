/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallingPartyCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingPartyCategory  ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type CallingPartyCategory = OCTET_STRING; // OctetStringType

export const _decode_CallingPartyCategory = (el: _Element): CallingPartyCategory => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("CallingPartyCategory violates SIZE constraint");
    }
    return value;
};

export
const _encode_CallingPartyCategory: $.ASN1Encoder<CallingPartyCategory> = $._encodeOctetString;

/* eslint-enable */
