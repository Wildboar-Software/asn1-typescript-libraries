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
    RedirectionReason,
    _enum_for_RedirectionReason,
    _decode_RedirectionReason,
    _encode_RedirectionReason,
} from '../MTSAbstractService/RedirectionReason.ta.mjs';
import { id_mr_redirection_reason_match } from '../MSObjectIdentifiers/id-mr-redirection-reason-match.va.mjs';
/* START_OF_SYMBOL_DEFINITION redirectionReasonMatch */
/**
 * @summary redirectionReasonMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * redirectionReasonMatch MATCHING-RULE ::= {
 *   SYNTAX  RedirectionReason
 *   ID      id-mr-redirection-reason-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<RedirectionReason>}
 * @implements {MATCHING_RULE<RedirectionReason>}
 */
export const redirectionReasonMatch: MATCHING_RULE<RedirectionReason> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_RedirectionReason,
    },
    encoderFor: {
        '&AssertionType': _encode_RedirectionReason,
    },
    '&id': id_mr_redirection_reason_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION redirectionReasonMatch */

/* eslint-enable */
