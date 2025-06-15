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
    RelationshipObject,
    _decode_RelationshipObject,
    _encode_RelationshipObject,
} from '../GrmAttributeDefinitionModule/RelationshipObject.ta.mjs';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary relationshipObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * relationshipObject ATTRIBUTE ::= {
 *   WITH SYNTAX   RelationshipObject
 *   SINGLE VALUE  TRUE
 *   ID            {mkmDirectoryAttributeType  50}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<RelationshipObject>}
 * @implements {ATTRIBUTE<RelationshipObject>}
 */
export const relationshipObject: ATTRIBUTE<RelationshipObject> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RelationshipObject,
    },
    encoderFor: {
        '&Type': _encode_RelationshipObject,
    },
    '&single-valued': true /* OBJECT_FIELD_SETTING */,
    '&id': new _OID(
        [50],
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

/* eslint-enable */
