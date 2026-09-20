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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary UNIT_CONTROL
 * @description
 * 
 * A VMD-specific collection of Domains and
 * Program Invocations loaded and managed as a unit (one download/upload
 * sequence for many objects). ISO 9506-1:2003 §13.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UNIT-CONTROL ::= CLASS {
 *     &name                   Identifier,
 *     -- Shall be unique within the VMD
 *     &accessControl          Identifier,
 *     &Domains                Identifier,
 *     &ProgramInvocations     Identifier
 * }
 * ```
 * 
 * @interface
 */
export
interface UNIT_CONTROL {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "UNIT-CONTROL";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof UNIT_CONTROL]: $.ASN1Decoder<UNIT_CONTROL[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof UNIT_CONTROL]: $.ASN1Encoder<UNIT_CONTROL[_K]>;
    }>;
    /**
     * @summary &name
     * @description
     *
     * VMD-specific Unit Control name. ISO 9506-1:2003 §13.1.1.1.
     *
     */
    readonly "&name"?: Identifier;
    /**
     * @summary &accessControl
     * @description
     *
     * ACL gating DeleteUnitControl. ISO 9506-1:2003 §13.1.1.2.
     *
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &Domains
     * @description
     *
     * Constituent Domains affected by UC operations. ISO 9506-1:2003 §13.1.1.3.
     *
     */
    readonly "&Domains"?: Identifier;
    /**
     * @summary &ProgramInvocations
     * @description
     *
     * Constituent PIs affected by UC operations. ISO 9506-1:2003 §13.1.1.4.
     *
     */
    readonly "&ProgramInvocations"?: Identifier;
};

/* eslint-enable */
