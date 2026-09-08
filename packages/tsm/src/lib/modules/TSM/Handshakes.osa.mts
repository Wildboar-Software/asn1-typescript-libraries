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
import { HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";
// export { HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";
import { helloRequest } from "../TSM/helloRequest.oa.mjs";
// export { helloRequest } from "../TSM/helloRequest.oa.mjs";
import { clientHello } from "../TSM/clientHello.oa.mjs";
// export { clientHello } from "../TSM/clientHello.oa.mjs";
import { serverHello } from "../TSM/serverHello.oa.mjs";
// export { serverHello } from "../TSM/serverHello.oa.mjs";
import { certificateList } from "../TSM/certificateList.oa.mjs";
// export { certificateList } from "../TSM/certificateList.oa.mjs";
import { serverKeyExchange } from "../TSM/serverKeyExchange.oa.mjs";
// export { serverKeyExchange } from "../TSM/serverKeyExchange.oa.mjs";
import { certificateRequest } from "../TSM/certificateRequest.oa.mjs";
// export { certificateRequest } from "../TSM/certificateRequest.oa.mjs";
import { serverHelloDone } from "../TSM/serverHelloDone.oa.mjs";
// export { serverHelloDone } from "../TSM/serverHelloDone.oa.mjs";
import { certificateVerify } from "../TSM/certificateVerify.oa.mjs";
// export { certificateVerify } from "../TSM/certificateVerify.oa.mjs";
import { clientKeyExchange } from "../TSM/clientKeyExchange.oa.mjs";
// export { clientKeyExchange } from "../TSM/clientKeyExchange.oa.mjs";
import { finished } from "../TSM/finished.oa.mjs";
// export { finished } from "../TSM/finished.oa.mjs";
import { biometricClientHello } from "../TSM/biometricClientHello.oa.mjs";
// export { biometricClientHello } from "../TSM/biometricClientHello.oa.mjs";
import { biometricServerHello } from "../TSM/biometricServerHello.oa.mjs";
// export { biometricServerHello } from "../TSM/biometricServerHello.oa.mjs";


/**
 * @summary Handshakes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Handshakes HANDSHAKE ::= {
 *     helloRequest|
 *     clientHello |
 *     serverHello |
 *     certificateList |
 *     serverKeyExchange |
 *     certificateRequest |
 *     serverHelloDone |
 *     certificateVerify |
 *     clientKeyExchange |
 *     finished |
 *     biometricClientHello |
 *     biometricServerHello,
 *     ...
 * }
 * ```
 * 
 * @constant
 * @type {HANDSHAKE[]}
 * 
 */
export
const Handshakes: (HANDSHAKE)[] = [ helloRequest, clientHello, serverHello, certificateList, serverKeyExchange, certificateRequest, serverHelloDone, certificateVerify, clientKeyExchange, finished, biometricClientHello, biometricServerHello, ];

/* eslint-enable */
