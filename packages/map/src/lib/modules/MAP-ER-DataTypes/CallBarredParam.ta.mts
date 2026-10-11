/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallBarringCause, _decode_CallBarringCause, _encode_CallBarringCause } from "../MAP-ER-DataTypes/CallBarringCause.ta.mjs";
import { ExtensibleCallBarredParam, _decode_ExtensibleCallBarredParam, _encode_ExtensibleCallBarredParam } from "../MAP-ER-DataTypes/ExtensibleCallBarredParam.ta.mjs";


/**
 * @summary CallBarredParam
 * @description
 * 
 * Parameter of `callBarred`. Alternative `callBarringCause` must not be used in
 * version 3 and higher; `extensibleCallBarredParam` must not be used in version
 * <3 (3GPP TS 29.002 V19.1.0 clauses 7.6.1.4 and 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBarredParam  ::=  CHOICE {
 *     callBarringCause    CallBarringCause,
 *     -- call BarringCause must not be used in version 3 and higher
 *     extensibleCallBarredParam    ExtensibleCallBarredParam
 *     -- extensibleCallBarredParam must not be used in version <3
 *     }
 * ```
 */
export
type CallBarredParam =
    { callBarringCause: CallBarringCause } /* CHOICE_ALT_ROOT */
    | { extensibleCallBarredParam: ExtensibleCallBarredParam } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallBarredParam: $.ASN1Decoder<CallBarredParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBarredParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBarredParam (el: _Element): CallBarredParam {
    if (!_cached_decoder_for_CallBarredParam) { _cached_decoder_for_CallBarredParam = $._decode_inextensible_choice<CallBarredParam>({
    "UNIVERSAL 10": [ "callBarringCause", _decode_CallBarringCause ],
    "UNIVERSAL 16": [ "extensibleCallBarredParam", _decode_ExtensibleCallBarredParam ]
}); }
    return _cached_decoder_for_CallBarredParam(el);
}

let _cached_encoder_for_CallBarredParam: $.ASN1Encoder<CallBarredParam> | null = null;

/**
 * @summary Encodes a(n) CallBarredParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBarredParam, encoded as an ASN.1 Element.
 */
export
function _encode_CallBarredParam (value: CallBarredParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBarredParam) { _cached_encoder_for_CallBarredParam = $._encode_choice<CallBarredParam>({
    "callBarringCause": _encode_CallBarringCause,
    "extensibleCallBarredParam": _encode_ExtensibleCallBarredParam,
}, $.BER); }
    return _cached_encoder_for_CallBarredParam(value, elGetter);
}


/* eslint-enable */
