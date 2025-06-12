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
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.js';
export { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.js';
import {
    ObjectClassKind,
    _enum_for_ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.js';
export {
    ObjectClassKind,
    _enum_for_ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.js';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js';
import { managementTemplate } from '../DefinitionDirectoryASN1Module/managementTemplate.oa.js';
export { managementTemplate } from '../DefinitionDirectoryASN1Module/managementTemplate.oa.js';
import { mappedRelationshipClass } from '../GrmDefinitionDirectoryASN1Module/mappedRelationshipClass.oa.js';
export { mappedRelationshipClass } from '../GrmDefinitionDirectoryASN1Module/mappedRelationshipClass.oa.js';
import { behaviour } from '../DefinitionDirectoryASN1Module/behaviour.oa.js';
export { behaviour } from '../DefinitionDirectoryASN1Module/behaviour.oa.js';
import { roleMappingSpecificationSet } from '../GrmDefinitionDirectoryASN1Module/roleMappingSpecificationSet.oa.js';
export { roleMappingSpecificationSet } from '../GrmDefinitionDirectoryASN1Module/roleMappingSpecificationSet.oa.js';
import { registeredAs } from '../DefinitionDirectoryASN1Module/registeredAs.oa.js';
export { registeredAs } from '../DefinitionDirectoryASN1Module/registeredAs.oa.js';
import { relationshipObject } from '../GrmDefinitionDirectoryASN1Module/relationshipObject.oa.js';
export { relationshipObject } from '../GrmDefinitionDirectoryASN1Module/relationshipObject.oa.js';
import { operationsMapping } from '../GrmDefinitionDirectoryASN1Module/operationsMapping.oa.js';
export { operationsMapping } from '../GrmDefinitionDirectoryASN1Module/operationsMapping.oa.js';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.js';
export { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.js';

/* START_OF_SYMBOL_DEFINITION managementRelationshipMapping */
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
    '&id': new _OID(
        [17],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION managementRelationshipMapping */

/* eslint-enable */
