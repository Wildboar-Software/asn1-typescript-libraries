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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";




/**
 * @summary EvidenceRecord_version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvidenceRecord-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EvidenceRecord_version = INTEGER;


/**
 * @summary EvidenceRecord_version_v1
 * @constant
 * @type {number}
 */
export
const EvidenceRecord_version_v1: EvidenceRecord_version = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary EvidenceRecord_version_v1
 * @constant
 * @type {number}
 */
export
const v1: EvidenceRecord_version = EvidenceRecord_version_v1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_EvidenceRecord_version = $._decodeInteger;




export const _encode_EvidenceRecord_version = $._encodeInteger;


/* eslint-enable */
