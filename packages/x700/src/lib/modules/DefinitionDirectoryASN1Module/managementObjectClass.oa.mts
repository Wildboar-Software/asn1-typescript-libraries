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
import { derivedFrom } from '../DefinitionDirectoryASN1Module/derivedFrom.oa.mjs';
import { characterizedBy } from '../DefinitionDirectoryASN1Module/characterizedBy.oa.mjs';
import { conditionalPackages } from '../DefinitionDirectoryASN1Module/conditionalPackages.oa.mjs';
import { registeredAs } from '../DefinitionDirectoryASN1Module/registeredAs.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary managementObjectClass
 * @description
 *
 * Directory auxiliary for a GDMO managed object class template (MKM
 * `managedObjectClassTemplate`). MUST CONTAIN `derivedFrom`
 * (immediate superclasses), `characterizedBy` (mandatory packages),
 * `conditionalPackages`, and `registeredAs`. Included in a
 * `registeredInformation` entry. ID `{mkmDirectoryObjectClass 6}`.
 * ITU-T Rec. X.750 (10/96)
 * [§8.1.2.7](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * Table 15, [B.2](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementObjectClass OBJECT-CLASS ::= {
 *   SUBCLASS OF   {managementTemplate}
 *   KIND          auxiliary
 *   MUST CONTAIN
 *     {derivedFrom | characterizedBy | conditionalPackages | registeredAs}
 *   ID            {mkmDirectoryObjectClass  6}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const managementObjectClass: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [managementTemplate] /* OBJECT_FIELD_SETTING */,
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        derivedFrom,
        characterizedBy,
        conditionalPackages,
        registeredAs,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [6],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
