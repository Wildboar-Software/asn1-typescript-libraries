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
    EDINotificationRequests,
    EDINotificationRequests_pn /* IMPORTED_LONG_NAMED_BIT */,
    pn /* IMPORTED_SHORT_NAMED_BIT */,
    EDINotificationRequests_nn /* IMPORTED_LONG_NAMED_BIT */,
    nn /* IMPORTED_SHORT_NAMED_BIT */,
    EDINotificationRequests_fn /* IMPORTED_LONG_NAMED_BIT */,
    fn /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_EDINotificationRequests,
    _encode_EDINotificationRequests,
} from '../EDIMSInformationObjects/EDINotificationRequests.ta';
export {
    EDINotificationRequests,
    EDINotificationRequests_pn /* IMPORTED_LONG_NAMED_BIT */,
    pn /* IMPORTED_SHORT_NAMED_BIT */,
    EDINotificationRequests_nn /* IMPORTED_LONG_NAMED_BIT */,
    nn /* IMPORTED_SHORT_NAMED_BIT */,
    EDINotificationRequests_fn /* IMPORTED_LONG_NAMED_BIT */,
    fn /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_EDINotificationRequests,
    _encode_EDINotificationRequests,
} from '../EDIMSInformationObjects/EDINotificationRequests.ta';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa';
export { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa';
import { id_rat_edi_notification_requests_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-edi-notification-requests-for-this-recipient.va';
export { id_rat_edi_notification_requests_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-edi-notification-requests-for-this-recipient.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION edi_notification_requests_for_this_recipient */
/**
 * @summary edi_notification_requests_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-notification-requests-for-this-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDINotificationRequests,
 *   EQUALITY MATCHING-RULE  bitStringMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-rat-edi-notification-requests-for-this-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDINotificationRequests>}
 * @implements {X413ATTRIBUTE<EDINotificationRequests>}
 */
export const edi_notification_requests_for_this_recipient: X413ATTRIBUTE<EDINotificationRequests> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDINotificationRequests,
    },
    encoderFor: {
        '&Type': _encode_EDINotificationRequests,
    },
    '&equalityMatch': bitStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_rat_edi_notification_requests_for_this_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION edi_notification_requests_for_this_recipient */

/* eslint-enable */
