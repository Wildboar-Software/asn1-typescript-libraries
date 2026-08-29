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
 * @summary SIG_POLICY_QUALIFIER
 * @description
 *
 * Information object class for a signature-policy qualifier.
 * `&id` selects the qualifier syntax `&Qualifier`. Two
 * instances are defined: URI pointer and user notice. ETSI TS
 * 101 733 V2.2.1 (2013-04) §5.8.1, Annex A.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIG-POLICY-QUALIFIER ::= CLASS {
 *     &id OBJECT IDENTIFIER UNIQUE,
 *     &Qualifier OPTIONAL }
 * WITH SYNTAX {
 *     SIG-POLICY-QUALIFIER-ID &id
 *     [SIG-QUALIFIER-TYPE &Qualifier] }
 * ```
 * 
 * @interface
 */
export
interface SIG_POLICY_QUALIFIER<
    Qualifier = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SIG-POLICY-QUALIFIER";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof SIG_POLICY_QUALIFIER<Qualifier>]: $.ASN1Decoder<SIG_POLICY_QUALIFIER<Qualifier>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof SIG_POLICY_QUALIFIER<Qualifier>]: $.ASN1Encoder<SIG_POLICY_QUALIFIER<Qualifier>[_K]>;
    }>;
    /**
     * @summary &id
     * @description
     *
     * Unique object identifier of this qualifier type.
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Qualifier
     * @description
     *
     * Syntax of the qualifier value (e.g. `SPuri` or
     * `SPUserNotice`).
     */
    readonly "&Qualifier": Qualifier;
};

/* eslint-enable */
