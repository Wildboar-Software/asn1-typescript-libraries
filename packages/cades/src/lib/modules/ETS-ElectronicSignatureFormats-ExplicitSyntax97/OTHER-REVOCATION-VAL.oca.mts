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
 * @summary OTHER_REVOCATION_VAL
 * @description
 *
 * Information object class for a non-CRL/non-OCSP revocation
 * value. Syntax and semantics of `&Type` are outside the
 * scope of this specification; identified by `&id`. ETSI TS
 * 101 733 V2.2.1 (2013-04) §6.3.4, Annex A.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OTHER-REVOCATION-VAL ::= CLASS {
 *     &Type,
 *     &id OBJECT IDENTIFIER UNIQUE
 * } WITH SYNTAX {
 *     WITH SYNTAX &Type
 *     ID &id
 * }
 * ```
 * 
 * @interface
 */
export
interface OTHER_REVOCATION_VAL<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "OTHER-REVOCATION-VAL";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof OTHER_REVOCATION_VAL<Type>]: $.ASN1Decoder<OTHER_REVOCATION_VAL<Type>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof OTHER_REVOCATION_VAL<Type>]: $.ASN1Encoder<OTHER_REVOCATION_VAL<Type>[_K]>;
    }>;
    /**
     * @summary &Type
     * @description
     *
     * Syntax of the other revocation value. Outside the scope
     * of this specification.
     */
    readonly "&Type": Type;
    /**
     * @summary &id
     * @description
     *
     * Unique object identifier selecting `&Type`.
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
