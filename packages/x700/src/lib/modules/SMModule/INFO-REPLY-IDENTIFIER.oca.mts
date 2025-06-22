/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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

/**
 * @summary INFO_REPLY_IDENTIFIER
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * INFO-REPLY-IDENTIFIER ::= CLASS {
 *   &Info          OPTIONAL,
 *   &Reply         OPTIONAL,
 *   &registeredAs  OBJECT IDENTIFIER UNIQUE
 * }WITH SYNTAX {INFO &Info
 *               REPLY &Reply
 *               IDENTIFIED BY &registeredAs
 * }
 * ```
 *
 * @interface
 */
export interface INFO_REPLY_IDENTIFIER<
    Info = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Reply = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'INFO-REPLY-IDENTIFIER';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof INFO_REPLY_IDENTIFIER<Info, Reply>]: $.ASN1Decoder<
                INFO_REPLY_IDENTIFIER<Info, Reply>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof INFO_REPLY_IDENTIFIER<Info, Reply>]: $.ASN1Encoder<
                INFO_REPLY_IDENTIFIER<Info, Reply>[_K]
            >;
        }
    >;
    /**
     * @summary &Info
     */
    readonly '&Info': Info;
    /**
     * @summary &Reply
     */
    readonly '&Reply': Reply;
    /**
     * @summary &registeredAs
     */
    readonly '&registeredAs'?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
