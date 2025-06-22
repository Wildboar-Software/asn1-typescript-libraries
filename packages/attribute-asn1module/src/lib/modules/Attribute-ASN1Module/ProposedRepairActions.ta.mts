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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SpecificIdentifier, _decode_SpecificIdentifier, _encode_SpecificIdentifier } from "../Attribute-ASN1Module/SpecificIdentifier.ta.mjs";
/**
 * @summary ProposedRepairActions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProposedRepairActions  ::=  SET OF SpecificIdentifier
 * ```
 */
export
type ProposedRepairActions = SpecificIdentifier[]; // SetOfType

let _cached_decoder_for_ProposedRepairActions: $.ASN1Decoder<ProposedRepairActions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProposedRepairActions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProposedRepairActions} The decoded data structure.
 */
export
function _decode_ProposedRepairActions (el: _Element) {
    if (!_cached_decoder_for_ProposedRepairActions) { _cached_decoder_for_ProposedRepairActions = $._decodeSetOf<SpecificIdentifier>(() => _decode_SpecificIdentifier); }
    return _cached_decoder_for_ProposedRepairActions(el);
}

let _cached_encoder_for_ProposedRepairActions: $.ASN1Encoder<ProposedRepairActions> | null = null;

/**
 * @summary Encodes a(n) ProposedRepairActions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProposedRepairActions, encoded as an ASN.1 Element.
 */
export
function _encode_ProposedRepairActions (value: ProposedRepairActions, elGetter: $.ASN1Encoder<ProposedRepairActions>) {
    if (!_cached_encoder_for_ProposedRepairActions) { _cached_encoder_for_ProposedRepairActions = $._encodeSetOf<SpecificIdentifier>(() => _encode_SpecificIdentifier, $.BER); }
    return _cached_encoder_for_ProposedRepairActions(value, elGetter);
}


/* eslint-enable */
