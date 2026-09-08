/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";

import { helloRequest } from "../TSM/helloRequest.oa.mjs";

import { clientHello } from "../TSM/clientHello.oa.mjs";

import { serverHello } from "../TSM/serverHello.oa.mjs";

import { certificateList } from "../TSM/certificateList.oa.mjs";

import { serverKeyExchange } from "../TSM/serverKeyExchange.oa.mjs";

import { certificateRequest } from "../TSM/certificateRequest.oa.mjs";

import { serverHelloDone } from "../TSM/serverHelloDone.oa.mjs";

import { certificateVerify } from "../TSM/certificateVerify.oa.mjs";

import { clientKeyExchange } from "../TSM/clientKeyExchange.oa.mjs";

import { finished } from "../TSM/finished.oa.mjs";

import { biometricClientHello } from "../TSM/biometricClientHello.oa.mjs";

import { biometricServerHello } from "../TSM/biometricServerHello.oa.mjs";



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
