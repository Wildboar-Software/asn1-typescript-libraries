/* eslint-disable */
import {
    ASN1Element as _Element,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_BasicService, _encode_BasicService, BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
// export { BasicService, _enum_for_BasicService, BasicService_allServices /* IMPORTED_LONG_ENUMERATION_ITEM */, allServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_speech /* IMPORTED_LONG_ENUMERATION_ITEM */, speech /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_unrestrictedDigitalInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, unrestrictedDigitalInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_audio3100Hz /* IMPORTED_LONG_ENUMERATION_ITEM */, audio3100Hz /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_telephony /* IMPORTED_LONG_ENUMERATION_ITEM */, telephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_teletex /* IMPORTED_LONG_ENUMERATION_ITEM */, teletex /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_telefaxGroup4Class1 /* IMPORTED_LONG_ENUMERATION_ITEM */, telefaxGroup4Class1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_videotexSyntaxBased /* IMPORTED_LONG_ENUMERATION_ITEM */, videotexSyntaxBased /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_videotelephony /* IMPORTED_LONG_ENUMERATION_ITEM */, videotelephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_BasicService, _encode_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";


/**
 * @summary CallType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallType  ::=  CHOICE {
 *     basicService BasicService,
 *     cisc NULL
 * }
 * ```
 */
export
type CallType =
    { basicService: BasicService } /* CHOICE_ALT_ROOT */
    | { cisc: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallType: $.ASN1Decoder<CallType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallType (el: _Element): CallType {
    if (!_cached_decoder_for_CallType) { _cached_decoder_for_CallType = $._decode_inextensible_choice<CallType>({
    "UNIVERSAL 10": [ "basicService", _decode_BasicService ],
    "UNIVERSAL 5": [ "cisc", $._decodeNull ]
}); }
    return _cached_decoder_for_CallType(el);
}

let _cached_encoder_for_CallType: $.ASN1Encoder<CallType> | null = null;

/**
 * @summary Encodes a(n) CallType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallType, encoded as an ASN.1 Element.
 */
export
function _encode_CallType (value: CallType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallType) { _cached_encoder_for_CallType = $._encode_choice<CallType>({
    "basicService": _encode_BasicService,
    "cisc": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_CallType(value, elGetter);
}


/* eslint-enable */
