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
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AlgorithmInformation-2009/AlgorithmIdentifier.ta.mjs";
export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AlgorithmInformation-2009/AlgorithmIdentifier.ta.mjs";
import { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca.mjs";
export { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca.mjs";
import { id_X25519 } from "../Safecurves-pkix-18/id-X25519.va.mjs";
export { id_X25519 } from "../Safecurves-pkix-18/id-X25519.va.mjs";
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";


/* START_OF_SYMBOL_DEFINITION kaa_X25519_smimeCaps */
/**
 * @summary kaa_X25519_smimeCaps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kaa-X25519-smimeCaps ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {SMIME_CAPS<AlgorithmIdentifier>}
 * @implements {SMIME_CAPS<AlgorithmIdentifier>}
 */
export
const kaa_X25519_smimeCaps: SMIME_CAPS<AlgorithmIdentifier> = {
    class: "SMIME-CAPS",
    decoderFor: {
        "&Type": _decode_AlgorithmIdentifier,
    },
    encoderFor: {
        "&Type": _encode_AlgorithmIdentifier,
    },
    "&id": id_X25519 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION kaa_X25519_smimeCaps */

/* eslint-enable */
