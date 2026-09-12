/* eslint-disable */
import {
    ENUMERATED,
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
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary NAMED_TOKEN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAMED-TOKEN ::= CLASS {
 *     &name         Identifier,
 *     &state        ENUMERATED { free, owned }
 * }
 * ```
 * 
 * @interface
 */
export
interface NAMED_TOKEN {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "NAMED-TOKEN";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof NAMED_TOKEN]: $.ASN1Decoder<NAMED_TOKEN[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof NAMED_TOKEN]: $.ASN1Encoder<NAMED_TOKEN[_K]>;
    }>;
    /**
     * @summary &name
     */
    readonly "&name"?: Identifier;
    /**
     * @summary &state
     */
    readonly "&state"?: ENUMERATED;
}

/* eslint-enable */
