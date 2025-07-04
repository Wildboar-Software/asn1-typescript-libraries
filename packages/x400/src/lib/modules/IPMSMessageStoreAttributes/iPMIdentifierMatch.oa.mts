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
import { MATCHING_RULE } from '@wildboar/x500/InformationFramework';
import {
    IPMIdentifier,
    _decode_IPMIdentifier,
    _encode_IPMIdentifier,
} from '../IPMSInformationObjects/IPMIdentifier.ta.mjs';
import { id_mr_ipm_identifier } from '../IPMSObjectIdentifiers/id-mr-ipm-identifier.va.mjs';
/**
 * @summary iPMIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iPMIdentifierMatch MATCHING-RULE ::= {
 *   SYNTAX  IPMIdentifier
 *   ID      id-mr-ipm-identifier
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<IPMIdentifier>}
 * @implements {MATCHING_RULE<IPMIdentifier>}
 */
export const iPMIdentifierMatch: MATCHING_RULE<IPMIdentifier> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_IPMIdentifier,
    },
    encoderFor: {
        '&AssertionType': _encode_IPMIdentifier,
    },
    '&id': id_mr_ipm_identifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
