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
import { context } from '../DefinitionDirectoryASN1Module/context.oa.mjs';
import { syntaxOrAttribute } from '../DefinitionDirectoryASN1Module/syntaxOrAttribute.oa.mjs';
import { behaviour } from '../DefinitionDirectoryASN1Module/behaviour.oa.mjs';
import { optionallyRegisteredAs } from '../DefinitionDirectoryASN1Module/optionallyRegisteredAs.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary managementParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementParameter OBJECT-CLASS ::= {
 *   SUBCLASS OF   {managementTemplate}
 *   KIND          auxiliary
 *   MUST CONTAIN
 *     {context | syntaxOrAttribute | behaviour | optionallyRegisteredAs}
 *   ID            {mkmDirectoryObjectClass  8}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const managementParameter: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [managementTemplate] /* OBJECT_FIELD_SETTING */,
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        context,
        syntaxOrAttribute,
        behaviour,
        optionallyRegisteredAs,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [8],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
