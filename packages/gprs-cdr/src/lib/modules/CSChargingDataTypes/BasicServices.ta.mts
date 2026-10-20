/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";


/**
 * @summary BasicServices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicServices  ::=  SET  OF
 *    BasicService
 * ```
 */
export
type BasicServices = BasicService[]; // SetOfType

let _cached_decoder_for_BasicServices: $.ASN1Decoder<BasicServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicServices (el: _Element): BasicServices {
    if (!_cached_decoder_for_BasicServices) { _cached_decoder_for_BasicServices = $._decodeSetOf<BasicService>(() => _decode_BasicService); }
    return _cached_decoder_for_BasicServices(el);
}

let _cached_encoder_for_BasicServices: $.ASN1Encoder<BasicServices> | null = null;

/**
 * @summary Encodes a(n) BasicServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicServices, encoded as an ASN.1 Element.
 */
export
function _encode_BasicServices (value: BasicServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicServices) { _cached_encoder_for_BasicServices = $._encodeSetOf<BasicService>(() => _encode_BasicService, $.BER); }
    return _cached_encoder_for_BasicServices(value, elGetter);
}


/* eslint-enable */
