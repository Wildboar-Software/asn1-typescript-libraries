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


/**
 * @summary CONDITION
 * @description
 *
 * Information object class for a named, identified condition type
 * (`&name`, `&id`, `&Type`). The `Conditions` set is extensible
 * (`{...}`). 2011 E-health-Data-Message example module. ITU-T
 * X.1080.1 (05/2018) intro / §6.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CONDITION ::= CLASS {
 *   &name  UniversalString,
 *   &id    OBJECT IDENTIFIER,
 *   &Type
 * }WITH SYNTAX {&name
 *               TYPE &Type
 *               IDENTIFIED BY &id
 * }
 * ```
 *
 * @interface
 */
export interface CONDITION<Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'CONDITION';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof CONDITION<Type>]: $.ASN1Decoder<CONDITION<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof CONDITION<Type>]: $.ASN1Encoder<CONDITION<Type>[_K]>;
        }
    >;
    /**
     * @summary &name
     * @description
     *
     * Display name of the condition.
     */
    readonly '&name'?: UniversalString;
    /**
     * @summary &id
     * @description
     *
     * OID of the condition (typically under `id-conditions`).
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &Type
     * @description
     *
     * Type of the condition's value.
     */
    readonly '&Type': Type;
}

/* eslint-enable */
