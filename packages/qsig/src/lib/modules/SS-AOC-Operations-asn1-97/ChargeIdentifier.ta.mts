/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargeIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeIdentifier  ::=  INTEGER (-32768..32767)
 * ```
 */
export
type ChargeIdentifier = INTEGER;

export
const _decode_ChargeIdentifier: $.ASN1Decoder<ChargeIdentifier> = $._decodeInteger;

export
const _encode_ChargeIdentifier: $.ASN1Encoder<ChargeIdentifier> = $._encodeInteger;

/* eslint-enable */
