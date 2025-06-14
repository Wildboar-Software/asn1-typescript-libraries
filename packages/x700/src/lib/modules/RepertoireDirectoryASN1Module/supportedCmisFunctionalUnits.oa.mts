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
    FunctionalUnits,
    _decode_FunctionalUnits,
    _encode_FunctionalUnits,
} from '@wildboar/cmip/src/lib/modules/CMIP-A-ASSOCIATE-Information/FunctionalUnits.ta.mjs';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.mjs';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
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
