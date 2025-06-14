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
import { objectIdentifierMatch } from '@wildboar/x500/src/lib/modules/InformationFramework/objectIdentifierMatch.oa.mjs';
import { id_at_mhs_supported_attributes } from '../MHSObjectIdentifiers/id-at-mhs-supported-attributes.va.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../MSAbstractService/AttributeType.ta.mjs";

/* START_OF_SYMBOL_DEFINITION mhs_supported_attributes */
/**
 * @summary mhs_supported_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-supported-attributes ATTRIBUTE ::= {
 *   WITH SYNTAX             X413ATTRIBUTE.&id({AttributeTable})
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   ID                      id-at-mhs-supported-attributes
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<AttributeType>}
 * @implements {ATTRIBUTE<AttributeType>}
 */
export const mhs_supported_attributes: ATTRIBUTE<AttributeType> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AttributeType,
    },
    encoderFor: {
        '&Type': _encode_AttributeType,
    },
    '&equality-match': objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_supported_attributes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mhs_supported_attributes */

/* eslint-enable */
