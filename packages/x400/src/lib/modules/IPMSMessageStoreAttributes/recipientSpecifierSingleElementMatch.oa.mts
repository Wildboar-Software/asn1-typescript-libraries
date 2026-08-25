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
    MSString,
    _decode_MSString,
    _encode_MSString,
} from '../MSMatchingRules/MSString.ta.mjs';
import { id_mr_recipient_specifier_single_element } from '../IPMSObjectIdentifiers/id-mr-recipient-specifier-single-element.va.mjs';
/**
 * @summary recipientSpecifierSingleElementMatch
 * @description
 *
 * The Recipient-specifier-single-element-match rule determines whether a presented string
 * and some element present in the recipient component of some value of an attribute of
 * type recipient specifier match for equality. See ITU-T X.420 (1999), §19.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * recipientSpecifierSingleElementMatch MATCHING-RULE ::= {
 *   SYNTAX  MSString {ub-msstring-match}
 *   ID      id-mr-recipient-specifier-single-element
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<MSString>}
 * @implements {MATCHING_RULE<MSString>}
 */
export const recipientSpecifierSingleElementMatch: MATCHING_RULE<MSString> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_MSString,
    },
    encoderFor: {
        '&AssertionType': _encode_MSString,
    },
    '&id': id_mr_recipient_specifier_single_element /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
