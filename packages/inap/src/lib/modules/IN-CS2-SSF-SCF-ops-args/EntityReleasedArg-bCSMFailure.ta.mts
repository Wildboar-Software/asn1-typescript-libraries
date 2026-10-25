/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
import { type Reason, _decode_Reason, _encode_Reason } from "../IN-CS2-datatypes/Reason.ta.mjs";
// export { Reason, _decode_Reason, _encode_Reason } from "../IN-CS2-datatypes/Reason.ta.mjs";
import { type Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";


/**
 * @summary EntityReleasedArg_bCSMFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityReleasedArg-bCSMFailure ::=
 * SEQUENCE {
 *   legID [0] LegID,
 *   reason [1] Reason OPTIONAL,
 *   cause [2] Cause OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EntityReleasedArg_bCSMFailure {
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: LegID;
    /**
     * @summary `reason`.
     * @public
     * @readonly
     */
    readonly reason: OPTIONAL<Reason>;
    /**
     * @summary `cause`.
     * @public
     * @readonly
     */
    readonly cause: OPTIONAL<Cause>;

    constructor (
        legID: LegID,
        reason?: OPTIONAL<Reason>,
        cause?: OPTIONAL<Cause>
    ) {
        this.legID = legID;
        this.reason = reason;
        this.cause = cause;
    }

    /**
     * @summary Restructures an object into a EntityReleasedArg_bCSMFailure
     * @description
     * 
     * This takes an `object` and converts it to a `EntityReleasedArg_bCSMFailure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntityReleasedArg_bCSMFailure`.
     * @returns {EntityReleasedArg_bCSMFailure}
     */
    public static _from_object (_o: { [_K in keyof (EntityReleasedArg_bCSMFailure)]: (EntityReleasedArg_bCSMFailure)[_K] }): EntityReleasedArg_bCSMFailure {
        return new EntityReleasedArg_bCSMFailure(_o.legID, _o.reason, _o.cause);
    }


}

/**
 * @summary The Leading Root Component Types of EntityReleasedArg_bCSMFailure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntityReleasedArg_bCSMFailure: $.ComponentSpec[] = [
    new $.ComponentSpec("legID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("reason", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EntityReleasedArg_bCSMFailure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntityReleasedArg_bCSMFailure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntityReleasedArg_bCSMFailure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntityReleasedArg_bCSMFailure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntityReleasedArg_bCSMFailure: $.ASN1Decoder<EntityReleasedArg_bCSMFailure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntityReleasedArg_bCSMFailure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntityReleasedArg_bCSMFailure (el: _Element): EntityReleasedArg_bCSMFailure {
    if (!_cached_decoder_for_EntityReleasedArg_bCSMFailure) { _cached_decoder_for_EntityReleasedArg_bCSMFailure = function (el: _Element): EntityReleasedArg_bCSMFailure {
    let legID!: LegID;
    let reason: OPTIONAL<Reason>;
    let cause: OPTIONAL<Cause>;
    const callbacks: $.DecodingMap = {
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "reason": (_el: _Element): void => { reason = $._decode_implicit<Reason>(() => _decode_Reason)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EntityReleasedArg_bCSMFailure,
        _extension_additions_list_spec_for_EntityReleasedArg_bCSMFailure,
        _root_component_type_list_2_spec_for_EntityReleasedArg_bCSMFailure,
        undefined,
    );
    return new EntityReleasedArg_bCSMFailure(
        legID,
        reason,
        cause
    );
}; }
    return _cached_decoder_for_EntityReleasedArg_bCSMFailure(el);
}

let _cached_encoder_for_EntityReleasedArg_bCSMFailure: $.ASN1Encoder<EntityReleasedArg_bCSMFailure> | null = null;

/**
 * @summary Encodes a(n) EntityReleasedArg_bCSMFailure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityReleasedArg_bCSMFailure, encoded as an ASN.1 Element.
 */
export
function _encode_EntityReleasedArg_bCSMFailure (value: EntityReleasedArg_bCSMFailure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntityReleasedArg_bCSMFailure) { _cached_encoder_for_EntityReleasedArg_bCSMFailure = function (value: EntityReleasedArg_bCSMFailure, elGetter: $.ASN1Encoder<EntityReleasedArg_bCSMFailure>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER)(value.legID, $.BER));
    if (value.reason !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Reason, $.BER)(value.reason, $.BER));
    }
    if (value.cause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Cause, $.BER)(value.cause, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EntityReleasedArg_bCSMFailure(value, elGetter);
}


/* eslint-enable */
