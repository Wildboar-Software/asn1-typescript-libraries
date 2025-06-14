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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION SIG_POLICY_QUALIFIER */
/**
 * @summary SIG_POLICY_QUALIFIER
 * @description
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
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Qualifier
     */
    readonly "&Qualifier": Qualifier;
};
/* END_OF_SYMBOL_DEFINITION SIG_POLICY_QUALIFIER */

/* eslint-enable */
