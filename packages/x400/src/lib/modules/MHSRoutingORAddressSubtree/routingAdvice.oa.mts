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
    RoutingAdvice,
    _decode_RoutingAdvice,
    _encode_RoutingAdvice,
} from '../MHSRoutingORAddressSubtree/RoutingAdvice.ta.mjs';
import { id_at_mhs_routing_advice } from '../MHSRoutingObjectIdentifiers/id-at-mhs-routing-advice.va.mjs';
/**
 * @summary routingAdvice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * routingAdvice ATTRIBUTE ::= {
 *   WITH SYNTAX   RoutingAdvice
 *   SINGLE VALUE  TRUE
 *   ID            id-at-mhs-routing-advice
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<RoutingAdvice>}
 * @implements {ATTRIBUTE<RoutingAdvice>}
 */
export const routingAdvice: ATTRIBUTE<RoutingAdvice> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RoutingAdvice,
    },
    encoderFor: {
        '&Type': _encode_RoutingAdvice,
    },
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_routing_advice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
