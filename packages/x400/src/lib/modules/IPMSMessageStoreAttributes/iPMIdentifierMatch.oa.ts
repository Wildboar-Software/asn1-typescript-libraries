/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js';
import { SYNTAX_NAME } from '@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca.js';
export { SYNTAX_NAME } from '@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca.js';
import {
    IPMIdentifier,
    _decode_IPMIdentifier,
    _encode_IPMIdentifier,
} from '../IPMSInformationObjects/IPMIdentifier.ta.js';
export {
    IPMIdentifier,
    _decode_IPMIdentifier,
    _encode_IPMIdentifier,
} from '../IPMSInformationObjects/IPMIdentifier.ta.js';
import { id_mr_ipm_identifier } from '../IPMSObjectIdentifiers/id-mr-ipm-identifier.va.js';
export { id_mr_ipm_identifier } from '../IPMSObjectIdentifiers/id-mr-ipm-identifier.va.js';

/* START_OF_SYMBOL_DEFINITION iPMIdentifierMatch */
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
/* END_OF_SYMBOL_DEFINITION iPMIdentifierMatch */

/* eslint-enable */
