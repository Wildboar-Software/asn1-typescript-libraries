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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TrendIndication
 * @description
 *
 * Whether perceived severity of an alarm is becoming less severe, unchanged, or
 * more severe. MATCHES FOR EQUALITY. `{smi2AttributeID 30}`. ITU-T Rec. X.721
 * (02/92) §10.7.1.25; ITU-T Rec. X.733 | ISO/IEC 10164-4 §8.1.2.6.
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
 * Whether perceived severity of an alarm is becoming less severe, unchanged, or
 * more severe. MATCHES FOR EQUALITY. `{smi2AttributeID 30}`. ITU-T Rec. X.721
 * (02/92) §10.7.1.25; ITU-T Rec. X.733 | ISO/IEC 10164-4 §8.1.2.6.
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
 * Whether perceived severity of an alarm is becoming less severe, unchanged, or
 * more severe. MATCHES FOR EQUALITY. `{smi2AttributeID 30}`. ITU-T Rec. X.721
 * (02/92) §10.7.1.25; ITU-T Rec. X.733 | ISO/IEC 10164-4 §8.1.2.6.
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
 * @description
 *
 * Perceived severity is decreasing. ITU-T Rec. X.721 (02/92) §10.7.1.25; ITU-T
 * Rec. X.733 | ISO/IEC 10164-4 §8.1.2.6.
 *
 * @constant
 * @type {number}
 */
export
const TrendIndication_lessSevere: TrendIndication = TrendIndication.lessSevere; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lessSevere
 * @description
 *
 * Perceived severity is decreasing. ITU-T Rec. X.721 (02/92) §10.7.1.25; ITU-T
 * Rec. X.733 | ISO/IEC 10164-4 §8.1.2.6.
 *
 * @constant
 * @type {number}
 */
export
const lessSevere: TrendIndication = TrendIndication.lessSevere; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TrendIndication_noChange
 * @description
 *
 * Perceived severity is unchanged. ITU-T Rec. X.721 (02/92) §10.7.1.25; ITU-T
 * Rec. X.733 | ISO/IEC 10164-4 §8.1.2.6.
 *
 * @constant
 * @type {number}
 */
export
const TrendIndication_noChange: TrendIndication = TrendIndication.noChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noChange
 * @description
 *
 * Perceived severity is unchanged. ITU-T Rec. X.721 (02/92) §10.7.1.25; ITU-T
 * Rec. X.733 | ISO/IEC 10164-4 §8.1.2.6.
 *
 * @constant
 * @type {number}
 */
export
const noChange: TrendIndication = TrendIndication.noChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TrendIndication_moreSevere
 * @description
 *
 * Perceived severity is increasing. ITU-T Rec. X.721 (02/92) §10.7.1.25; ITU-T
 * Rec. X.733 | ISO/IEC 10164-4 §8.1.2.6.
 *
 * @constant
 * @type {number}
 */
export
const TrendIndication_moreSevere: TrendIndication = TrendIndication.moreSevere; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary moreSevere
 * @description
 *
 * Perceived severity is increasing. ITU-T Rec. X.721 (02/92) §10.7.1.25; ITU-T
 * Rec. X.733 | ISO/IEC 10164-4 §8.1.2.6.
 *
 * @constant
 * @type {number}
 */
export
const moreSevere: TrendIndication = TrendIndication.moreSevere; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TrendIndication = $._decodeEnumerated;


export const _encode_TrendIndication = $._encodeEnumerated;


/* eslint-enable */
