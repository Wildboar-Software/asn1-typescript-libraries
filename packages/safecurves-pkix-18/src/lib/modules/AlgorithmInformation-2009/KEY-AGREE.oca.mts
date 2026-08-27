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
import { type PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import { type SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";

/**
 * @summary KEY_AGREE
 * @description
 *
 * Information object class for a key-agreement (asymmetric) algorithm
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 * Suggested object prefix: `kaa-`. Includes optional user keying
 * material (`UKM`) type and presence.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KEY-AGREE ::= CLASS {
 * &id                OBJECT IDENTIFIER UNIQUE,
 * &Params        OPTIONAL,
 * &paramPresence    ParamOptions DEFAULT absent,
 * &PublicKeySet    PUBLIC-KEY OPTIONAL,
 * &Ukm            OPTIONAL,
 * &ukmPresence    ParamOptions DEFAULT absent,
 * &smimeCaps        SMIME-CAPS OPTIONAL
 * } WITH SYNTAX {
 * IDENTIFIER &id
 * [PARAMS [TYPE &Params] ARE &paramPresence]
 * [PUBLIC-KEYS &PublicKeySet]
 * [UKM [TYPE &Ukm] ARE &ukmPresence]
 * [SMIME-CAPS &smimeCaps]
 * }
 * ```
 * 
 * @interface
 */
export
interface KEY_AGREE<
    Params = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Ukm = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "KEY-AGREE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof KEY_AGREE<Params,Ukm>]: $.ASN1Decoder<KEY_AGREE<Params,Ukm>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof KEY_AGREE<Params,Ukm>]: $.ASN1Encoder<KEY_AGREE<Params,Ukm>[_K]>;
    }>;
    /**
     * @summary &id
     * @description
     *
     * OID identifying the key agreement algorithm ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
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
    /**
     * @summary &PublicKeySet
     * @description
     *
     * Public keys used with this key-agreement algorithm ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
     *
     */
    readonly "&PublicKeySet"?: PUBLIC_KEY[];
    /**
     * @summary &Ukm
     * @description
     *
     * Type of user keying material (UKM) used with the algorithm ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
     *
     */
    readonly "&Ukm": Ukm;
    /**
     * @summary &ukmPresence
     * @description
     *
     * `ParamOptions` requirement for defining the UKM field ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
     * Default `absent`.
     *
     */
    readonly "&ukmPresence"?: ParamOptions;
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
