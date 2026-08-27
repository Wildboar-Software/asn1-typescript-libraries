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
 * @summary SMIME_CAPS
 * @description
 *
 * Information object class associating an S/MIME capability type with
 * an object identifier ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 * Moved here from the RFC 3851 module for reuse (e.g., RFC 4262).
 * Suggested object prefix: `cap-`. S/MIME capabilities advertise
 * algorithm capabilities an endpoint supports.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMIME-CAPS ::= CLASS {
 * &id            OBJECT IDENTIFIER UNIQUE,
 * &Type        OPTIONAL
 * }
 * WITH SYNTAX { [TYPE &Type] IDENTIFIED BY &id }
 * ```
 * 
 * @interface
 */
export
interface SMIME_CAPS<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SMIME-CAPS";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof SMIME_CAPS<Type>]: $.ASN1Decoder<SMIME_CAPS<Type>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof SMIME_CAPS<Type>]: $.ASN1Encoder<SMIME_CAPS<Type>[_K]>;
    }>;
    /**
     * @summary &id
     * @description
     *
     * OID identifying the S/MIME capability ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
     *
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Type
     * @description
     *
     * Optional type that describes capability parameters (e.g., key
     * length) ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
     *
     */
    readonly "&Type": Type;
};

/* eslint-enable */
