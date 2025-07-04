/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { type ATTRIBUTE } from '@wildboar/x500/InformationFramework';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/InformationFramework';
import { id_at_mhs_next_level_complete } from '../MHSRoutingObjectIdentifiers/id-at-mhs-next-level-complete.va.mjs';
/**
 * @summary nextLevelComplete
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nextLevelComplete ATTRIBUTE ::= {
 *   WITH SYNTAX   NULL
 *   SINGLE VALUE  TRUE
 *   ID            id-at-mhs-next-level-complete
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<NULL>}
 * @implements {ATTRIBUTE<NULL>}
 */
export const nextLevelComplete: ATTRIBUTE<NULL> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': $._decodeNull,
    },
    encoderFor: {
        '&Type': $._encodeNull,
    },
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_next_level_complete /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
