/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION ERROR */
/**
 * @summary ERROR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ERROR ::= CLASS {&code       INTEGER,
 *                  &Parameter
 * }WITH SYNTAX {ERROR &code
 *               WITH &Parameter
 * }
 * ```
 *
 * @interface
 */
export interface ERROR<
    Parameter = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'ERROR';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ERROR<Parameter>]: $.ASN1Decoder<ERROR<Parameter>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ERROR<Parameter>]: $.ASN1Encoder<ERROR<Parameter>[_K]>;
        }
    >;
    /**
     * @summary &code
     */
    readonly '&code'?: INTEGER;
    /**
     * @summary &Parameter
     */
    readonly '&Parameter': Parameter;
}
/* END_OF_SYMBOL_DEFINITION ERROR */

/* eslint-enable */
