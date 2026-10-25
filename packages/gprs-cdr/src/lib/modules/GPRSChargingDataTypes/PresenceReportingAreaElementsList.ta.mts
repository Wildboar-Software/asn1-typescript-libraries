/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresenceReportingAreaElementsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceReportingAreaElementsList  ::=  OCTET STRING
 * ```
 */
export
type PresenceReportingAreaElementsList = OCTET_STRING; // OctetStringType

export
const _decode_PresenceReportingAreaElementsList: $.ASN1Decoder<PresenceReportingAreaElementsList> = $._decodeOctetString;

export
const _encode_PresenceReportingAreaElementsList: $.ASN1Encoder<PresenceReportingAreaElementsList> = $._encodeOctetString;

/* eslint-enable */
