/* eslint-disable */
import {
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
 * @summary ADDITIONAL
 * @description
 *
 * The specification of the contents of this argument is by bilateral agreement between
 * MDs. 12.2.1.3.2 Results The Report-transfer abstract-operation does not return a result.
 * See ITU-T X.411 (1999), §12.2.1.3.1.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ADDITIONAL ::= CLASS {&Type
 * }
 * ```
 *
 * @interface
 */
export interface ADDITIONAL<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'ADDITIONAL';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ADDITIONAL<Type>]: $.ASN1Decoder<ADDITIONAL<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ADDITIONAL<Type>]: $.ASN1Encoder<ADDITIONAL<Type>[_K]>;
        }
    >;
    /**
     * @summary &Type
     */
    readonly '&Type': Type;
}

/* eslint-enable */
