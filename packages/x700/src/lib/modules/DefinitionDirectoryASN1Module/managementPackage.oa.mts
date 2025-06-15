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
import { behaviour } from '../DefinitionDirectoryASN1Module/behaviour.oa.mjs';
import { attributes } from '../DefinitionDirectoryASN1Module/attributes.oa.mjs';
import { attributeGroups } from '../DefinitionDirectoryASN1Module/attributeGroups.oa.mjs';
import { actions } from '../DefinitionDirectoryASN1Module/actions.oa.mjs';
import { notifications } from '../DefinitionDirectoryASN1Module/notifications.oa.mjs';
import { optionallyRegisteredAs } from '../DefinitionDirectoryASN1Module/optionallyRegisteredAs.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary managementPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementPackage OBJECT-CLASS ::= {
 *   SUBCLASS OF   {managementTemplate}
 *   KIND          auxiliary
 *   MUST CONTAIN
 *     {behaviour | attributes | attributeGroups | actions | notifications |
 *       optionallyRegisteredAs}
 *   ID            {mkmDirectoryObjectClass  7}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const managementPackage: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [managementTemplate] /* OBJECT_FIELD_SETTING */,
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        behaviour,
        attributes,
        attributeGroups,
        actions,
        notifications,
        optionallyRegisteredAs,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': new _OID(
        [7],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
