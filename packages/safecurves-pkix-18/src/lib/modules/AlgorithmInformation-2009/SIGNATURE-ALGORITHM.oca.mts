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
import { type DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs";
import { type PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import { type SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";

/**
 * @summary SIGNATURE_ALGORITHM
 * @description
 *
 * Information object class for a signature algorithm
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 * Suggested object prefix: `sa-`. May bind a signature value type,
 * parameters, hash-algorithm set, compatible public-key set, and S/MIME
 * capability.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIGNATURE-ALGORITHM ::= CLASS {
 * &id             OBJECT IDENTIFIER UNIQUE,
 * &Value          OPTIONAL,
 * &Params         OPTIONAL,
 * &paramPresence  ParamOptions DEFAULT absent,
 * &HashSet        DIGEST-ALGORITHM OPTIONAL,
 * &PublicKeySet   PUBLIC-KEY OPTIONAL,
 * &smimeCaps      SMIME-CAPS OPTIONAL
 * } WITH SYNTAX {
 * IDENTIFIER &id
 * [VALUE &Value]
 * [PARAMS [TYPE &Params] ARE &paramPresence ]
 * [HASHES &HashSet]
 * [PUBLIC-KEYS &PublicKeySet]
 * [SMIME-CAPS &smimeCaps]
 * }
 * ```
 * 
 * @interface
 */
export
interface SIGNATURE_ALGORITHM<
    Value = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Params = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SIGNATURE-ALGORITHM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof SIGNATURE_ALGORITHM<Value,Params>]: $.ASN1Decoder<SIGNATURE_ALGORITHM<Value,Params>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof SIGNATURE_ALGORITHM<Value,Params>]: $.ASN1Encoder<SIGNATURE_ALGORITHM<Value,Params>[_K]>;
    }>;
    /**
     * @summary &id
     * @description
     *
     * OID identifying the signature algorithm ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
     *
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Value
     * @description
     *
     * Type definition for the signature value structure; if absent,
     * implies that no ASN.1 encoding is performed on the value
     * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
     *
     */
    readonly "&Value": Value;
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
    /**
     * @summary &HashSet
     * @description
     *
     * Set of hash (`DIGEST-ALGORITHM`) algorithms used with this
     * signature algorithm ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
     *
     */
    readonly "&HashSet"?: DIGEST_ALGORITHM[];
    /**
     * @summary &PublicKeySet
     * @description
     *
     * Set of public-key algorithms compatible with this signature
     * algorithm ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
     *
     */
    readonly "&PublicKeySet"?: PUBLIC_KEY[];
    /**
     * @summary &smimeCaps
     * @description
     *
     * Object describing how S/MIME capabilities are presented for this
     * algorithm ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
     *
     */
    readonly "&smimeCaps"?: SMIME_CAPS;
};

/* eslint-enable */
