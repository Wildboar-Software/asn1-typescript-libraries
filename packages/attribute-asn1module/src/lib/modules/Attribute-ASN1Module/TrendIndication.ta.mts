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



/* START_OF_SYMBOL_DEFINITION _enum_for_TrendIndication */
/**
 * @summary TrendIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrendIndication  ::=  ENUMERATED {lessSevere(0), noChange(1), moreSevere(2)}
 * ```@enum {number}
 */
export
enum _enum_for_TrendIndication {
    lessSevere = 0,
    noChange = 1,
    moreSevere = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TrendIndication */

/* START_OF_SYMBOL_DEFINITION TrendIndication */
/**
 * @summary TrendIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrendIndication  ::=  ENUMERATED {lessSevere(0), noChange(1), moreSevere(2)}
 * ```@enum {number}
 */
export
type TrendIndication = _enum_for_TrendIndication;
/* END_OF_SYMBOL_DEFINITION TrendIndication */

/* START_OF_SYMBOL_DEFINITION TrendIndication */
/**
 * @summary TrendIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrendIndication  ::=  ENUMERATED {lessSevere(0), noChange(1), moreSevere(2)}
 * ```@enum {number}
 */
export
const TrendIndication = _enum_for_TrendIndication;
/* END_OF_SYMBOL_DEFINITION TrendIndication */

/* START_OF_SYMBOL_DEFINITION TrendIndication_lessSevere */
/**
 * @summary TrendIndication_lessSevere
 * @constant
 * @type {number}
 */
export
const TrendIndication_lessSevere: TrendIndication = TrendIndication.lessSevere; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TrendIndication_lessSevere */

/* START_OF_SYMBOL_DEFINITION lessSevere */
/**
 * @summary lessSevere
 * @constant
 * @type {number}
 */
export
const lessSevere: TrendIndication = TrendIndication.lessSevere; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION lessSevere */

/* START_OF_SYMBOL_DEFINITION TrendIndication_noChange */
/**
 * @summary TrendIndication_noChange
 * @constant
 * @type {number}
 */
export
const TrendIndication_noChange: TrendIndication = TrendIndication.noChange; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TrendIndication_noChange */

/* START_OF_SYMBOL_DEFINITION noChange */
/**
 * @summary noChange
 * @constant
 * @type {number}
 */
export
const noChange: TrendIndication = TrendIndication.noChange; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noChange */

/* START_OF_SYMBOL_DEFINITION TrendIndication_moreSevere */
/**
 * @summary TrendIndication_moreSevere
 * @constant
 * @type {number}
 */
export
const TrendIndication_moreSevere: TrendIndication = TrendIndication.moreSevere; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TrendIndication_moreSevere */

/* START_OF_SYMBOL_DEFINITION moreSevere */
/**
 * @summary moreSevere
 * @constant
 * @type {number}
 */
export
const moreSevere: TrendIndication = TrendIndication.moreSevere; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION moreSevere */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TrendIndication */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TrendIndication */

/* START_OF_SYMBOL_DEFINITION _decode_TrendIndication */
export const _decode_TrendIndication = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_TrendIndication */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TrendIndication */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TrendIndication */

/* START_OF_SYMBOL_DEFINITION _encode_TrendIndication */
export const _encode_TrendIndication = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_TrendIndication */

/* eslint-enable */
