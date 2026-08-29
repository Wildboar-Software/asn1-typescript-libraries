/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    UniversalString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { type INTERACTIVE_MESSAGE } from '../E-health-command-response/INTERACTIVE-MESSAGE.oca.mjs';

/**
 * @summary CR_SEQUENCE
 * @description
 *
 * 2011 class for an interactive session: unique `&id`,
 * voice/video `&requirements`, voice/video option OIDs,
 * UniversalString specification, `INTERACTIVE-MESSAGE` set, and
 * first message. Predates the 2018 `INTERACTIVE-OPERATION`
 * redesign. ITU-T Rec. X.1080.1 (10/2011) module
 * E-health-command-response; (05/2018)
 * [§9](https://www.itu.int/rec/T-REC-X.1080.1-201805-I).
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
     * @description
     *
     * Unique identifier of the interactive session. ITU-T Rec.
     * X.1080.1 (10/2011) module E-health-command-response.
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &requirements
     * @description
     *
     * `none`, `with-2-way-voice`,
     * `with-reverse-video-and-2-way-voice`, or
     * `with-2-way-video-and-voice`. ITU-T Rec. X.1080.1 (10/2011)
     * module E-health-command-response.
     */
    readonly '&requirements': number;
    /**
     * @summary &voice-options
     * @description
     *
     * OID of the voice options. ITU-T Rec. X.1080.1 (10/2011)
     * module E-health-command-response.
     */
    readonly '&voice-options'?: OBJECT_IDENTIFIER;
    /**
     * @summary &video-options
     * @description
     *
     * OID of the video options. ITU-T Rec. X.1080.1 (10/2011)
     * module E-health-command-response.
     */
    readonly '&video-options'?: OBJECT_IDENTIFIER;
    /**
     * @summary &message-sequence-specification
     * @description
     *
     * UniversalString specifying the message sequence. ITU-T Rec.
     * X.1080.1 (10/2011) module E-health-command-response.
     */
    readonly '&message-sequence-specification'?: UniversalString;
    /**
     * @summary &Interactive-Messages
     * @description
     *
     * `INTERACTIVE-MESSAGE` objects used in this session.
     * ITU-T Rec. X.1080.1 (10/2011) module
     * E-health-command-response.
     */
    readonly '&Interactive-Messages'?: INTERACTIVE_MESSAGE[];
    /**
     * @summary &first
     * @description
     *
     * First `INTERACTIVE-MESSAGE` of the sequence. ITU-T Rec.
     * X.1080.1 (10/2011) module E-health-command-response.
     */
    readonly '&first'?: INTERACTIVE_MESSAGE;
}

/* eslint-enable */
