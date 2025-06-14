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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    RequestedPointCapacity,
    _decode_RequestedPointCapacity,
    _encode_RequestedPointCapacity,
} from '../M3100ASN1TypeModule2/RequestedPointCapacity.ta.mjs';
/* START_OF_SYMBOL_DEFINITION RemoveCapacityFromTopLinkEndInformation */
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
/* END_OF_SYMBOL_DEFINITION RemoveCapacityFromTopLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveCapacityFromTopLinkEndInformation */
let _cached_decoder_for_RemoveCapacityFromTopLinkEndInformation: $.ASN1Decoder<RemoveCapacityFromTopLinkEndInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveCapacityFromTopLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _decode_RemoveCapacityFromTopLinkEndInformation */
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
/* END_OF_SYMBOL_DEFINITION _decode_RemoveCapacityFromTopLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveCapacityFromTopLinkEndInformation */
let _cached_encoder_for_RemoveCapacityFromTopLinkEndInformation: $.ASN1Encoder<RemoveCapacityFromTopLinkEndInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveCapacityFromTopLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _encode_RemoveCapacityFromTopLinkEndInformation */
/**
 * @summary Encodes a(n) RemoveCapacityFromTopLinkEndInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_RemoveCapacityFromTopLinkEndInformation */

/* eslint-enable */
