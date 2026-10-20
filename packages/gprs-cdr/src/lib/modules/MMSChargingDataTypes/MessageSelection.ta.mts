/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MessageSelection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageSelection  ::=  INTEGER
 * ```
 */
export
type MessageSelection = INTEGER;

export
const _decode_MessageSelection: $.ASN1Decoder<MessageSelection> = $._decodeInteger;

export
const _encode_MessageSelection: $.ASN1Encoder<MessageSelection> = $._encodeInteger;

/* eslint-enable */
