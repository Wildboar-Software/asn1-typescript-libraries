/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFID       ::=  OCTET STRING ( SIZE( 6 ) )
 * ```
 */
export
type AMFID = OCTET_STRING; // OctetStringType

export const _decode_AMFID = (el: _Element): AMFID => {
    const value = $._decodeOctetString(el);
    if (value.length !== 6) {
        throw new ASN1SizeError("AMFID violates SIZE constraint");
    }
    return value;
};

export
const _encode_AMFID: $.ASN1Encoder<AMFID> = $._encodeOctetString;

/* eslint-enable */
