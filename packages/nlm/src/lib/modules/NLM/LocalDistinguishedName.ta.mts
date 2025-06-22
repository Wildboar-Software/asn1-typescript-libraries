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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from "@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs";
import {
    _decode_RDNSequence,
    _encode_RDNSequence,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/RDNSequence.ta.mjs";


/**
 * @summary LocalDistinguishedName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalDistinguishedName  ::=  localDistinguishedName < ObjectInstance
 * ```
 */
export type LocalDistinguishedName = $.Selection<
    ObjectInstance,
    'localDistinguishedName'
>; // SelectionType


let _cached_decoder_for_LocalDistinguishedName: $.ASN1Decoder<LocalDistinguishedName> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) LocalDistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalDistinguishedName} The decoded data structure.
 */
export function _decode_LocalDistinguishedName(el: _Element) {
    if (!_cached_decoder_for_LocalDistinguishedName) {
        _cached_decoder_for_LocalDistinguishedName = $._decode_implicit<LocalDistinguishedName>(
            () => _decode_RDNSequence
        );
    }
    return _cached_decoder_for_LocalDistinguishedName(el);
}


let _cached_encoder_for_LocalDistinguishedName: $.ASN1Encoder<LocalDistinguishedName> | null = null;


/**
 * @summary Encodes a(n) LocalDistinguishedName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalDistinguishedName, encoded as an ASN.1 Element.
 */
export function _encode_LocalDistinguishedName(
    value: LocalDistinguishedName,
    elGetter: $.ASN1Encoder<LocalDistinguishedName>
) {
    if (!_cached_encoder_for_LocalDistinguishedName) {
        _cached_encoder_for_LocalDistinguishedName = $._encode_implicit(
            _TagClass.context,
            4,
            () => _encode_RDNSequence,
            $.BER
        );
    }
    return _cached_encoder_for_LocalDistinguishedName(value, elGetter);
}

/* eslint-enable */
