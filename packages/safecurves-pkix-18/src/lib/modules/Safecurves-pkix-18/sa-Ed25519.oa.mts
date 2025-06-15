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
} from "asn1-ts";
import { _enum_for_ParamOptions, absent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ParamOptions, _encode_ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { id_Ed25519 } from "../Safecurves-pkix-18/id-Ed25519.va.mjs";
import { pk_Ed25519 } from "../Safecurves-pkix-18/pk-Ed25519.oa.mjs";
import { sa_Ed25519_smimeCaps } from "../Safecurves-pkix-18/sa-Ed25519-smimeCaps.oa.mjs";
import { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca.mjs";

/**
 * @summary sa_Ed25519
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sa-Ed25519 SIGNATURE-ALGORITHM ::= {
 *     IDENTIFIER id-Ed25519
 *     PARAMS ARE absent
 *     PUBLIC-KEYS {pk-Ed25519}
 *     SMIME-CAPS { IDENTIFIED BY id-Ed25519 }
 * }
 * ```
 * 
 * @constant
 * @type {SIGNATURE_ALGORITHM}
 * @implements {SIGNATURE_ALGORITHM}
 */
export
const sa_Ed25519: SIGNATURE_ALGORITHM = {
    class: "SIGNATURE-ALGORITHM",
    decoderFor: {
        "&Value": undefined,
        "&Params": undefined,
    },
    encoderFor: {
        "&Value": undefined,
        "&Params": undefined,
    },
    "&id": id_Ed25519 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": absent /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [ pk_Ed25519, ] /* OBJECT_FIELD_SETTING */,
    "&smimeCaps": sa_Ed25519_smimeCaps /* OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
