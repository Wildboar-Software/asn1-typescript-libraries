/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSPDNConnectionReleaseScopeIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSPDNConnectionReleaseScopeIndication  ::=  BOOLEAN
 * ```
 */
export
type EPSPDNConnectionReleaseScopeIndication = BOOLEAN; // BooleanType
export const _decode_EPSPDNConnectionReleaseScopeIndication: $.ASN1Decoder<EPSPDNConnectionReleaseScopeIndication> = $._decodeBoolean;
export const _encode_EPSPDNConnectionReleaseScopeIndication: $.ASN1Encoder<EPSPDNConnectionReleaseScopeIndication> = $._encodeBoolean;


/* eslint-enable */
