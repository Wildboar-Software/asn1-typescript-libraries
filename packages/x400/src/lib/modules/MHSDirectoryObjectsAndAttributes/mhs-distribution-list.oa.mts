/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.mjs';
import {
    _enum_for_ObjectClassKind,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs';
import { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa.mjs';
import { commonName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/commonName.oa.mjs';
import { mhs_dl_submit_permissions } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-submit-permissions.oa.mjs';
import { mhs_or_addresses } from '../MHSDirectoryObjectsAndAttributes/mhs-or-addresses.oa.mjs';
import { description } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/description.oa.mjs';
import { organizationName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/organizationName.oa.mjs';
import { organizationalUnitName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/organizationalUnitName.oa.mjs';
import { owner } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/owner.oa.mjs';
import { seeAlso } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/seeAlso.oa.mjs';
import { mhs_maximum_content_length } from '../MHSDirectoryObjectsAndAttributes/mhs-maximum-content-length.oa.mjs';
import { mhs_deliverable_content_types } from '../MHSDirectoryObjectsAndAttributes/mhs-deliverable-content-types.oa.mjs';
import { mhs_acceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-acceptable-eits.oa.mjs';
import { mhs_exclusively_acceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-exclusively-acceptable-eits.oa.mjs';
import { mhs_unacceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-unacceptable-eits.oa.mjs';
import { mhs_dl_policy } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-policy.oa.mjs';
import { mhs_dl_subscription_service } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-subscription-service.oa.mjs';
import { mhs_dl_archive_service } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-archive-service.oa.mjs';
import { mhs_dl_related_lists } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-related-lists.oa.mjs';
import { mhs_dl_members } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-members.oa.mjs';
import { id_oc_mhs_distribution_list } from '../MHSObjectIdentifiers/id-oc-mhs-distribution-list.va.mjs';
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

/* eslint-enable */
