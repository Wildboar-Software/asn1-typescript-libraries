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
 * @summary Count
 * @description
 * 
 * Syntax of the generic counter attribute: non-negative integer, increment 1,
 * wraps at the specified maximum back to 0 (overflow is not retained). Initial
 * value 0. Not-settable counters are GET-only so multiple managers do not
 * interfere; settable counters also allow SET (including to the MO default or
 * 0). MATCHES FOR EQUALITY, ORDERING. Directly related to at most one
 * `CounterThreshold`. ITU-T Rec. X.721 (02/92) §9.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Count  ::=  INTEGER
 * ```
 */
export
type Count = INTEGER;


export const _decode_Count = $._decodeInteger;


export const _encode_Count = $._encodeInteger;


/* eslint-enable */
