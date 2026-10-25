/* eslint-disable */
import {
    type ASN1Element as _Element,
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
const _enum_for_TrendIndication = {
    lessSevere: 0,
    noChange: 1,
    moreSevere: 2,
} as const;

export
type _enum_for_TrendIndication = (typeof _enum_for_TrendIndication)[keyof typeof _enum_for_TrendIndication];

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
const TrendIndication: typeof _enum_for_TrendIndication = _enum_for_TrendIndication;

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
const TrendIndication_lessSevere: 0 = TrendIndication.lessSevere; /* LONG_NAMED_ENUMERATED_VALUE */

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
const lessSevere: 0 = TrendIndication.lessSevere; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const TrendIndication_noChange: 1 = TrendIndication.noChange; /* LONG_NAMED_ENUMERATED_VALUE */

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
const noChange: 1 = TrendIndication.noChange; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const TrendIndication_moreSevere: 2 = TrendIndication.moreSevere; /* LONG_NAMED_ENUMERATED_VALUE */

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
const moreSevere: 2 = TrendIndication.moreSevere; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_TrendIndication(el: _Element): TrendIndication {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case TrendIndication.lessSevere: return TrendIndication.lessSevere;
        case TrendIndication.noChange: return TrendIndication.noChange;
        case TrendIndication.moreSevere: return TrendIndication.moreSevere;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for TrendIndication.",
                el,
            );
    }
}


export const _encode_TrendIndication: $.ASN1Encoder<TrendIndication> = $._encodeEnumerated as $.ASN1Encoder<TrendIndication>;


/* eslint-enable */
