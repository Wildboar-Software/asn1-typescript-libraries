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
} from '@wildboar/cmip';
/**
 * @summary CommandSequencerId
 * @description
 *
 * Names a command sequencer: a management support object in a
 * manager role (notification destination and invoker of
 * operations determined by launch scripts; may delegate
 * management). Contains launch pads and provides the services
 * they and their spawn use. Contained in `system`. ITU-T Rec.
 * X.753 (10/97)
 * [§3.6.1](https://www.itu.int/rec/T-REC-X.753-199710-I),
 * §8.1.1, A.1.1, A.4, A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommandSequencerId  ::=  ObjectInstance
 * ```
 */
export type CommandSequencerId = ObjectInstance; // DefinedType

let _cached_decoder_for_CommandSequencerId: $.ASN1Decoder<CommandSequencerId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommandSequencerId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommandSequencerId} The decoded data structure.
 */
export function _decode_CommandSequencerId(el: _Element): CommandSequencerId {
    if (!_cached_decoder_for_CommandSequencerId) {
        _cached_decoder_for_CommandSequencerId = _decode_ObjectInstance;
    }
    return _cached_decoder_for_CommandSequencerId(el);
}

let _cached_encoder_for_CommandSequencerId: $.ASN1Encoder<CommandSequencerId> | null = null;

/**
 * @summary Encodes a(n) CommandSequencerId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommandSequencerId, encoded as an ASN.1 Element.
 */
export function _encode_CommandSequencerId(
    value: CommandSequencerId,
    elGetter: $.ASN1Encoder<CommandSequencerId>
): _Element {
    if (!_cached_encoder_for_CommandSequencerId) {
        _cached_encoder_for_CommandSequencerId = _encode_ObjectInstance;
    }
    return _cached_encoder_for_CommandSequencerId(value, elGetter);
}


/* eslint-enable */
