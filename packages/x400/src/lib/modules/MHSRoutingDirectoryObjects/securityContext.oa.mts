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
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta.mjs';
import { id_at_security_context } from '../MHSRoutingObjectIdentifiers/id-at-security-context.va.mjs';
/**
 * @summary securityContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * securityContext ATTRIBUTE ::= {
 *   WITH SYNTAX   SecurityContext
 *   SINGLE VALUE  TRUE
 *   ID            id-at-security-context
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SecurityContext>}
 * @implements {ATTRIBUTE<SecurityContext>}
 */
export const securityContext: ATTRIBUTE<SecurityContext> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SecurityContext,
    },
    encoderFor: {
        '&Type': _encode_SecurityContext,
    },
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_at_security_context /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
