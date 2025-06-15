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
import { mhs_maximum_content_length } from '../MHSDirectoryObjectsAndAttributes/mhs-maximum-content-length.oa.mjs';
import { protocolInformation } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/protocolInformation.oa.mjs';
import { id_oc_mhs_message_transfer_agent } from '../MHSObjectIdentifiers/id-oc-mhs-message-transfer-agent.va.mjs';
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

/* eslint-enable */
