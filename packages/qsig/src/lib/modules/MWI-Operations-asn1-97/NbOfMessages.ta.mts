/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NbOfMessages
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NbOfMessages  ::=  INTEGER (0..65535)
 * ```
 */
export
type NbOfMessages = INTEGER;

export
const _decode_NbOfMessages: $.ASN1Decoder<NbOfMessages> = $._decodeInteger;

export
const _encode_NbOfMessages: $.ASN1Encoder<NbOfMessages> = $._encodeInteger;

/* eslint-enable */
