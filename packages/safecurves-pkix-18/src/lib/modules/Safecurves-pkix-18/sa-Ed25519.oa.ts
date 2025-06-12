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
import * as $ from "asn1-ts/dist/functional.mjs";
import { ParamOptions, _enum_for_ParamOptions, ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */, required /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */, absent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */, inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */, optional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ParamOptions, _encode_ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta.js";
export { ParamOptions, _enum_for_ParamOptions, ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */, required /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */, absent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */, inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */, optional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ParamOptions, _encode_ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta.js";
import { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.js";
export { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.js";
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.js";
export { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.js";
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.js";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.js";
import { id_Ed25519 } from "../Safecurves-pkix-18/id-Ed25519.va.js";
export { id_Ed25519 } from "../Safecurves-pkix-18/id-Ed25519.va.js";
import { pk_Ed25519 } from "../Safecurves-pkix-18/pk-Ed25519.oa.js";
export { pk_Ed25519 } from "../Safecurves-pkix-18/pk-Ed25519.oa.js";
import { sa_Ed25519_smimeCaps } from "../Safecurves-pkix-18/sa-Ed25519-smimeCaps.oa.js";
export { sa_Ed25519_smimeCaps } from "../Safecurves-pkix-18/sa-Ed25519-smimeCaps.oa.js";
import { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca.js";
export { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca.js";


/* START_OF_SYMBOL_DEFINITION sa_Ed25519 */
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
/* END_OF_SYMBOL_DEFINITION sa_Ed25519 */

/* eslint-enable */
