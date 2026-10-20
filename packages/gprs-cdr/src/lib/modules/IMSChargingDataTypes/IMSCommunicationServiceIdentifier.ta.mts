/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSCommunicationServiceIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSCommunicationServiceIdentifier  ::=  OCTET STRING
 * ```
 */
export
type IMSCommunicationServiceIdentifier = OCTET_STRING; // OctetStringType

export
const _decode_IMSCommunicationServiceIdentifier: $.ASN1Decoder<IMSCommunicationServiceIdentifier> = $._decodeOctetString;

export
const _encode_IMSCommunicationServiceIdentifier: $.ASN1Encoder<IMSCommunicationServiceIdentifier> = $._encodeOctetString;

/* eslint-enable */
