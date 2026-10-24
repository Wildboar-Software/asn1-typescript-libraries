/* eslint-disable */
import {
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OpenLocationCode
 * @description
 *
 * Open Location Code identifying a point. The profile types it as a printable
 * string and does not further constrain the text.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.22.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OpenLocationCode  ::=  PrintableString
 * ```
 */
export
type OpenLocationCode = PrintableString; // PrintableString

export
const _decode_OpenLocationCode: $.ASN1Decoder<OpenLocationCode> = $._decodePrintableString;

export
const _encode_OpenLocationCode: $.ASN1Encoder<OpenLocationCode> = $._encodePrintableString;

/* eslint-enable */
