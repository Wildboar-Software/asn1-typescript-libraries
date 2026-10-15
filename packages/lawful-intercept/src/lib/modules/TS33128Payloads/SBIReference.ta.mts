/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SBIReference
 * @description
 * 
 * JSON pointer that indicates the schema definition for the reported SBIValue.
 * Shall be sent in the form of a JSON string value (see RFC 6901 [117] clause
 * 5). When using the SBIType as a parameter within a record, the value of the
 * SBI Reference shall be clearly indicated in the associated description field
 * of the table describing the record.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBIReference  ::=  UTF8String
 * ```
 */
export
type SBIReference = UTF8String; // UTF8String
export const _decode_SBIReference: $.ASN1Decoder<SBIReference> = $._decodeUTF8String;
export const _encode_SBIReference: $.ASN1Encoder<SBIReference> = $._encodeUTF8String;


/* eslint-enable */
