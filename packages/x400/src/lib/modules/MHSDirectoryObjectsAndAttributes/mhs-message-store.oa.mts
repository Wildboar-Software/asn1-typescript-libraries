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
import { applicationEntity } from '@wildboar/x500/src/lib/modules/SelectedObjectClasses/applicationEntity.oa.mjs';
import { owner } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/owner.oa.mjs';
import { mhs_supported_attributes } from '../MHSDirectoryObjectsAndAttributes/mhs-supported-attributes.oa.mjs';
import { mhs_supported_automatic_actions } from '../MHSDirectoryObjectsAndAttributes/mhs-supported-automatic-actions.oa.mjs';
import { mhs_supported_matching_rules } from '../MHSDirectoryObjectsAndAttributes/mhs-supported-matching-rules.oa.mjs';
import { mhs_supported_content_types } from '../MHSDirectoryObjectsAndAttributes/mhs-supported-content-types.oa.mjs';
import { protocolInformation } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/protocolInformation.oa.mjs';
import { id_oc_mhs_message_store } from '../MHSObjectIdentifiers/id-oc-mhs-message-store.va.mjs';
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

/* eslint-enable */
