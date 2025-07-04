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
    RoutingMTAName,
    _decode_RoutingMTAName,
    _encode_RoutingMTAName,
} from '../MHSRoutingDirectoryObjects/RoutingMTAName.ta.mjs';
import { id_at_member_mta } from '../MHSRoutingObjectIdentifiers/id-at-member-mta.va.mjs';
/**
 * @summary memberMTA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * memberMTA ATTRIBUTE ::= {
 *   WITH SYNTAX   RoutingMTAName
 *   SINGLE VALUE  FALSE
 *   ID            id-at-member-mta
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<RoutingMTAName>}
 * @implements {ATTRIBUTE<RoutingMTAName>}
 */
export const memberMTA: ATTRIBUTE<RoutingMTAName> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RoutingMTAName,
    },
    encoderFor: {
        '&Type': _encode_RoutingMTAName,
    },
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_at_member_mta /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
