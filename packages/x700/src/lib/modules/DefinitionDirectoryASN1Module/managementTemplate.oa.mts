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
import { templateName } from '../DefinitionDirectoryASN1Module/templateName.oa.mjs';
import { templateDefinition } from '../DefinitionDirectoryASN1Module/templateDefinition.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary managementTemplate
 * @description
 *
 * Directory auxiliary for a template. MUST CONTAIN `templateName`
 * (GDMO/GRM template label); MAY CONTAIN `templateDefinition` (text).
 * Superclass of the per-kind template auxiliaries. If only text is
 * stored, this class is used without a subclass. ID
 * `{mkmDirectoryObjectClass 5}`. ITU-T Rec. X.750 (10/96)
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.750-199610-I), Table 14,
 * [B.2](https://www.itu.int/rec/T-REC-X.750-199610-I). Amd.1 [item
 * 8](https://www.itu.int/rec/T-REC-X.750-199710-I) generalizes "GDMO template"
 * to "template".
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementTemplate OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MUST CONTAIN  {templateName}
 *   MAY CONTAIN   {templateDefinition}
 *   ID            {mkmDirectoryObjectClass  5}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const managementTemplate: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [templateName] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [templateDefinition] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [5],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
