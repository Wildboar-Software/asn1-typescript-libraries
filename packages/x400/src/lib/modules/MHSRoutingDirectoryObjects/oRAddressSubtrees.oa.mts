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
    ORAddressSubtreeNames,
    _decode_ORAddressSubtreeNames,
    _encode_ORAddressSubtreeNames,
} from '../MHSRoutingDirectoryObjects/ORAddressSubtreeNames.ta.mjs';
import { id_at_oraddress_subtrees } from '../MHSRoutingObjectIdentifiers/id-at-oraddress-subtrees.va.mjs';
/**
 * @summary oRAddressSubtrees
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oRAddressSubtrees ATTRIBUTE ::= {
 *   WITH SYNTAX   ORAddressSubtreeNames
 *   SINGLE VALUE  TRUE
 *   ID            id-at-oraddress-subtrees
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ORAddressSubtreeNames>}
 * @implements {ATTRIBUTE<ORAddressSubtreeNames>}
 */
export const oRAddressSubtrees: ATTRIBUTE<ORAddressSubtreeNames> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ORAddressSubtreeNames,
    },
    encoderFor: {
        '&Type': _encode_ORAddressSubtreeNames,
    },
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_at_oraddress_subtrees /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
