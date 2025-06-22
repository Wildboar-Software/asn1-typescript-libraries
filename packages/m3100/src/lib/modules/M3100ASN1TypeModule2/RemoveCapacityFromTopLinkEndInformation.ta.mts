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
    RequestedPointCapacity,
    _decode_RequestedPointCapacity,
    _encode_RequestedPointCapacity,
} from '../M3100ASN1TypeModule2/RequestedPointCapacity.ta.mjs';

/**
 * @summary RemoveCapacityFromTopLinkEndInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveCapacityFromTopLinkEndInformation  ::=  RequestedPointCapacity
 * ```
 */
export type RemoveCapacityFromTopLinkEndInformation = RequestedPointCapacity; // DefinedType


let _cached_decoder_for_RemoveCapacityFromTopLinkEndInformation: $.ASN1Decoder<RemoveCapacityFromTopLinkEndInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RemoveCapacityFromTopLinkEndInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveCapacityFromTopLinkEndInformation} The decoded data structure.
 */
export function _decode_RemoveCapacityFromTopLinkEndInformation(el: _Element) {
    if (!_cached_decoder_for_RemoveCapacityFromTopLinkEndInformation) {
        _cached_decoder_for_RemoveCapacityFromTopLinkEndInformation = _decode_RequestedPointCapacity;
    }
    return _cached_decoder_for_RemoveCapacityFromTopLinkEndInformation(el);
}


let _cached_encoder_for_RemoveCapacityFromTopLinkEndInformation: $.ASN1Encoder<RemoveCapacityFromTopLinkEndInformation> | null = null;


/**
 * @summary Encodes a(n) RemoveCapacityFromTopLinkEndInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveCapacityFromTopLinkEndInformation, encoded as an ASN.1 Element.
 */
export function _encode_RemoveCapacityFromTopLinkEndInformation(
    value: RemoveCapacityFromTopLinkEndInformation,
    elGetter: $.ASN1Encoder<RemoveCapacityFromTopLinkEndInformation>
) {
    if (!_cached_encoder_for_RemoveCapacityFromTopLinkEndInformation) {
        _cached_encoder_for_RemoveCapacityFromTopLinkEndInformation = _encode_RequestedPointCapacity;
    }
    return _cached_encoder_for_RemoveCapacityFromTopLinkEndInformation(
        value,
        elGetter
    );
}


/* eslint-enable */
