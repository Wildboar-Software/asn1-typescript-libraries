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
import {
    ATTRIBUTE,
} from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
import {
    id_clearanceSponsor,
} from "./id-clearanceSponsor.va.mjs";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/DirectoryString.ta.mjs";
import {
    caseIgnoreMatch,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";


/* START_OF_SYMBOL_DEFINITION at_clearanceSponsor */
/**
 * @summary at_clearanceSponsor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * at-clearanceSponsor ATTRIBUTE ::= {
 *     TYPE                   DirectoryString { ub-clearance-sponsor }
 *                         ( WITH COMPONENTS { utf8String PRESENT } )
 *     EQUALITY MATCHING RULE caseIgnoreMatch
 *     IDENTIFIED BY          id-clearanceSponsor
 * }
 * ```
 */
export
const at_clearanceSponsor: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DirectoryString,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&id": id_clearanceSponsor,
    "&Type": 0 as never,
    "&equality-match": caseIgnoreMatch,
};
/* END_OF_SYMBOL_DEFINITION at_clearanceSponsor */

/* eslint-enable */
