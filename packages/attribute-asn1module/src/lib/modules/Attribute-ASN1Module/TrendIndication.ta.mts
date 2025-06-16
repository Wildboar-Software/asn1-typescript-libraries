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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary TrendIndication
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrendIndication  ::=  ENUMERATED {lessSevere(0), noChange(1), moreSevere(2)}
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_TrendIndication {
    lessSevere = 0,
    noChange = 1,
    moreSevere = 2,
}

/**
 * @summary TrendIndication
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrendIndication  ::=  ENUMERATED {lessSevere(0), noChange(1), moreSevere(2)}
 * ```
 *
 * @enum {number}
 */
export
type TrendIndication = _enum_for_TrendIndication;

/**
 * @summary TrendIndication
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrendIndication  ::=  ENUMERATED {lessSevere(0), noChange(1), moreSevere(2)}
 * ```
 *
 * @enum {number}
 */
export
const TrendIndication = _enum_for_TrendIndication;

/**
 * @summary TrendIndication_lessSevere
 * @constant
 * @type {number}
 */
export
const TrendIndication_lessSevere: TrendIndication = TrendIndication.lessSevere; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lessSevere
 * @constant
 * @type {number}
 */
export
const lessSevere: TrendIndication = TrendIndication.lessSevere; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TrendIndication_noChange
 * @constant
 * @type {number}
 */
export
const TrendIndication_noChange: TrendIndication = TrendIndication.noChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noChange
 * @constant
 * @type {number}
 */
export
const noChange: TrendIndication = TrendIndication.noChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TrendIndication_moreSevere
 * @constant
 * @type {number}
 */
export
const TrendIndication_moreSevere: TrendIndication = TrendIndication.moreSevere; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary moreSevere
 * @constant
 * @type {number}
 */
export
const moreSevere: TrendIndication = TrendIndication.moreSevere; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TrendIndication = $._decodeEnumerated;


export const _encode_TrendIndication = $._encodeEnumerated;


/* eslint-enable */
