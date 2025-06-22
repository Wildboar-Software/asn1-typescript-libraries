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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    SignalReceived_Item,
    _decode_SignalReceived_Item,
    _encode_SignalReceived_Item,
} from '../TestCategories-ASN1Module/SignalReceived-Item.ta.mjs';
/**
 * @summary SignalReceived
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalReceived  ::=
 *   SET OF
 *     SEQUENCE {signalType         CDTC-SIGNAL-TYPE.&id({SignalTypeSet}),
 *               signalValue
 *                 CDTC-SIGNAL-TYPE.&Value({SignalTypeSet}{@.signalType}),
 *               mORTs              MORTs,
 *               associatedObjects  AssociatedObjects}
 * ```
 */
export type SignalReceived = SignalReceived_Item[]; // SetOfType

let _cached_decoder_for_SignalReceived: $.ASN1Decoder<SignalReceived> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignalReceived
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignalReceived} The decoded data structure.
 */
export function _decode_SignalReceived(el: _Element) {
    if (!_cached_decoder_for_SignalReceived) {
        _cached_decoder_for_SignalReceived = $._decodeSetOf<SignalReceived_Item>(
            () => _decode_SignalReceived_Item
        );
    }
    return _cached_decoder_for_SignalReceived(el);
}

let _cached_encoder_for_SignalReceived: $.ASN1Encoder<SignalReceived> | null = null;

/**
 * @summary Encodes a(n) SignalReceived into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalReceived, encoded as an ASN.1 Element.
 */
export function _encode_SignalReceived(
    value: SignalReceived,
    elGetter: $.ASN1Encoder<SignalReceived>
) {
    if (!_cached_encoder_for_SignalReceived) {
        _cached_encoder_for_SignalReceived = $._encodeSetOf<SignalReceived_Item>(
            () => _encode_SignalReceived_Item,
            $.BER
        );
    }
    return _cached_encoder_for_SignalReceived(value, elGetter);
}


/* eslint-enable */
