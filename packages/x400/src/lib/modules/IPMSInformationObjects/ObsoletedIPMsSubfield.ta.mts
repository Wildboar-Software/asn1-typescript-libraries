/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    IPMIdentifier,
    _decode_IPMIdentifier,
    _encode_IPMIdentifier,
} from '../IPMSInformationObjects/IPMIdentifier.ta.mjs';
/**
 * @summary ObsoletedIPMsSubfield
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObsoletedIPMsSubfield  ::=  IPMIdentifier
 * ```
 */
export type ObsoletedIPMsSubfield = IPMIdentifier; // DefinedType

let _cached_decoder_for_ObsoletedIPMsSubfield: $.ASN1Decoder<ObsoletedIPMsSubfield> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObsoletedIPMsSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObsoletedIPMsSubfield} The decoded data structure.
 */
export function _decode_ObsoletedIPMsSubfield(el: _Element): ObsoletedIPMsSubfield {
    if (!_cached_decoder_for_ObsoletedIPMsSubfield) {
        _cached_decoder_for_ObsoletedIPMsSubfield = _decode_IPMIdentifier;
    }
    return _cached_decoder_for_ObsoletedIPMsSubfield(el);
}

let _cached_encoder_for_ObsoletedIPMsSubfield: $.ASN1Encoder<ObsoletedIPMsSubfield> | null = null;

/**
 * @summary Encodes a(n) ObsoletedIPMsSubfield into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObsoletedIPMsSubfield, encoded as an ASN.1 Element.
 */
export function _encode_ObsoletedIPMsSubfield(
    value: ObsoletedIPMsSubfield,
    elGetter: $.ASN1Encoder<ObsoletedIPMsSubfield>
): _Element {
    if (!_cached_encoder_for_ObsoletedIPMsSubfield) {
        _cached_encoder_for_ObsoletedIPMsSubfield = _encode_IPMIdentifier;
    }
    return _cached_encoder_for_ObsoletedIPMsSubfield(value, elGetter);
}


/* eslint-enable */
