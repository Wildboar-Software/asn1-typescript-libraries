/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QoSFlowId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QoSFlowId   ::=  INTEGER
 * ```
 */
export
type QoSFlowId = INTEGER;

export
const _decode_QoSFlowId: $.ASN1Decoder<QoSFlowId> = $._decodeInteger;

export
const _encode_QoSFlowId: $.ASN1Encoder<QoSFlowId> = $._encodeInteger;

/* eslint-enable */
