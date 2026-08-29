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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from '../E-health-identification/SchemeName.ta.mjs';

/**
 * @summary MANUFACTURER_SCHEME
 * @description
 *
 * Manufacturer/drug scheme: unique `&id`, optional `&name`,
 * `&Manufacturer` (typically name + HQ location + company number),
 * and `&Drug`. Spec text for `&drug` repeats the manufacturer
 * wording; drug identification is scheme-defined. Scheme
 * establishment is out of scope. ITU-T X.1080.1 (05/2018) §8.8.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
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
     * @description
     *
     * Unique OID of the manufacturer identification scheme.
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &name
     * @description
     *
     * Optional `SchemeName`: ISO646String (not necessarily unique) or
     * OID.
     */
    readonly '&name'?: SchemeName;
    /**
     * @summary &Manufacturer
     * @description
     *
     * Identification of the manufacturer or laboratory. Typically
     * name, HQ location, and perhaps a company number.
     */
    readonly '&Manufacturer': Manufacturer;
    /**
     * @summary &Drug
     * @description
     *
     * Identification of a drug produced by that manufacturer. The
     * spec text repeats the manufacturer wording; the type is
     * scheme-defined.
     */
    readonly '&Drug': Drug;
}

/* eslint-enable */
