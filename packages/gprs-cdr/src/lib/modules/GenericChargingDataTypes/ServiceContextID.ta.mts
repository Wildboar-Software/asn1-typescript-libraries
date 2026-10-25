/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceContextID
 * @description
 *
 * This field contains the Service Context Id from Diameter Accounting, if
 * Diameter Accounting was used and the field included. It identifies the
 * service, sub-system or domain and release that the CDR is applicable to.
 * The contents are described in TS 32.299 [50].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceContextID  ::=  UTF8String
 * ```
 */
export
type ServiceContextID = UTF8String; // UTF8String

export
const _decode_ServiceContextID: $.ASN1Decoder<ServiceContextID> = $._decodeUTF8String;

export
const _encode_ServiceContextID: $.ASN1Encoder<ServiceContextID> = $._encodeUTF8String;

/* eslint-enable */
