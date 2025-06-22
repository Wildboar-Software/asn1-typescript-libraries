/* eslint-disable */
import {
    TYPE_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary EXTENDED_BODY_PART_TYPE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EXTENDED-BODY-PART-TYPE ::= CLASS {
 *   &parameters  TYPE-IDENTIFIER OPTIONAL,
 *   &data        TYPE-IDENTIFIER
 * }WITH SYNTAX {[PARAMETERS &parameters,]
 *               DATA &data
 * }
 * ```
 *
 * @interface
 */
export interface EXTENDED_BODY_PART_TYPE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'EXTENDED-BODY-PART-TYPE';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof EXTENDED_BODY_PART_TYPE]: $.ASN1Decoder<
                EXTENDED_BODY_PART_TYPE[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof EXTENDED_BODY_PART_TYPE]: $.ASN1Encoder<
                EXTENDED_BODY_PART_TYPE[_K]
            >;
        }
    >;
    /**
     * @summary &parameters
     */
    readonly '&parameters'?: TYPE_IDENTIFIER;
    /**
     * @summary &data
     */
    readonly '&data'?: TYPE_IDENTIFIER;
}

/* eslint-enable */
