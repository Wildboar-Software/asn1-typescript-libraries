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
import { CRLReason, _enum_for_CRLReason, CRLReason_unspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, unspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_keyCompromise /* IMPORTED_LONG_ENUMERATION_ITEM */, keyCompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_cACompromise /* IMPORTED_LONG_ENUMERATION_ITEM */, cACompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_affiliationChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, affiliationChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_superseded /* IMPORTED_LONG_ENUMERATION_ITEM */, superseded /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_cessationOfOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, cessationOfOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_certificateHold /* IMPORTED_LONG_ENUMERATION_ITEM */, certificateHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_removeFromCRL /* IMPORTED_LONG_ENUMERATION_ITEM */, removeFromCRL /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_privilegeWithdrawn /* IMPORTED_LONG_ENUMERATION_ITEM */, privilegeWithdrawn /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_aACompromise /* IMPORTED_LONG_ENUMERATION_ITEM */, aACompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_weakAlgorithmOrKey /* IMPORTED_LONG_ENUMERATION_ITEM */, weakAlgorithmOrKey /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CRLReason, _encode_CRLReason } from "../CertificateExtensions/CRLReason.ta.mjs";
// export { CRLReason, _enum_for_CRLReason, CRLReason_unspecified /* IMPORTED_LONG_ENUMERATION_ITEM */, unspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_keyCompromise /* IMPORTED_LONG_ENUMERATION_ITEM */, keyCompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_cACompromise /* IMPORTED_LONG_ENUMERATION_ITEM */, cACompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_affiliationChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, affiliationChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_superseded /* IMPORTED_LONG_ENUMERATION_ITEM */, superseded /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_cessationOfOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, cessationOfOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_certificateHold /* IMPORTED_LONG_ENUMERATION_ITEM */, certificateHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_removeFromCRL /* IMPORTED_LONG_ENUMERATION_ITEM */, removeFromCRL /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_privilegeWithdrawn /* IMPORTED_LONG_ENUMERATION_ITEM */, privilegeWithdrawn /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_aACompromise /* IMPORTED_LONG_ENUMERATION_ITEM */, aACompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */, CRLReason_weakAlgorithmOrKey /* IMPORTED_LONG_ENUMERATION_ITEM */, weakAlgorithmOrKey /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CRLReason, _encode_CRLReason } from "../CertificateExtensions/CRLReason.ta.mjs";
import { id_ce_reasonCode } from "../CertificateExtensions/id-ce-reasonCode.va.mjs";
// export { id_ce_reasonCode } from "../CertificateExtensions/id-ce-reasonCode.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary reasonCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reasonCode EXTENSION ::= {
 *   SYNTAX         CRLReason
 *   IDENTIFIED BY  id-ce-reasonCode }
 * ```
 * 
 * @constant
 * @type {EXTENSION<CRLReason>}
 * @implements {EXTENSION<CRLReason>}
 */
export
const reasonCode: EXTENSION<CRLReason> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLReason,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLReason,
    },
    "&id": id_ce_reasonCode /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
