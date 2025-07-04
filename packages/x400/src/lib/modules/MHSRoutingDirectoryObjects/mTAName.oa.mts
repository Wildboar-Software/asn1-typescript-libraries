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
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs';
import {
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta.mjs';
import { id_at_mta_name } from '../MHSRoutingObjectIdentifiers/id-at-mta-name.va.mjs';
/**
 * @summary mTAName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mTAName ATTRIBUTE ::= {
 *   WITH SYNTAX   MTAName
 *   SINGLE VALUE  TRUE
 *   ID            id-at-mta-name
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<MTAName>}
 * @implements {ATTRIBUTE<MTAName>}
 */
export const mTAName: ATTRIBUTE<MTAName> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MTAName,
    },
    encoderFor: {
        '&Type': _encode_MTAName,
    },
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mta_name /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
