/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ENUMERATED,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary INTERACTIVE_MESSAGE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * INTERACTIVE-MESSAGE ::= CLASS {
 *   &id                 INTEGER(0..MAX) UNIQUE,
 *   &direction          ENUMERATED {command, response},
 *   &Type               ,
 *   &expected-response  INTERACTIVE-MESSAGE OPTIONAL,
 *   -- only for a command
 *   &next               SEQUENCE OF INTERACTIVE-MESSAGE.&id OPTIONAL
 * }
 * WITH SYNTAX {
 *   STEP &id
 *   DIRECTION &direction
 *   USING &Type
 *   [RESPONSE &expected-response]
 *   [FOLLOWED BY &next]
 * }
 * ```
 *
 * @interface
 */
export interface INTERACTIVE_MESSAGE<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'INTERACTIVE-MESSAGE';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof INTERACTIVE_MESSAGE<Type>]: $.ASN1Decoder<
                INTERACTIVE_MESSAGE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof INTERACTIVE_MESSAGE<Type>]: $.ASN1Encoder<
                INTERACTIVE_MESSAGE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: INTEGER;

    /**
     * @summary &direction
     */
    readonly '&direction'?: ENUMERATED;

    /**
     * @summary &Type
     */
    readonly '&Type': Type;
    /**
     * @summary &expected-response
     */
    readonly '&expected-response'?: INTERACTIVE_MESSAGE;
    /**
     * @summary &next
     */
    readonly '&next'?: INTEGER[];
}

/* eslint-enable */
