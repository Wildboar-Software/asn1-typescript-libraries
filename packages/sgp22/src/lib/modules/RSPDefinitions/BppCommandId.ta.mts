/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BppCommandId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BppCommandId  ::=  INTEGER {initialiseSecureChannel(0), configureISDP(1), storeMetadata(2), storeMetadata2(3), replaceSessionKeys(4), loadProfileElements(5)}
 * ```
 */
export
type BppCommandId = INTEGER;

/**
 * @summary BppCommandId_initialiseSecureChannel
 * @constant
 * @type {number}
 */
export
const BppCommandId_initialiseSecureChannel: BppCommandId = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_initialiseSecureChannel
 * @constant
 * @type {number}
 */
export
const initialiseSecureChannel: BppCommandId = BppCommandId_initialiseSecureChannel; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_configureISDP
 * @constant
 * @type {number}
 */
export
const BppCommandId_configureISDP: BppCommandId = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_configureISDP
 * @constant
 * @type {number}
 */
export
const configureISDP: BppCommandId = BppCommandId_configureISDP; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_storeMetadata
 * @constant
 * @type {number}
 */
export
const BppCommandId_storeMetadata: BppCommandId = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_storeMetadata
 * @constant
 * @type {number}
 */
export
const storeMetadata: BppCommandId = BppCommandId_storeMetadata; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_storeMetadata2
 * @constant
 * @type {number}
 */
export
const BppCommandId_storeMetadata2: BppCommandId = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_storeMetadata2
 * @constant
 * @type {number}
 */
export
const storeMetadata2: BppCommandId = BppCommandId_storeMetadata2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_replaceSessionKeys
 * @constant
 * @type {number}
 */
export
const BppCommandId_replaceSessionKeys: BppCommandId = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_replaceSessionKeys
 * @constant
 * @type {number}
 */
export
const replaceSessionKeys: BppCommandId = BppCommandId_replaceSessionKeys; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_loadProfileElements
 * @constant
 * @type {number}
 */
export
const BppCommandId_loadProfileElements: BppCommandId = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BppCommandId_loadProfileElements
 * @constant
 * @type {number}
 */
export
const loadProfileElements: BppCommandId = BppCommandId_loadProfileElements; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_BppCommandId: $.ASN1Decoder<BppCommandId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BppCommandId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BppCommandId (el: _Element): BppCommandId {
    if (!_cached_decoder_for_BppCommandId) { _cached_decoder_for_BppCommandId = $._decodeInteger; }
    return _cached_decoder_for_BppCommandId(el);
}

let _cached_encoder_for_BppCommandId: $.ASN1Encoder<BppCommandId> | null = null;

/**
 * @summary Encodes a(n) BppCommandId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BppCommandId, encoded as an ASN.1 Element.
 */
export
function _encode_BppCommandId (value: BppCommandId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BppCommandId) { _cached_encoder_for_BppCommandId = $._encodeInteger; }
    return _cached_encoder_for_BppCommandId(value, elGetter);
}


/* eslint-enable */
