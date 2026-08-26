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
import { ParamOptions, _enum_for_ParamOptions, _decode_ParamOptions, _encode_ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";

/**
 * @summary DIGEST_ALGORITHM
 * @description
 *
 * Information object class for a message-digest (hash) algorithm
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2),
 * also [RFC 5912 §3](https://datatracker.ietf.org/doc/html/rfc5912#section-3)).
 * Suggested object prefix: `mda-`. Captures the algorithm OID, optional
 * parameters type, and parameter presence constraint for parameterized
 * `AlgorithmIdentifier`.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DIGEST-ALGORITHM ::= CLASS {
 * &id                OBJECT IDENTIFIER UNIQUE,
 * &Params        OPTIONAL,
 * &paramPresence    ParamOptions DEFAULT absent
 * } WITH SYNTAX {
 * IDENTIFIER &id
 * [PARAMS [TYPE &Params] ARE &paramPresence ]
 * }
 * ```
 * 
 * @interface
 */
export
interface DIGEST_ALGORITHM<
    Params = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "DIGEST-ALGORITHM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof DIGEST_ALGORITHM<Params>]: $.ASN1Decoder<DIGEST_ALGORITHM<Params>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof DIGEST_ALGORITHM<Params>]: $.ASN1Encoder<DIGEST_ALGORITHM<Params>[_K]>;
    }>;
    /**
     * @summary &id
     * @description
     *
     * OID identifying the digest algorithm ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
     *
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Params
     * @description
     *
     * If present, the ASN.1 type of the algorithm parameters; if absent,
     * implies no parameters
     * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
     *
     */
    readonly "&Params": Params;
    /**
     * @summary &paramPresence
     * @description
     *
     * `ParamOptions` presence requirement for `&Params` ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
     * Default `absent`.
     *
     */
    readonly "&paramPresence"?: ParamOptions;
};

/* eslint-enable */
