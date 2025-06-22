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
import { _enum_for_ParamOptions, absent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ParamOptions, _encode_ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { id_Ed25519 } from "../Safecurves-pkix-18/id-Ed25519.va.mjs";
import { CurvePrivateKey, _decode_CurvePrivateKey, _encode_CurvePrivateKey } from "../Safecurves-pkix-18/CurvePrivateKey.ta.mjs";
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";

/**
 * @summary pk_Ed25519
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pk-Ed25519 PUBLIC-KEY ::= {
 *     IDENTIFIER id-Ed25519
 *     -- KEY no ASN.1 wrapping --
 *     PARAMS ARE absent
 *     CERT-KEY-USAGE {digitalSignature, nonRepudiation,
 *                     keyCertSign, cRLSign}
 *     PRIVATE-KEY CurvePrivateKey
 * }
 * ```
 * 
 * @constant
 * @type {PUBLIC_KEY<CurvePrivateKey>}
 * @implements {PUBLIC_KEY<CurvePrivateKey>}
 */
export
const pk_Ed25519: PUBLIC_KEY<CurvePrivateKey> = {
    class: "PUBLIC-KEY",
    decoderFor: {
        "&KeyValue": undefined,
        "&Params": undefined,
        "&PrivateKey": _decode_CurvePrivateKey,
    },
    encoderFor: {
        "&KeyValue": undefined,
        "&Params": undefined,
        "&PrivateKey": _encode_CurvePrivateKey,
    },
    "&id": id_Ed25519 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": absent /* OBJECT_FIELD_SETTING */,
    "&keyUsage": undefined,
    "&KeyValue": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&PrivateKey": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
