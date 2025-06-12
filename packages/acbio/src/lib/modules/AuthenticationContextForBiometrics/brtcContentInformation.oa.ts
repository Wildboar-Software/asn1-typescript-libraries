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
    BRTCContentInformation,
    _decode_BRTCContentInformation,
    _encode_BRTCContentInformation,
} from '../AuthenticationContextForBiometrics/BRTCContentInformation.ta.js';
export {
    BRTCContentInformation,
    _decode_BRTCContentInformation,
    _encode_BRTCContentInformation,
} from '../AuthenticationContextForBiometrics/BRTCContentInformation.ta.js';
import { id_brtcContentInformation } from '../AuthenticationContextForBiometrics/id-brtcContentInformation.va.js';
export { id_brtcContentInformation } from '../AuthenticationContextForBiometrics/id-brtcContentInformation.va.js';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.js";

/* START_OF_SYMBOL_DEFINITION brtcContentInformation */
/**
 * @summary brtcContentInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brtcContentInformation CONTENT-TYPE ::= {
 *     TYPE BRTCContentInformation
 *     IDENTIFIED BY id-brtcContentInformation }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<BRTCContentInformation>}
 * @implements {CONTENT_TYPE<BRTCContentInformation>}
 */
export const brtcContentInformation: CONTENT_TYPE<BRTCContentInformation> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_BRTCContentInformation,
    },
    encoderFor: {
        '&Type': _encode_BRTCContentInformation,
    },
    '&id': id_brtcContentInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION brtcContentInformation */

/* eslint-enable */
