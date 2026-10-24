/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RDSSupport
 * @description
 * 
 * True if Reliable Data Service is supported in the PDN Connection,. otherwise
 * False
 *
 * 3GPP TS 33.128, clause 7.8.2.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSSupport  ::=  BOOLEAN
 * ```
 */
export
type RDSSupport = BOOLEAN; // BooleanType
export const _decode_RDSSupport: $.ASN1Decoder<RDSSupport> = $._decodeBoolean;
export const _encode_RDSSupport: $.ASN1Encoder<RDSSupport> = $._encodeBoolean;


/* eslint-enable */
