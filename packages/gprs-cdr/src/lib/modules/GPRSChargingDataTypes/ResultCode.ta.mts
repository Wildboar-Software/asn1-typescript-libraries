/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResultCode
 * @description
 *
 * Result Code contains the result code after the interconnection with the
 * OCS. This field may be added to the service data container if online and
 * offline charging are both used for same rating group. The result code in
 * service data container is the value of the Result-Code AVP received within
 * last CCA message in corresponding MSCC AVP to this service data container.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultCode  ::=  INTEGER
 * ```
 */
export
type ResultCode = INTEGER;

export
const _decode_ResultCode: $.ASN1Decoder<ResultCode> = $._decodeInteger;

export
const _encode_ResultCode: $.ASN1Encoder<ResultCode> = $._encodeInteger;

/* eslint-enable */
