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
    EDINotificationIndicator,
    _enum_for_EDINotificationIndicator,
    EDINotificationIndicator_no_notification_sent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    no_notification_sent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EDINotificationIndicator_pn_sent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    pn_sent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EDINotificationIndicator_nn_sent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    nn_sent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EDINotificationIndicator_fn_sent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    fn_sent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_EDINotificationIndicator,
    _encode_EDINotificationIndicator,
} from '../EDIMSMessageStoreAttributes/EDINotificationIndicator.ta';
export {
    EDINotificationIndicator,
    _enum_for_EDINotificationIndicator,
    EDINotificationIndicator_no_notification_sent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    no_notification_sent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EDINotificationIndicator_pn_sent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    pn_sent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EDINotificationIndicator_nn_sent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    nn_sent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EDINotificationIndicator_fn_sent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    fn_sent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_EDINotificationIndicator,
    _encode_EDINotificationIndicator,
} from '../EDIMSMessageStoreAttributes/EDINotificationIndicator.ta';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
import { id_sat_edi_notification_indicator } from '../EDIMSObjectIdentifiers/id-sat-edi-notification-indicator.va';
export { id_sat_edi_notification_indicator } from '../EDIMSObjectIdentifiers/id-sat-edi-notification-indicator.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION edi_notification_indicator */
/**
 * @summary edi_notification_indicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-notification-indicator X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDINotificationIndicator,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-sat-edi-notification-indicator
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDINotificationIndicator>}
 * @implements {X413ATTRIBUTE<EDINotificationIndicator>}
 */
export const edi_notification_indicator: X413ATTRIBUTE<EDINotificationIndicator> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDINotificationIndicator,
    },
    encoderFor: {
        '&Type': _encode_EDINotificationIndicator,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_sat_edi_notification_indicator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION edi_notification_indicator */

/* eslint-enable */
