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
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs';
import {
    Capability,
    _decode_Capability,
    _encode_Capability,
} from '../MHSDirectoryObjectsAndAttributes/Capability.ta.mjs';
import { capabilityMatch } from '../MHSDirectoryObjectsAndAttributes/capabilityMatch.oa.mjs';
import { id_at_mhs_deliverable_classes } from '../MHSObjectIdentifiers/id-at-mhs-deliverable-classes.va.mjs';
/**
 * @summary mhs_deliverable_classes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-deliverable-classes ATTRIBUTE ::= {
 *   WITH SYNTAX             Capability
 *   EQUALITY MATCHING RULE  capabilityMatch
 *   ID                      id-at-mhs-deliverable-classes
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<Capability>}
 * @implements {ATTRIBUTE<Capability>}
 */
export const mhs_deliverable_classes: ATTRIBUTE<Capability> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_Capability,
    },
    encoderFor: {
        '&Type': _encode_Capability,
    },
    '&equality-match': capabilityMatch /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_deliverable_classes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
