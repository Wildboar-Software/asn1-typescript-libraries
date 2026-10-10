/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NetworkResource, _decode_NetworkResource, _encode_NetworkResource } from "../MAP-CommonDataTypes/NetworkResource.ta.mjs";
import { ExtensibleSystemFailureParam, _decode_ExtensibleSystemFailureParam, _encode_ExtensibleSystemFailureParam } from "../MAP-ER-DataTypes/ExtensibleSystemFailureParam.ta.mjs";


/**
 * @summary SystemFailureParam
 * @description
 * 
 * Optional parameter of `systemFailure`. Alternative `networkResource` must not
 * be used in version 3; `extensibleSystemFailureParam` must not be used in
 * version <3 (3GPP TS 29.002 V19.1.0 clauses 7.6.1.4 and 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemFailureParam  ::=  CHOICE {
 *     networkResource    NetworkResource,
 *     -- networkResource must not be used in version 3
 *     extensibleSystemFailureParam    ExtensibleSystemFailureParam
 *     -- extensibleSystemFailureParam must not be used in version <3
 *     }
 * ```
 */
export
type SystemFailureParam =
    { networkResource: NetworkResource } /* CHOICE_ALT_ROOT */
    | { extensibleSystemFailureParam: ExtensibleSystemFailureParam } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SystemFailureParam: $.ASN1Decoder<SystemFailureParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemFailureParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemFailureParam (el: _Element): SystemFailureParam {
    if (!_cached_decoder_for_SystemFailureParam) { _cached_decoder_for_SystemFailureParam = $._decode_inextensible_choice<SystemFailureParam>({
    "UNIVERSAL 10": [ "networkResource", _decode_NetworkResource ],
    "UNIVERSAL 16": [ "extensibleSystemFailureParam", _decode_ExtensibleSystemFailureParam ]
}); }
    return _cached_decoder_for_SystemFailureParam(el);
}

let _cached_encoder_for_SystemFailureParam: $.ASN1Encoder<SystemFailureParam> | null = null;

/**
 * @summary Encodes a(n) SystemFailureParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemFailureParam, encoded as an ASN.1 Element.
 */
export
function _encode_SystemFailureParam (value: SystemFailureParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemFailureParam) { _cached_encoder_for_SystemFailureParam = $._encode_choice<SystemFailureParam>({
    "networkResource": _encode_NetworkResource,
    "extensibleSystemFailureParam": _encode_ExtensibleSystemFailureParam,
}, $.BER); }
    return _cached_encoder_for_SystemFailureParam(value, elGetter);
}


/* eslint-enable */
