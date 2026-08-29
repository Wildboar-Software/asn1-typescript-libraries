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
import { derivedOrWithSyntaxChoice } from '../DefinitionDirectoryASN1Module/derivedOrWithSyntaxChoice.oa.mjs';
import { matchesFor } from '../DefinitionDirectoryASN1Module/matchesFor.oa.mjs';
import { behaviour } from '../DefinitionDirectoryASN1Module/behaviour.oa.mjs';
import { parameters } from '../DefinitionDirectoryASN1Module/parameters.oa.mjs';
import { optionallyRegisteredAs } from '../DefinitionDirectoryASN1Module/optionallyRegisteredAs.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary managementAttribute
 * @description
 *
 * Directory auxiliary for a GDMO attribute template. MUST CONTAIN
 * `derivedOrWithSyntaxChoice`, `matchesFor`, `behaviour`, `parameters`,
 * and `optionallyRegisteredAs`. ID `{mkmDirectoryObjectClass 10}`.
 * ITU-T Rec. X.750 (10/96)
 * [§8.1.2.4](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [B.2](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementAttribute OBJECT-CLASS ::= {
 *   SUBCLASS OF   {managementTemplate}
 *   KIND          auxiliary
 *   MUST CONTAIN
 *     {derivedOrWithSyntaxChoice | matchesFor | behaviour | parameters |
 *       optionallyRegisteredAs}
 *   ID            {mkmDirectoryObjectClass  10}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const managementAttribute: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [managementTemplate] /* OBJECT_FIELD_SETTING */,
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        derivedOrWithSyntaxChoice,
        matchesFor,
        behaviour,
        parameters,
        optionallyRegisteredAs,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [10],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
