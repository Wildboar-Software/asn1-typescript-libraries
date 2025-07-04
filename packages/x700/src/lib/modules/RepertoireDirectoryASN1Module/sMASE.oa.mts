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
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.mjs';
import {
    _enum_for_ObjectClassKind,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs';
import { supportedSmaseFunctionalUnits } from '../RepertoireDirectoryASN1Module/supportedSmaseFunctionalUnits.oa.mjs';
import { mitMoList } from '../RepertoireDirectoryASN1Module/mitMoList.oa.mjs';
import { supportsMKMglobalNames } from '../RepertoireDirectoryASN1Module/supportsMKMglobalNames.oa.mjs';
import { mkmDirectoryObjectClass } from '../MKMD/mkmDirectoryObjectClass.va.mjs';
/**
 * @summary sMASE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sMASE OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MUST CONTAIN  {supportedSmaseFunctionalUnits}
 *   MAY CONTAIN   {mitMoList | supportsMKMglobalNames}
 *   ID            {mkmDirectoryObjectClass  2}
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const sMASE: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        supportedSmaseFunctionalUnits,
    ] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        mitMoList,
        supportsMKMglobalNames,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [2],
        mkmDirectoryObjectClass
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
