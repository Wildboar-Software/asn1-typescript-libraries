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
    AuthenticatedDataACBio,
    _decode_AuthenticatedDataACBio,
    _encode_AuthenticatedDataACBio,
} from '../AuthenticationContextForBiometrics/AuthenticatedDataACBio.ta.mjs';
export {
    AuthenticatedDataACBio,
    _decode_AuthenticatedDataACBio,
    _encode_AuthenticatedDataACBio,
} from '../AuthenticationContextForBiometrics/AuthenticatedDataACBio.ta.mjs';
import { id_authenticatedDataACBio } from '../AuthenticationContextForBiometrics/id-authenticatedDataACBio.va.mjs';
export { id_authenticatedDataACBio } from '../AuthenticationContextForBiometrics/id-authenticatedDataACBio.va.mjs';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";

/* START_OF_SYMBOL_DEFINITION authenticatedDataACBio */
/**
 * @summary authenticatedDataACBio
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authenticatedDataACBio CONTENT-TYPE ::= {
 *     TYPE AuthenticatedDataACBio
 *     IDENTIFIED BY id-authenticatedDataACBio }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<AuthenticatedDataACBio>}
 * @implements {CONTENT_TYPE<AuthenticatedDataACBio>}
 */
export const authenticatedDataACBio: CONTENT_TYPE<AuthenticatedDataACBio> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_AuthenticatedDataACBio,
    },
    encoderFor: {
        '&Type': _encode_AuthenticatedDataACBio,
    },
    '&id': id_authenticatedDataACBio /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION authenticatedDataACBio */

/* eslint-enable */
