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
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.js';
export { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.js';
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
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.js';
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
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.js';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js';
import { applicationEntity } from '@wildboar/x500/src/lib/modules/SelectedObjectClasses/applicationEntity.oa.js';
export { applicationEntity } from '@wildboar/x500/src/lib/modules/SelectedObjectClasses/applicationEntity.oa.js';
import { owner } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/owner.oa.js';
export { owner } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/owner.oa.js';
import { mhs_maximum_content_length } from '../MHSDirectoryObjectsAndAttributes/mhs-maximum-content-length.oa.js';
export { mhs_maximum_content_length } from '../MHSDirectoryObjectsAndAttributes/mhs-maximum-content-length.oa.js';
import { protocolInformation } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/protocolInformation.oa.js';
export { protocolInformation } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/protocolInformation.oa.js';
import { id_oc_mhs_message_transfer_agent } from '../MHSObjectIdentifiers/id-oc-mhs-message-transfer-agent.va.js';
export { id_oc_mhs_message_transfer_agent } from '../MHSObjectIdentifiers/id-oc-mhs-message-transfer-agent.va.js';

/* START_OF_SYMBOL_DEFINITION mhs_message_transfer_agent */
/**
 * @summary mhs_message_transfer_agent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-message-transfer-agent OBJECT-CLASS ::= {
 *   SUBCLASS OF  {applicationEntity}
 *   MAY CONTAIN  {owner | mhs-maximum-content-length | protocolInformation}
 *   ID           id-oc-mhs-message-transfer-agent
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const mhs_message_transfer_agent: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [applicationEntity] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        owner,
        mhs_maximum_content_length,
        protocolInformation,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_mhs_message_transfer_agent /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mhs_message_transfer_agent */

/* eslint-enable */
