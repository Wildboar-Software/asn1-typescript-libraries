/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IRI_Parameters_iRIversion {
    version2 = 2,
    version3 = 3,
    version4 = 4,
    version6 = 6,
    lastVersion = 8,
}

/**
 * @summary IRI_Parameters_iRIversion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-iRIversion ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type IRI_Parameters_iRIversion = _enum_for_IRI_Parameters_iRIversion | ENUMERATED;

/**
 * @summary IRI_Parameters_iRIversion_version2
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version2: IRI_Parameters_iRIversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version2
 * @constant
 * @type {number}
 */
export
const version2: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version3
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version3: IRI_Parameters_iRIversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version3
 * @constant
 * @type {number}
 */
export
const version3: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version4
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version4: IRI_Parameters_iRIversion = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version4
 * @constant
 * @type {number}
 */
export
const version4: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_version6
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_version6: IRI_Parameters_iRIversion = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version6
 * @constant
 * @type {number}
 */
export
const version6: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_version6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_iRIversion_lastVersion
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_iRIversion_lastVersion: IRI_Parameters_iRIversion = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lastVersion
 * @constant
 * @type {number}
 */
export
const lastVersion: IRI_Parameters_iRIversion = IRI_Parameters_iRIversion_lastVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IRI_Parameters_iRIversion: $.ASN1Decoder<IRI_Parameters_iRIversion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRI_Parameters_iRIversion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRI_Parameters_iRIversion (el: _Element): IRI_Parameters_iRIversion {
    if (!_cached_decoder_for_IRI_Parameters_iRIversion) { _cached_decoder_for_IRI_Parameters_iRIversion = $._decodeEnumerated; }
    return _cached_decoder_for_IRI_Parameters_iRIversion(el);
}

let _cached_encoder_for_IRI_Parameters_iRIversion: $.ASN1Encoder<IRI_Parameters_iRIversion> | null = null;

/**
 * @summary Encodes a(n) IRI_Parameters_iRIversion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRI_Parameters_iRIversion, encoded as an ASN.1 Element.
 */
export
function _encode_IRI_Parameters_iRIversion (value: IRI_Parameters_iRIversion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRI_Parameters_iRIversion) { _cached_encoder_for_IRI_Parameters_iRIversion = $._encodeEnumerated; }
    return _cached_encoder_for_IRI_Parameters_iRIversion(value, elGetter);
}


/* eslint-enable */
