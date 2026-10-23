/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StatusTextType
 * @description
 * 
 * Technical status text that accompanies a request status or an MM status.
 * The CDR field states when it is present. On an O1S-CDR and an MM7S-CDR
 * it is present only if the submission was rejected. On several MM4
 * results it is present only if the response included the text.
 *
 * 3GPP TS 32.270 V19.0.0 clauses 6.1.1.1 and 6.1.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusTextType  ::=  OCTET STRING
 * ```
 */
export
type StatusTextType = OCTET_STRING; // OctetStringType

export
const _decode_StatusTextType: $.ASN1Decoder<StatusTextType> = $._decodeOctetString;

export
const _encode_StatusTextType: $.ASN1Encoder<StatusTextType> = $._encodeOctetString;

/* eslint-enable */
