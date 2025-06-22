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
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs';
import {
    FunctionalUnitPackage,
    _decode_FunctionalUnitPackage,
    _encode_FunctionalUnitPackage,
} from '../SMASE-A-ASSOCIATE-Information/FunctionalUnitPackage.ta.mjs';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary supportedSmaseFunctionalUnits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedSmaseFunctionalUnits ATTRIBUTE ::= {
 *   WITH SYNTAX  FunctionalUnitPackage
 *   ID           {mkmDirectoryAttributeType  5}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<FunctionalUnitPackage>}
 * @implements {ATTRIBUTE<FunctionalUnitPackage>}
 */
export const supportedSmaseFunctionalUnits: ATTRIBUTE<FunctionalUnitPackage> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_FunctionalUnitPackage,
    },
    encoderFor: {
        '&Type': _encode_FunctionalUnitPackage,
    },
    '&id': _OID.fromParts(
        [5],
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
