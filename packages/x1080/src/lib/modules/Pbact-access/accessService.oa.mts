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
    AccessService,
    _decode_AccessService,
    _encode_AccessService,
} from '../Pbact-access/AccessService.ta.mjs';
import { id_at_accessService } from '../Pbact-access/id-at-accessService.va.mjs';

/**
 * @summary accessService
 * @description
 *
 * Privilege attribute carried in an AC `attributes` field or a PKC
 * `subjectDirectoryAttributes`. Multi-valued: one value per access
 * service. The holder cannot use a service that is not listed.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§7.3](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
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
