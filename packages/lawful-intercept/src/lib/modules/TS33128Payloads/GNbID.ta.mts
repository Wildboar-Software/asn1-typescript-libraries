/* eslint-disable */
import {
    ASN1Element as _Element,
    type BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GNbID
 * @description
 * 
 * The gNodeB identifier being reported. The GNbID is derived from the gNB ID
 * parameter of the Global gNB ID defined in TS 38.413 [23] clause 9.3.1.6.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GNbID  ::=  BIT STRING(SIZE(22..32))
 * ```
 */
export
type GNbID = BIT_STRING;
export const _decode_GNbID: $.ASN1Decoder<GNbID> = (el: _Element): GNbID => {
    const value = $._decodeBitString(el);
    if (value.length < 22 || value.length > 32) {
        throw new ASN1SizeError("GNbID violates SIZE constraint");
    }
    return value;
};
export const _encode_GNbID: $.ASN1Encoder<GNbID> = $._encodeBitString;


/* eslint-enable */
