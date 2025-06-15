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
    Delete,
    _decode_Delete,
    _encode_Delete,
} from '../DefinitionASN1Module/Delete.ta.mjs';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary delete_
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delete ATTRIBUTE ::= {
 *   WITH SYNTAX   Delete
 *   SINGLE VALUE  TRUE
 *   ID            {mkmDirectoryAttributeType  18}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<Delete>}
 * @implements {ATTRIBUTE<Delete>}
 */
export const delete_: ATTRIBUTE<Delete> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_Delete,
    },
    encoderFor: {
        '&Type': _encode_Delete,
    },
    '&single-valued': true /* OBJECT_FIELD_SETTING */,
    '&id': new _OID(
        [18],
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
