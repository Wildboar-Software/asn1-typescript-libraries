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
import { type ATTRIBUTE } from '@wildboar/x500/InformationFramework';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/InformationFramework';
import { objectIdentifierMatch } from '@wildboar/x500/InformationFramework';
import { id_at_mhs_supported_automatic_actions } from '../MHSObjectIdentifiers/id-at-mhs-supported-automatic-actions.va.mjs';
import {
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from "../MSAbstractService/AutoActionType.ta.mjs";


/**
 * @summary mhs_supported_automatic_actions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-supported-automatic-actions ATTRIBUTE ::= {
 *   WITH SYNTAX             AUTO-ACTION.&id({AutoActionTable})
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   ID                      id-at-mhs-supported-automatic-actions
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<AutoActionType>}
 * @implements {ATTRIBUTE<AutoActionType>}
 */
export const mhs_supported_automatic_actions: ATTRIBUTE<AutoActionType> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AutoActionType,
    },
    encoderFor: {
        '&Type': _encode_AutoActionType,
    },
    '&equality-match': objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_supported_automatic_actions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
