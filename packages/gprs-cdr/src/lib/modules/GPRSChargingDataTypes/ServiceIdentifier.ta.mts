/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceIdentifier  ::=  INTEGER ( 0 .. 4294967295 )
 * ```
 */
export
type ServiceIdentifier = INTEGER;

export const _decode_ServiceIdentifier = (el: _Element): ServiceIdentifier => {
    const value = $._decodeInteger(el);
    if (value < 0 || value > 4294967295) {
        throw new ASN1OverflowError("ServiceIdentifier violates INTEGER range");
    }
    return value;
};

export
const _encode_ServiceIdentifier: $.ASN1Encoder<ServiceIdentifier> = $._encodeInteger;

/* eslint-enable */
