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
import * as $ from 'asn1-ts/dist/node/functional';
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
export { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
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
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta';
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
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
import { managementTemplate } from '../DefinitionDirectoryASN1Module/managementTemplate.oa';
export { managementTemplate } from '../DefinitionDirectoryASN1Module/managementTemplate.oa';
import { subordinateObjectClass } from '../DefinitionDirectoryASN1Module/subordinateObjectClass.oa';
export { subordinateObjectClass } from '../DefinitionDirectoryASN1Module/subordinateObjectClass.oa';
import { namedBySuperiorObjectClass } from '../DefinitionDirectoryASN1Module/namedBySuperiorObjectClass.oa';
export { namedBySuperiorObjectClass } from '../DefinitionDirectoryASN1Module/namedBySuperiorObjectClass.oa';
import { withAttribute } from '../DefinitionDirectoryASN1Module/withAttribute.oa';
export { withAttribute } from '../DefinitionDirectoryASN1Module/withAttribute.oa';
import { behaviour } from '../DefinitionDirectoryASN1Module/behaviour.oa';
export { behaviour } from '../DefinitionDirectoryASN1Module/behaviour.oa';
import { create } from '../DefinitionDirectoryASN1Module/create.oa';
export { create } from '../DefinitionDirectoryASN1Module/create.oa';
import { delete_ } from '../DefinitionDirectoryASN1Module/delete.oa';
export { delete_ } from '../DefinitionDirectoryASN1Module/delete.oa';
import { registeredAs } from '../DefinitionDirectoryASN1Module/registeredAs.oa';
export { registeredAs } from '../DefinitionDirectoryASN1Module/registeredAs.oa';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va';
export { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va';

/* START_OF_SYMBOL_DEFINITION managementNameBinding */
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
    '&id': new _OID(
        [9],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION managementNameBinding */

/* eslint-enable */
