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
import { OrderedListSyntax, _enum_for_OrderedListSyntax, OrderedListSyntax_ascSerialNum /* IMPORTED_LONG_ENUMERATION_ITEM */, ascSerialNum /* IMPORTED_SHORT_ENUMERATION_ITEM */, OrderedListSyntax_ascRevDate /* IMPORTED_LONG_ENUMERATION_ITEM */, ascRevDate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_OrderedListSyntax, _encode_OrderedListSyntax } from "../CertificateExtensions/OrderedListSyntax.ta.mjs";
// export { OrderedListSyntax, _enum_for_OrderedListSyntax, OrderedListSyntax_ascSerialNum /* IMPORTED_LONG_ENUMERATION_ITEM */, ascSerialNum /* IMPORTED_SHORT_ENUMERATION_ITEM */, OrderedListSyntax_ascRevDate /* IMPORTED_LONG_ENUMERATION_ITEM */, ascRevDate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_OrderedListSyntax, _encode_OrderedListSyntax } from "../CertificateExtensions/OrderedListSyntax.ta.mjs";
import { id_ce_orderedList } from "../CertificateExtensions/id-ce-orderedList.va.mjs";
// export { id_ce_orderedList } from "../CertificateExtensions/id-ce-orderedList.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary orderedList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * orderedList EXTENSION ::= {
 *   SYNTAX         OrderedListSyntax
 *   IDENTIFIED BY  id-ce-orderedList }
 * ```
 * 
 * @constant
 * @type {EXTENSION<OrderedListSyntax>}
 * @implements {EXTENSION<OrderedListSyntax>}
 */
export
const orderedList: EXTENSION<OrderedListSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_OrderedListSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_OrderedListSyntax,
    },
    "&id": id_ce_orderedList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
