/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_PartyToBeCharged, _encode_PartyToBeCharged, _enum_for_PartyToBeCharged, PartyToBeCharged } from "../IN-SCF-SCF-datatypes/PartyToBeCharged.ta.mjs";
// export { PartyToBeCharged, _enum_for_PartyToBeCharged, PartyToBeCharged_orignating /* IMPORTED_LONG_ENUMERATION_ITEM */, orignating /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartyToBeCharged_terminating /* IMPORTED_LONG_ENUMERATION_ITEM */, terminating /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PartyToBeCharged, _encode_PartyToBeCharged } from "../IN-SCF-SCF-datatypes/PartyToBeCharged.ta.mjs";


/**
 * @summary ChargingSignallingInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingSignallingInformation ::= SEQUENCE {
 *   partyToBeCharged  PartyToBeCharged,
 *   percentage        INTEGER(0..100)
 * }
 * ```
 * 
 * @class
 */
export
class ChargingSignallingInformation {
    /**
     * @summary `partyToBeCharged`.
     * @public
     * @readonly
     */
    readonly partyToBeCharged: PartyToBeCharged;
    /**
     * @summary `percentage`.
     * @public
     * @readonly
     */
    readonly percentage: INTEGER;

    constructor (
        partyToBeCharged: PartyToBeCharged,
        percentage: INTEGER
    ) {
        this.partyToBeCharged = partyToBeCharged;
        this.percentage = percentage;
    }

    /**
     * @summary Restructures an object into a ChargingSignallingInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ChargingSignallingInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargingSignallingInformation`.
     * @returns {ChargingSignallingInformation}
     */
    public static _from_object (_o: { [_K in keyof (ChargingSignallingInformation)]: (ChargingSignallingInformation)[_K] }): ChargingSignallingInformation {
        return new ChargingSignallingInformation(_o.partyToBeCharged, _o.percentage);
    }

        /**
         * @summary The enum used as the type of the component `partyToBeCharged`
         * @public
         * @static
         */

    public static _enum_for_partyToBeCharged = _enum_for_PartyToBeCharged;
}

/**
 * @summary The Leading Root Component Types of ChargingSignallingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargingSignallingInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("partyToBeCharged", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("percentage", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of ChargingSignallingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargingSignallingInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargingSignallingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargingSignallingInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargingSignallingInformation: $.ASN1Decoder<ChargingSignallingInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingSignallingInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingSignallingInformation (el: _Element): ChargingSignallingInformation {
    if (!_cached_decoder_for_ChargingSignallingInformation) { _cached_decoder_for_ChargingSignallingInformation = function (el: _Element): ChargingSignallingInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ChargingSignallingInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "partyToBeCharged";
    sequence[1].name = "percentage";
    const partyToBeCharged: PartyToBeCharged = _decode_PartyToBeCharged(sequence[0]);
    const percentage: INTEGER = $._decodeInteger(sequence[1]);
    return new ChargingSignallingInformation(
        partyToBeCharged,
        percentage,

    );
}; }
    return _cached_decoder_for_ChargingSignallingInformation(el);
}

let _cached_encoder_for_ChargingSignallingInformation: $.ASN1Encoder<ChargingSignallingInformation> | null = null;

/**
 * @summary Encodes a(n) ChargingSignallingInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingSignallingInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingSignallingInformation (value: ChargingSignallingInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingSignallingInformation) { _cached_encoder_for_ChargingSignallingInformation = function (value: ChargingSignallingInformation, elGetter: $.ASN1Encoder<ChargingSignallingInformation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_PartyToBeCharged(value.partyToBeCharged, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.percentage, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ChargingSignallingInformation(value, elGetter);
}


/* eslint-enable */
