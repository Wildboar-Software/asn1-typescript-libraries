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
import { id_X448 } from "../Safecurves-pkix-18/id-X448.va";
export { id_X448 } from "../Safecurves-pkix-18/id-X448.va";
import { CurvePrivateKey, _decode_CurvePrivateKey, _encode_CurvePrivateKey } from "../Safecurves-pkix-18/CurvePrivateKey.ta";
export { CurvePrivateKey, _decode_CurvePrivateKey, _encode_CurvePrivateKey } from "../Safecurves-pkix-18/CurvePrivateKey.ta";
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca";
export { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca";


/* START_OF_SYMBOL_DEFINITION pk_X448 */
/**
 * @summary pk_X448
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pk-X448 PUBLIC-KEY ::= {
 *     IDENTIFIER id-X448
 *     -- KEY no ASN.1 wrapping --
 *     PARAMS ARE absent
 *     CERT-KEY-USAGE { keyAgreement }
 *     PRIVATE-KEY CurvePrivateKey
 * }
 * ```
 * 
 * @constant
 * @type {PUBLIC_KEY<CurvePrivateKey>}
 * @implements {PUBLIC_KEY<CurvePrivateKey>}
 */
export
const pk_X448: PUBLIC_KEY<CurvePrivateKey> = {
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
    "&id": id_X448 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": absent /* OBJECT_FIELD_SETTING */,
    "&keyUsage": undefined,
    "&KeyValue": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&PrivateKey": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pk_X448 */

/* eslint-enable */
