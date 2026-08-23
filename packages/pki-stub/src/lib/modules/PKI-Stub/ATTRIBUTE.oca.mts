/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    UTF8String,
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
 * @summary ATTRIBUTE
 * @description
 *
 * Stub of the X.501 `ATTRIBUTE` information object class: only a syntax
 * (`&type`, fixed here as `UTF8String`) and a unique `&id`. The full class in
 * X.501 also has derivation, matching rules, single-value / collective flags,
 * usage, LDAP names, and so on. This reduced form is enough to constrain
 * attribute type OIDs in PKI-Stub encodings.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ATTRIBUTE ::= CLASS {
 *   &type                     UTF8String,
 *   &id                       OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   WITH SYNTAX               &type
 *   ID                        &id }
 * ```
 *
 * @interface
 */
export interface ATTRIBUTE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ATTRIBUTE]: $.ASN1Decoder<ATTRIBUTE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ATTRIBUTE]: $.ASN1Encoder<ATTRIBUTE[_K]>;
        }
    >;
    /**
     * @summary &type
     */
    readonly "&type"?: UTF8String;
    /**
     * @summary &id
     */
    readonly "&id": OBJECT_IDENTIFIER;
}

/* eslint-enable */
