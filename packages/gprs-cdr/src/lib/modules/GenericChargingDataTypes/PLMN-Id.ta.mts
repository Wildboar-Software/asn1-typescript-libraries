/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PLMN_Id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMN-Id     ::=  OCTET STRING ( SIZE( 3 ) )
 * ```
 */
export
type PLMN_Id = OCTET_STRING; // OctetStringType

export const _decode_PLMN_Id = (el: _Element): PLMN_Id => {
    const value = $._decodeOctetString(el);
    if (value.length !== 3) {
        throw new ASN1SizeError("PLMN_Id violates SIZE constraint");
    }
    return value;
};

export
const _encode_PLMN_Id: $.ASN1Encoder<PLMN_Id> = $._encodeOctetString;

/* eslint-enable */
