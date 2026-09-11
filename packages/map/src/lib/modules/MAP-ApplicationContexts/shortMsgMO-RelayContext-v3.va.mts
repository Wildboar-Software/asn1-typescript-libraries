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
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary shortMsgMO_RelayContext_v3
 * @description
 *
 * Mobile originating short message relay between MSC and IWMSC or SGSN and
 * IWMSC. Initiator is MSC or SGSN; responder is IWMSC. For SGSN–IWMSC, versions
 * 1–3 apply. v2 equivalent exists; v1 uses `shortMsg-Relay` version 1 (3GPP TS
 * 29.002 V19.1.0 clause 17.3.2.22).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shortMsgMO-RelayContext-v3  OBJECT IDENTIFIER ::= {map-ac shortMsgMO-Relay(21) version3(3)}
 * ```
 * 
 * @constant
 */
export
const shortMsgMO_RelayContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* shortMsgMO-Relay */ 21,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */
