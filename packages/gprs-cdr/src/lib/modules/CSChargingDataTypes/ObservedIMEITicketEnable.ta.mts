/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ObservedIMEITicketEnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObservedIMEITicketEnable  ::=  BOOLEAN
 * ```
 */
export
type ObservedIMEITicketEnable = BOOLEAN; // BooleanType

export
const _decode_ObservedIMEITicketEnable: $.ASN1Decoder<ObservedIMEITicketEnable> = $._decodeBoolean;

export
const _encode_ObservedIMEITicketEnable: $.ASN1Encoder<ObservedIMEITicketEnable> = $._encodeBoolean;

/* eslint-enable */
