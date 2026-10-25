/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSCorrelationNumber
 * @description
 * 
 * Correlates CC with IRI for one MMS of this target. For a given target, the
 * value for a given MMS is unique across all MMS involving that target. At
 * least unique among concurrent communications of the target under one lawful
 * authorization.
 * 
 * Included when the event also provides CC.
 * 
 * 3GPP TS 33.108, clause 15.3.2.3 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSCorrelationNumber  ::=  OCTET STRING
 * ```
 */
export
type MMSCorrelationNumber = OCTET_STRING; // OctetStringType
export const _decode_MMSCorrelationNumber: $.ASN1Decoder<MMSCorrelationNumber> = $._decodeOctetString;
export const _encode_MMSCorrelationNumber: $.ASN1Encoder<MMSCorrelationNumber> = $._encodeOctetString;


/* eslint-enable */
