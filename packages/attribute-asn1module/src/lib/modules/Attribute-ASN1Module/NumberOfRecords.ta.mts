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
 * @summary NumberOfRecords
 * @description
 * 
 * Count of records currently in the log. MATCHES FOR EQUALITY, ORDERING.
 * `{smi2AttributeID 64}`. ITU-T Rec. X.721 (02/92) §10.7.4.16; ITU-T Rec. X.735
 * | ISO/IEC 10164-6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfRecords  ::=  INTEGER
 * ```
 */
export
type NumberOfRecords = INTEGER;


export const _decode_NumberOfRecords = $._decodeInteger;


export const _encode_NumberOfRecords = $._encodeInteger;


/* eslint-enable */
