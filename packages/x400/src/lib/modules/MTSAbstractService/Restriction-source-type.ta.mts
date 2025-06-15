/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary Restriction_source_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Restriction-source-type ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Restriction_source_type = BIT_STRING;

/**
 * @summary Restriction_source_type_originated_by
 * @constant
 */
export const Restriction_source_type_originated_by: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary originated_by
 * @constant
 */
export const originated_by: number = Restriction_source_type_originated_by; /* SHORT_NAMED_BIT */

/**
 * @summary Restriction_source_type_redirected_by
 * @constant
 */
export const Restriction_source_type_redirected_by: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary redirected_by
 * @constant
 */
export const redirected_by: number = Restriction_source_type_redirected_by; /* SHORT_NAMED_BIT */

/**
 * @summary Restriction_source_type_dl_expanded_by
 * @constant
 */
export const Restriction_source_type_dl_expanded_by: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary dl_expanded_by
 * @constant
 */
export const dl_expanded_by: number = Restriction_source_type_dl_expanded_by; /* SHORT_NAMED_BIT */


export const _decode_Restriction_source_type = $._decodeBitString;


export const _encode_Restriction_source_type = $._encodeBitString;


/* eslint-enable */
