/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ErrorId,
    _decode_ErrorId,
    _encode_ErrorId,
} from '../Schedulerev1-ASN1Module/ErrorId.ta.mjs';

/**
 * @summary SCHED_ERROR
 * @description
 *
 * Information object class for errors reported in
 * `CommonError` (Erratum 1). `&id` uniquely identifies the
 * error; `&Value` is the associated parameter type. Objects of
 * this class populate `CommonErrorSet`. ITU-T Rec. X.746
 * (02/00)
 * [A.6](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * Erratum 1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SCHED-ERROR ::= CLASS {&id     ErrorId UNIQUE,
 *                        &Value
 * }
 * ```
 *
 * @interface
 */
export interface SCHED_ERROR<
    Value = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'SCHED-ERROR';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof SCHED_ERROR<Value>]: $.ASN1Decoder<
                SCHED_ERROR<Value>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof SCHED_ERROR<Value>]: $.ASN1Encoder<
                SCHED_ERROR<Value>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     * @description
     *
     * Unique error identifier (`ErrorId`) in `CommonErrorSet`.
     * ITU-T Rec. X.746 (02/00)
     * [A.6](https://www.itu.int/rec/T-REC-X.746-200002-I),
     * Erratum 1.
     */
    readonly '&id'?: ErrorId;
    /**
     * @summary &Value
     * @description
     *
     * Associated error parameter type. The rec does not define
     * particular `&Value` types. ITU-T Rec. X.746 (02/00)
     * [A.6](https://www.itu.int/rec/T-REC-X.746-200002-I),
     * Erratum 1.
     */
    readonly '&Value': Value;
}

/* eslint-enable */
