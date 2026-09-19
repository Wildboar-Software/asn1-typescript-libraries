/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IRI_Parameters_initiator {
    not_Available = 0,
    originating_Target = 1,
    terminating_Target = 2,
}

/**
 * @summary IRI_Parameters_initiator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-initiator ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type IRI_Parameters_initiator = _enum_for_IRI_Parameters_initiator | ENUMERATED;

/**
 * @summary IRI_Parameters_initiator_not_Available
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_not_Available: IRI_Parameters_initiator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_Available
 * @constant
 * @type {number}
 */
export
const not_Available: IRI_Parameters_initiator = IRI_Parameters_initiator_not_Available; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_originating_Target
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_originating_Target: IRI_Parameters_initiator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_Target
 * @constant
 * @type {number}
 */
export
const originating_Target: IRI_Parameters_initiator = IRI_Parameters_initiator_originating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_terminating_Target
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_terminating_Target: IRI_Parameters_initiator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_Target
 * @constant
 * @type {number}
 */
export
const terminating_Target: IRI_Parameters_initiator = IRI_Parameters_initiator_terminating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IRI_Parameters_initiator: $.ASN1Decoder<IRI_Parameters_initiator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRI_Parameters_initiator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRI_Parameters_initiator (el: _Element): IRI_Parameters_initiator {
    if (!_cached_decoder_for_IRI_Parameters_initiator) { _cached_decoder_for_IRI_Parameters_initiator = $._decodeEnumerated; }
    return _cached_decoder_for_IRI_Parameters_initiator(el);
}

let _cached_encoder_for_IRI_Parameters_initiator: $.ASN1Encoder<IRI_Parameters_initiator> | null = null;

/**
 * @summary Encodes a(n) IRI_Parameters_initiator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRI_Parameters_initiator, encoded as an ASN.1 Element.
 */
export
function _encode_IRI_Parameters_initiator (value: IRI_Parameters_initiator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRI_Parameters_initiator) { _cached_encoder_for_IRI_Parameters_initiator = $._encodeEnumerated; }
    return _cached_encoder_for_IRI_Parameters_initiator(value, elGetter);
}


/* eslint-enable */
