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
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
import { SYNTAX_NAME } from '@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca';
export { SYNTAX_NAME } from '@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca';
import {
    RedirectionReason,
    _enum_for_RedirectionReason,
    RedirectionReason_recipient_assigned_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_assigned_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_originator_requested_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    originator_requested_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_recipient_MD_assigned_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_MD_assigned_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_directory_look_up /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directory_look_up /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_alias /* IMPORTED_LONG_ENUMERATION_ITEM */,
    alias /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RedirectionReason,
    _encode_RedirectionReason,
} from '../MTSAbstractService/RedirectionReason.ta';
export {
    RedirectionReason,
    _enum_for_RedirectionReason,
    RedirectionReason_recipient_assigned_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_assigned_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_originator_requested_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    originator_requested_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_recipient_MD_assigned_alternate_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_MD_assigned_alternate_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_directory_look_up /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directory_look_up /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RedirectionReason_alias /* IMPORTED_LONG_ENUMERATION_ITEM */,
    alias /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RedirectionReason,
    _encode_RedirectionReason,
} from '../MTSAbstractService/RedirectionReason.ta';
import { id_mr_redirection_reason_match } from '../MSObjectIdentifiers/id-mr-redirection-reason-match.va';
export { id_mr_redirection_reason_match } from '../MSObjectIdentifiers/id-mr-redirection-reason-match.va';

/* START_OF_SYMBOL_DEFINITION redirectionReasonMatch */
/**
 * @summary redirectionReasonMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * redirectionReasonMatch MATCHING-RULE ::= {
 *   SYNTAX  RedirectionReason
 *   ID      id-mr-redirection-reason-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<RedirectionReason>}
 * @implements {MATCHING_RULE<RedirectionReason>}
 */
export const redirectionReasonMatch: MATCHING_RULE<RedirectionReason> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_RedirectionReason,
    },
    encoderFor: {
        '&AssertionType': _encode_RedirectionReason,
    },
    '&id': id_mr_redirection_reason_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION redirectionReasonMatch */

/* eslint-enable */
