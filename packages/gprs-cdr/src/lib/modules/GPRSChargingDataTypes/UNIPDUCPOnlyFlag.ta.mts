/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UNIPDUCPOnlyFlag
 * @description
 * 
 * Whether this PDN connection is limited to Control Plane CIoT EPS
 * optimisation for UNI PDU transfer, that is, transfer only by Control
 * Plane NAS PDU (tables 6.1.2.1 and 6.1.3.1).
 * 
 * 3GPP TS 32.251 V19.0.0.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UNIPDUCPOnlyFlag  ::=  BOOLEAN
 * ```
 */
export
type UNIPDUCPOnlyFlag = BOOLEAN; // BooleanType

export
const _decode_UNIPDUCPOnlyFlag: $.ASN1Decoder<UNIPDUCPOnlyFlag> = $._decodeBoolean;

export
const _encode_UNIPDUCPOnlyFlag: $.ASN1Encoder<UNIPDUCPOnlyFlag> = $._encodeBoolean;

/* eslint-enable */
