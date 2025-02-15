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
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
export { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
import {
    ObjectClassKind,
    _enum_for_ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta';
export {
    ObjectClassKind,
    _enum_for_ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
import { applicationEntity } from '@wildboar/x500/src/lib/modules/SelectedObjectClasses/applicationEntity.oa';
export { applicationEntity } from '@wildboar/x500/src/lib/modules/SelectedObjectClasses/applicationEntity.oa';
import { owner } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/owner.oa';
export { owner } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/owner.oa';
import { mhs_supported_attributes } from '../MHSDirectoryObjectsAndAttributes/mhs-supported-attributes.oa';
export { mhs_supported_attributes } from '../MHSDirectoryObjectsAndAttributes/mhs-supported-attributes.oa';
import { mhs_supported_automatic_actions } from '../MHSDirectoryObjectsAndAttributes/mhs-supported-automatic-actions.oa';
export { mhs_supported_automatic_actions } from '../MHSDirectoryObjectsAndAttributes/mhs-supported-automatic-actions.oa';
import { mhs_supported_matching_rules } from '../MHSDirectoryObjectsAndAttributes/mhs-supported-matching-rules.oa';
export { mhs_supported_matching_rules } from '../MHSDirectoryObjectsAndAttributes/mhs-supported-matching-rules.oa';
import { mhs_supported_content_types } from '../MHSDirectoryObjectsAndAttributes/mhs-supported-content-types.oa';
export { mhs_supported_content_types } from '../MHSDirectoryObjectsAndAttributes/mhs-supported-content-types.oa';
import { protocolInformation } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/protocolInformation.oa';
export { protocolInformation } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/protocolInformation.oa';
import { id_oc_mhs_message_store } from '../MHSObjectIdentifiers/id-oc-mhs-message-store.va';
export { id_oc_mhs_message_store } from '../MHSObjectIdentifiers/id-oc-mhs-message-store.va';

/* START_OF_SYMBOL_DEFINITION mhs_message_store */
/**
 * @summary mhs_message_store
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-message-store OBJECT-CLASS ::= {
 *   SUBCLASS OF  {applicationEntity}
 *   MAY CONTAIN
 *     {owner | mhs-supported-attributes | mhs-supported-automatic-actions |
 *       mhs-supported-matching-rules | mhs-supported-content-types |
 *       protocolInformation}
 *   ID           id-oc-mhs-message-store
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const mhs_message_store: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [applicationEntity] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        owner,
        mhs_supported_attributes,
        mhs_supported_automatic_actions,
        mhs_supported_matching_rules,
        mhs_supported_content_types,
        protocolInformation,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_mhs_message_store /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mhs_message_store */

/* eslint-enable */
