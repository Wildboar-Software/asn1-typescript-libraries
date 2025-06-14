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
import { registeredInformation } from '../DefinitionDirectoryASN1Module/registeredInformation.oa.mjs';
import { managementDocument } from '../DefinitionDirectoryASN1Module/managementDocument.oa.mjs';
import { managementTemplate } from '../DefinitionDirectoryASN1Module/managementTemplate.oa.mjs';
import { managementObjectClass } from '../DefinitionDirectoryASN1Module/managementObjectClass.oa.mjs';
import { managementPackage } from '../DefinitionDirectoryASN1Module/managementPackage.oa.mjs';
import { managementParameter } from '../DefinitionDirectoryASN1Module/managementParameter.oa.mjs';
import { managementNameBinding } from '../DefinitionDirectoryASN1Module/managementNameBinding.oa.mjs';
import { managementAttribute } from '../DefinitionDirectoryASN1Module/managementAttribute.oa.mjs';
import { managementAttributeGroup } from '../DefinitionDirectoryASN1Module/managementAttributeGroup.oa.mjs';
import { managementBehaviour } from '../DefinitionDirectoryASN1Module/managementBehaviour.oa.mjs';
import { managementAction } from '../DefinitionDirectoryASN1Module/managementAction.oa.mjs';
import { managementNotification } from '../DefinitionDirectoryASN1Module/managementNotification.oa.mjs';
import { asn1Module } from '../DefinitionDirectoryASN1Module/asn1Module.oa.mjs';
import { CONTENT_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTENT-RULE.oca.mjs';
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
