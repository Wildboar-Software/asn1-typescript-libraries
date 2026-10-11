/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { CriticalityType } from "../Tariffing-Data-Types/CriticalityType.ta.mjs";
import { Code } from "../Tariffing-Data-Types/Code.ta.mjs";


/**
 * @summary EXTENSION
 * @description
 *
 * Information object class for a network-operator extension of a
 * charging argument. `&id` is the {@link Code} carried in
 * {@link ExtensionField} `type_`. `&criticality` defaults to
 * `ignore`. The module defines one example object,
 * {@link firstExtension}, and says the real set is whatever the
 * operator supports. Use of the ITU-T Q.1400 extension is marked
 * for further study.
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
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
     * Value of the extension. Open type, fixed by each object.
     */
    readonly "&ExtensionType": ExtensionType;
    /**
     * `ignore` or `abort`. Defaults to `ignore` when the object
     * omits it. Clause 9 does not define a receiver procedure
     * beyond those names.
     */
    readonly "&criticality"?: CriticalityType;
    /**
     * {@link Code} that {@link ExtensionField} `type_` carries.
     * The commentary example uses `local:1`.
     */
    readonly "&id"?: Code;
};

/* eslint-enable */
