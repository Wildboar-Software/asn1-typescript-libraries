/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NRCellID
 * @description
 * 
 * The New Radio Cell Identity being reported. The NRCellID is derived from the
 * NR Cell Identity parameter of the NR CGI defined in TS 38.413 [23] clause
 * 9.3.1.7.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NRCellID  ::=  BIT STRING (SIZE(36))
 * ```
 */
export
type NRCellID = BIT_STRING;
export const _decode_NRCellID: $.ASN1Decoder<NRCellID> = (el: _Element): NRCellID => {
    const value = $._decodeBitString(el);
    if (value.length < 36 || value.length > 36) {
        throw new ASN1SizeError("NRCellID violates SIZE constraint");
    }
    return value;
};
export const _encode_NRCellID: $.ASN1Encoder<NRCellID> = $._encodeBitString;


/* eslint-enable */
