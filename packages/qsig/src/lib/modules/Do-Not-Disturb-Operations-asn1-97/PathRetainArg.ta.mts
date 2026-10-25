/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ServiceList, _decode_ServiceList, _encode_ServiceList } from "../Do-Not-Disturb-Operations-asn1-97/ServiceList.ta.mjs";
import { PathRetainArg_extendedServiceList, _decode_PathRetainArg_extendedServiceList, _encode_PathRetainArg_extendedServiceList } from "../Do-Not-Disturb-Operations-asn1-97/PathRetainArg-extendedServiceList.ta.mjs";

/**
 * @summary PathRetainArg
 * @description
 *
 * Services for which the Originating PINX requests path retention
 * (ECMA-194 §A.5.1). Bits set to ONE in `serviceList` are those
 * services. `extendedServiceList` adds one manufacturer extension;
 * ECMA-194 §6.3.1 and §A.3.1 define none.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PathRetainArg  ::=  CHOICE {
 *     serviceList ServiceList,
 *     extendedServiceList SEQUENCE {
 *         serviceList ServiceList,
 *         extension Extension {{DNDExtSet}}
 *     }
 * }
 * ```
 */
export
type PathRetainArg =
    { serviceList: ServiceList } /* CHOICE_ALT_ROOT */
    | { extendedServiceList: PathRetainArg_extendedServiceList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PathRetainArg: $.ASN1Decoder<PathRetainArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PathRetainArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PathRetainArg (el: _Element): PathRetainArg {
    if (!_cached_decoder_for_PathRetainArg) { _cached_decoder_for_PathRetainArg = $._decode_inextensible_choice<PathRetainArg>({
    "UNIVERSAL 3": [ "serviceList", _decode_ServiceList ],
    "UNIVERSAL 16": [ "extendedServiceList", _decode_PathRetainArg_extendedServiceList ]
}); }
    return _cached_decoder_for_PathRetainArg(el);
}

let _cached_encoder_for_PathRetainArg: $.ASN1Encoder<PathRetainArg> | null = null;

/**
 * @summary Encodes a(n) PathRetainArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PathRetainArg, encoded as an ASN.1 Element.
 */
export
function _encode_PathRetainArg (value: PathRetainArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PathRetainArg) { _cached_encoder_for_PathRetainArg = $._encode_choice<PathRetainArg>({
    "serviceList": _encode_ServiceList,
    "extendedServiceList": _encode_PathRetainArg_extendedServiceList,
}, $.BER); }
    return _cached_encoder_for_PathRetainArg(value, elGetter);
}

/* eslint-enable */
