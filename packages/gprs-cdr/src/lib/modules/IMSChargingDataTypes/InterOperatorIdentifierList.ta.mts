/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InterOperatorIdentifiers, _decode_InterOperatorIdentifiers, _encode_InterOperatorIdentifiers } from "../IMSChargingDataTypes/InterOperatorIdentifiers.ta.mjs";


/**
 * @summary InterOperatorIdentifierList
 * @description
 *
 * Originating and terminating home-network identifiers taken from Orig-IOI
 * and Term-IOI in the P-Charging-Vector. The list may occur several times
 * (clause 5.1.2.4). Transit networks are carried separately in the
 * Transit-IOI list. A transit operator may insert a void value to hide its
 * identity. No transit network is expected between the S-CSCF and a
 * third-party AS triggered by initial filter criteria.
 *
 * 3GPP TS 32.260 V20.1.0 clause 5.1.2.4.
 *
 * This list holds the identification of the pair of originating network and
 * terminating network if exchanged via SIP signalling, as recorded in the
 * Inter Operator Identifier (IOI) AVP as described in TS 32.299 [50]. It may
 * occur several times in one CDR. For further information on the IOI
 * exchange via SIP signalling please refer to TS 24.229 [210].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.26.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterOperatorIdentifierList  ::=  SEQUENCE  OF
 *    InterOperatorIdentifiers
 * ```
 */
export
type InterOperatorIdentifierList = InterOperatorIdentifiers[]; // SequenceOfType

let _cached_decoder_for_InterOperatorIdentifierList: $.ASN1Decoder<InterOperatorIdentifierList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InterOperatorIdentifierList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InterOperatorIdentifierList (el: _Element): InterOperatorIdentifierList {
    if (!_cached_decoder_for_InterOperatorIdentifierList) { _cached_decoder_for_InterOperatorIdentifierList = $._decodeSequenceOf<InterOperatorIdentifiers>(() => _decode_InterOperatorIdentifiers); }
    return _cached_decoder_for_InterOperatorIdentifierList(el);
}

let _cached_encoder_for_InterOperatorIdentifierList: $.ASN1Encoder<InterOperatorIdentifierList> | null = null;

/**
 * @summary Encodes a(n) InterOperatorIdentifierList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterOperatorIdentifierList, encoded as an ASN.1 Element.
 */
export
function _encode_InterOperatorIdentifierList (value: InterOperatorIdentifierList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InterOperatorIdentifierList) { _cached_encoder_for_InterOperatorIdentifierList = $._encodeSequenceOf<InterOperatorIdentifiers>(() => _encode_InterOperatorIdentifiers, $.BER); }
    return _cached_encoder_for_InterOperatorIdentifierList(value, elGetter);
}


/* eslint-enable */
