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
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/PresentationAddress.ta.mjs';
import { id_at_calling_psaps } from '../MHSRoutingObjectIdentifiers/id-at-calling-psaps.va.mjs';
/**
 * @summary callingPSAPs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * callingPSAPs ATTRIBUTE ::= {
 *   WITH SYNTAX   PresentationAddress
 *   SINGLE VALUE  FALSE
 *   ID            id-at-calling-psaps
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PresentationAddress>}
 * @implements {ATTRIBUTE<PresentationAddress>}
 */
export const callingPSAPs: ATTRIBUTE<PresentationAddress> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PresentationAddress,
    },
    encoderFor: {
        '&Type': _encode_PresentationAddress,
    },
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_at_calling_psaps /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
