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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParamOptions, _enum_for_ParamOptions, _decode_ParamOptions, _encode_ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { KeyUsage } from "@wildboar/x500/src/lib/modules/CertificateExtensions/KeyUsage.ta.mjs";



/**
 * @summary PUBLIC_KEY
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PUBLIC-KEY ::= CLASS {
 * &id                OBJECT IDENTIFIER UNIQUE,
 * &KeyValue        OPTIONAL,
 * &Params        OPTIONAL,
 * &paramPresence    ParamOptions DEFAULT absent,
 * &keyUsage        KeyUsage OPTIONAL,
 * &PrivateKey        OPTIONAL
 * } WITH SYNTAX {
 * IDENTIFIER &id
 * [KEY &KeyValue]
 * [PARAMS [TYPE &Params] ARE &paramPresence]
 * [CERT-KEY-USAGE &keyUsage]
 * [PRIVATE-KEY &PrivateKey]
 * }
 * ```
 * 
 * @interface
 */
export
interface PUBLIC_KEY<
    KeyValue = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Params = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    PrivateKey = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "PUBLIC-KEY";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof PUBLIC_KEY<KeyValue,Params,PrivateKey>]: $.ASN1Decoder<PUBLIC_KEY<KeyValue,Params,PrivateKey>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof PUBLIC_KEY<KeyValue,Params,PrivateKey>]: $.ASN1Encoder<PUBLIC_KEY<KeyValue,Params,PrivateKey>[_K]>;
    }>;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &KeyValue
     */
    readonly "&KeyValue": KeyValue;
    /**
     * @summary &Params
     */
    readonly "&Params": Params;
    /**
     * @summary &paramPresence
     */
    readonly "&paramPresence"?: ParamOptions;
    /**
     * @summary &keyUsage
     */
    readonly "&keyUsage"?: KeyUsage;
    /**
     * @summary &PrivateKey
     */
    readonly "&PrivateKey": PrivateKey;
};

/* eslint-enable */
