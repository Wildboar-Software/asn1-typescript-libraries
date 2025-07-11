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
import { type OBJECT_CLASS } from '@wildboar/x500/InformationFramework';
import {
    _enum_for_ObjectClassKind,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/InformationFramework';
import { managementTemplate } from '../DefinitionDirectoryASN1Module/managementTemplate.oa.mjs';
import { subordinateObjectClass } from '../DefinitionDirectoryASN1Module/subordinateObjectClass.oa.mjs';
import { namedBySuperiorObjectClass } from '../DefinitionDirectoryASN1Module/namedBySuperiorObjectClass.oa.mjs';
import { withAttribute } from '../DefinitionDirectoryASN1Module/withAttribute.oa.mjs';
import { behaviour } from '../DefinitionDirectoryASN1Module/behaviour.oa.mjs';
import { create } from '../DefinitionDirectoryASN1Module/create.oa.mjs';
import { delete_ } from '../DefinitionDirectoryASN1Module/delete.oa.mjs';
import { registeredAs } from '../DefinitionDirectoryASN1Module/registeredAs.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary managementNameBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementNameBinding OBJECT-CLASS ::= {
 *   SUBCLASS OF   {managementTemplate}
 *   KIND          auxiliary
 *   MUST CONTAIN
 *     {subordinateObjectClass | namedBySuperiorObjectClass | withAttribute |
 *       behaviour | create | delete | registeredAs}
 *   ID            {mkmDirectoryObjectClass  9}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const managementNameBinding: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [managementTemplate] /* OBJECT_FIELD_SETTING */,
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        subordinateObjectClass,
        namedBySuperiorObjectClass,
        withAttribute,
        behaviour,
        create,
        delete_,
        registeredAs,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [9],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
