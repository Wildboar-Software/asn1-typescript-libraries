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
