/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumOfHSCSDChanRequested
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumOfHSCSDChanRequested  ::=  INTEGER
 * ```
 */
export
type NumOfHSCSDChanRequested = INTEGER;

export
const _decode_NumOfHSCSDChanRequested: $.ASN1Decoder<NumOfHSCSDChanRequested> = $._decodeInteger;

export
const _encode_NumOfHSCSDChanRequested: $.ASN1Encoder<NumOfHSCSDChanRequested> = $._encodeInteger;

/* eslint-enable */
