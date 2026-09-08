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
import { HandshakeType, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";



/**
 * @summary HANDSHAKE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HANDSHAKE ::= CLASS {
 *     &Type,
 *     &id    HandshakeType    UNIQUE}
 *     WITH SYNTAX {
 *         &Type IDENTIFIED-BY &id
 * }
 * ```
 * 
 * @interface
 */
export
interface HANDSHAKE<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "HANDSHAKE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof HANDSHAKE<Type>]: $.ASN1Decoder<HANDSHAKE<Type>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof HANDSHAKE<Type>]: $.ASN1Encoder<HANDSHAKE<Type>[_K]>;
    }>;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
    /**
     * @summary &id
     */
    readonly "&id"?: HandshakeType;
};

/* eslint-enable */
