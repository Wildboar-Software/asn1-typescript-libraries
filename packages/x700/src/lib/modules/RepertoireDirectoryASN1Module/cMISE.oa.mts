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
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.mjs';
import {
    _enum_for_ObjectClassKind,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs';
import { supportedCmipVersion } from '../RepertoireDirectoryASN1Module/supportedCmipVersion.oa.mjs';
import { supportedCmipProfiles } from '../RepertoireDirectoryASN1Module/supportedCmipProfiles.oa.mjs';
import { supportedCmisFunctionalUnits } from '../RepertoireDirectoryASN1Module/supportedCmisFunctionalUnits.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary cMISE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cMISE OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MUST CONTAIN
 *     {supportedCmipVersion | supportedCmipProfiles |
 *       supportedCmisFunctionalUnits}
 *   ID            {mkmDirectoryObjectClass  1}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const cMISE: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        supportedCmipVersion,
        supportedCmipProfiles,
        supportedCmisFunctionalUnits,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': new _OID(
        [1],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
