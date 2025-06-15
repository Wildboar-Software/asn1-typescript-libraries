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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from '../E-health-identification/SchemeName.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MANUFACTURER_SCHEME */
/**
 * @summary MANUFACTURER_SCHEME
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MANUFACTURER-SCHEME ::= CLASS {
 *   &id           OBJECT IDENTIFIER UNIQUE,
 *   &name         SchemeName OPTIONAL,
 *   &Manufacturer,
 *   &Drug }
 * WITH SYNTAX {
 *   SCHEME [NAME &name] IDENTIFIED BY &id FOR &Manufacturer
 *   PRODUCING &Drug }
 * ```
 *
 * @interface
 */
export interface MANUFACTURER_SCHEME<
    Manufacturer = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Drug = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'MANUFACTURER-SCHEME';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof MANUFACTURER_SCHEME<
                Manufacturer,
                Drug
            >]: $.ASN1Decoder<MANUFACTURER_SCHEME<Manufacturer, Drug>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof MANUFACTURER_SCHEME<
                Manufacturer,
                Drug
            >]: $.ASN1Encoder<MANUFACTURER_SCHEME<Manufacturer, Drug>[_K]>;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &name
     */
    readonly '&name'?: SchemeName;
    /**
     * @summary &Manufacturer
     */
    readonly '&Manufacturer': Manufacturer;
    /**
     * @summary &Drug
     */
    readonly '&Drug': Drug;
}
/* END_OF_SYMBOL_DEFINITION MANUFACTURER_SCHEME */

/* eslint-enable */
