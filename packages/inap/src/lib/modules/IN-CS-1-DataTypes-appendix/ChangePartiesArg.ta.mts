/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallID, _decode_CallID, _encode_CallID } from "../IN-CS-1-DataTypes-appendix/CallID.ta.mjs";
// export { CallID, _decode_CallID, _encode_CallID } from "../IN-CS-1-DataTypes-appendix/CallID.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";


/**
 * @summary ChangePartiesArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangePartiesArg ::= SEQUENCE {
 *   callID              [0]  CallID OPTIONAL,
 *   targetCallID        [1]  CallID,
 *   legToBeConnectedID  [2]  LegID
 * }
 * ```
 * 
 * @class
 */
export
class ChangePartiesArg {
    /**
     * @summary `callID`.
     * @public
     * @readonly
     */
    readonly callID: OPTIONAL<CallID>;
    /**
     * @summary `targetCallID`.
     * @public
     * @readonly
     */
    readonly targetCallID: CallID;
    /**
     * @summary `legToBeConnectedID`.
     * @public
     * @readonly
     */
    readonly legToBeConnectedID: LegID;

    constructor (
        callID: OPTIONAL<CallID>,
        targetCallID: CallID,
        legToBeConnectedID: LegID
    ) {
        this.callID = callID;
        this.targetCallID = targetCallID;
        this.legToBeConnectedID = legToBeConnectedID;
    }

    /**
     * @summary Restructures an object into a ChangePartiesArg
     * @description
     * 
     * This takes an `object` and converts it to a `ChangePartiesArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangePartiesArg`.
     * @returns {ChangePartiesArg}
     */
    public static _from_object (_o: { [_K in keyof (ChangePartiesArg)]: (ChangePartiesArg)[_K] }): ChangePartiesArg {
        return new ChangePartiesArg(_o.callID, _o.targetCallID, _o.legToBeConnectedID);
    }


}

/**
 * @summary The Leading Root Component Types of ChangePartiesArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangePartiesArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("targetCallID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("legToBeConnectedID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ChangePartiesArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangePartiesArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangePartiesArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangePartiesArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangePartiesArg: $.ASN1Decoder<ChangePartiesArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangePartiesArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangePartiesArg (el: _Element): ChangePartiesArg {
    if (!_cached_decoder_for_ChangePartiesArg) { _cached_decoder_for_ChangePartiesArg = function (el: _Element): ChangePartiesArg {
    let callID: OPTIONAL<CallID>;
    let targetCallID!: CallID;
    let legToBeConnectedID!: LegID;
    const callbacks: $.DecodingMap = {
        "callID": (_el: _Element): void => { callID = $._decode_implicit<CallID>(() => _decode_CallID)(_el); },
        "targetCallID": (_el: _Element): void => { targetCallID = $._decode_implicit<CallID>(() => _decode_CallID)(_el); },
        "legToBeConnectedID": (_el: _Element): void => { legToBeConnectedID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangePartiesArg,
        _extension_additions_list_spec_for_ChangePartiesArg,
        _root_component_type_list_2_spec_for_ChangePartiesArg,
        undefined,
    );
    return new ChangePartiesArg(
        callID,
        targetCallID,
        legToBeConnectedID
    );
}; }
    return _cached_decoder_for_ChangePartiesArg(el);
}

let _cached_encoder_for_ChangePartiesArg: $.ASN1Encoder<ChangePartiesArg> | null = null;

/**
 * @summary Encodes a(n) ChangePartiesArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangePartiesArg, encoded as an ASN.1 Element.
 */
export
function _encode_ChangePartiesArg (value: ChangePartiesArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangePartiesArg) { _cached_encoder_for_ChangePartiesArg = function (value: ChangePartiesArg, elGetter: $.ASN1Encoder<ChangePartiesArg>): _Element {
    const _components: _Element[] = [];
    if (value.callID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CallID, $.BER)(value.callID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallID, $.BER)(value.targetCallID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER)(value.legToBeConnectedID, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChangePartiesArg(value, elGetter);
}


/* eslint-enable */
