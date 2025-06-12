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
import { INTERACTIVE_MESSAGE } from '../E-health-command-response/INTERACTIVE-MESSAGE.oca.js';
export { INTERACTIVE_MESSAGE } from '../E-health-command-response/INTERACTIVE-MESSAGE.oca.js';

/* START_OF_SYMBOL_DEFINITION CR_SEQUENCE */
/**
 * @summary CR_SEQUENCE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CR-SEQUENCE ::= CLASS {
 *   &id                              OBJECT IDENTIFIER UNIQUE,
 *   &requirements                    ENUMERATED {none, with-2-way-voice,
 *                                                    with-reverse-video-and-2-way-voice,
 *                                                    with-2-way-video-and-voice},
 *   &voice-options                   OBJECT IDENTIFIER,
 *   &video-options                   OBJECT IDENTIFIER,
 *   &message-sequence-specification  UniversalString,
 *   &Interactive-Messages            INTERACTIVE-MESSAGE,
 *   &first                           INTERACTIVE-MESSAGE
 * }
 * WITH SYNTAX {
 *   INTERACTIVE-SESSION IDENTIFIED BY &id
 *   REQUIRING &requirements
 *   WITH VOICE OPTIONS &voice-options
 *   AND VIDEO OPTIONS &video-options
 *   SPECIFIED BY &message-sequence-specification
 *   USING &Interactive-Messages
 *   BEGINNING WITH &first
 * }
 * ```
 *
 * @interface
 */
export interface CR_SEQUENCE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'CR-SEQUENCE';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof CR_SEQUENCE]: $.ASN1Decoder<CR_SEQUENCE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof CR_SEQUENCE]: $.ASN1Encoder<CR_SEQUENCE[_K]>;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &requirements
     */
    readonly '&requirements': number;
    /**
     * @summary &voice-options
     */
    readonly '&voice-options'?: OBJECT_IDENTIFIER;
    /**
     * @summary &video-options
     */
    readonly '&video-options'?: OBJECT_IDENTIFIER;
    /**
     * @summary &message-sequence-specification
     */
    readonly '&message-sequence-specification'?: UniversalString;
    /**
     * @summary &Interactive-Messages
     */
    readonly '&Interactive-Messages'?: INTERACTIVE_MESSAGE[];
    /**
     * @summary &first
     */
    readonly '&first'?: INTERACTIVE_MESSAGE;
}
/* END_OF_SYMBOL_DEFINITION CR_SEQUENCE */

/* eslint-enable */
