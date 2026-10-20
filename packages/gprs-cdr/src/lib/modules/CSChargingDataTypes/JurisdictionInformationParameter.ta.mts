/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
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

export const _decode_JurisdictionInformationParameter = (el: _Element): JurisdictionInformationParameter => {
    const value = $._decodeOctetString(el);
    if (value.length !== 5) {
        throw new ASN1SizeError("JurisdictionInformationParameter violates SIZE constraint");
    }
    return value;
};

export
const _encode_JurisdictionInformationParameter: $.ASN1Encoder<JurisdictionInformationParameter> = $._encodeOctetString;

/* eslint-enable */
