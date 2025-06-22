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
import { mappedRelationshipClass } from '../GrmDefinitionDirectoryASN1Module/mappedRelationshipClass.oa.mjs';
import { behaviour } from '../DefinitionDirectoryASN1Module/behaviour.oa.mjs';
import { roleMappingSpecificationSet } from '../GrmDefinitionDirectoryASN1Module/roleMappingSpecificationSet.oa.mjs';
import { registeredAs } from '../DefinitionDirectoryASN1Module/registeredAs.oa.mjs';
import { relationshipObject } from '../GrmDefinitionDirectoryASN1Module/relationshipObject.oa.mjs';
import { operationsMapping } from '../GrmDefinitionDirectoryASN1Module/operationsMapping.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary managementRelationshipMapping
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementRelationshipMapping OBJECT-CLASS ::= {
 *   SUBCLASS OF   {managementTemplate}
 *   KIND          auxiliary
 *   MUST CONTAIN
 *     {mappedRelationshipClass | behaviour | roleMappingSpecificationSet |
 *       registeredAs}
 *   MAY CONTAIN   {relationshipObject | operationsMapping}
 *   ID            {mkmDirectoryObjectClass  17}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const managementRelationshipMapping: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [managementTemplate] /* OBJECT_FIELD_SETTING */,
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        mappedRelationshipClass,
        behaviour,
        roleMappingSpecificationSet,
        registeredAs,
    ] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        relationshipObject,
        operationsMapping,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [17],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
