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
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
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
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.js';
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
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.js';
import { SYNTAX_NAME } from '@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca.js';
export { SYNTAX_NAME } from '@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca.js';
import {
    FunctionalUnits,
    FunctionalUnits_multipleObjectSelection /* IMPORTED_LONG_NAMED_BIT */,
    multipleObjectSelection /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_filter /* IMPORTED_LONG_NAMED_BIT */,
    filter /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_multipleReply /* IMPORTED_LONG_NAMED_BIT */,
    multipleReply /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_extendedService /* IMPORTED_LONG_NAMED_BIT */,
    extendedService /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_cancelGet /* IMPORTED_LONG_NAMED_BIT */,
    cancelGet /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_FunctionalUnits,
    _encode_FunctionalUnits,
} from '@wildboar/cmip/src/lib/modules/CMIP-A-ASSOCIATE-Information/FunctionalUnits.ta.js';
export {
    FunctionalUnits,
    FunctionalUnits_multipleObjectSelection /* IMPORTED_LONG_NAMED_BIT */,
    multipleObjectSelection /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_filter /* IMPORTED_LONG_NAMED_BIT */,
    filter /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_multipleReply /* IMPORTED_LONG_NAMED_BIT */,
    multipleReply /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_extendedService /* IMPORTED_LONG_NAMED_BIT */,
    extendedService /* IMPORTED_SHORT_NAMED_BIT */,
    FunctionalUnits_cancelGet /* IMPORTED_LONG_NAMED_BIT */,
    cancelGet /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_FunctionalUnits,
    _encode_FunctionalUnits,
} from '@wildboar/cmip/src/lib/modules/CMIP-A-ASSOCIATE-Information/FunctionalUnits.ta.js';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.js';
export { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.js';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.js';
export { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.js';

/* START_OF_SYMBOL_DEFINITION supportedCmisFunctionalUnits */
/**
 * @summary supportedCmisFunctionalUnits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedCmisFunctionalUnits ATTRIBUTE ::= {
 *   WITH SYNTAX             FunctionalUnits
 *   EQUALITY MATCHING RULE  bitStringMatch
 *   SINGLE VALUE            TRUE
 *   ID                      {mkmDirectoryAttributeType  3}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<FunctionalUnits>}
 * @implements {ATTRIBUTE<FunctionalUnits>}
 */
export const supportedCmisFunctionalUnits: ATTRIBUTE<FunctionalUnits> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_FunctionalUnits,
    },
    encoderFor: {
        '&Type': _encode_FunctionalUnits,
    },
    '&equality-match': bitStringMatch /* OBJECT_FIELD_SETTING */,
    '&single-valued': true /* OBJECT_FIELD_SETTING */,
    '&id': new _OID(
        [3],
        mkmDirectoryAttributeType
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage':
        userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION supportedCmisFunctionalUnits */

/* eslint-enable */
