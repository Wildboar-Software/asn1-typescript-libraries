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
import { type ATTRIBUTE } from '@wildboar/x500/InformationFramework';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/InformationFramework';
import {
    MitMo,
    _decode_MitMo,
    _encode_MitMo,
} from '../RepertoireDirectoryASN1Module/MitMo.ta.mjs';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary mitMoList
 * @description
 *
 * Management information tree managed object list: classes (and, for
 * long-lived objects, instances) made visible by a systems management
 * application entity. For objects that exist only briefly, only the
 * class is expected to be registered. Optional on `sMASE`. ITU-T Rec.
 * X.750 (10/96)
 * [§8.6.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * B.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mitMoList ATTRIBUTE ::= {
 *   WITH SYNTAX  MitMo
 *   ID           {mkmDirectoryAttributeType  1}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<MitMo>}
 * @implements {ATTRIBUTE<MitMo>}
 */
export const mitMoList: ATTRIBUTE<MitMo> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MitMo,
    },
    encoderFor: {
        '&Type': _encode_MitMo,
    },
    '&id': _OID.fromParts(
        [1],
        mkmDirectoryAttributeType
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage':
        userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
