/* eslint-disable */
import {
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
 * @summary EDIMSEntryType
 * @description
 *
 * `EDIMSEntryType`. The EDIMS Entry Type attribute identifies an information object’s
 * type. edims-entry-type ATTRIBUTE ::= { WITH ATTRIBUTE-SYNTAX EDIMSEntryType, EQUALITY
 * MATCHING-RULE integerMatch, NUMERATION single-valued, ID id-sat-edims-entry-type }
 * EDIMSEntryType ::= ENUMERATED { edim (0), pn (1), nn (2), fn (3) } Attribute Single/
 * multi valued Support level by EDI-MS Presence in delivered EDIM Presence in submitted
 * EDIM… See ITU-T X.435 (1999), §18.8.1.1. ENUMERATED value `0` is a named variant, not
 * a sentinel for 'absent' or 'unspecified'.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMSEntryType  ::=  ENUMERATED {edim(0), pn(1), nn(2), fn(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_EDIMSEntryType {
    edim = 0,
    pn = 1,
    nn = 2,
    fn = 3,
}

/**
 * @summary EDIMSEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMSEntryType  ::=  ENUMERATED {edim(0), pn(1), nn(2), fn(3)}
 * ```
 *
 * @enum {number}
 */
export type EDIMSEntryType = _enum_for_EDIMSEntryType;

/**
 * @summary EDIMSEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMSEntryType  ::=  ENUMERATED {edim(0), pn(1), nn(2), fn(3)}
 * ```
 *
 * @enum {number}
 */
export const EDIMSEntryType = _enum_for_EDIMSEntryType;

/**
 * @summary EDIMSEntryType_edim
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_edim: EDIMSEntryType =
    EDIMSEntryType.edim; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary edim
 * @constant
 * @type {number}
 */
export const edim: EDIMSEntryType =
    EDIMSEntryType.edim; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDIMSEntryType_pn
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_pn: EDIMSEntryType =
    EDIMSEntryType.pn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pn
 * @constant
 * @type {number}
 */
export const pn: EDIMSEntryType =
    EDIMSEntryType.pn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDIMSEntryType_nn
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_nn: EDIMSEntryType =
    EDIMSEntryType.nn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nn
 * @constant
 * @type {number}
 */
export const nn: EDIMSEntryType =
    EDIMSEntryType.nn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDIMSEntryType_fn
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_fn: EDIMSEntryType =
    EDIMSEntryType.fn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fn
 * @constant
 * @type {number}
 */
export const fn: EDIMSEntryType =
    EDIMSEntryType.fn; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_EDIMSEntryType = $._decodeEnumerated;


export const _encode_EDIMSEntryType = $._encodeEnumerated;


/* eslint-enable */
