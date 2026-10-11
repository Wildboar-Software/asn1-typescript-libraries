/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestIndication
 * @description
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
const RequestIndication_uEREQPDUSESMOD: RequestIndication = RequestIndication.uEREQPDUSESMOD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEREQPDUSESMOD
 * @constant
 * @type {number}
 */
export
const uEREQPDUSESMOD: RequestIndication = RequestIndication.uEREQPDUSESMOD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_uEREQPDUSESREL
 * @constant
 * @type {number}
 */
export
const RequestIndication_uEREQPDUSESREL: RequestIndication = RequestIndication.uEREQPDUSESREL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEREQPDUSESREL
 * @constant
 * @type {number}
 */
export
const uEREQPDUSESREL: RequestIndication = RequestIndication.uEREQPDUSESREL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_pDUSESMOB
 * @constant
 * @type {number}
 */
export
const RequestIndication_pDUSESMOB: RequestIndication = RequestIndication.pDUSESMOB; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSESMOB
 * @constant
 * @type {number}
 */
export
const pDUSESMOB: RequestIndication = RequestIndication.pDUSESMOB; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_nWREQPDUSESAUTH
 * @constant
 * @type {number}
 */
export
const RequestIndication_nWREQPDUSESAUTH: RequestIndication = RequestIndication.nWREQPDUSESAUTH; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nWREQPDUSESAUTH
 * @constant
 * @type {number}
 */
export
const nWREQPDUSESAUTH: RequestIndication = RequestIndication.nWREQPDUSESAUTH; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_nWREQPDUSESMOD
 * @constant
 * @type {number}
 */
export
const RequestIndication_nWREQPDUSESMOD: RequestIndication = RequestIndication.nWREQPDUSESMOD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nWREQPDUSESMOD
 * @constant
 * @type {number}
 */
export
const nWREQPDUSESMOD: RequestIndication = RequestIndication.nWREQPDUSESMOD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_nWREQPDUSESREL
 * @constant
 * @type {number}
 */
export
const RequestIndication_nWREQPDUSESREL: RequestIndication = RequestIndication.nWREQPDUSESREL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nWREQPDUSESREL
 * @constant
 * @type {number}
 */
export
const nWREQPDUSESREL: RequestIndication = RequestIndication.nWREQPDUSESREL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_eBIASSIGNMENTREQ
 * @constant
 * @type {number}
 */
export
const RequestIndication_eBIASSIGNMENTREQ: RequestIndication = RequestIndication.eBIASSIGNMENTREQ; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eBIASSIGNMENTREQ
 * @constant
 * @type {number}
 */
export
const eBIASSIGNMENTREQ: RequestIndication = RequestIndication.eBIASSIGNMENTREQ; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestIndication_rELDUETO5GANREQUEST
 * @constant
 * @type {number}
 */
export
const RequestIndication_rELDUETO5GANREQUEST: RequestIndication = RequestIndication.rELDUETO5GANREQUEST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELDUETO5GANREQUEST
 * @constant
 * @type {number}
 */
export
const rELDUETO5GANREQUEST: RequestIndication = RequestIndication.rELDUETO5GANREQUEST; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RequestIndication: $.ASN1Decoder<RequestIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestIndication (el: _Element): RequestIndication {
    if (!_cached_decoder_for_RequestIndication) { _cached_decoder_for_RequestIndication = $._decodeEnumerated; }
    return _cached_decoder_for_RequestIndication(el);
}

let _cached_encoder_for_RequestIndication: $.ASN1Encoder<RequestIndication> | null = null;

/**
 * @summary Encodes a(n) RequestIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestIndication, encoded as an ASN.1 Element.
 */
export
function _encode_RequestIndication (value: RequestIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestIndication) { _cached_encoder_for_RequestIndication = $._encodeEnumerated; }
    return _cached_encoder_for_RequestIndication(value, elGetter);
}


/* eslint-enable */
