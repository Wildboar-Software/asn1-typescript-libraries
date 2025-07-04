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
    GlobalDomainIdentifier,
    _decode_GlobalDomainIdentifier,
    _encode_GlobalDomainIdentifier,
} from '../MTSAbstractService/GlobalDomainIdentifier.ta.mjs';
import { id_at_global_domain_identifier } from '../MHSRoutingObjectIdentifiers/id-at-global-domain-identifier.va.mjs';
/**
 * @summary globalDomainIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * globalDomainIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX   GlobalDomainIdentifier
 *   SINGLE VALUE  TRUE
 *   ID            id-at-global-domain-identifier
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<GlobalDomainIdentifier>}
 * @implements {ATTRIBUTE<GlobalDomainIdentifier>}
 */
export const globalDomainIdentifier: ATTRIBUTE<GlobalDomainIdentifier> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_GlobalDomainIdentifier,
    },
    encoderFor: {
        '&Type': _encode_GlobalDomainIdentifier,
    },
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_at_global_domain_identifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
