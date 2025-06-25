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
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.mjs';

/**
 * @summary ActivityPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivityPerson  ::=  PersonReach
 * ```
 */
export type ActivityPerson = PersonReach; // DefinedType


let _cached_decoder_for_ActivityPerson: $.ASN1Decoder<ActivityPerson> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ActivityPerson
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivityPerson} The decoded data structure.
 */
export function _decode_ActivityPerson(el: _Element): ActivityPerson {
    if (!_cached_decoder_for_ActivityPerson) {
        _cached_decoder_for_ActivityPerson = _decode_PersonReach;
    }
    return _cached_decoder_for_ActivityPerson(el);
}


let _cached_encoder_for_ActivityPerson: $.ASN1Encoder<ActivityPerson> | null = null;


/**
 * @summary Encodes a(n) ActivityPerson into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityPerson, encoded as an ASN.1 Element.
 */
export function _encode_ActivityPerson(
    value: ActivityPerson,
    elGetter: $.ASN1Encoder<ActivityPerson>
): _Element {
    if (!_cached_encoder_for_ActivityPerson) {
        _cached_encoder_for_ActivityPerson = _encode_PersonReach;
    }
    return _cached_encoder_for_ActivityPerson(value, elGetter);
}


/* eslint-enable */
