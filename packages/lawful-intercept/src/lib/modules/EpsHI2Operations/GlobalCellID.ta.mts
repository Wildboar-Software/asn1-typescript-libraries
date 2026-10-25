/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GlobalCellID
 * @description
 * 
 * Cell identity in MAP format (3GPP TS 29.002), as the module comment states.
 * Clause 16.4 requires it in the 2G/3G location of a cell-site report. The
 * specification text does not define the octet layout beyond that MAP
 * reference. 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GlobalCellID     ::=  OCTET STRING  (SIZE (5..7))
 * ```
 */
export
type GlobalCellID = OCTET_STRING; // OctetStringType
export const _decode_GlobalCellID: $.ASN1Decoder<GlobalCellID> = (el: _Element): GlobalCellID => {
    const value = $._decodeOctetString(el);
    if (value.length < 5 || value.length > 7) {
        throw new ASN1SizeError("GlobalCellID violates SIZE constraint");
    }
    return value;
};
export const _encode_GlobalCellID: $.ASN1Encoder<GlobalCellID> = $._encodeOctetString;


/* eslint-enable */
