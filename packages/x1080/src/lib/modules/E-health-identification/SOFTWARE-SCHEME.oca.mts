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
 * @summary SOFTWARE_SCHEME
 * @description
 *
 * Medical-software scheme: unique `&id`, optional `&name`,
 * `&Manufacturer` (optional if the software is generic), and
 * `&Software` (generic or product ref). Scheme establishment is out
 * of scope. ITU-T X.1080.1 (05/2018) §8.10.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SOFTWARE-SCHEME ::= CLASS {
 *   &id           OBJECT IDENTIFIER UNIQUE,
 *   &name         SchemeName OPTIONAL,
 *   &Manufacturer,
 *   &Software }
 * WITH SYNTAX {
 *   SCHEME [NAME &name] IDENTIFIED BY &id FOR &Manufacturer
 *   PRODUCING &Software }
 * ```
 *
 * @interface
 */
export interface SOFTWARE_SCHEME<
    Manufacturer = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Software = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'SOFTWARE-SCHEME';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof SOFTWARE_SCHEME<
                Manufacturer,
                Software
            >]: $.ASN1Decoder<SOFTWARE_SCHEME<Manufacturer, Software>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof SOFTWARE_SCHEME<
                Manufacturer,
                Software
            >]: $.ASN1Encoder<SOFTWARE_SCHEME<Manufacturer, Software>[_K]>;
        }
    >;
    /**
     * @summary &id
     * @description
     *
     * Unique OID of the software identification scheme.
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
     * Manufacturer identification. Optional if a generic term is used
     * in `&Software`. Otherwise typically name, HQ location, and
     * perhaps a company number.
     */
    readonly '&Manufacturer': Manufacturer;
    /**
     * @summary &Software
     * @description
     *
     * Generic description of the software, or a complete product
     * reference from the specified manufacturer.
     */
    readonly '&Software': Software;
}

/* eslint-enable */
