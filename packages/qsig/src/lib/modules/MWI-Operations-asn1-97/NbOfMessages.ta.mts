/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NbOfMessages
 * @description
 *
 * Number of messages waiting, 0..65535 (ECMA-242 §6.3.1). ECMA-241 §7.2.1.1
 * note 3 says the value is non-zero, and that omitting the element means one or
 * more messages are waiting. The protocol still permits 0. Neither standard
 * says what 0 means.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NbOfMessages  ::=  INTEGER (0..65535)
 * ```
 */
export
type NbOfMessages = INTEGER;

export
const _decode_NbOfMessages = (el: _Element): NbOfMessages => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 65535n) : (value < 0 || value > 65535))) {
        throw new ASN1OverflowError("NbOfMessages violates INTEGER constraint");
    }
    return value;
};

export
const _encode_NbOfMessages: $.ASN1Encoder<NbOfMessages> = $._encodeInteger;

/* eslint-enable */
