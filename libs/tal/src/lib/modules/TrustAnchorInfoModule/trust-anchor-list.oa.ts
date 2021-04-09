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
import { TrustAnchorList, _decode_TrustAnchorList, _encode_TrustAnchorList } from "../TrustAnchorInfoModule/TrustAnchorList.ta";
export { TrustAnchorList, _decode_TrustAnchorList, _encode_TrustAnchorList } from "../TrustAnchorInfoModule/TrustAnchorList.ta";
import { id_ct_trustAnchorList } from "../TrustAnchorInfoModule/id-ct-trustAnchorList.va";
export { id_ct_trustAnchorList } from "../TrustAnchorInfoModule/id-ct-trustAnchorList.va";
import { PKCS7_CONTENT_TYPE } from "../TrustAnchorInfoModule/PKCS7-CONTENT-TYPE.oca";
export { PKCS7_CONTENT_TYPE } from "../TrustAnchorInfoModule/PKCS7-CONTENT-TYPE.oca";


/* START_OF_SYMBOL_DEFINITION trust_anchor_list */
/**
 * @summary trust_anchor_list
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * trust-anchor-list PKCS7-CONTENT-TYPE ::= { TrustAnchorList IDENTIFIED BY id-ct-trustAnchorList }
 * ```
 * 
 * @constant
 * @type {PKCS7_CONTENT_TYPE<TrustAnchorList>}
 * @implements {PKCS7_CONTENT_TYPE<TrustAnchorList>}
 */
export
const trust_anchor_list: PKCS7_CONTENT_TYPE<TrustAnchorList> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_TrustAnchorList,
    },
    encoderFor: {
        "&Type": _encode_TrustAnchorList,
    },
    "&id": id_ct_trustAnchorList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION trust_anchor_list */

/* eslint-enable */
