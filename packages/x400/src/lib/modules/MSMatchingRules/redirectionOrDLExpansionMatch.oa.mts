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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
import { id_mr_redirection_or_dl_expansion_match } from '../MSObjectIdentifiers/id-mr-redirection-or-dl-expansion-match.va.mjs';
/* START_OF_SYMBOL_DEFINITION redirectionOrDLExpansionMatch */
/**
 * @summary redirectionOrDLExpansionMatch
 * @description
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
/* END_OF_SYMBOL_DEFINITION redirectionOrDLExpansionMatch */

/* eslint-enable */
