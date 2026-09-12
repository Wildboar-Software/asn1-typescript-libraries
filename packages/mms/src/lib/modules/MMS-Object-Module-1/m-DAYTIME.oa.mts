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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
// export { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
import { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";
// export { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { type NAMED_VARIABLE } from "../MMS-Object-Module-1/NAMED-VARIABLE.oca.mjs";


/**
 * @summary m_DAYTIME
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * m-DAYTIME NAMED-VARIABLE ::= {
 *     &name               vmd-specific:"M_DAYTIME",
 *     &accessControl      "M_NonDeletable",
 *     &typeDescription    generalized-time:NULL,
 *     &accessMethod       anythingElse,
 *     &value              generalized-time:"299107311200"
 * }
 * ```
 * 
 * @constant
 * @type {NAMED_VARIABLE}
 * @implements {NAMED_VARIABLE}
 */
export
const m_DAYTIME: NAMED_VARIABLE = {
    class: "NAMED-VARIABLE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&name": { vmd_specific: "M_DAYTIME" } /* OBJECT_FIELD_SETTING */,
    "&accessControl": "M_NonDeletable" /* OBJECT_FIELD_SETTING */,
    "&typeDescription": { generalized_time: null } /* OBJECT_FIELD_SETTING */,
    "&accessMethod": anythingElse /* OBJECT_FIELD_SETTING */,
    "&value": { generalized_time: "299107311200" } /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
