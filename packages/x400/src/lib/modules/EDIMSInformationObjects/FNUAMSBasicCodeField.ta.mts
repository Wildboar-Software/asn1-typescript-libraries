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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary FNUAMSBasicCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNUAMSBasicCodeField  ::=  INTEGER {
 *   unspecified(0),
 *   onward-routing(1),
 *   -- used whenever the UA decides to re-route the subject EDIM for local reasons
 *   edim-recipient-unknown(2), edim-originator-unknown(3), forwarded-by-edi-ms(4)
 * }(0..ub-reason-code)
 * ```
 */
export type FNUAMSBasicCodeField = INTEGER;

/**
 * @summary FNUAMSBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const FNUAMSBasicCodeField_unspecified: FNUAMSBasicCodeField = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUAMSBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: FNUAMSBasicCodeField = FNUAMSBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUAMSBasicCodeField_onward_routing
 * @constant
 * @type {number}
 */
export const FNUAMSBasicCodeField_onward_routing: FNUAMSBasicCodeField = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUAMSBasicCodeField_onward_routing
 * @constant
 * @type {number}
 */
export const onward_routing: FNUAMSBasicCodeField = FNUAMSBasicCodeField_onward_routing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUAMSBasicCodeField_edim_recipient_unknown
 * @constant
 * @type {number}
 */
export const FNUAMSBasicCodeField_edim_recipient_unknown: FNUAMSBasicCodeField = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUAMSBasicCodeField_edim_recipient_unknown
 * @constant
 * @type {number}
 */
export const edim_recipient_unknown: FNUAMSBasicCodeField = FNUAMSBasicCodeField_edim_recipient_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUAMSBasicCodeField_edim_originator_unknown
 * @constant
 * @type {number}
 */
export const FNUAMSBasicCodeField_edim_originator_unknown: FNUAMSBasicCodeField = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUAMSBasicCodeField_edim_originator_unknown
 * @constant
 * @type {number}
 */
export const edim_originator_unknown: FNUAMSBasicCodeField = FNUAMSBasicCodeField_edim_originator_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUAMSBasicCodeField_forwarded_by_edi_ms
 * @constant
 * @type {number}
 */
export const FNUAMSBasicCodeField_forwarded_by_edi_ms: FNUAMSBasicCodeField = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUAMSBasicCodeField_forwarded_by_edi_ms
 * @constant
 * @type {number}
 */
export const forwarded_by_edi_ms: FNUAMSBasicCodeField = FNUAMSBasicCodeField_forwarded_by_edi_ms; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_FNUAMSBasicCodeField = $._decodeInteger;


export const _encode_FNUAMSBasicCodeField = $._encodeInteger;


/* eslint-enable */
