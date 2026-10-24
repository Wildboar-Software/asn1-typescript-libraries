/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GlobalCellID
 * @description
 * 
 * Cell Global Identification of the target, or of the cell in a cell-site
 * report, in the MAP format cited by annex B.3 (3GPP TS 29.002).
 * 
 * Clause 16.4 requires the reported location to include the cell identity, for
 * example this value. Annex B.3 limits it to 5..7 octets and does not restate
 * the MAP layout.
 * 
 * 3GPP TS 33.108, annex B.3 and clause 16.4.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
