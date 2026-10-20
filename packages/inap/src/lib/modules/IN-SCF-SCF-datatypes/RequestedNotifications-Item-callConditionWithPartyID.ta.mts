/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallConditions, _decode_CallConditions, _encode_CallConditions } from "../IN-SCF-SCF-datatypes/CallConditions.ta.mjs";
// export { CallConditions, _decode_CallConditions, _encode_CallConditions } from "../IN-SCF-SCF-datatypes/CallConditions.ta.mjs";
import { PartyID, _decode_PartyID, _encode_PartyID } from "../IN-SCF-SCF-datatypes/PartyID.ta.mjs";
// export { PartyID, _decode_PartyID, _encode_PartyID } from "../IN-SCF-SCF-datatypes/PartyID.ta.mjs";


/**
 * @summary RequestedNotifications_Item_callConditionWithPartyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedNotifications-Item-callConditionWithPartyID ::=
 * SEQUENCE {
 *   callCondition CallConditions,
 *   partyID [9] PartyID
 * }
 * ```
 * 
 * @class
 */
export
class RequestedNotifications_Item_callConditionWithPartyID {
    /**
     * @summary `callCondition`.
     * @public
     * @readonly
     */
    readonly callCondition: CallConditions;
    /**
     * @summary `partyID`.
     * @public
     * @readonly
     */
    readonly partyID: PartyID;

    constructor (
        callCondition: CallConditions,
        partyID: PartyID
    ) {
        this.callCondition = callCondition;
        this.partyID = partyID;
    }

    /**
     * @summary Restructures an object into a RequestedNotifications_Item_callConditionWithPartyID
     * @description
     * 
     * This takes an `object` and converts it to a `RequestedNotifications_Item_callConditionWithPartyID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestedNotifications_Item_callConditionWithPartyID`.
     * @returns {RequestedNotifications_Item_callConditionWithPartyID}
     */
    public static _from_object (_o: { [_K in keyof (RequestedNotifications_Item_callConditionWithPartyID)]: (RequestedNotifications_Item_callConditionWithPartyID)[_K] }): RequestedNotifications_Item_callConditionWithPartyID {
        return new RequestedNotifications_Item_callConditionWithPartyID(_o.callCondition, _o.partyID);
    }


}

/**
 * @summary The Leading Root Component Types of RequestedNotifications_Item_callConditionWithPartyID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestedNotifications_Item_callConditionWithPartyID: $.ComponentSpec[] = [
    new $.ComponentSpec("callCondition", false, $.hasAnyTag),
    new $.ComponentSpec("partyID", false, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of RequestedNotifications_Item_callConditionWithPartyID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestedNotifications_Item_callConditionWithPartyID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestedNotifications_Item_callConditionWithPartyID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestedNotifications_Item_callConditionWithPartyID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestedNotifications_Item_callConditionWithPartyID: $.ASN1Decoder<RequestedNotifications_Item_callConditionWithPartyID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedNotifications_Item_callConditionWithPartyID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedNotifications_Item_callConditionWithPartyID (el: _Element): RequestedNotifications_Item_callConditionWithPartyID {
    if (!_cached_decoder_for_RequestedNotifications_Item_callConditionWithPartyID) { _cached_decoder_for_RequestedNotifications_Item_callConditionWithPartyID = function (el: _Element): RequestedNotifications_Item_callConditionWithPartyID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RequestedNotifications-Item-callConditionWithPartyID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "callCondition";
    sequence[1].name = "partyID";
    let callCondition!: CallConditions;
    let partyID!: PartyID;
    callCondition = _decode_CallConditions(sequence[0]);
    partyID = $._decode_implicit<PartyID>(() => _decode_PartyID)(sequence[1]);
    return new RequestedNotifications_Item_callConditionWithPartyID(
        callCondition,
        partyID,

    );
}; }
    return _cached_decoder_for_RequestedNotifications_Item_callConditionWithPartyID(el);
}

let _cached_encoder_for_RequestedNotifications_Item_callConditionWithPartyID: $.ASN1Encoder<RequestedNotifications_Item_callConditionWithPartyID> | null = null;

/**
 * @summary Encodes a(n) RequestedNotifications_Item_callConditionWithPartyID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedNotifications_Item_callConditionWithPartyID, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedNotifications_Item_callConditionWithPartyID (value: RequestedNotifications_Item_callConditionWithPartyID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedNotifications_Item_callConditionWithPartyID) { _cached_encoder_for_RequestedNotifications_Item_callConditionWithPartyID = function (value: RequestedNotifications_Item_callConditionWithPartyID, elGetter: $.ASN1Encoder<RequestedNotifications_Item_callConditionWithPartyID>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_CallConditions(value.callCondition, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_PartyID, $.BER)(value.partyID, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RequestedNotifications_Item_callConditionWithPartyID(value, elGetter);
}


/* eslint-enable */
