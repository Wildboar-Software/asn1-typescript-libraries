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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary AARE_apdu_protocol_version
 * @description
 *
 * AARE protocol-version BIT STRING. Bit 0 is `version1`. If
 * the element is omitted, the default is version 1
 * (Table 39 note b). Must be encoded primitive (§4.1.1).
 * ITU-T Rec. Q.773 (06/97)
 * [§3.2.1](https://www.itu.int/rec/T-REC-Q.773-199706-I),
 * Table 48.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARE-apdu-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AARE_apdu_protocol_version = BIT_STRING;

/**
 * @summary AARE_apdu_protocol_version_version1
 * @description
 *
 * Bit 0 of the AARE protocol-version BIT STRING: this
 * Recommendation's version (Table 48).
 *
 * @constant
 */
export const AARE_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary version1
 * @constant
 */
export const version1: number = AARE_apdu_protocol_version_version1; /* SHORT_NAMED_BIT */


export const _decode_AARE_apdu_protocol_version = $._decodeBitString;


export const _encode_AARE_apdu_protocol_version = $._encodeBitString;


/* eslint-enable */
