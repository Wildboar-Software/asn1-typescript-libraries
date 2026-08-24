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
 * @summary IPMS_EXTENSION
 * @description
 *
 * Information object class `IPMS_EXTENSION`. An IPMS extension (or extension) is an
 * information item which enables extensions to be defined. IPMSExtension
 * {IPMS-EXTENSION:ChosenFrom} ::= SEQUENCE { type IPMS-EXTENSION.&id({ChosenFrom}),
 * value IPMS-EXTENSION.&Type({ChosenFrom} {@type}) DEFAULT NULL:NULL } Each extension
 * has the following components: a) Type (M): Identifies the semantics and restricts the
 * abstract syntax of the Value component. See ITU-T X.420 (1999), §7.1.4. ASN.1 DEFAULT
 * `NULL`: that value is assumed when the component is absent (do not encode the default
 * unless required).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMS-EXTENSION ::= CLASS {
 *   &id    OBJECT IDENTIFIER UNIQUE,
 *   &Type  DEFAULT NULL
 * }WITH SYNTAX {[VALUE &Type,]
 *               IDENTIFIED BY &id
 * }
 * ```
 *
 * @interface
 */
export interface IPMS_EXTENSION<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'IPMS-EXTENSION';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof IPMS_EXTENSION<Type>]: $.ASN1Decoder<
                IPMS_EXTENSION<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof IPMS_EXTENSION<Type>]: $.ASN1Encoder<
                IPMS_EXTENSION<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &Type
     */
    readonly '&Type': Type;
}

/* eslint-enable */
