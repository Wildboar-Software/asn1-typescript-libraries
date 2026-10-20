/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CommandData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommandData  ::=  OCTET STRING (SIZE(0..157))
 * ```
 */
export
type CommandData = OCTET_STRING; // OctetStringType

export
const _decode_CommandData = (el: _Element): CommandData => {
    const value = $._decodeOctetString(el);
    if (value.length < 0 || value.length > 157) {
        throw new ASN1SizeError("CommandData violates SIZE constraint");
    }
    return value;
};

export
const _encode_CommandData: $.ASN1Encoder<CommandData> = $._encodeOctetString;

/* eslint-enable */
