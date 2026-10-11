/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PLMNID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMNID  ::=  OCTET STRING (SIZE(3))
 * ```
 */
export
type PLMNID = OCTET_STRING; // OctetStringType

export function _decode_PLMNID (el: _Element): PLMNID {
    const value = $._decodeOctetString(el);
    if (value.length < 3 || value.length > 3) {
        throw new ASN1SizeError("PLMNID violates the SIZE constraint");
    }
    return value;
}

export const _encode_PLMNID: $.ASN1Encoder<PLMNID> = $._encodeOctetString;


/* eslint-enable */
