/* eslint-disable */
import {
    VisibleString,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary DefaultDiagFormat_addinfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultDiagFormat-addinfo ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DefaultDiagFormat_addinfo =
    { v2Addinfo: VisibleString } /* CHOICE_ALT_ROOT */
    | { v3Addinfo: InternationalString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DefaultDiagFormat_addinfo: $.ASN1Decoder<DefaultDiagFormat_addinfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultDiagFormat_addinfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefaultDiagFormat_addinfo (el: _Element): DefaultDiagFormat_addinfo {
    if (!_cached_decoder_for_DefaultDiagFormat_addinfo) { _cached_decoder_for_DefaultDiagFormat_addinfo = $._decode_inextensible_choice<DefaultDiagFormat_addinfo>({
    "UNIVERSAL 26": [ "v2Addinfo", $._decodeVisibleString ],
    "UNIVERSAL 27": [ "v3Addinfo", _decode_InternationalString ]
}); }
    return _cached_decoder_for_DefaultDiagFormat_addinfo(el);
}

let _cached_encoder_for_DefaultDiagFormat_addinfo: $.ASN1Encoder<DefaultDiagFormat_addinfo> | null = null;

/**
 * @summary Encodes a(n) DefaultDiagFormat_addinfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultDiagFormat_addinfo, encoded as an ASN.1 Element.
 */
export
function _encode_DefaultDiagFormat_addinfo (value: DefaultDiagFormat_addinfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefaultDiagFormat_addinfo) { _cached_encoder_for_DefaultDiagFormat_addinfo = $._encode_choice<DefaultDiagFormat_addinfo>({
    "v2Addinfo": $._encodeVisibleString,
    "v3Addinfo": _encode_InternationalString,
}, $.BER); }
    return _cached_encoder_for_DefaultDiagFormat_addinfo(value, elGetter);
}


/* eslint-enable */
