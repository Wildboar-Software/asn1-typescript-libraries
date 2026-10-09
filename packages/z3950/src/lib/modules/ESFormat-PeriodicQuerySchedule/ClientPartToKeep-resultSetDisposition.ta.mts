/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClientPartToKeep_resultSetDisposition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep-resultSetDisposition ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ClientPartToKeep_resultSetDisposition = INTEGER;

/**
 * @summary ClientPartToKeep_resultSetDisposition_replace
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_resultSetDisposition_replace: ClientPartToKeep_resultSetDisposition = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_replace
 * @constant
 * @type {number}
 */
export
const replace: ClientPartToKeep_resultSetDisposition = ClientPartToKeep_resultSetDisposition_replace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_append
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_resultSetDisposition_append: ClientPartToKeep_resultSetDisposition = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_append
 * @constant
 * @type {number}
 */
export
const append: ClientPartToKeep_resultSetDisposition = ClientPartToKeep_resultSetDisposition_append; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_createNew
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_resultSetDisposition_createNew: ClientPartToKeep_resultSetDisposition = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_resultSetDisposition_createNew
 * @constant
 * @type {number}
 */
export
const createNew: ClientPartToKeep_resultSetDisposition = ClientPartToKeep_resultSetDisposition_createNew; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ClientPartToKeep_resultSetDisposition: $.ASN1Decoder<ClientPartToKeep_resultSetDisposition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartToKeep_resultSetDisposition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartToKeep_resultSetDisposition (el: _Element): ClientPartToKeep_resultSetDisposition {
    if (!_cached_decoder_for_ClientPartToKeep_resultSetDisposition) { _cached_decoder_for_ClientPartToKeep_resultSetDisposition = $._decodeInteger; }
    return _cached_decoder_for_ClientPartToKeep_resultSetDisposition(el);
}

let _cached_encoder_for_ClientPartToKeep_resultSetDisposition: $.ASN1Encoder<ClientPartToKeep_resultSetDisposition> | null = null;

/**
 * @summary Encodes a(n) ClientPartToKeep_resultSetDisposition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartToKeep_resultSetDisposition, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartToKeep_resultSetDisposition (value: ClientPartToKeep_resultSetDisposition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartToKeep_resultSetDisposition) { _cached_encoder_for_ClientPartToKeep_resultSetDisposition = $._encodeInteger; }
    return _cached_encoder_for_ClientPartToKeep_resultSetDisposition(value, elGetter);
}


/* eslint-enable */
