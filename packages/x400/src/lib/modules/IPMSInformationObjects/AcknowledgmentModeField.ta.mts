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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary AcknowledgmentModeField
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcknowledgmentModeField  ::=  ENUMERATED {manual(0), automatic(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_AcknowledgmentModeField {
    manual = 0,
    automatic = 1,
}

/**
 * @summary AcknowledgmentModeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcknowledgmentModeField  ::=  ENUMERATED {manual(0), automatic(1)}
 * ```
 *
 * @enum {number}
 */
export type AcknowledgmentModeField = _enum_for_AcknowledgmentModeField;

/**
 * @summary AcknowledgmentModeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcknowledgmentModeField  ::=  ENUMERATED {manual(0), automatic(1)}
 * ```
 *
 * @enum {number}
 */
export const AcknowledgmentModeField = _enum_for_AcknowledgmentModeField;

/**
 * @summary AcknowledgmentModeField_manual
 * @constant
 * @type {number}
 */
export const AcknowledgmentModeField_manual: AcknowledgmentModeField =
    AcknowledgmentModeField.manual; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manual
 * @constant
 * @type {number}
 */
export const manual: AcknowledgmentModeField =
    AcknowledgmentModeField.manual; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AcknowledgmentModeField_automatic
 * @constant
 * @type {number}
 */
export const AcknowledgmentModeField_automatic: AcknowledgmentModeField =
    AcknowledgmentModeField.automatic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary automatic
 * @constant
 * @type {number}
 */
export const automatic: AcknowledgmentModeField =
    AcknowledgmentModeField.automatic; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_AcknowledgmentModeField(el: _Element): AcknowledgmentModeField {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case AcknowledgmentModeField.manual: return AcknowledgmentModeField.manual;
        case AcknowledgmentModeField.automatic: return AcknowledgmentModeField.automatic;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for AcknowledgmentModeField.',
                el,
            );
    }
}


export const _encode_AcknowledgmentModeField: $.ASN1Encoder<AcknowledgmentModeField> = $._encodeEnumerated as $.ASN1Encoder<AcknowledgmentModeField>;


/* eslint-enable */
