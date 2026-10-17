/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellID
 * @description
 * 
 * Cell Identity, defined in TS 23.003 [19] clause 4.3.1.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellID  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type CellID = OCTET_STRING; // OctetStringType
export const _decode_CellID: $.ASN1Decoder<CellID> = (el: _Element): CellID => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("CellID violates SIZE constraint");
    }
    return value;
};
export const _encode_CellID: $.ASN1Encoder<CellID> = $._encodeOctetString;


/* eslint-enable */
