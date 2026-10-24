/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MessageReference
 * @description
 *
 * Integer 0..255 identifying a Short Message or a Command (ECMA-325 §E.1.1,
 * §E.10.1). The Sending User allocates it, or the Sending User PINX does if
 * the user does not. It increments by one for each new Short Message and each
 * Command and wraps from 255 to 0. On a status report, an Enquiry uses the
 * original Short Message reference instead (§E.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageReference  ::=  INTEGER (0..255)
 * ```
 */
export
type MessageReference = INTEGER;

export
const _decode_MessageReference = (el: _Element): MessageReference => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("MessageReference violates INTEGER constraint");
    }
    return value;
};

export
const _encode_MessageReference: $.ASN1Encoder<MessageReference> = $._encodeInteger;

/* eslint-enable */
