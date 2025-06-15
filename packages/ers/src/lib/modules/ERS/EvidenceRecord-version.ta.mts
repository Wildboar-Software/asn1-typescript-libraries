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



/* START_OF_SYMBOL_DEFINITION EvidenceRecord_version */
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
/* END_OF_SYMBOL_DEFINITION EvidenceRecord_version */

/* START_OF_SYMBOL_DEFINITION EvidenceRecord_version_v1 */
/**
 * @summary EvidenceRecord_version_v1
 * @constant
 * @type {number}
 */
export
const EvidenceRecord_version_v1: EvidenceRecord_version = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EvidenceRecord_version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary EvidenceRecord_version_v1
 * @constant
 * @type {number}
 */
export
const v1: EvidenceRecord_version = EvidenceRecord_version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EvidenceRecord_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EvidenceRecord_version */

/* START_OF_SYMBOL_DEFINITION _decode_EvidenceRecord_version */
export const _decode_EvidenceRecord_version = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_EvidenceRecord_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EvidenceRecord_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EvidenceRecord_version */

/* START_OF_SYMBOL_DEFINITION _encode_EvidenceRecord_version */
export const _encode_EvidenceRecord_version = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_EvidenceRecord_version */

/* eslint-enable */
