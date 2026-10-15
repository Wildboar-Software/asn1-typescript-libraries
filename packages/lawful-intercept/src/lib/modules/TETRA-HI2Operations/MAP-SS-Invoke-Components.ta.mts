/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MAP_SS_Invoke_Components
 * @description
 * 
 * MAP invoke or return-result components, one per octet string, coded as in the
 * relevant MAP supplementary-service recommendation. The present document names
 * no component.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-SS-Invoke-Components  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type MAP_SS_Invoke_Components = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_MAP_SS_Invoke_Components: $.ASN1Decoder<MAP_SS_Invoke_Components> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MAP_SS_Invoke_Components
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MAP_SS_Invoke_Components (el: _Element): MAP_SS_Invoke_Components {
    if (!_cached_decoder_for_MAP_SS_Invoke_Components) { _cached_decoder_for_MAP_SS_Invoke_Components = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_MAP_SS_Invoke_Components(el);
    if (_value.length < 1 || _value.length > 256) {
        throw new ASN1SizeError("MAP_SS_Invoke_Components violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length < 1 || _item.length > 256) {
            throw new ASN1SizeError("MAP_SS_Invoke_Components element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_MAP_SS_Invoke_Components: $.ASN1Encoder<MAP_SS_Invoke_Components> | null = null;

/**
 * @summary Encodes a(n) MAP_SS_Invoke_Components into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MAP_SS_Invoke_Components, encoded as an ASN.1 Element.
 */
export
function _encode_MAP_SS_Invoke_Components (value: MAP_SS_Invoke_Components, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MAP_SS_Invoke_Components) { _cached_encoder_for_MAP_SS_Invoke_Components = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_MAP_SS_Invoke_Components(value, elGetter);
}


/* eslint-enable */
