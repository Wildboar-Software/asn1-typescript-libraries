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
    ConnectionInformation,
    _decode_ConnectionInformation,
    _encode_ConnectionInformation,
} from '../MHSRoutingDirectoryObjects/ConnectionInformation.ta.mjs';
import { id_at_connection_type } from '../MHSRoutingObjectIdentifiers/id-at-connection-type.va.mjs';
/**
 * @summary connectionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * connectionType ATTRIBUTE ::= {
 *   WITH SYNTAX   ConnectionInformation
 *   SINGLE VALUE  TRUE
 *   ID            id-at-connection-type
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ConnectionInformation>}
 * @implements {ATTRIBUTE<ConnectionInformation>}
 */
export const connectionType: ATTRIBUTE<ConnectionInformation> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ConnectionInformation,
    },
    encoderFor: {
        '&Type': _encode_ConnectionInformation,
    },
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_at_connection_type /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
