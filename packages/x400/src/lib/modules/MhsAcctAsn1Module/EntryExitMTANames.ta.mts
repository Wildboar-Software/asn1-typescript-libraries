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
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta.mjs';
/**
 * @summary EntryExitMTANames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryExitMTANames  ::=  SEQUENCE OF MTAName
 * ```
 */
export type EntryExitMTANames = MTAName[]; // SequenceOfType

let _cached_decoder_for_EntryExitMTANames: $.ASN1Decoder<EntryExitMTANames> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryExitMTANames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryExitMTANames} The decoded data structure.
 */
export function _decode_EntryExitMTANames(el: _Element) {
    if (!_cached_decoder_for_EntryExitMTANames) {
        _cached_decoder_for_EntryExitMTANames = $._decodeSequenceOf<MTAName>(
            () => _decode_MTAName
        );
    }
    return _cached_decoder_for_EntryExitMTANames(el);
}

let _cached_encoder_for_EntryExitMTANames: $.ASN1Encoder<EntryExitMTANames> | null = null;

/**
 * @summary Encodes a(n) EntryExitMTANames into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryExitMTANames, encoded as an ASN.1 Element.
 */
export function _encode_EntryExitMTANames(
    value: EntryExitMTANames,
    elGetter: $.ASN1Encoder<EntryExitMTANames>
) {
    if (!_cached_encoder_for_EntryExitMTANames) {
        _cached_encoder_for_EntryExitMTANames = $._encodeSequenceOf<MTAName>(
            () => _encode_MTAName,
            $.BER
        );
    }
    return _cached_encoder_for_EntryExitMTANames(value, elGetter);
}


/* eslint-enable */
