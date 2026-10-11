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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { ULState, _decode_ULState, _encode_ULState } from "../MMS-Object-Module-1/ULState.ta.mjs";


/**
 * @summary ULSM
 * @description
 * 
 * Upload State Machine: one Domain-upload sequence
 * on an application association. Identified by &ulsmID unique on that
 * AA. ISO 9506-1:2003 §11.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ULSM ::= CLASS {
 *     &ulsmID          INTEGER UNIQUE,
 *     -- shall be unique among all ULSM's within this application association
 *     &domain          Identifier,
 *     &ulsmState       ULState
 * }
 * ```
 * 
 * @interface
 */
export
interface ULSM {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ULSM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof ULSM]: $.ASN1Decoder<ULSM[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof ULSM]: $.ASN1Encoder<ULSM[_K]>;
    }>;
    /**
     * @summary &ulsmID
     * @description
     *
     * Upload id unique among ULSMs on this AA. ISO 9506-1:2003 §11.1.2.1.
     *
     */
    readonly "&ulsmID"?: INTEGER;
    /**
     * @summary &domain
     * @description
     *
     * Domain being uploaded. ISO 9506-1:2003 §11.1.2.2.
     *
     */
    readonly "&domain"?: Identifier;
    /**
     * @summary &ulsmState
     * @description
     *
     * State of this upload sequence. ISO 9506-1:2003 §11.1.2.3.
     *
     */
    readonly "&ulsmState"?: ULState;
};

/* eslint-enable */
