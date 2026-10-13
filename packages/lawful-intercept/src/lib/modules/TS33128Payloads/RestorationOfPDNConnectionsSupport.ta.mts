/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RestorationOfPDNConnectionsSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RestorationOfPDNConnectionsSupport  ::=  BOOLEAN
 * ```
 */
export
type RestorationOfPDNConnectionsSupport = BOOLEAN; // BooleanType
export const _decode_RestorationOfPDNConnectionsSupport: $.ASN1Decoder<RestorationOfPDNConnectionsSupport> = $._decodeBoolean;
export const _encode_RestorationOfPDNConnectionsSupport: $.ASN1Encoder<RestorationOfPDNConnectionsSupport> = $._encodeBoolean;


/* eslint-enable */
