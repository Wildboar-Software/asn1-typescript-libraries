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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
import { id_mr_redirection_or_dl_expansion_match } from '../MSObjectIdentifiers/id-mr-redirection-or-dl-expansion-match.va.mjs';
/**
 * @summary redirectionOrDLExpansionMatch
 * @description
 *
 * Information object `redirectionOrDLExpansionMatch`. The
 * Redirection-or-DL-expansion-match rule compares for equality a presented value with
 * the OR-address-and- optional-directory-name component of attribute-values of type
 * Redirection-history or DL-expansion-history. redirectionOrDLExpansionMatch
 *  The rule returns true if, and only if, the
 * presented value and at… See ITU-T X.413 (1999), §12.4.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * redirectionOrDLExpansionMatch MATCHING-RULE ::= {
 *   SYNTAX  ORAddressAndOptionalDirectoryName
 *   ID      id-mr-redirection-or-dl-expansion-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<ORAddressAndOptionalDirectoryName>}
 * @implements {MATCHING_RULE<ORAddressAndOptionalDirectoryName>}
 */
export const redirectionOrDLExpansionMatch: MATCHING_RULE<ORAddressAndOptionalDirectoryName> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_ORAddressAndOptionalDirectoryName,
    },
    encoderFor: {
        '&AssertionType': _encode_ORAddressAndOptionalDirectoryName,
    },
    '&id': id_mr_redirection_or_dl_expansion_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
