/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RedirectionInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RedirectionInformation  ::=  OCTET STRING(SIZE (2))
 * ```
 */
export
type RedirectionInformation = OCTET_STRING; // OctetStringType

export
function _decode_RedirectionInformation (el: _Element): RedirectionInformation {
    const value = $._decodeOctetString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("RedirectionInformation violates SIZE constraint");
    }
    return value;
}

export
const _encode_RedirectionInformation: $.ASN1Encoder<RedirectionInformation> = $._encodeOctetString;

/* eslint-enable */
