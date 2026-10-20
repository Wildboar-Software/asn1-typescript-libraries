/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FixedSubsID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FixedSubsID  ::=  OCTET STRING
 * ```
 */
export
type FixedSubsID = OCTET_STRING; // OctetStringType

export
const _decode_FixedSubsID: $.ASN1Decoder<FixedSubsID> = $._decodeOctetString;

export
const _encode_FixedSubsID: $.ASN1Encoder<FixedSubsID> = $._encodeOctetString;

/* eslint-enable */
