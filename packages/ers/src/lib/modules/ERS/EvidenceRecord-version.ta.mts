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
 * @summary EvidenceRecord_version
 * @description
 *
 * Syntax version field of `EvidenceRecord`. Named value `v1(1)`
 * indicates RFC 4998. Lower values indicate an earlier ERS version;
 * conforming implementations SHOULD reject a version below 1.
 * (RFC 4998 §3.1.)
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
 * @description
 *
 * Named integer `v1(1)` for `EvidenceRecord.version` (RFC 4998 §3.1).
 *
 * @constant
 * @type {number}
 */
export
const EvidenceRecord_version_v1: EvidenceRecord_version = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary EvidenceRecord_version_v1
 * @description
 *
 * Short alias for {@link EvidenceRecord_version_v1} (`v1(1)`).
 *
 * @constant
 * @type {number}
 */
export
const v1: EvidenceRecord_version = EvidenceRecord_version_v1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_EvidenceRecord_version = $._decodeInteger;




export const _encode_EvidenceRecord_version = $._encodeInteger;


/* eslint-enable */
