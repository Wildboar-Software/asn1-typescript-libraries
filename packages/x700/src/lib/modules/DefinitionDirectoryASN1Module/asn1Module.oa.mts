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
import { moduleReference } from '../DefinitionDirectoryASN1Module/moduleReference.oa.mjs';
import { asn1ModuleContents } from '../DefinitionDirectoryASN1Module/asn1ModuleContents.oa.mjs';
import { asn1Version } from '../DefinitionDirectoryASN1Module/asn1Version.oa.mjs';
import { optionallyRegisteredAs } from '../DefinitionDirectoryASN1Module/optionallyRegisteredAs.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary asn1Module
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * asn1Module OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MUST CONTAIN
 *     {moduleReference | asn1ModuleContents | asn1Version |
 *       optionallyRegisteredAs}
 *   ID            {mkmDirectoryObjectClass  15}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const asn1Module: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        moduleReference,
        asn1ModuleContents,
        asn1Version,
        optionallyRegisteredAs,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [15],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
