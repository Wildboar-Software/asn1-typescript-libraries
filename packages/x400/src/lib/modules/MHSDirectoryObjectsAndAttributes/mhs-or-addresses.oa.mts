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
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from '../MTSAbstractService/ORAddress.ta.mjs';
import { oRAddressMatch } from '../MSMatchingRules/oRAddressMatch.oa.mjs';
import { id_at_mhs_or_addresses } from '../MHSObjectIdentifiers/id-at-mhs-or-addresses.va.mjs';
/**
 * @summary mhs_or_addresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-or-addresses ATTRIBUTE ::= {
 *   WITH SYNTAX             ORAddress
 *   EQUALITY MATCHING RULE  oRAddressMatch
 *   -- EXTENSIBLE MATCHING RULE    { oRAddressElementsMatch | oRNameSingleElementMatch |
 *   --                oRAddressSubstringElementsMatch }
 *   ID                      id-at-mhs-or-addresses
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ORAddress>}
 * @implements {ATTRIBUTE<ORAddress>}
 */
export const mhs_or_addresses: ATTRIBUTE<ORAddress> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ORAddress,
    },
    encoderFor: {
        '&Type': _encode_ORAddress,
    },
    '&equality-match': oRAddressMatch /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_or_addresses /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
