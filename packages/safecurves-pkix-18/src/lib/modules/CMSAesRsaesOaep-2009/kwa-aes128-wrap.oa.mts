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
import { id_aes128_wrap } from "../CMSAesRsaesOaep-2009/id-aes128-wrap.va.mjs";
import { kwa_aes128_wrap_smimeCaps } from "../CMSAesRsaesOaep-2009/kwa-aes128-wrap-smimeCaps.oa.mjs";
import { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca.mjs";

/**
 * @summary kwa_aes128_wrap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kwa-aes128-wrap KEY-WRAP ::= {
 *     IDENTIFIER id-aes128-wrap
 *     PARAMS ARE absent
 *     SMIME-CAPS { IDENTIFIED BY id-aes128-wrap }
 * }
 * ```
 * 
 * @constant
 * @type {KEY_WRAP}
 * @implements {KEY_WRAP}
 */
export
const kwa_aes128_wrap: KEY_WRAP = {
    class: "KEY-WRAP",
    decoderFor: {
        "&Params": undefined,
    },
    encoderFor: {
        "&Params": undefined,
    },
    "&id": id_aes128_wrap /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": absent /* OBJECT_FIELD_SETTING */,
    "&smimeCaps": kwa_aes128_wrap_smimeCaps /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
