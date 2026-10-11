/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDUSessionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionID  ::=  INTEGER (0..255)
 * ```
 */
export
type PDUSessionID = INTEGER;

export const _decode_PDUSessionID: $.ASN1Decoder<PDUSessionID> = $._decodeInteger;

export const _encode_PDUSessionID: $.ASN1Encoder<PDUSessionID> = $._encodeInteger;


/* eslint-enable */
