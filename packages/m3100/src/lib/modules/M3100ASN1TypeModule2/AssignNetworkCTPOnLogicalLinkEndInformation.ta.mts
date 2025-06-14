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
    CTPList,
    _decode_CTPList,
    _encode_CTPList,
} from '../M3100ASN1TypeModule2/CTPList.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AssignNetworkCTPOnLogicalLinkEndInformation */
/**
 * @summary AssignNetworkCTPOnLogicalLinkEndInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssignNetworkCTPOnLogicalLinkEndInformation  ::=  CTPList
 * ```
 */
export type AssignNetworkCTPOnLogicalLinkEndInformation = CTPList; // DefinedType
/* END_OF_SYMBOL_DEFINITION AssignNetworkCTPOnLogicalLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndInformation */
let _cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndInformation: $.ASN1Decoder<AssignNetworkCTPOnLogicalLinkEndInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _decode_AssignNetworkCTPOnLogicalLinkEndInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) AssignNetworkCTPOnLogicalLinkEndInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssignNetworkCTPOnLogicalLinkEndInformation} The decoded data structure.
 */
export function _decode_AssignNetworkCTPOnLogicalLinkEndInformation(
    el: _Element
) {
    if (!_cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndInformation) {
        _cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndInformation = _decode_CTPList;
    }
    return _cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssignNetworkCTPOnLogicalLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndInformation */
let _cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndInformation: $.ASN1Encoder<AssignNetworkCTPOnLogicalLinkEndInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _encode_AssignNetworkCTPOnLogicalLinkEndInformation */
/**
 * @summary Encodes a(n) AssignNetworkCTPOnLogicalLinkEndInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssignNetworkCTPOnLogicalLinkEndInformation, encoded as an ASN.1 Element.
 */
export function _encode_AssignNetworkCTPOnLogicalLinkEndInformation(
    value: AssignNetworkCTPOnLogicalLinkEndInformation,
    elGetter: $.ASN1Encoder<AssignNetworkCTPOnLogicalLinkEndInformation>
) {
    if (!_cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndInformation) {
        _cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndInformation = _encode_CTPList;
    }
    return _cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndInformation(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AssignNetworkCTPOnLogicalLinkEndInformation */

/* eslint-enable */
