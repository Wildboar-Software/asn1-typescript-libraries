/* eslint-disable */
import {
    type ASN1Element as _Element,
    type BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NRCellID
 * @description
 * 
 * NR cell identity within a PLMN, carried in the NR cell global identity of an
 * additional cell identity (clause 10.5.2). The module comment points to 3GPP
 * TS 36.413 clause 9.2.1.142. The handover prose does not restate the bit
 * coding. The value is 36 bits.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
