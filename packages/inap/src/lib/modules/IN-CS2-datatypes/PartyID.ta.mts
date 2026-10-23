/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyID  ::=  INTEGER
 * ```
 */
export
type PartyID = INTEGER;

export
const _decode_PartyID: $.ASN1Decoder<PartyID> = $._decodeInteger;

export
const _encode_PartyID: $.ASN1Encoder<PartyID> = $._encodeInteger;

/* eslint-enable */
