/* eslint-disable */
import {
    BOOLEAN,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PDNHandoverIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNHandoverIndication  ::=  BOOLEAN
 * ```
 */
export
type PDNHandoverIndication = BOOLEAN; // BooleanType

export const _decode_PDNHandoverIndication: $.ASN1Decoder<PDNHandoverIndication> = $._decodeBoolean;

export const _encode_PDNHandoverIndication: $.ASN1Encoder<PDNHandoverIndication> = $._encodeBoolean;

/* eslint-enable */
