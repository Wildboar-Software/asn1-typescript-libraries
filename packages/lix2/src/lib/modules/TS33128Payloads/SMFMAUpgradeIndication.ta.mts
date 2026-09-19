/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFMAUpgradeIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFMAUpgradeIndication  ::=  BOOLEAN
 * ```
 */
export
type SMFMAUpgradeIndication = BOOLEAN; // BooleanType

let _cached_decoder_for_SMFMAUpgradeIndication: $.ASN1Decoder<SMFMAUpgradeIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFMAUpgradeIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFMAUpgradeIndication (el: _Element): SMFMAUpgradeIndication {
    if (!_cached_decoder_for_SMFMAUpgradeIndication) { _cached_decoder_for_SMFMAUpgradeIndication = $._decodeBoolean; }
    return _cached_decoder_for_SMFMAUpgradeIndication(el);
}

let _cached_encoder_for_SMFMAUpgradeIndication: $.ASN1Encoder<SMFMAUpgradeIndication> | null = null;

/**
 * @summary Encodes a(n) SMFMAUpgradeIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFMAUpgradeIndication, encoded as an ASN.1 Element.
 */
export
function _encode_SMFMAUpgradeIndication (value: SMFMAUpgradeIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFMAUpgradeIndication) { _cached_encoder_for_SMFMAUpgradeIndication = $._encodeBoolean; }
    return _cached_encoder_for_SMFMAUpgradeIndication(value, elGetter);
}


/* eslint-enable */
