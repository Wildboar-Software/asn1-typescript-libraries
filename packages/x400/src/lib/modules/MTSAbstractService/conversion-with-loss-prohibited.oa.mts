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
import {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
export {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
export {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    ConversionWithLossProhibited,
    _enum_for_ConversionWithLossProhibited,
    ConversionWithLossProhibited_conversion_with_loss_allowed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    conversion_with_loss_allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ConversionWithLossProhibited_conversion_with_loss_prohibited /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_ConversionWithLossProhibited,
    _encode_ConversionWithLossProhibited,
} from '../MTSAbstractService/ConversionWithLossProhibited.ta.mjs';
export {
    ConversionWithLossProhibited,
    _enum_for_ConversionWithLossProhibited,
    ConversionWithLossProhibited_conversion_with_loss_allowed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    conversion_with_loss_allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ConversionWithLossProhibited_conversion_with_loss_prohibited /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_ConversionWithLossProhibited,
    _encode_ConversionWithLossProhibited,
} from '../MTSAbstractService/ConversionWithLossProhibited.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION conversion_with_loss_prohibited */
/**
 * @summary conversion_with_loss_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * conversion-with-loss-prohibited EXTENSION ::= {
 *   ConversionWithLossProhibited
 *   IF ABSENT                conversion-with-loss-allowed,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:4
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<ConversionWithLossProhibited>}
 * @implements {EXTENSION<ConversionWithLossProhibited>}
 */
export const conversion_with_loss_prohibited: EXTENSION<ConversionWithLossProhibited> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_ConversionWithLossProhibited,
    },
    encoderFor: {
        '&Type': _encode_ConversionWithLossProhibited,
    },
    '&absent': conversion_with_loss_allowed /* OBJECT_FIELD_SETTING */,
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(Math.max(0, 1, 2));
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 4,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION conversion_with_loss_prohibited */

/* eslint-enable */
