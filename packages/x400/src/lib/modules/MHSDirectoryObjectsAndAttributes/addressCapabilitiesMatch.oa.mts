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
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
import {
    AddressCapabilities,
    _decode_AddressCapabilities,
    _encode_AddressCapabilities,
} from '../MHSDirectoryObjectsAndAttributes/AddressCapabilities.ta.mjs';
import { id_mr_address_capabilities_match } from '../MHSObjectIdentifiers/id-mr-address-capabilities-match.va.mjs';
/* START_OF_SYMBOL_DEFINITION addressCapabilitiesMatch */
/**
 * @summary addressCapabilitiesMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * addressCapabilitiesMatch MATCHING-RULE ::= {
 *   SYNTAX  AddressCapabilities
 *   ID      id-mr-address-capabilities-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<AddressCapabilities>}
 * @implements {MATCHING_RULE<AddressCapabilities>}
 */
export const addressCapabilitiesMatch: MATCHING_RULE<AddressCapabilities> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_AddressCapabilities,
    },
    encoderFor: {
        '&AssertionType': _encode_AddressCapabilities,
    },
    '&id': id_mr_address_capabilities_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION addressCapabilitiesMatch */

/* eslint-enable */
