/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceList  ::=  BIT STRING {callOffer(0)} (SIZE(1..32))
 * ```
 */
export
type ServiceList = BIT_STRING;

/**
 * @summary ServiceList_callOffer
 * @constant
 */
export
const ServiceList_callOffer: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callOffer
 * @constant
 */
export
const callOffer: number = ServiceList_callOffer; /* SHORT_NAMED_BIT */

export
const _decode_ServiceList: $.ASN1Decoder<ServiceList> = $._decodeBitString;

export
const _encode_ServiceList: $.ASN1Encoder<ServiceList> = $._encodeBitString;

/* eslint-enable */
