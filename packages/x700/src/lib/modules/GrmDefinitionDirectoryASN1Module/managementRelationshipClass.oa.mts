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
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs';
import { managementTemplate } from '../DefinitionDirectoryASN1Module/managementTemplate.oa.mjs';
import { derivedFrom } from '../DefinitionDirectoryASN1Module/derivedFrom.oa.mjs';
import { behaviour } from '../DefinitionDirectoryASN1Module/behaviour.oa.mjs';
import { supports } from '../GrmDefinitionDirectoryASN1Module/supports.oa.mjs';
import { qualifiedBy } from '../GrmDefinitionDirectoryASN1Module/qualifiedBy.oa.mjs';
import { roleSpecifier } from '../GrmDefinitionDirectoryASN1Module/roleSpecifier.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary managementRelationshipClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementRelationshipClass OBJECT-CLASS ::= {
 *   SUBCLASS OF   {managementTemplate}
 *   KIND          auxiliary
 *   MUST CONTAIN  {derivedFrom | behaviour}
 *   MAY CONTAIN   {supports | qualifiedBy | roleSpecifier}
 *   ID            {mkmDirectoryObjectClass  16}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const managementRelationshipClass: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [managementTemplate] /* OBJECT_FIELD_SETTING */,
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [derivedFrom, behaviour] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        supports,
        qualifiedBy,
        roleSpecifier,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': new _OID(
        [16],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
