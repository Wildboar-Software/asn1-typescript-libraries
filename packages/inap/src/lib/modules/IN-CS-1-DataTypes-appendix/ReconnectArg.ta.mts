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
 * @summary ReconnectArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReconnectArg ::= SEQUENCE {
 *   callID     [0]  CallID OPTIONAL,
 *   heldLegID  [1]  LegID
 * }
 * ```
 * 
 * @class
 */
export
class ReconnectArg {
    /**
     * @summary `callID`.
     * @public
     * @readonly
     */
    readonly callID: OPTIONAL<CallID>;
    /**
     * @summary `heldLegID`.
     * @public
     * @readonly
     */
    readonly heldLegID: LegID;

    constructor (
        callID: OPTIONAL<CallID>,
        heldLegID: LegID
    ) {
        this.callID = callID;
        this.heldLegID = heldLegID;
    }

    /**
     * @summary Restructures an object into a ReconnectArg
     * @description
     * 
     * This takes an `object` and converts it to a `ReconnectArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReconnectArg`.
     * @returns {ReconnectArg}
     */
    public static _from_object (_o: { [_K in keyof (ReconnectArg)]: (ReconnectArg)[_K] }): ReconnectArg {
        return new ReconnectArg(_o.callID, _o.heldLegID);
    }


}

/**
 * @summary The Leading Root Component Types of ReconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReconnectArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("heldLegID", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReconnectArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReconnectArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReconnectArg: $.ASN1Decoder<ReconnectArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReconnectArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReconnectArg (el: _Element): ReconnectArg {
    if (!_cached_decoder_for_ReconnectArg) { _cached_decoder_for_ReconnectArg = function (el: _Element): ReconnectArg {
    let callID: OPTIONAL<CallID>;
    let heldLegID!: LegID;
    const callbacks: $.DecodingMap = {
        "callID": (_el: _Element): void => { callID = $._decode_implicit<CallID>(() => _decode_CallID)(_el); },
        "heldLegID": (_el: _Element): void => { heldLegID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReconnectArg,
        _extension_additions_list_spec_for_ReconnectArg,
        _root_component_type_list_2_spec_for_ReconnectArg,
        undefined,
    );
    return new ReconnectArg(
        callID,
        heldLegID
    );
}; }
    return _cached_decoder_for_ReconnectArg(el);
}

let _cached_encoder_for_ReconnectArg: $.ASN1Encoder<ReconnectArg> | null = null;

/**
 * @summary Encodes a(n) ReconnectArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReconnectArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReconnectArg (value: ReconnectArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReconnectArg) { _cached_encoder_for_ReconnectArg = function (value: ReconnectArg, elGetter: $.ASN1Encoder<ReconnectArg>): _Element {
    const _components: _Element[] = [];
    if (value.callID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CallID, $.BER)(value.callID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER)(value.heldLegID, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReconnectArg(value, elGetter);
}


/* eslint-enable */
