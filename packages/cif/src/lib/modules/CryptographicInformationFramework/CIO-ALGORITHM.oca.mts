/* eslint-disable */
import {
    INTEGER,
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
import { Operations, _decode_Operations, _encode_Operations } from "../CryptographicInformationFramework/Operations.ta.mjs";


/**
 * @summary CIO_ALGORITHM
 * @description
 * 
 * Information object class for algorithms listed in `AlgorithmInfo` and generic
 * keys. `&id` is unique; PKCS #11 mechanism numbers are a possible
 * interpretation. ISO/IEC 7816-15:2016 §8.10, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIO-ALGORITHM ::= CLASS {
 *     &id INTEGER UNIQUE,
 *     &Parameters,
 *     &Operations Operations,
 *     &objectIdentifier OBJECT IDENTIFIER OPTIONAL
 * } WITH SYNTAX {
 *     PARAMETERS &Parameters
 *     OPERATIONS &Operations
 *     ID &id
 *     [OID &objectIdentifier]
 * }
 * ```
 * 
 * @interface
 */
export
interface CIO_ALGORITHM<
    Parameters = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "CIO-ALGORITHM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof CIO_ALGORITHM<Parameters>]: $.ASN1Decoder<CIO_ALGORITHM<Parameters>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof CIO_ALGORITHM<Parameters>]: $.ASN1Encoder<CIO_ALGORITHM<Parameters>[_K]>;
    }>;
    /**
     * @summary &id
     * @description
     * Unique integer; often interpreted as a PKCS #11 mechanism number. ISO/IEC
     * 7816-15:2016 §8.10.
     */
    readonly "&id"?: INTEGER;
    /**
     * @summary &Parameters
     * @description
     * Algorithm parameters (NULL for `cia-alg-null`). ISO/IEC 7816-15:2016
     * Annex A.
     */
    readonly "&Parameters": Parameters;
    /**
     * @summary &Operations
     * @description
     * Hardware operations the card can perform with the algorithm. ISO/IEC
     * 7816-15:2016 §8.10.
     */
    readonly "&Operations"?: Operations;
    /**
     * @summary &objectIdentifier
     * @description
     * Optional algorithm OID (`AlgorithmInfo.objId`). ISO/IEC 7816-15:2016
     * §8.10.
     */
    readonly "&objectIdentifier"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
