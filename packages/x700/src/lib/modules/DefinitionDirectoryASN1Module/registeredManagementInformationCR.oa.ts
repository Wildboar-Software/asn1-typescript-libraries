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
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
import { registeredInformation } from '../DefinitionDirectoryASN1Module/registeredInformation.oa';
export { registeredInformation } from '../DefinitionDirectoryASN1Module/registeredInformation.oa';
import { managementDocument } from '../DefinitionDirectoryASN1Module/managementDocument.oa';
export { managementDocument } from '../DefinitionDirectoryASN1Module/managementDocument.oa';
import { managementTemplate } from '../DefinitionDirectoryASN1Module/managementTemplate.oa';
export { managementTemplate } from '../DefinitionDirectoryASN1Module/managementTemplate.oa';
import { managementObjectClass } from '../DefinitionDirectoryASN1Module/managementObjectClass.oa';
export { managementObjectClass } from '../DefinitionDirectoryASN1Module/managementObjectClass.oa';
import { managementPackage } from '../DefinitionDirectoryASN1Module/managementPackage.oa';
export { managementPackage } from '../DefinitionDirectoryASN1Module/managementPackage.oa';
import { managementParameter } from '../DefinitionDirectoryASN1Module/managementParameter.oa';
export { managementParameter } from '../DefinitionDirectoryASN1Module/managementParameter.oa';
import { managementNameBinding } from '../DefinitionDirectoryASN1Module/managementNameBinding.oa';
export { managementNameBinding } from '../DefinitionDirectoryASN1Module/managementNameBinding.oa';
import { managementAttribute } from '../DefinitionDirectoryASN1Module/managementAttribute.oa';
export { managementAttribute } from '../DefinitionDirectoryASN1Module/managementAttribute.oa';
import { managementAttributeGroup } from '../DefinitionDirectoryASN1Module/managementAttributeGroup.oa';
export { managementAttributeGroup } from '../DefinitionDirectoryASN1Module/managementAttributeGroup.oa';
import { managementBehaviour } from '../DefinitionDirectoryASN1Module/managementBehaviour.oa';
export { managementBehaviour } from '../DefinitionDirectoryASN1Module/managementBehaviour.oa';
import { managementAction } from '../DefinitionDirectoryASN1Module/managementAction.oa';
export { managementAction } from '../DefinitionDirectoryASN1Module/managementAction.oa';
import { managementNotification } from '../DefinitionDirectoryASN1Module/managementNotification.oa';
export { managementNotification } from '../DefinitionDirectoryASN1Module/managementNotification.oa';
import { asn1Module } from '../DefinitionDirectoryASN1Module/asn1Module.oa';
export { asn1Module } from '../DefinitionDirectoryASN1Module/asn1Module.oa';
import { CONTENT_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTENT-RULE.oca';
export { CONTENT_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTENT-RULE.oca';

/* START_OF_SYMBOL_DEFINITION registeredManagementInformationCR */
/**
 * @summary registeredManagementInformationCR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * registeredManagementInformationCR CONTENT-RULE ::= {
 *   STRUCTURAL OBJECT-CLASS   registeredInformation.&id
 *   AUXILIARY OBJECT-CLASSES
 *     {managementDocument | managementTemplate | managementObjectClass |
 *       managementPackage | managementParameter | managementNameBinding |
 *       managementAttribute | managementAttributeGroup | managementBehaviour |
 *       managementAction | managementNotification | asn1Module}
 * }
 * ```
 *
 * @constant
 * @type {CONTENT_RULE}
 * @implements {CONTENT_RULE}
 */
export const registeredManagementInformationCR: CONTENT_RULE = {
    class: 'CONTENT-RULE',
    decoderFor: {},
    encoderFor: {},
    '&structuralClass':
        registeredInformation[
            '&id'
        ] /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Auxiliaries': [
        managementDocument,
        managementTemplate,
        managementObjectClass,
        managementPackage,
        managementParameter,
        managementNameBinding,
        managementAttribute,
        managementAttributeGroup,
        managementBehaviour,
        managementAction,
        managementNotification,
        asn1Module,
    ] /* OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION registeredManagementInformationCR */

/* eslint-enable */
