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
import { documentName } from '../DefinitionDirectoryASN1Module/documentName.oa.mjs';
import { documentObjectIdentifier } from '../DefinitionDirectoryASN1Module/documentObjectIdentifier.oa.mjs';
import { specification } from '../DefinitionDirectoryASN1Module/specification.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary managementDocument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementDocument OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MUST CONTAIN  {documentName | documentObjectIdentifier}
 *   MAY CONTAIN   {specification}
 *   ID            {mkmDirectoryObjectClass  4}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const managementDocument: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        documentName,
        documentObjectIdentifier,
    ] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [specification] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [4],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
