/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ParamOptions, _enum_for_ParamOptions, ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */, required /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */, absent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */, inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */, optional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ParamOptions, _encode_ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta";
export { ParamOptions, _enum_for_ParamOptions, ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */, required /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */, absent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */, inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */, optional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ParamOptions, _encode_ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta";
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
import { id_aes256_wrap } from "../CMSAesRsaesOaep-2009/id-aes256-wrap.va";
export { id_aes256_wrap } from "../CMSAesRsaesOaep-2009/id-aes256-wrap.va";
import { kwa_aes256_wrap_smimeCaps } from "../CMSAesRsaesOaep-2009/kwa-aes256-wrap-smimeCaps.oa";
export { kwa_aes256_wrap_smimeCaps } from "../CMSAesRsaesOaep-2009/kwa-aes256-wrap-smimeCaps.oa";
import { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca";
export { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca";


/* START_OF_SYMBOL_DEFINITION kwa_aes256_wrap */
/**
 * @summary kwa_aes256_wrap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kwa-aes256-wrap KEY-WRAP ::= {
 *     IDENTIFIER id-aes256-wrap
 *     PARAMS ARE absent
 *     SMIME-CAPS { IDENTIFIED BY id-aes256-wrap }
 * }
 * ```
 * 
 * @constant
 * @type {KEY_WRAP}
 * @implements {KEY_WRAP}
 */
export
const kwa_aes256_wrap: KEY_WRAP = {
    class: "KEY-WRAP",
    decoderFor: {
        "&Params": undefined,
    },
    encoderFor: {
        "&Params": undefined,
    },
    "&id": id_aes256_wrap /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": absent /* OBJECT_FIELD_SETTING */,
    "&smimeCaps": kwa_aes256_wrap_smimeCaps /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION kwa_aes256_wrap */

/* eslint-enable */
