/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RedirectReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RedirectReason  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export
type RedirectReason = OCTET_STRING; // OctetStringType

export
function _decode_RedirectReason (el: _Element): RedirectReason {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("RedirectReason violates SIZE constraint");
    }
    return value;
}

export
const _encode_RedirectReason: $.ASN1Encoder<RedirectReason> = $._encodeOctetString;

/* eslint-enable */
