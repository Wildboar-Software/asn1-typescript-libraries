/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION ProbableCause */
/**
 * @summary ProbableCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProbableCause  ::=  CHOICE {globalValue  OBJECT IDENTIFIER,
 *                           localValue   INTEGER
 * }
 * ```
 */
export
type ProbableCause =
    { globalValue: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { localValue: INTEGER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ProbableCause */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProbableCause */
let _cached_decoder_for_ProbableCause: $.ASN1Decoder<ProbableCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProbableCause */

/* START_OF_SYMBOL_DEFINITION _decode_ProbableCause */
/**
 * @summary Decodes an ASN.1 element into a(n) ProbableCause
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProbableCause} The decoded data structure.
 */
export
function _decode_ProbableCause (el: _Element) {
    if (!_cached_decoder_for_ProbableCause) { _cached_decoder_for_ProbableCause = $._decode_inextensible_choice<ProbableCause>({
    "UNIVERSAL 6": [ "globalValue", $._decodeObjectIdentifier ],
    "UNIVERSAL 2": [ "localValue", $._decodeInteger ]
}); }
    return _cached_decoder_for_ProbableCause(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProbableCause */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProbableCause */
let _cached_encoder_for_ProbableCause: $.ASN1Encoder<ProbableCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProbableCause */

/* START_OF_SYMBOL_DEFINITION _encode_ProbableCause */
/**
 * @summary Encodes a(n) ProbableCause into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProbableCause, encoded as an ASN.1 Element.
 */
export
function _encode_ProbableCause (value: ProbableCause, elGetter: $.ASN1Encoder<ProbableCause>) {
    if (!_cached_encoder_for_ProbableCause) { _cached_encoder_for_ProbableCause = $._encode_choice<ProbableCause>({
    "globalValue": $._encodeObjectIdentifier,
    "localValue": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_ProbableCause(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProbableCause */

/* eslint-enable */
