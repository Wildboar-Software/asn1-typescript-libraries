/* eslint-disable */
import {
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlarmStatus,
    _decode_AlarmStatus,
    _encode_AlarmStatus,
} from "../ASN1DefinedTypesModule/AlarmStatus.ta.mjs";



/**
 * @summary AlarmStatusList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmStatusList  ::=  SET OF AlarmStatus
 * ```
 */
export
type AlarmStatusList = AlarmStatus[]; // SetOfType

let _cached_decoder_for_AlarmStatusList: $.ASN1Decoder<AlarmStatusList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlarmStatusList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlarmStatusList (el: _Element): AlarmStatusList {
    if (!_cached_decoder_for_AlarmStatusList) { _cached_decoder_for_AlarmStatusList = $._decodeSetOf<AlarmStatus>(() => _decode_AlarmStatus); }
    return _cached_decoder_for_AlarmStatusList(el);
}

let _cached_encoder_for_AlarmStatusList: $.ASN1Encoder<AlarmStatusList> | null = null;

/**
 * @summary Encodes a(n) AlarmStatusList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmStatusList, encoded as an ASN.1 Element.
 */
export
function _encode_AlarmStatusList (value: AlarmStatusList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlarmStatusList) { _cached_encoder_for_AlarmStatusList = $._encodeSetOf<AlarmStatus>(() => _encode_AlarmStatus, $.BER); }
    return _cached_encoder_for_AlarmStatusList(value, elGetter);
}


/* eslint-enable */
