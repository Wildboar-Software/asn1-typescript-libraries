import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary CallSegmentID
 * @description
 *
 * Call Segment identity in CPH operations (range 1..`PARAMETERS-BOUND`
 * `&numOfCSs`). gsmSSF returns `unknownCSID` if the CSID is not known.
 * MoveLeg moves a leg into CSID1. (3GPP TS 29.078 V19.0.0 clauses 5.1,
 * 10.1.16 and 11.22).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CallSegmentID {PARAMETERS-BOUND : bound} ::= INTEGER (1..bound.&numOfCSs)
 * ```
 *
 */
export type CallSegmentID = INTEGER;
export const _decode_CallSegmentID: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_CallSegmentID: $.ASN1Encoder<INTEGER> = $._encodeInteger;
