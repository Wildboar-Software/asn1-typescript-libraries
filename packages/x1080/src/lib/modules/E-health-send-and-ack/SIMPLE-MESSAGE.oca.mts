/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    UTF8String,
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
import { type ERROR } from '../E-health-send-and-ack/ERROR.oca.mjs';

/**
 * @summary SIMPLE_MESSAGE
 * @description
 *
 * 2011 class for a simple (non-interactive) message: unique
 * `&id`, `&Type`, `&Errors`, and `&registration-info`. Predates
 * the 2018 `INTERACTIVE-OPERATION` redesign. ITU-T Rec. X.1080.1
 * (10/2011) module E-health-send-and-ack; (05/2018)
 * [§9](https://www.itu.int/rec/T-REC-X.1080.1-201805-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SIMPLE-MESSAGE ::= CLASS {
 *   &id                 OBJECT IDENTIFIER UNIQUE,
 *   &Type               ,
 *   &Errors             ERROR,
 *   &registration-info  CHOICE {implicit  UTF8String,
 *                                   -- shall be reference to a web-site
 *                                   explicit  UniversalString,
 *                                   ...
 *   }
 * }
 * WITH SYNTAX {
 *   MESSAGE IDENTIFIED BY &id
 *   USING TYPE &Type
 *   POSSIBLE ERRORS &Errors
 *   REGISTERED AS &registration-info
 * }
 * ```
 *
 * @interface
 */
export interface SIMPLE_MESSAGE<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'SIMPLE-MESSAGE';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof SIMPLE_MESSAGE<Type>]: $.ASN1Decoder<
                SIMPLE_MESSAGE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof SIMPLE_MESSAGE<Type>]: $.ASN1Encoder<
                SIMPLE_MESSAGE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     * @description
     *
     * Unique identifier of the simple message. ITU-T Rec.
     * X.1080.1 (10/2011) module E-health-send-and-ack.
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &Type
     * @description
     *
     * Abstract syntax of the message content. ITU-T Rec.
     * X.1080.1 (10/2011) module E-health-send-and-ack.
     */
    readonly '&Type': Type;
    /**
     * @summary &Errors
     * @description
     *
     * `ERROR` objects that may be reported for this message.
     * ITU-T Rec. X.1080.1 (10/2011) module E-health-send-and-ack.
     */
    readonly '&Errors'?: ERROR[];
    /**
     * @summary &registration-info
     * @description
     *
     * `implicit` UTF8String shall be a website reference;
     * `explicit` is a UniversalString. ITU-T Rec. X.1080.1
     * (10/2011) module E-health-send-and-ack.
     */
    readonly '&registration-info'?:
        | { implicit: UTF8String }
        | { explicit: UniversalString }
        | _Element;
}

/* eslint-enable */
