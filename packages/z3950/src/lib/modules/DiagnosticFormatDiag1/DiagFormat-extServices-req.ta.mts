/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_extServices_req
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-extServices-req ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_extServices_req = INTEGER;

/**
 * @summary DiagFormat_extServices_req_nameInUse
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_req_nameInUse: DiagFormat_extServices_req = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_nameInUse
 * @constant
 * @type {number}
 */
export
const nameInUse: DiagFormat_extServices_req = DiagFormat_extServices_req_nameInUse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_noSuchName
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_req_noSuchName: DiagFormat_extServices_req = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_noSuchName
 * @constant
 * @type {number}
 */
export
const noSuchName: DiagFormat_extServices_req = DiagFormat_extServices_req_noSuchName; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_quota
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_req_quota: DiagFormat_extServices_req = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_quota
 * @constant
 * @type {number}
 */
export
const quota: DiagFormat_extServices_req = DiagFormat_extServices_req_quota; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_type_
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_req_type_: DiagFormat_extServices_req = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_req_type_
 * @constant
 * @type {number}
 */
export
const type_: DiagFormat_extServices_req = DiagFormat_extServices_req_type_; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagFormat_extServices_req: $.ASN1Decoder<DiagFormat_extServices_req> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_extServices_req
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_extServices_req (el: _Element): DiagFormat_extServices_req {
    if (!_cached_decoder_for_DiagFormat_extServices_req) { _cached_decoder_for_DiagFormat_extServices_req = $._decodeInteger; }
    return _cached_decoder_for_DiagFormat_extServices_req(el);
}

let _cached_encoder_for_DiagFormat_extServices_req: $.ASN1Encoder<DiagFormat_extServices_req> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_extServices_req into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_extServices_req, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_extServices_req (value: DiagFormat_extServices_req, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_extServices_req) { _cached_encoder_for_DiagFormat_extServices_req = $._encodeInteger; }
    return _cached_encoder_for_DiagFormat_extServices_req(value, elGetter);
}


/* eslint-enable */
