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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    SignedDataACBio,
    _decode_SignedDataACBio,
    _encode_SignedDataACBio,
} from '../AuthenticationContextForBiometrics/SignedDataACBio.ta';
export {
    SignedDataACBio,
    _decode_SignedDataACBio,
    _encode_SignedDataACBio,
} from '../AuthenticationContextForBiometrics/SignedDataACBio.ta';
import { id_signedDataACBio } from '../AuthenticationContextForBiometrics/id-signedDataACBio.va';
export { id_signedDataACBio } from '../AuthenticationContextForBiometrics/id-signedDataACBio.va';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca";


/* START_OF_SYMBOL_DEFINITION signedDataACBio */
/**
 * @summary signedDataACBio
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signedDataACBio CONTENT-TYPE ::= {
 *     TYPE SignedDataACBio
 *     IDENTIFIED BY id-signedDataACBio }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<SignedDataACBio>}
 * @implements {CONTENT_TYPE<SignedDataACBio>}
 */
export const signedDataACBio: CONTENT_TYPE<SignedDataACBio> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_SignedDataACBio,
    },
    encoderFor: {
        '&Type': _encode_SignedDataACBio,
    },
    '&id': id_signedDataACBio /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION signedDataACBio */

/* eslint-enable */
