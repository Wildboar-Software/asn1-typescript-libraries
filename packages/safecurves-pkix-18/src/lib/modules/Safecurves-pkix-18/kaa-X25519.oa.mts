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
import { _enum_for_ParamOptions, preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */, absent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ParamOptions, _encode_ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { id_X25519 } from "../Safecurves-pkix-18/id-X25519.va.mjs";
import { pk_X25519 } from "../Safecurves-pkix-18/pk-X25519.oa.mjs";
import { kaa_X25519_smimeCaps } from "../Safecurves-pkix-18/kaa-X25519-smimeCaps.oa.mjs";
import { KEY_AGREE } from "../AlgorithmInformation-2009/KEY-AGREE.oca.mjs";

/**
 * @summary kaa_X25519
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kaa-X25519 KEY-AGREE ::= {
 *     IDENTIFIER id-X25519
 *     PARAMS ARE absent
 *     PUBLIC-KEYS {pk-X25519}
 *     UKM -- TYPE no ASN.1 wrapping -- ARE preferredPresent
 *     SMIME-CAPS {
 *         TYPE AlgorithmIdentifier{KEY-WRAP, {KeyWrapAlgorithms}}
 *         IDENTIFIED BY id-X25519 }
 * }
 * ```
 * 
 * @constant
 * @type {KEY_AGREE}
 * @implements {KEY_AGREE}
 */
export
const kaa_X25519: KEY_AGREE = {
    class: "KEY-AGREE",
    decoderFor: {
        "&Params": undefined,
        "&Ukm": undefined,
    },
    encoderFor: {
        "&Params": undefined,
        "&Ukm": undefined,
    },
    "&id": id_X25519 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": absent /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [ pk_X25519, ] /* OBJECT_FIELD_SETTING */,
    "&ukmPresence": preferredPresent /* OBJECT_FIELD_SETTING */,
    "&smimeCaps": kaa_X25519_smimeCaps /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Ukm": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
