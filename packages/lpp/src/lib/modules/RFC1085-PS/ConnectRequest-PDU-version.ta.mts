/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConnectRequest_PDU_version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectRequest-PDU-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ConnectRequest_PDU_version = INTEGER;

/**
 * @summary ConnectRequest_PDU_version_version_1
 * @constant
 * @type {number}
 */
export
const ConnectRequest_PDU_version_version_1: ConnectRequest_PDU_version = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectRequest_PDU_version_version_1
 * @constant
 * @type {number}
 */
export
const version_1: ConnectRequest_PDU_version = ConnectRequest_PDU_version_version_1; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ConnectRequest_PDU_version: $.ASN1Decoder<ConnectRequest_PDU_version> = $._decodeInteger;
export const _encode_ConnectRequest_PDU_version: $.ASN1Encoder<ConnectRequest_PDU_version> = $._encodeInteger;


/* eslint-enable */
