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
    AccessService,
    _decode_AccessService,
    _encode_AccessService,
} from '../Pbact-access/AccessService.ta.mjs';
import { id_at_accessService } from '../Pbact-access/id-at-accessService.va.mjs';

/**
 * @summary accessService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessService ATTRIBUTE ::= {
 *   WITH SYNTAX  AccessService
 *   ID           id-at-accessService }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<AccessService>}
 * @implements {ATTRIBUTE<AccessService>}
 */
export const accessService: ATTRIBUTE<AccessService> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AccessService,
    },
    encoderFor: {
        '&Type': _encode_AccessService,
    },
    '&id': id_at_accessService /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
