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
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta.js';
export {
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta.js';
import { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.js';
export { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.js';

/* START_OF_SYMBOL_DEFINITION AUTO_ACTION */
/**
 * @summary AUTO_ACTION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AUTO-ACTION ::= CLASS {
 *   &id                     AutoActionType UNIQUE,
 *   &RegistrationParameter  OPTIONAL,
 *   &Errors                 AUTO-ACTION-ERROR OPTIONAL
 * }
 * WITH SYNTAX {
 *   [REGISTRATION PARAMETER IS &RegistrationParameter]
 *   [ERRORS &Errors]
 *   IDENTIFIED BY &id
 * }
 * ```
 *
 * @interface
 */
export interface AUTO_ACTION<
    RegistrationParameter = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'AUTO-ACTION';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof AUTO_ACTION<RegistrationParameter>]: $.ASN1Decoder<
                AUTO_ACTION<RegistrationParameter>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof AUTO_ACTION<RegistrationParameter>]: $.ASN1Encoder<
                AUTO_ACTION<RegistrationParameter>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: AutoActionType;
    /**
     * @summary &RegistrationParameter
     */
    readonly '&RegistrationParameter': RegistrationParameter;
    /**
     * @summary &Errors
     */
    readonly '&Errors'?: AUTO_ACTION_ERROR[];
}
/* END_OF_SYMBOL_DEFINITION AUTO_ACTION */

/* eslint-enable */
