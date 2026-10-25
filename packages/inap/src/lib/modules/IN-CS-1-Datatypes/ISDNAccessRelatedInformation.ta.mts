/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ISDNAccessRelatedInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISDNAccessRelatedInformation  ::=  OCTET STRING
 * ```
 */
export
type ISDNAccessRelatedInformation = OCTET_STRING; // OctetStringType

export
const _decode_ISDNAccessRelatedInformation: $.ASN1Decoder<ISDNAccessRelatedInformation> = $._decodeOctetString;

export
const _encode_ISDNAccessRelatedInformation: $.ASN1Encoder<ISDNAccessRelatedInformation> = $._encodeOctetString;

/* eslint-enable */
