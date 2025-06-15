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



/**
 * @summary ECDOMAIN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECDOMAIN ::= CLASS {
 *     &id OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX { ID &id }
 * ```
 * 
 * @interface
 */
export
interface ECDOMAIN {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ECDOMAIN";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof ECDOMAIN]: $.ASN1Decoder<ECDOMAIN[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof ECDOMAIN]: $.ASN1Encoder<ECDOMAIN[_K]>;
    }>;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
