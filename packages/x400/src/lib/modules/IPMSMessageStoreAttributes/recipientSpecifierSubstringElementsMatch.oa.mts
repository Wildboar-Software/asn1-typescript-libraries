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
    RecipientSpecifier,
    _decode_RecipientSpecifier,
    _encode_RecipientSpecifier,
} from '../IPMSInformationObjects/RecipientSpecifier.ta.mjs';
import { id_mr_recipient_specifier_substring_elements } from '../IPMSObjectIdentifiers/id-mr-recipient-specifier-substring-elements.va.mjs';
/**
 * @summary recipientSpecifierSubstringElementsMatch
 * @description
 *
 * Information object `recipientSpecifierSubstringElementsMatch`. The
 * Recipient-specifier-substring-elements-match determines whether a presented value is a
 * subset of the elements present in some value of an attribute of type recipient
 * specifier, where each presented string value is a substring of the corresponding
 * stored value. recipientSpecifierSubstringElementsMatch MATCHING-RULE ::= { SYNTAX
 * RecipientSpecifier ID id-mr-recipient-specifier-substring-elements } The rule is… See
 * ITU-T X.420 (1999), §19.7.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * recipientSpecifierSubstringElementsMatch MATCHING-RULE ::= {
 *   SYNTAX  RecipientSpecifier
 *   ID      id-mr-recipient-specifier-substring-elements
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<RecipientSpecifier>}
 * @implements {MATCHING_RULE<RecipientSpecifier>}
 */
export const recipientSpecifierSubstringElementsMatch: MATCHING_RULE<RecipientSpecifier> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_RecipientSpecifier,
    },
    encoderFor: {
        '&AssertionType': _encode_RecipientSpecifier,
    },
    '&id': id_mr_recipient_specifier_substring_elements /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
