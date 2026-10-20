/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDUSessionId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionId  ::=  INTEGER ( 0 .. 255 )
 * ```
 */
export
type PDUSessionId = INTEGER;

export
const _decode_PDUSessionId: $.ASN1Decoder<PDUSessionId> = $._decodeInteger;

export
const _encode_PDUSessionId: $.ASN1Encoder<PDUSessionId> = $._encodeInteger;

/* eslint-enable */
