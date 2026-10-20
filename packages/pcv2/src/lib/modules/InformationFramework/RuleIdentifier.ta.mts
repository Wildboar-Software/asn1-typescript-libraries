/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RuleIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RuleIdentifier  ::=  INTEGER
 * ```
 */
export
type RuleIdentifier = INTEGER;

export
const _decode_RuleIdentifier: $.ASN1Decoder<RuleIdentifier> = $._decodeInteger;

export
const _encode_RuleIdentifier: $.ASN1Encoder<RuleIdentifier> = $._encodeInteger;

/* eslint-enable */
