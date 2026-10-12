/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Tetra_IRI_Parameters_iRIversion {
    version0 = 0,
}

/**
 * @summary Tetra_IRI_Parameters_iRIversion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Tetra-IRI-Parameters-iRIversion ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type Tetra_IRI_Parameters_iRIversion = _enum_for_Tetra_IRI_Parameters_iRIversion | ENUMERATED;

/**
 * @summary Tetra_IRI_Parameters_iRIversion_version0
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_iRIversion_version0: Tetra_IRI_Parameters_iRIversion = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version0
 * @constant
 * @type {number}
 */
export
const version0: Tetra_IRI_Parameters_iRIversion = Tetra_IRI_Parameters_iRIversion_version0; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Tetra_IRI_Parameters_iRIversion: $.ASN1Decoder<Tetra_IRI_Parameters_iRIversion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Tetra_IRI_Parameters_iRIversion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Tetra_IRI_Parameters_iRIversion (el: _Element): Tetra_IRI_Parameters_iRIversion {
    if (!_cached_decoder_for_Tetra_IRI_Parameters_iRIversion) { _cached_decoder_for_Tetra_IRI_Parameters_iRIversion = $._decodeEnumerated; }
    return _cached_decoder_for_Tetra_IRI_Parameters_iRIversion(el);
}

let _cached_encoder_for_Tetra_IRI_Parameters_iRIversion: $.ASN1Encoder<Tetra_IRI_Parameters_iRIversion> | null = null;

/**
 * @summary Encodes a(n) Tetra_IRI_Parameters_iRIversion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Tetra_IRI_Parameters_iRIversion, encoded as an ASN.1 Element.
 */
export
function _encode_Tetra_IRI_Parameters_iRIversion (value: Tetra_IRI_Parameters_iRIversion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Tetra_IRI_Parameters_iRIversion) { _cached_encoder_for_Tetra_IRI_Parameters_iRIversion = $._encodeEnumerated; }
    return _cached_encoder_for_Tetra_IRI_Parameters_iRIversion(value, elGetter);
}


/* eslint-enable */
