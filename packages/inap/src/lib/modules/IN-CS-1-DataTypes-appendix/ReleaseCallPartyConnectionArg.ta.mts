/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
import { type CallID, _decode_CallID, _encode_CallID } from "../IN-CS-1-DataTypes-appendix/CallID.ta.mjs";
// export { CallID, _decode_CallID, _encode_CallID } from "../IN-CS-1-DataTypes-appendix/CallID.ta.mjs";
import { type Cause, _decode_Cause, _encode_Cause } from "../IN-CS-1-DataTypes-appendix/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS-1-DataTypes-appendix/Cause.ta.mjs";


/**
 * @summary ReleaseCallPartyConnectionArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseCallPartyConnectionArg ::= SEQUENCE {
 *   legToBeReleased  [0]  LegID,
 *   callID           [1]  CallID OPTIONAL,
 *   releaseCause     [2]  Cause OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ReleaseCallPartyConnectionArg {
    /**
     * @summary `legToBeReleased`.
     * @public
     * @readonly
     */
    readonly legToBeReleased: LegID;
    /**
     * @summary `callID`.
     * @public
     * @readonly
     */
    readonly callID: OPTIONAL<CallID>;
    /**
     * @summary `releaseCause`.
     * @public
     * @readonly
     */
    readonly releaseCause: OPTIONAL<Cause>;

    constructor (
        legToBeReleased: LegID,
        callID?: OPTIONAL<CallID>,
        releaseCause?: OPTIONAL<Cause>
    ) {
        this.legToBeReleased = legToBeReleased;
        this.callID = callID;
        this.releaseCause = releaseCause;
    }

    /**
     * @summary Restructures an object into a ReleaseCallPartyConnectionArg
     * @description
     * 
     * This takes an `object` and converts it to a `ReleaseCallPartyConnectionArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReleaseCallPartyConnectionArg`.
     * @returns {ReleaseCallPartyConnectionArg}
     */
    public static _from_object (_o: { [_K in keyof (ReleaseCallPartyConnectionArg)]: (ReleaseCallPartyConnectionArg)[_K] }): ReleaseCallPartyConnectionArg {
        return new ReleaseCallPartyConnectionArg(_o.legToBeReleased, _o.callID, _o.releaseCause);
    }


}

/**
 * @summary The Leading Root Component Types of ReleaseCallPartyConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReleaseCallPartyConnectionArg: $.ComponentSpec[] = [
    new $.ComponentSpec("legToBeReleased", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ReleaseCallPartyConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReleaseCallPartyConnectionArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReleaseCallPartyConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReleaseCallPartyConnectionArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReleaseCallPartyConnectionArg: $.ASN1Decoder<ReleaseCallPartyConnectionArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseCallPartyConnectionArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReleaseCallPartyConnectionArg (el: _Element): ReleaseCallPartyConnectionArg {
    if (!_cached_decoder_for_ReleaseCallPartyConnectionArg) { _cached_decoder_for_ReleaseCallPartyConnectionArg = function (el: _Element): ReleaseCallPartyConnectionArg {
    let legToBeReleased!: LegID;
    let callID: OPTIONAL<CallID>;
    let releaseCause: OPTIONAL<Cause>;
    const callbacks: $.DecodingMap = {
        "legToBeReleased": (_el: _Element): void => { legToBeReleased = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "callID": (_el: _Element): void => { callID = $._decode_implicit<CallID>(() => _decode_CallID)(_el); },
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReleaseCallPartyConnectionArg,
        _extension_additions_list_spec_for_ReleaseCallPartyConnectionArg,
        _root_component_type_list_2_spec_for_ReleaseCallPartyConnectionArg,
        undefined,
    );
    return new ReleaseCallPartyConnectionArg(
        legToBeReleased,
        callID,
        releaseCause
    );
}; }
    return _cached_decoder_for_ReleaseCallPartyConnectionArg(el);
}

let _cached_encoder_for_ReleaseCallPartyConnectionArg: $.ASN1Encoder<ReleaseCallPartyConnectionArg> | null = null;

/**
 * @summary Encodes a(n) ReleaseCallPartyConnectionArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseCallPartyConnectionArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReleaseCallPartyConnectionArg (value: ReleaseCallPartyConnectionArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReleaseCallPartyConnectionArg) { _cached_encoder_for_ReleaseCallPartyConnectionArg = function (value: ReleaseCallPartyConnectionArg, elGetter: $.ASN1Encoder<ReleaseCallPartyConnectionArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER)(value.legToBeReleased, $.BER));
    if (value.callID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallID, $.BER)(value.callID, $.BER));
    }
    if (value.releaseCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Cause, $.BER)(value.releaseCause, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReleaseCallPartyConnectionArg(value, elGetter);
}


/* eslint-enable */
