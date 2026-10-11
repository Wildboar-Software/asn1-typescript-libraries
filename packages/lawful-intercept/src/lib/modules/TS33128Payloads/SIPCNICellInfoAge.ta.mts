/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPCNICellInfoAge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPCNICellInfoAge  ::=  INTEGER(0..999999999)
 * ```
 */
export
type SIPCNICellInfoAge = INTEGER;

export const _decode_SIPCNICellInfoAge: $.ASN1Decoder<SIPCNICellInfoAge> = $._decodeInteger;

export const _encode_SIPCNICellInfoAge: $.ASN1Encoder<SIPCNICellInfoAge> = $._encodeInteger;


/* eslint-enable */
