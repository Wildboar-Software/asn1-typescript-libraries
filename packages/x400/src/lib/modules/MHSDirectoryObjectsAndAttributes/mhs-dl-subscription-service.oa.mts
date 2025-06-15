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
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs';
import {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
import { oRNameExactMatch } from '../MHSDirectoryObjectsAndAttributes/oRNameExactMatch.oa.mjs';
import { id_at_mhs_dl_subscription_service } from '../MHSObjectIdentifiers/id-at-mhs-dl-subscription-service.va.mjs';
/**
 * @summary mhs_dl_subscription_service
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-dl-subscription-service ATTRIBUTE ::= {
 *   WITH SYNTAX             ORName
 *   EQUALITY MATCHING RULE  oRNameExactMatch
 *   -- EXTENSIBLE MATCHING RULE    { oRNameMatch | oRNameElementsMatch |
 *   --                oRNameSubstringElementsMatch | oRNameSingleElementMatch }
 *   ID                      id-at-mhs-dl-subscription-service
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ORName>}
 * @implements {ATTRIBUTE<ORName>}
 */
export const mhs_dl_subscription_service: ATTRIBUTE<ORName> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ORName,
    },
    encoderFor: {
        '&Type': _encode_ORName,
    },
    '&equality-match': oRNameExactMatch /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_dl_subscription_service /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
