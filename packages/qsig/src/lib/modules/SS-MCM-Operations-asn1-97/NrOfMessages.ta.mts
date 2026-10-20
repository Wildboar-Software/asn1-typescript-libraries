/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NrOfMessages
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NrOfMessages  ::=  INTEGER (0..65535)
 * ```
 */
export
type NrOfMessages = INTEGER;

export
const _decode_NrOfMessages: $.ASN1Decoder<NrOfMessages> = $._decodeInteger;

export
const _encode_NrOfMessages: $.ASN1Encoder<NrOfMessages> = $._encodeInteger;

/* eslint-enable */
