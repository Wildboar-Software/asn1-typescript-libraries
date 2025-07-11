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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ALGORITHM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ALGORITHM ::= CLASS {
 *   &Type          OPTIONAL,
 *   &DynParms      OPTIONAL,
 *   &id            OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   [PARMS         &Type]
 *   [DYN-PARMS     &DynParms ]
 *   IDENTIFIED BY  &id }
 * ```
 *
 * @interface
 */
export interface ALGORITHM<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    DynParms = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ALGORITHM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ALGORITHM<Type, DynParms>]: $.ASN1Decoder<
                ALGORITHM<Type, DynParms>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ALGORITHM<Type, DynParms>]: $.ASN1Encoder<
                ALGORITHM<Type, DynParms>[_K]
            >;
        }
    >;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
    /**
     * @summary &DynParms
     */
    readonly "&DynParms"?: DynParms;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
