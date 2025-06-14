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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ErrorId,
    _decode_ErrorId,
    _encode_ErrorId,
} from '../Schedulerev1-ASN1Module/ErrorId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SCHED_ERROR */
/**
 * @summary SCHED_ERROR
 * @description
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
     */
    readonly '&id'?: ErrorId;
    /**
     * @summary &Value
     */
    readonly '&Value': Value;
}
/* END_OF_SYMBOL_DEFINITION SCHED_ERROR */

/* eslint-enable */
