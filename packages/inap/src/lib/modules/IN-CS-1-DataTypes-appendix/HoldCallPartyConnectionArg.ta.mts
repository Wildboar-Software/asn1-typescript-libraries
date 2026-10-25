/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CallID, _decode_CallID, _encode_CallID } from "../IN-CS-1-DataTypes-appendix/CallID.ta.mjs";
// export { CallID, _decode_CallID, _encode_CallID } from "../IN-CS-1-DataTypes-appendix/CallID.ta.mjs";
import { type LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";


/**
 * @summary HoldCallPartyConnectionArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HoldCallPartyConnectionArg ::= SEQUENCE {
 *   callID  [0]  CallID OPTIONAL,
 *   legID   [1]  LegID
 * }
 * ```
 * 
 * @class
 */
export
class HoldCallPartyConnectionArg {
    /**
     * @summary `callID`.
     * @public
     * @readonly
     */
    readonly callID: OPTIONAL<CallID>;
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: LegID;

    constructor (
        callID: OPTIONAL<CallID>,
        legID: LegID
    ) {
        this.callID = callID;
        this.legID = legID;
    }

    /**
     * @summary Restructures an object into a HoldCallPartyConnectionArg
     * @description
     * 
     * This takes an `object` and converts it to a `HoldCallPartyConnectionArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HoldCallPartyConnectionArg`.
     * @returns {HoldCallPartyConnectionArg}
     */
    public static _from_object (_o: { [_K in keyof (HoldCallPartyConnectionArg)]: (HoldCallPartyConnectionArg)[_K] }): HoldCallPartyConnectionArg {
        return new HoldCallPartyConnectionArg(_o.callID, _o.legID);
    }


}

/**
 * @summary The Leading Root Component Types of HoldCallPartyConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HoldCallPartyConnectionArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("legID", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of HoldCallPartyConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HoldCallPartyConnectionArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HoldCallPartyConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HoldCallPartyConnectionArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HoldCallPartyConnectionArg: $.ASN1Decoder<HoldCallPartyConnectionArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HoldCallPartyConnectionArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HoldCallPartyConnectionArg (el: _Element): HoldCallPartyConnectionArg {
    if (!_cached_decoder_for_HoldCallPartyConnectionArg) { _cached_decoder_for_HoldCallPartyConnectionArg = function (el: _Element): HoldCallPartyConnectionArg {
    let callID: OPTIONAL<CallID>;
    let legID!: LegID;
    const callbacks: $.DecodingMap = {
        "callID": (_el: _Element): void => { callID = $._decode_implicit<CallID>(() => _decode_CallID)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HoldCallPartyConnectionArg,
        _extension_additions_list_spec_for_HoldCallPartyConnectionArg,
        _root_component_type_list_2_spec_for_HoldCallPartyConnectionArg,
        undefined,
    );
    return new HoldCallPartyConnectionArg(
        callID,
        legID
    );
}; }
    return _cached_decoder_for_HoldCallPartyConnectionArg(el);
}

let _cached_encoder_for_HoldCallPartyConnectionArg: $.ASN1Encoder<HoldCallPartyConnectionArg> | null = null;

/**
 * @summary Encodes a(n) HoldCallPartyConnectionArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldCallPartyConnectionArg, encoded as an ASN.1 Element.
 */
export
function _encode_HoldCallPartyConnectionArg (value: HoldCallPartyConnectionArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HoldCallPartyConnectionArg) { _cached_encoder_for_HoldCallPartyConnectionArg = function (value: HoldCallPartyConnectionArg, elGetter: $.ASN1Encoder<HoldCallPartyConnectionArg>): _Element {
    const _components: _Element[] = [];
    if (value.callID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CallID, $.BER)(value.callID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER)(value.legID, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_HoldCallPartyConnectionArg(value, elGetter);
}


/* eslint-enable */
