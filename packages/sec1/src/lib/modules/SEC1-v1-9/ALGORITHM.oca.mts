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
 * Information-object class pairing an algorithm OID with an optional parameter
 * type. Syntax `{ OID &id [PARMS &Type] }`. Governs `AlgorithmIdentifier`.
 * [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ALGORITHM ::= CLASS {
 *     &id OBJECT IDENTIFIER UNIQUE,
 *     &Type OPTIONAL
 * }
 * WITH SYNTAX { OID &id [PARMS &Type] }
 * ```
 * 
 * @interface
 */
export
interface ALGORITHM<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ALGORITHM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof ALGORITHM<Type>]: $.ASN1Decoder<ALGORITHM<Type>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof ALGORITHM<Type>]: $.ASN1Encoder<ALGORITHM<Type>[_K]>;
    }>;
    /**
     * @summary &id
     * @description
     *
     * Unique algorithm OID. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.3.
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Type
     * @description
     *
     * ASN.1 type of the `parameters` field of
     * `AlgorithmIdentifier` for this OID. Absent when the
     * algorithm has no parameters. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.3.
     */
    readonly "&Type": Type;
};

/* eslint-enable */
