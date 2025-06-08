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
import { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa';
export { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa';
import { commonName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/commonName.oa';
export { commonName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/commonName.oa';
import { mhs_dl_submit_permissions } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-submit-permissions.oa';
export { mhs_dl_submit_permissions } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-submit-permissions.oa';
import { mhs_or_addresses } from '../MHSDirectoryObjectsAndAttributes/mhs-or-addresses.oa';
export { mhs_or_addresses } from '../MHSDirectoryObjectsAndAttributes/mhs-or-addresses.oa';
import { description } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/description.oa';
export { description } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/description.oa';
import { organizationName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/organizationName.oa';
export { organizationName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/organizationName.oa';
import { organizationalUnitName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/organizationalUnitName.oa';
export { organizationalUnitName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/organizationalUnitName.oa';
import { owner } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/owner.oa';
export { owner } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/owner.oa';
import { seeAlso } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/seeAlso.oa';
export { seeAlso } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/seeAlso.oa';
import { mhs_maximum_content_length } from '../MHSDirectoryObjectsAndAttributes/mhs-maximum-content-length.oa';
export { mhs_maximum_content_length } from '../MHSDirectoryObjectsAndAttributes/mhs-maximum-content-length.oa';
import { mhs_deliverable_content_types } from '../MHSDirectoryObjectsAndAttributes/mhs-deliverable-content-types.oa';
export { mhs_deliverable_content_types } from '../MHSDirectoryObjectsAndAttributes/mhs-deliverable-content-types.oa';
import { mhs_acceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-acceptable-eits.oa';
export { mhs_acceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-acceptable-eits.oa';
import { mhs_exclusively_acceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-exclusively-acceptable-eits.oa';
export { mhs_exclusively_acceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-exclusively-acceptable-eits.oa';
import { mhs_unacceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-unacceptable-eits.oa';
export { mhs_unacceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-unacceptable-eits.oa';
import { mhs_dl_policy } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-policy.oa';
export { mhs_dl_policy } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-policy.oa';
import { mhs_dl_subscription_service } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-subscription-service.oa';
export { mhs_dl_subscription_service } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-subscription-service.oa';
import { mhs_dl_archive_service } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-archive-service.oa';
export { mhs_dl_archive_service } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-archive-service.oa';
import { mhs_dl_related_lists } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-related-lists.oa';
export { mhs_dl_related_lists } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-related-lists.oa';
import { mhs_dl_members } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-members.oa';
export { mhs_dl_members } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-members.oa';
import { id_oc_mhs_distribution_list } from '../MHSObjectIdentifiers/id-oc-mhs-distribution-list.va';
export { id_oc_mhs_distribution_list } from '../MHSObjectIdentifiers/id-oc-mhs-distribution-list.va';

/* START_OF_SYMBOL_DEFINITION mhs_distribution_list */
/**
 * @summary mhs_distribution_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-distribution-list OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName | mhs-dl-submit-permissions | mhs-or-addresses}
 *   MAY CONTAIN
 *     {description | organizationName | organizationalUnitName | owner | seeAlso
 *       | mhs-maximum-content-length | mhs-deliverable-content-types |
 *       mhs-acceptable-eits | mhs-exclusively-acceptable-eits |
 *       mhs-unacceptable-eits | mhs-dl-policy | mhs-dl-subscription-service |
 *       mhs-dl-archive-service | mhs-dl-related-lists | mhs-dl-members}
 *   ID            id-oc-mhs-distribution-list
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const mhs_distribution_list: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [top] /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        commonName,
        mhs_dl_submit_permissions,
        mhs_or_addresses,
    ] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        description,
        organizationName,
        organizationalUnitName,
        owner,
        seeAlso,
        mhs_maximum_content_length,
        mhs_deliverable_content_types,
        mhs_acceptable_eits,
        mhs_exclusively_acceptable_eits,
        mhs_unacceptable_eits,
        mhs_dl_policy,
        mhs_dl_subscription_service,
        mhs_dl_archive_service,
        mhs_dl_related_lists,
        mhs_dl_members,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_mhs_distribution_list /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mhs_distribution_list */

/* eslint-enable */
