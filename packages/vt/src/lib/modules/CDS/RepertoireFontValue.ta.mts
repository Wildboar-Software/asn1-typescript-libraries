/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RepertoireFontValue_alternatives, _decode_RepertoireFontValue_alternatives, _encode_RepertoireFontValue_alternatives } from "../CDS/RepertoireFontValue-alternatives.ta.mjs";
// export { RepertoireFontValue_alternatives, _decode_RepertoireFontValue_alternatives, _encode_RepertoireFontValue_alternatives } from "../CDS/RepertoireFontValue-alternatives.ta.mjs";


/**
 * @summary RepertoireFontValue
 * @description
 *
 * Selected value for one repertoire-list slot: `placeholder` skips
 * the slot; `alternatives` is the chosen assignment, font-capability,
 * and fonts. ISO/IEC 9041-1:1997 §12.3.3; ISO/IEC 9040:1997
 * §18.2.4, §18.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RepertoireFontValue  ::=  CHOICE {
 *     placeholder     NULL,
 *     alternatives    SEQUENCE {
 *         repertoire      [0] IMPLICIT RepertoireAssignment OPTIONAL,
 *         fontCapability  [1] IMPLICIT INTEGER OPTIONAL,
 *         fontAssignments [2] IMPLICIT SEQUENCE OF FontAssignment OPTIONAL
 *     }
 * }
 * ```
 */
export
type RepertoireFontValue =
    { placeholder: NULL } /* CHOICE_ALT_ROOT */
    | { alternatives: RepertoireFontValue_alternatives } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RepertoireFontValue: $.ASN1Decoder<RepertoireFontValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RepertoireFontValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RepertoireFontValue (el: _Element): RepertoireFontValue {
    if (!_cached_decoder_for_RepertoireFontValue) { _cached_decoder_for_RepertoireFontValue = $._decode_inextensible_choice<RepertoireFontValue>({
    "UNIVERSAL 5": [ "placeholder", $._decodeNull ],
    "UNIVERSAL 16": [ "alternatives", _decode_RepertoireFontValue_alternatives ]
}); }
    return _cached_decoder_for_RepertoireFontValue(el);
}

let _cached_encoder_for_RepertoireFontValue: $.ASN1Encoder<RepertoireFontValue> | null = null;

/**
 * @summary Encodes a(n) RepertoireFontValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepertoireFontValue, encoded as an ASN.1 Element.
 */
export
function _encode_RepertoireFontValue (value: RepertoireFontValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RepertoireFontValue) { _cached_encoder_for_RepertoireFontValue = $._encode_choice<RepertoireFontValue>({
    "placeholder": $._encodeNull,
    "alternatives": _encode_RepertoireFontValue_alternatives,
}, $.BER); }
    return _cached_encoder_for_RepertoireFontValue(value, elGetter);
}


/* eslint-enable */
