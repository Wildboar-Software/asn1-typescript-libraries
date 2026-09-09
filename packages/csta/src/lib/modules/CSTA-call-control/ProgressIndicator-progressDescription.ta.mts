/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ProgressIndicator_progressDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProgressIndicator_progressDescription ::= ENUMERATED {
 *     iSDNProgressDesc (0),
 *     qSIGProgressDesc (1),
 *     other (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProgressIndicator_progressDescription {
    iSDNProgressDesc = 0,
    qSIGProgressDesc = 1,
    other = 2,
}

/**
 * @summary ProgressIndicator_progressDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProgressIndicator_progressDescription ::= ENUMERATED {
 *     iSDNProgressDesc (0),
 *     qSIGProgressDesc (1),
 *     other (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ProgressIndicator_progressDescription = _enum_for_ProgressIndicator_progressDescription;

/**
 * @summary ProgressIndicator_progressDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProgressIndicator_progressDescription ::= ENUMERATED {
 *     iSDNProgressDesc (0),
 *     qSIGProgressDesc (1),
 *     other (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ProgressIndicator_progressDescription = _enum_for_ProgressIndicator_progressDescription;

/**
 * @summary ProgressIndicator_progressDescription_iSDNProgressDesc
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressDescription_iSDNProgressDesc: ProgressIndicator_progressDescription = ProgressIndicator_progressDescription.iSDNProgressDesc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iSDNProgressDesc
 * @constant
 * @type {number}
 */
export
const iSDNProgressDesc: ProgressIndicator_progressDescription = ProgressIndicator_progressDescription.iSDNProgressDesc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProgressIndicator_progressDescription_qSIGProgressDesc
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressDescription_qSIGProgressDesc: ProgressIndicator_progressDescription = ProgressIndicator_progressDescription.qSIGProgressDesc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary qSIGProgressDesc
 * @constant
 * @type {number}
 */
export
const qSIGProgressDesc: ProgressIndicator_progressDescription = ProgressIndicator_progressDescription.qSIGProgressDesc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProgressIndicator_progressDescription_other
 * @constant
 * @type {number}
 */
export
const ProgressIndicator_progressDescription_other: ProgressIndicator_progressDescription = ProgressIndicator_progressDescription.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: ProgressIndicator_progressDescription = ProgressIndicator_progressDescription.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ProgressIndicator_progressDescription: $.ASN1Decoder<ProgressIndicator_progressDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProgressIndicator_progressDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProgressIndicator_progressDescription (el: _Element): ProgressIndicator_progressDescription {
    if (!_cached_decoder_for_ProgressIndicator_progressDescription) { _cached_decoder_for_ProgressIndicator_progressDescription = $._decodeEnumerated; }
    return _cached_decoder_for_ProgressIndicator_progressDescription(el);
}

let _cached_encoder_for_ProgressIndicator_progressDescription: $.ASN1Encoder<ProgressIndicator_progressDescription> | null = null;

/**
 * @summary Encodes a(n) ProgressIndicator_progressDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProgressIndicator_progressDescription, encoded as an ASN.1 Element.
 */
export
function _encode_ProgressIndicator_progressDescription (value: ProgressIndicator_progressDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProgressIndicator_progressDescription) { _cached_encoder_for_ProgressIndicator_progressDescription = $._encodeEnumerated; }
    return _cached_encoder_for_ProgressIndicator_progressDescription(value, elGetter);
}


/* eslint-enable */
