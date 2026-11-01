/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary UUID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UUID  ::=  OCTET STRING(SIZE (16))
 * ```
 */
export
type UUID = OCTET_STRING; // OctetStringType

export
function _decode_UUID (el: _Element): UUID {
    const value = $._decodeOctetString(el);
    if (value.length !== 16) {
        throw new ASN1SizeError("UUID violates SIZE constraint");
    }
    return value;
}

export
const _encode_UUID: $.ASN1Encoder<UUID> = $._encodeOctetString;

/* eslint-enable */
