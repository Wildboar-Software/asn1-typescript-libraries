/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumOfHSCSDChanAllocated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumOfHSCSDChanAllocated  ::=  INTEGER
 * ```
 */
export
type NumOfHSCSDChanAllocated = INTEGER;

export
const _decode_NumOfHSCSDChanAllocated: $.ASN1Decoder<NumOfHSCSDChanAllocated> = $._decodeInteger;

export
const _encode_NumOfHSCSDChanAllocated: $.ASN1Encoder<NumOfHSCSDChanAllocated> = $._encodeInteger;

/* eslint-enable */
