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
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
import {
    AttributeUsage,
    _enum_for_AttributeUsage,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta';
export {
    AttributeUsage,
    _enum_for_AttributeUsage,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta';
import { SYNTAX_NAME } from '@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca';
export { SYNTAX_NAME } from '@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca';
import {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta';
export {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta';
import { oRNameExactMatch } from '../MHSDirectoryObjectsAndAttributes/oRNameExactMatch.oa';
export { oRNameExactMatch } from '../MHSDirectoryObjectsAndAttributes/oRNameExactMatch.oa';
import { id_at_mhs_dl_archive_service } from '../MHSObjectIdentifiers/id-at-mhs-dl-archive-service.va';
export { id_at_mhs_dl_archive_service } from '../MHSObjectIdentifiers/id-at-mhs-dl-archive-service.va';

/* START_OF_SYMBOL_DEFINITION mhs_dl_archive_service */
/**
 * @summary mhs_dl_archive_service
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-dl-archive-service ATTRIBUTE ::= {
 *   WITH SYNTAX             ORName
 *   EQUALITY MATCHING RULE  oRNameExactMatch
 *   -- EXTENSIBLE MATCHING RULE    { oRNameMatch | oRNameElementsMatch |
 *   --                oRNameSubstringElementsMatch | oRNameSingleElementMatch }
 *   ID                      id-at-mhs-dl-archive-service
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ORName>}
 * @implements {ATTRIBUTE<ORName>}
 */
export const mhs_dl_archive_service: ATTRIBUTE<ORName> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ORName,
    },
    encoderFor: {
        '&Type': _encode_ORName,
    },
    '&equality-match': oRNameExactMatch /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_dl_archive_service /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mhs_dl_archive_service */

/* eslint-enable */
