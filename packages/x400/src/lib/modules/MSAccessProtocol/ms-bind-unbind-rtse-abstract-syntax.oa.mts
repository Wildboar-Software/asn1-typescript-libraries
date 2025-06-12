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
import {
    RTSE_apdus,
    _decode_RTSE_apdus,
    _encode_RTSE_apdus,
} from '../MSAccessProtocol/RTSE-apdus.ta.mjs';
export {
    RTSE_apdus,
    _decode_RTSE_apdus,
    _encode_RTSE_apdus,
} from '../MSAccessProtocol/RTSE-apdus.ta.mjs';
import { id_as_ms_rtse } from '../MHSProtocolObjectIdentifiers/id-as-ms-rtse.va.mjs';
export { id_as_ms_rtse } from '../MHSProtocolObjectIdentifiers/id-as-ms-rtse.va.mjs';

/* START_OF_SYMBOL_DEFINITION ms_bind_unbind_rtse_abstract_syntax */
/**
 * @summary ms_bind_unbind_rtse_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-bind-unbind-rtse-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   RTSE-apdus -- With MS-bind and MS-unbind --
 *   IDENTIFIED BY  id-as-ms-rtse
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<RTSE_apdus>}
 * @implements {ABSTRACT_SYNTAX<RTSE_apdus>}
 */
export const ms_bind_unbind_rtse_abstract_syntax: ABSTRACT_SYNTAX<RTSE_apdus> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_RTSE_apdus,
    },
    encoderFor: {
        '&Type': _encode_RTSE_apdus,
    },
    '&id': id_as_ms_rtse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};
/* END_OF_SYMBOL_DEFINITION ms_bind_unbind_rtse_abstract_syntax */

/* eslint-enable */
