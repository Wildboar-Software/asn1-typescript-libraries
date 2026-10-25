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
const RequestIndication = _enum_for_RequestIndication;

/**
 * @summary RequestIndication_uEREQPDUSESMOD
 * @constant
 * @type {number}
 */
export
const RequestIndication_uEREQPDUSESMOD = RequestIndication.uEREQPDUSESMOD satisfies RequestIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEREQPDUSESMOD
 * @constant
 * @type {number}
 */
export
const uEREQPDUSESMOD = RequestIndication.uEREQPDUSESMOD satisfies RequestIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_uEREQPDUSESREL
 * @constant
 * @type {number}
 */
export
const RequestIndication_uEREQPDUSESREL = RequestIndication.uEREQPDUSESREL satisfies RequestIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEREQPDUSESREL
 * @constant
 * @type {number}
 */
export
const uEREQPDUSESREL = RequestIndication.uEREQPDUSESREL satisfies RequestIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_pDUSESMOB
 * @constant
 * @type {number}
 */
export
const RequestIndication_pDUSESMOB = RequestIndication.pDUSESMOB satisfies RequestIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSESMOB
 * @constant
 * @type {number}
 */
export
const pDUSESMOB = RequestIndication.pDUSESMOB satisfies RequestIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_nWREQPDUSESAUTH
 * @constant
 * @type {number}
 */
export
const RequestIndication_nWREQPDUSESAUTH = RequestIndication.nWREQPDUSESAUTH satisfies RequestIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nWREQPDUSESAUTH
 * @constant
 * @type {number}
 */
export
const nWREQPDUSESAUTH = RequestIndication.nWREQPDUSESAUTH satisfies RequestIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_nWREQPDUSESMOD
 * @constant
 * @type {number}
 */
export
const RequestIndication_nWREQPDUSESMOD = RequestIndication.nWREQPDUSESMOD satisfies RequestIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nWREQPDUSESMOD
 * @constant
 * @type {number}
 */
export
const nWREQPDUSESMOD = RequestIndication.nWREQPDUSESMOD satisfies RequestIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_nWREQPDUSESREL
 * @constant
 * @type {number}
 */
export
const RequestIndication_nWREQPDUSESREL = RequestIndication.nWREQPDUSESREL satisfies RequestIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nWREQPDUSESREL
 * @constant
 * @type {number}
 */
export
const nWREQPDUSESREL = RequestIndication.nWREQPDUSESREL satisfies RequestIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_eBIASSIGNMENTREQ
 * @constant
 * @type {number}
 */
export
const RequestIndication_eBIASSIGNMENTREQ = RequestIndication.eBIASSIGNMENTREQ satisfies RequestIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eBIASSIGNMENTREQ
 * @constant
 * @type {number}
 */
export
const eBIASSIGNMENTREQ = RequestIndication.eBIASSIGNMENTREQ satisfies RequestIndication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_rELDUETO5GANREQUEST
 * @constant
 * @type {number}
 */
export
const RequestIndication_rELDUETO5GANREQUEST = RequestIndication.rELDUETO5GANREQUEST satisfies RequestIndication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELDUETO5GANREQUEST
 * @constant
 * @type {number}
 */
export
const rELDUETO5GANREQUEST = RequestIndication.rELDUETO5GANREQUEST satisfies RequestIndication; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RequestIndication: $.ASN1Decoder<RequestIndication> = $._decodeEnumerated;
export const _encode_RequestIndication: $.ASN1Encoder<RequestIndication> = $._encodeEnumerated;


/* eslint-enable */
