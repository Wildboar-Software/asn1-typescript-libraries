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
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.mjs';
import {
    _enum_for_ObjectClassKind,
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs';
import { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa.mjs';
import { routingAdvice } from '../MHSRoutingORAddressSubtree/routingAdvice.oa.mjs';
import { expressionMatches } from '../MHSRoutingORAddressSubtree/expressionMatches.oa.mjs';
import { nextLevelComplete } from '../MHSRoutingORAddressSubtree/nextLevelComplete.oa.mjs';
import { recipientMDAssignedAlternateRecipient } from '../MHSRoutingORAddressSubtree/recipientMDAssignedAlternateRecipient.oa.mjs';
import { id_oc_mhs_or_address_element } from '../MHSRoutingObjectIdentifiers/id-oc-mhs-or-address-element.va.mjs';
/* START_OF_SYMBOL_DEFINITION oRAddressElement */
/**
 * @summary oRAddressElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oRAddressElement OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         abstract
 *   MAY CONTAIN
 *     {routingAdvice | expressionMatches | nextLevelComplete |
 *       recipientMDAssignedAlternateRecipient}
 *   ID           id-oc-mhs-or-address-element
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oRAddressElement: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [top] /* OBJECT_FIELD_SETTING */,
    '&kind': abstract /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        routingAdvice,
        expressionMatches,
        nextLevelComplete,
        recipientMDAssignedAlternateRecipient,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_mhs_or_address_element /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oRAddressElement */

/* eslint-enable */
