/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_RepeatReport */
export enum _enum_for_RepeatReport {
    unspecified = 0,
    recentInstallation = 1,
    repeat = 2,
    bothInstallationAndRepeat = 3,
    chronic = 4,
    bothInstallationAndChronic = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_RepeatReport */

/* START_OF_SYMBOL_DEFINITION RepeatReport */
/**
 * @summary RepeatReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepeatReport  ::=  ENUMERATED {
 *   unspecified(0), recentInstallation(1), repeat(2),
 *   bothInstallationAndRepeat(3), chronic(4), bothInstallationAndChronic(5),
 *   ...
 *   }
 * ```@enum {number}
 */
export type RepeatReport = _enum_for_RepeatReport | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION RepeatReport */

/* START_OF_SYMBOL_DEFINITION RepeatReport_unspecified */
/**
 * @summary RepeatReport_unspecified
 * @constant
 * @type {number}
 */
export const RepeatReport_unspecified: RepeatReport = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RepeatReport_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export const unspecified: RepeatReport = RepeatReport_unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION RepeatReport_recentInstallation */
/**
 * @summary RepeatReport_recentInstallation
 * @constant
 * @type {number}
 */
export const RepeatReport_recentInstallation: RepeatReport = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RepeatReport_recentInstallation */

/* START_OF_SYMBOL_DEFINITION recentInstallation */
/**
 * @summary recentInstallation
 * @constant
 * @type {number}
 */
export const recentInstallation: RepeatReport = RepeatReport_recentInstallation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION recentInstallation */

/* START_OF_SYMBOL_DEFINITION RepeatReport_repeat */
/**
 * @summary RepeatReport_repeat
 * @constant
 * @type {number}
 */
export const RepeatReport_repeat: RepeatReport = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RepeatReport_repeat */

/* START_OF_SYMBOL_DEFINITION repeat */
/**
 * @summary repeat
 * @constant
 * @type {number}
 */
export const repeat: RepeatReport = RepeatReport_repeat; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION repeat */

/* START_OF_SYMBOL_DEFINITION RepeatReport_bothInstallationAndRepeat */
/**
 * @summary RepeatReport_bothInstallationAndRepeat
 * @constant
 * @type {number}
 */
export const RepeatReport_bothInstallationAndRepeat: RepeatReport = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RepeatReport_bothInstallationAndRepeat */

/* START_OF_SYMBOL_DEFINITION bothInstallationAndRepeat */
/**
 * @summary bothInstallationAndRepeat
 * @constant
 * @type {number}
 */
export const bothInstallationAndRepeat: RepeatReport = RepeatReport_bothInstallationAndRepeat; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bothInstallationAndRepeat */

/* START_OF_SYMBOL_DEFINITION RepeatReport_chronic */
/**
 * @summary RepeatReport_chronic
 * @constant
 * @type {number}
 */
export const RepeatReport_chronic: RepeatReport = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RepeatReport_chronic */

/* START_OF_SYMBOL_DEFINITION chronic */
/**
 * @summary chronic
 * @constant
 * @type {number}
 */
export const chronic: RepeatReport = RepeatReport_chronic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION chronic */

/* START_OF_SYMBOL_DEFINITION RepeatReport_bothInstallationAndChronic */
/**
 * @summary RepeatReport_bothInstallationAndChronic
 * @constant
 * @type {number}
 */
export const RepeatReport_bothInstallationAndChronic: RepeatReport = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RepeatReport_bothInstallationAndChronic */

/* START_OF_SYMBOL_DEFINITION bothInstallationAndChronic */
/**
 * @summary bothInstallationAndChronic
 * @constant
 * @type {number}
 */
export const bothInstallationAndChronic: RepeatReport = RepeatReport_bothInstallationAndChronic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bothInstallationAndChronic */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RepeatReport */
let _cached_decoder_for_RepeatReport: $.ASN1Decoder<RepeatReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RepeatReport */

/* START_OF_SYMBOL_DEFINITION _decode_RepeatReport */
/**
 * @summary Decodes an ASN.1 element into a(n) RepeatReport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepeatReport} The decoded data structure.
 */
export function _decode_RepeatReport(el: _Element) {
    if (!_cached_decoder_for_RepeatReport) {
        _cached_decoder_for_RepeatReport = $._decodeEnumerated;
    }
    return _cached_decoder_for_RepeatReport(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RepeatReport */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RepeatReport */
let _cached_encoder_for_RepeatReport: $.ASN1Encoder<RepeatReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RepeatReport */

/* START_OF_SYMBOL_DEFINITION _encode_RepeatReport */
/**
 * @summary Encodes a(n) RepeatReport into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepeatReport, encoded as an ASN.1 Element.
 */
export function _encode_RepeatReport(
    value: RepeatReport,
    elGetter: $.ASN1Encoder<RepeatReport>
) {
    if (!_cached_encoder_for_RepeatReport) {
        _cached_encoder_for_RepeatReport = $._encodeEnumerated;
    }
    return _cached_encoder_for_RepeatReport(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RepeatReport */

/* eslint-enable */
