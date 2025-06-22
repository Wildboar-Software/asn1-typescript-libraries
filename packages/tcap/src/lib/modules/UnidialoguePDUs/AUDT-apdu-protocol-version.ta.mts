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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary AUDT_apdu_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AUDT-apdu-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AUDT_apdu_protocol_version = BIT_STRING;

/**
 * @summary AUDT_apdu_protocol_version_version1
 * @constant
 */
export const AUDT_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary version1
 * @constant
 */
export const version1: number = AUDT_apdu_protocol_version_version1; /* SHORT_NAMED_BIT */


export const _decode_AUDT_apdu_protocol_version = $._decodeBitString;


export const _encode_AUDT_apdu_protocol_version = $._encodeBitString;


/* eslint-enable */
