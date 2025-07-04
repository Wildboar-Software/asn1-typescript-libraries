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
} from '@wildboar/asn1';
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.mjs';
import {
    _enum_for_ObjectClassKind,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs';
import { applicationEntity } from '@wildboar/x500/src/lib/modules/SelectedObjectClasses/applicationEntity.oa.mjs';
import { owner } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/owner.oa.mjs';
import { mhs_maximum_content_length } from '../MHSDirectoryObjectsAndAttributes/mhs-maximum-content-length.oa.mjs';
import { mhs_deliverable_content_types } from '../MHSDirectoryObjectsAndAttributes/mhs-deliverable-content-types.oa.mjs';
import { mhs_acceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-acceptable-eits.oa.mjs';
import { mhs_exclusively_acceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-exclusively-acceptable-eits.oa.mjs';
import { mhs_unacceptable_eits } from '../MHSDirectoryObjectsAndAttributes/mhs-unacceptable-eits.oa.mjs';
import { mhs_deliverable_classes } from '../MHSDirectoryObjectsAndAttributes/mhs-deliverable-classes.oa.mjs';
import { mhs_or_addresses } from '../MHSDirectoryObjectsAndAttributes/mhs-or-addresses.oa.mjs';
import { protocolInformation } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/protocolInformation.oa.mjs';
import { id_oc_mhs_user_agent } from '../MHSObjectIdentifiers/id-oc-mhs-user-agent.va.mjs';
/**
 * @summary mhs_user_agent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-user-agent OBJECT-CLASS ::= {
 *   SUBCLASS OF  {applicationEntity}
 *   MAY CONTAIN
 *     {owner | mhs-maximum-content-length | mhs-deliverable-content-types |
 *       mhs-acceptable-eits | mhs-exclusively-acceptable-eits |
 *       mhs-unacceptable-eits | mhs-deliverable-classes | mhs-or-addresses |
 *       protocolInformation}
 *   ID           id-oc-mhs-user-agent
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const mhs_user_agent: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [applicationEntity] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        owner,
        mhs_maximum_content_length,
        mhs_deliverable_content_types,
        mhs_acceptable_eits,
        mhs_exclusively_acceptable_eits,
        mhs_unacceptable_eits,
        mhs_deliverable_classes,
        mhs_or_addresses,
        protocolInformation,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_mhs_user_agent /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
