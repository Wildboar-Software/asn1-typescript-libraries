/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Port_Number
 * @description
 * 
 * Port number in the range 0..65535. Used as the PTC server port for the RTP
 * session (annex B.3). Table 17.2.20 requires that address and port on a
 * pre-established session record and describes them as the IP address and port
 * of the target at the PTC server.
 * 
 * 3GPP TS 33.108, clause 17.2.20 and annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Port-Number  ::=  INTEGER (0..65535)
 * ```
 */
export
type Port_Number = INTEGER;
export const _decode_Port_Number: $.ASN1Decoder<Port_Number> = (el: _Element): Port_Number => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 65535n) {
        throw new ASN1OverflowError("Port_Number violates INTEGER range");
    }
    return value;
};
export const _encode_Port_Number: $.ASN1Encoder<Port_Number> = $._encodeInteger;


/* eslint-enable */
