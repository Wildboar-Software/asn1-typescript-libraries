/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestIndication
 * @description
 * 
 * Indicates the request type for PDU session modification as indicated by the
 * requestIndication sent in the PDU SESSION MODIFICATION REQUEST (see TS 29.502
 * [16] clause 6.1.6.3.6).
 *
 * 3GPP TS 33.128, clause 6.2.3.2.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestIndication  ::=  ENUMERATED
 * {
 *     uEREQPDUSESMOD(0),
 *     uEREQPDUSESREL(1),
 *     pDUSESMOB(2),
 *     nWREQPDUSESAUTH(3),
 *     nWREQPDUSESMOD(4),
 *     nWREQPDUSESREL(5),
 *     eBIASSIGNMENTREQ(6),
 *     rELDUETO5GANREQUEST(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RequestIndication {
    uEREQPDUSESMOD = 0,
    uEREQPDUSESREL = 1,
    pDUSESMOB = 2,
    nWREQPDUSESAUTH = 3,
    nWREQPDUSESMOD = 4,
    nWREQPDUSESREL = 5,
    eBIASSIGNMENTREQ = 6,
    rELDUETO5GANREQUEST = 7,
}

/**
 * @summary RequestIndication
 * @description
 * 
 * Indicates the request type for PDU session modification as indicated by the
 * requestIndication sent in the PDU SESSION MODIFICATION REQUEST (see TS 29.502
 * [16] clause 6.1.6.3.6).
 *
 * 3GPP TS 33.128, clause 6.2.3.2.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestIndication  ::=  ENUMERATED
 * {
 *     uEREQPDUSESMOD(0),
 *     uEREQPDUSESREL(1),
 *     pDUSESMOB(2),
 *     nWREQPDUSESAUTH(3),
 *     nWREQPDUSESMOD(4),
 *     nWREQPDUSESREL(5),
 *     eBIASSIGNMENTREQ(6),
 *     rELDUETO5GANREQUEST(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RequestIndication = _enum_for_RequestIndication;

/**
 * @summary RequestIndication
 * @description
 * 
 * Indicates the request type for PDU session modification as indicated by the
 * requestIndication sent in the PDU SESSION MODIFICATION REQUEST (see TS 29.502
 * [16] clause 6.1.6.3.6).
 *
 * 3GPP TS 33.128, clause 6.2.3.2.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestIndication  ::=  ENUMERATED
 * {
 *     uEREQPDUSESMOD(0),
 *     uEREQPDUSESREL(1),
 *     pDUSESMOB(2),
 *     nWREQPDUSESAUTH(3),
 *     nWREQPDUSESMOD(4),
 *     nWREQPDUSESREL(5),
 *     eBIASSIGNMENTREQ(6),
 *     rELDUETO5GANREQUEST(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RequestIndication: typeof _enum_for_RequestIndication = _enum_for_RequestIndication;

/**
 * @summary RequestIndication_uEREQPDUSESMOD
 * @constant
 * @type {number}
 */
export
const RequestIndication_uEREQPDUSESMOD: _enum_for_RequestIndication.uEREQPDUSESMOD = RequestIndication.uEREQPDUSESMOD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEREQPDUSESMOD
 * @constant
 * @type {number}
 */
export
const uEREQPDUSESMOD: _enum_for_RequestIndication.uEREQPDUSESMOD = RequestIndication.uEREQPDUSESMOD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_uEREQPDUSESREL
 * @constant
 * @type {number}
 */
export
const RequestIndication_uEREQPDUSESREL: _enum_for_RequestIndication.uEREQPDUSESREL = RequestIndication.uEREQPDUSESREL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEREQPDUSESREL
 * @constant
 * @type {number}
 */
export
const uEREQPDUSESREL: _enum_for_RequestIndication.uEREQPDUSESREL = RequestIndication.uEREQPDUSESREL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_pDUSESMOB
 * @constant
 * @type {number}
 */
export
const RequestIndication_pDUSESMOB: _enum_for_RequestIndication.pDUSESMOB = RequestIndication.pDUSESMOB; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSESMOB
 * @constant
 * @type {number}
 */
export
const pDUSESMOB: _enum_for_RequestIndication.pDUSESMOB = RequestIndication.pDUSESMOB; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_nWREQPDUSESAUTH
 * @constant
 * @type {number}
 */
export
const RequestIndication_nWREQPDUSESAUTH: _enum_for_RequestIndication.nWREQPDUSESAUTH = RequestIndication.nWREQPDUSESAUTH; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nWREQPDUSESAUTH
 * @constant
 * @type {number}
 */
export
const nWREQPDUSESAUTH: _enum_for_RequestIndication.nWREQPDUSESAUTH = RequestIndication.nWREQPDUSESAUTH; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_nWREQPDUSESMOD
 * @constant
 * @type {number}
 */
export
const RequestIndication_nWREQPDUSESMOD: _enum_for_RequestIndication.nWREQPDUSESMOD = RequestIndication.nWREQPDUSESMOD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nWREQPDUSESMOD
 * @constant
 * @type {number}
 */
export
const nWREQPDUSESMOD: _enum_for_RequestIndication.nWREQPDUSESMOD = RequestIndication.nWREQPDUSESMOD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_nWREQPDUSESREL
 * @constant
 * @type {number}
 */
export
const RequestIndication_nWREQPDUSESREL: _enum_for_RequestIndication.nWREQPDUSESREL = RequestIndication.nWREQPDUSESREL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nWREQPDUSESREL
 * @constant
 * @type {number}
 */
export
const nWREQPDUSESREL: _enum_for_RequestIndication.nWREQPDUSESREL = RequestIndication.nWREQPDUSESREL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_eBIASSIGNMENTREQ
 * @constant
 * @type {number}
 */
export
const RequestIndication_eBIASSIGNMENTREQ: _enum_for_RequestIndication.eBIASSIGNMENTREQ = RequestIndication.eBIASSIGNMENTREQ; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eBIASSIGNMENTREQ
 * @constant
 * @type {number}
 */
export
const eBIASSIGNMENTREQ: _enum_for_RequestIndication.eBIASSIGNMENTREQ = RequestIndication.eBIASSIGNMENTREQ; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_rELDUETO5GANREQUEST
 * @constant
 * @type {number}
 */
export
const RequestIndication_rELDUETO5GANREQUEST: _enum_for_RequestIndication.rELDUETO5GANREQUEST = RequestIndication.rELDUETO5GANREQUEST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELDUETO5GANREQUEST
 * @constant
 * @type {number}
 */
export
const rELDUETO5GANREQUEST: _enum_for_RequestIndication.rELDUETO5GANREQUEST = RequestIndication.rELDUETO5GANREQUEST; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RequestIndication: $.ASN1Decoder<RequestIndication> = $._decodeEnumerated;
export const _encode_RequestIndication: $.ASN1Encoder<RequestIndication> = $._encodeEnumerated;


/* eslint-enable */
