/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { CriticalityType } from "../Tariffing-Data-Types/CriticalityType.ta.mjs";
import { Code } from "../Tariffing-Data-Types/Code.ta.mjs";


/**
 * @summary EXTENSION
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EXTENSION ::= CLASS {
 *     &ExtensionType,
 *     &criticality CriticalityType DEFAULT ignore,
 *     &id Code
 * }
 * WITH SYNTAX {
 *     EXTENSION-SYNTAX &ExtensionType
 *     CRITICALITY &criticality
 *     IDENTIFIED BY &id
 * }
 * ```
 * 
 * @interface
 */
export
interface EXTENSION<
    ExtensionType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "EXTENSION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof EXTENSION<ExtensionType>]: $.ASN1Decoder<EXTENSION<ExtensionType>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof EXTENSION<ExtensionType>]: $.ASN1Encoder<EXTENSION<ExtensionType>[_K]>;
    }>;
    /**
     * @summary &ExtensionType
     */
    readonly "&ExtensionType": ExtensionType;
    /**
     * @summary &criticality
     */
    readonly "&criticality"?: CriticalityType;
    /**
     * @summary &id
     */
    readonly "&id"?: Code;
};

/* eslint-enable */
