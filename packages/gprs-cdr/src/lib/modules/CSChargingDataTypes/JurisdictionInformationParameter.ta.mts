/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary JurisdictionInformationParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JurisdictionInformationParameter  ::=  OCTET STRING ( SIZE( 5 ) )
 * ```
 */
export
type JurisdictionInformationParameter = OCTET_STRING; // OctetStringType

export
const _decode_JurisdictionInformationParameter: $.ASN1Decoder<JurisdictionInformationParameter> = $._decodeOctetString;

export
const _encode_JurisdictionInformationParameter: $.ASN1Encoder<JurisdictionInformationParameter> = $._encodeOctetString;

/* eslint-enable */
