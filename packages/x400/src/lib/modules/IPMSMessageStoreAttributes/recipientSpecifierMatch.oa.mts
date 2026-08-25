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
import { id_mr_recipient_specifier } from '../IPMSObjectIdentifiers/id-mr-recipient-specifier.va.mjs';
/**
 * @summary recipientSpecifierMatch
 * @description
 *
 * Information object `recipientSpecifierMatch`. The Recipient-specifier-match compares
 * for equality a presented value with the OR-descriptor components of attribute-values
 * of type recipient specifier.  The rule is identical to the
 * OR-descriptor-match rule as applied to the recipient component of the presented and
 * stored values of recipient specifier. See ITU-T X.420 (1999), §19.7.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * recipientSpecifierMatch MATCHING-RULE ::= {
 *   SYNTAX  RecipientSpecifier
 *   ID      id-mr-recipient-specifier
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<RecipientSpecifier>}
 * @implements {MATCHING_RULE<RecipientSpecifier>}
 */
export const recipientSpecifierMatch: MATCHING_RULE<RecipientSpecifier> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_RecipientSpecifier,
    },
    encoderFor: {
        '&AssertionType': _encode_RecipientSpecifier,
    },
    '&id': id_mr_recipient_specifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
