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
    RecipientSpecifier,
    _decode_RecipientSpecifier,
    _encode_RecipientSpecifier,
} from '../IPMSInformationObjects/RecipientSpecifier.ta.mjs';
import { id_mr_recipient_specifier } from '../IPMSObjectIdentifiers/id-mr-recipient-specifier.va.mjs';
/**
 * @summary recipientSpecifierMatch
 * @description
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
