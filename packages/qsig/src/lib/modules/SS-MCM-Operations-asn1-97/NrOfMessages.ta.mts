/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NrOfMessages
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NrOfMessages  ::=  INTEGER (0..65535)
 * ```
 */
export
type NrOfMessages = INTEGER;

export
const _decode_NrOfMessages = (el: _Element): NrOfMessages => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 65535n) : (value < 0 || value > 65535))) {
        throw new ASN1OverflowError("NrOfMessages violates INTEGER constraint");
    }
    return value;
};

export
const _encode_NrOfMessages: $.ASN1Encoder<NrOfMessages> = $._encodeInteger;

/* eslint-enable */
