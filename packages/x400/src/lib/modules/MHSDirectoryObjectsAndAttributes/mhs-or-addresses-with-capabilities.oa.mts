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
    AddressCapabilities,
    _decode_AddressCapabilities,
    _encode_AddressCapabilities,
} from '../MHSDirectoryObjectsAndAttributes/AddressCapabilities.ta.mjs';
import { addressCapabilitiesMatch } from '../MHSDirectoryObjectsAndAttributes/addressCapabilitiesMatch.oa.mjs';
import { id_at_mhs_or_addresses_with_capabilities } from '../MHSObjectIdentifiers/id-at-mhs-or-addresses-with-capabilities.va.mjs';
/**
 * @summary mhs_or_addresses_with_capabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-or-addresses-with-capabilities ATTRIBUTE ::= {
 *   WITH SYNTAX             AddressCapabilities
 *   EQUALITY MATCHING RULE  addressCapabilitiesMatch
 *   ID                      id-at-mhs-or-addresses-with-capabilities
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<AddressCapabilities>}
 * @implements {ATTRIBUTE<AddressCapabilities>}
 */
export const mhs_or_addresses_with_capabilities: ATTRIBUTE<AddressCapabilities> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AddressCapabilities,
    },
    encoderFor: {
        '&Type': _encode_AddressCapabilities,
    },
    '&equality-match': addressCapabilitiesMatch /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_or_addresses_with_capabilities /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
