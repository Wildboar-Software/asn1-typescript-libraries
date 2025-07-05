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
import { type MATCHING_RULE } from '@wildboar/x500/InformationFramework';
import {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from '../MTSAbstractService/ORAddress.ta.mjs';
import { id_mr_oraddress_substring_elements_match } from '../MSObjectIdentifiers/id-mr-oraddress-substring-elements-match.va.mjs';
/**
 * @summary oRAddressSubstringElementsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oRAddressSubstringElementsMatch MATCHING-RULE ::= {
 *   SYNTAX  ORAddress
 *   ID      id-mr-oraddress-substring-elements-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<ORAddress>}
 * @implements {MATCHING_RULE<ORAddress>}
 */
export const oRAddressSubstringElementsMatch: MATCHING_RULE<ORAddress> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_ORAddress,
    },
    encoderFor: {
        '&AssertionType': _encode_ORAddress,
    },
    '&id': id_mr_oraddress_substring_elements_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
