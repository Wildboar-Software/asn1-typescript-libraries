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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
import {
    ConversionWithLossProhibited,
    _enum_for_ConversionWithLossProhibited,
    ConversionWithLossProhibited_conversion_with_loss_allowed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    conversion_with_loss_allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ConversionWithLossProhibited_conversion_with_loss_prohibited /* IMPORTED_LONG_ENUMERATION_ITEM */,
    conversion_with_loss_prohibited /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ConversionWithLossProhibited,
    _encode_ConversionWithLossProhibited,
} from '../MTSAbstractService/ConversionWithLossProhibited.ta';
export {
    ConversionWithLossProhibited,
    _enum_for_ConversionWithLossProhibited,
    ConversionWithLossProhibited_conversion_with_loss_allowed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    conversion_with_loss_allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ConversionWithLossProhibited_conversion_with_loss_prohibited /* IMPORTED_LONG_ENUMERATION_ITEM */,
    conversion_with_loss_prohibited /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ConversionWithLossProhibited,
    _encode_ConversionWithLossProhibited,
} from '../MTSAbstractService/ConversionWithLossProhibited.ta';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
import { id_att_conversion_with_loss_prohibited } from '../MSObjectIdentifiers/id-att-conversion-with-loss-prohibited.va';
export { id_att_conversion_with_loss_prohibited } from '../MSObjectIdentifiers/id-att-conversion-with-loss-prohibited.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION mt_conversion_with_loss_prohibited */
/**
 * @summary mt_conversion_with_loss_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-conversion-with-loss-prohibited X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ConversionWithLossProhibited,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-conversion-with-loss-prohibited
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ConversionWithLossProhibited>}
 * @implements {X413ATTRIBUTE<ConversionWithLossProhibited>}
 */
export const mt_conversion_with_loss_prohibited: X413ATTRIBUTE<ConversionWithLossProhibited> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ConversionWithLossProhibited,
    },
    encoderFor: {
        '&Type': _encode_ConversionWithLossProhibited,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_conversion_with_loss_prohibited /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mt_conversion_with_loss_prohibited */

/* eslint-enable */
