/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
import { Reason, _decode_Reason, _encode_Reason } from "../IN-CS3-SSF-SCF-datatypes/Reason.ta.mjs";
// export { Reason, _decode_Reason, _encode_Reason } from "../IN-CS3-SSF-SCF-datatypes/Reason.ta.mjs";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-CS3-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS3-SSF-SCF-datatypes/Cause.ta.mjs";


/**
 * @summary EntityReleasedArg_cSFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityReleasedArg-cSFailure ::=
 * SEQUENCE {
 *   callSegmentID [0] CallSegmentID,
 *   reason [1] Reason OPTIONAL,
 *   cause [2] Cause OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EntityReleasedArg_cSFailure {
    /**
     * @summary `callSegmentID`.
     * @public
     * @readonly
     */
    readonly callSegmentID: CallSegmentID;
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
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        callSegmentID: CallSegmentID,
        reason?: OPTIONAL<Reason>,
        cause?: OPTIONAL<Cause>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.callSegmentID = callSegmentID;
        this.reason = reason;
        this.cause = cause;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EntityReleasedArg_cSFailure
     * @description
     * 
     * This takes an `object` and converts it to a `EntityReleasedArg_cSFailure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntityReleasedArg_cSFailure`.
     * @returns {EntityReleasedArg_cSFailure}
     */
    public static _from_object (_o: { [_K in keyof (EntityReleasedArg_cSFailure)]: (EntityReleasedArg_cSFailure)[_K] }): EntityReleasedArg_cSFailure {
        return new EntityReleasedArg_cSFailure(_o.callSegmentID, _o.reason, _o.cause, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EntityReleasedArg_cSFailure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntityReleasedArg_cSFailure: $.ComponentSpec[] = [
    new $.ComponentSpec("callSegmentID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("reason", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EntityReleasedArg_cSFailure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntityReleasedArg_cSFailure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntityReleasedArg_cSFailure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntityReleasedArg_cSFailure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntityReleasedArg_cSFailure: $.ASN1Decoder<EntityReleasedArg_cSFailure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntityReleasedArg_cSFailure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntityReleasedArg_cSFailure (el: _Element): EntityReleasedArg_cSFailure {
    if (!_cached_decoder_for_EntityReleasedArg_cSFailure) { _cached_decoder_for_EntityReleasedArg_cSFailure = function (el: _Element): EntityReleasedArg_cSFailure {
    let callSegmentID!: CallSegmentID;
    let reason: OPTIONAL<Reason>;
    let cause: OPTIONAL<Cause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "reason": (_el: _Element): void => { reason = $._decode_implicit<Reason>(() => _decode_Reason)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EntityReleasedArg_cSFailure,
        _extension_additions_list_spec_for_EntityReleasedArg_cSFailure,
        _root_component_type_list_2_spec_for_EntityReleasedArg_cSFailure,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EntityReleasedArg_cSFailure(
        callSegmentID,
        reason,
        cause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EntityReleasedArg_cSFailure(el);
}

let _cached_encoder_for_EntityReleasedArg_cSFailure: $.ASN1Encoder<EntityReleasedArg_cSFailure> | null = null;

/**
 * @summary Encodes a(n) EntityReleasedArg_cSFailure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityReleasedArg_cSFailure, encoded as an ASN.1 Element.
 */
export
function _encode_EntityReleasedArg_cSFailure (value: EntityReleasedArg_cSFailure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntityReleasedArg_cSFailure) { _cached_encoder_for_EntityReleasedArg_cSFailure = function (value: EntityReleasedArg_cSFailure, elGetter: $.ASN1Encoder<EntityReleasedArg_cSFailure>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER);
    if (value.reason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Reason, $.BER)(value.reason, $.BER);
    }
    if (value.cause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Cause, $.BER)(value.cause, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EntityReleasedArg_cSFailure(value, elGetter);
}


/* eslint-enable */
