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
import { registeredInformation } from '../DefinitionDirectoryASN1Module/registeredInformation.oa.mjs';
import { managementRelationshipClass } from '../GrmDefinitionDirectoryASN1Module/managementRelationshipClass.oa.mjs';
import { managementRelationshipMapping } from '../GrmDefinitionDirectoryASN1Module/managementRelationshipMapping.oa.mjs';
import { type CONTENT_RULE } from '@wildboar/x500/InformationFramework';
/**
 * @summary registeredManagementRelationshipInformationCR
 * @description
 *
 * DIT content rule: at most one of `managementRelationshipClass` or
 * `managementRelationshipMapping` on a `registeredInformation` entry.
 * ITU-T Rec. X.750 Amd.1 (10/97)
 * [B.2](https://www.itu.int/rec/T-REC-X.750-199710-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * registeredManagementRelationshipInformationCR CONTENT-RULE ::= {
 *   STRUCTURAL OBJECT-CLASS   registeredInformation.&id
 *   AUXILIARY OBJECT-CLASSES
 *     {managementRelationshipClass | managementRelationshipMapping}
 * }
 * ```
 *
 * @constant
 * @type {CONTENT_RULE}
 * @implements {CONTENT_RULE}
 */
export const registeredManagementRelationshipInformationCR: CONTENT_RULE = {
    class: 'CONTENT-RULE',
    decoderFor: {},
    encoderFor: {},
    '&structuralClass':
        registeredInformation[
            '&id'
        ] /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Auxiliaries': [
        managementRelationshipClass,
        managementRelationshipMapping,
    ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
