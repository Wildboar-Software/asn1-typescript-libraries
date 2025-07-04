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
import { behaviour } from '../DefinitionDirectoryASN1Module/behaviour.oa.mjs';
import { modeConfirmed } from '../DefinitionDirectoryASN1Module/modeConfirmed.oa.mjs';
import { parameters } from '../DefinitionDirectoryASN1Module/parameters.oa.mjs';
import { withInformationSyntax } from '../DefinitionDirectoryASN1Module/withInformationSyntax.oa.mjs';
import { withReplySyntax } from '../DefinitionDirectoryASN1Module/withReplySyntax.oa.mjs';
import { registeredAs } from '../DefinitionDirectoryASN1Module/registeredAs.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary managementAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementAction OBJECT-CLASS ::= {
 *   SUBCLASS OF   {managementTemplate}
 *   KIND          auxiliary
 *   MUST CONTAIN
 *     {behaviour | modeConfirmed | parameters | withInformationSyntax |
 *       withReplySyntax | registeredAs}
 *   ID            {mkmDirectoryObjectClass  13}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const managementAction: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [managementTemplate] /* OBJECT_FIELD_SETTING */,
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        behaviour,
        modeConfirmed,
        parameters,
        withInformationSyntax,
        withReplySyntax,
        registeredAs,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [13],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
