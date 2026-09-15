/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallSegmentID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallSegmentID{PARAMETERS-BOUND:bound}  ::=  INTEGER(1..bound.&numOfCSs)
 * ```
 */
export
type CallSegmentID = INTEGER;
export const _decode_CallSegmentID = $._decodeInteger;
export const _encode_CallSegmentID = $._encodeInteger;


/* eslint-enable */
