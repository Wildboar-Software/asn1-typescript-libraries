/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ISUP_parameters
 * @description
 * 
 * Additional ISUP parameters, one TLV per octet string, whose tag is the tag of
 * EN 300 356 and whose length and value follow that specification. They are
 * parameters not already defined in earlier components. Other parameters than
 * the ones named may be added. Transmission medium requirement, and
 * transmission medium requirement prime, may be provided with the calling
 * party.
 *
 * In version 1 of the present document this component was mandatory. A version
 * 1 implementation that has no ISUP parameter may put zero in the first octet
 * string. The coding is imported from EN 300 356, so half-octet order follows
 * that standard rather than clause D.1.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause D.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISUP-parameters  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type ISUP_parameters = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_ISUP_parameters: $.ASN1Decoder<ISUP_parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISUP_parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISUP_parameters (el: _Element): ISUP_parameters {
    if (!_cached_decoder_for_ISUP_parameters) { _cached_decoder_for_ISUP_parameters = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_ISUP_parameters(el);
    if (_value.length < 1 || _value.length > 256) {
        throw new ASN1SizeError("ISUP_parameters violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length < 1 || _item.length > 256) {
            throw new ASN1SizeError("ISUP_parameters element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_ISUP_parameters: $.ASN1Encoder<ISUP_parameters> | null = null;

/**
 * @summary Encodes a(n) ISUP_parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISUP_parameters, encoded as an ASN.1 Element.
 */
export
function _encode_ISUP_parameters (value: ISUP_parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISUP_parameters) { _cached_encoder_for_ISUP_parameters = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_ISUP_parameters(value, elGetter);
}


/* eslint-enable */
