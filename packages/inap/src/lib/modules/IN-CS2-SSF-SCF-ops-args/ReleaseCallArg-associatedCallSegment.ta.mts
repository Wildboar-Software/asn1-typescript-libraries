/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";


/**
 * @summary ReleaseCallArg_associatedCallSegment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseCallArg-associatedCallSegment ::=
 * SEQUENCE {
 *   callSegment [0] INTEGER,
 *   releaseCause [1] Cause OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ReleaseCallArg_associatedCallSegment {
    /**
     * @summary `callSegment`.
     * @public
     * @readonly
     */
    readonly callSegment: INTEGER;
    /**
     * @summary `releaseCause`.
     * @public
     * @readonly
     */
    readonly releaseCause: OPTIONAL<Cause>;

    constructor (
        callSegment: INTEGER,
        releaseCause: OPTIONAL<Cause>
    ) {
        this.callSegment = callSegment;
        this.releaseCause = releaseCause;
    }

    /**
     * @summary Restructures an object into a ReleaseCallArg_associatedCallSegment
     * @description
     * 
     * This takes an `object` and converts it to a `ReleaseCallArg_associatedCallSegment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReleaseCallArg_associatedCallSegment`.
     * @returns {ReleaseCallArg_associatedCallSegment}
     */
    public static _from_object (_o: { [_K in keyof (ReleaseCallArg_associatedCallSegment)]: (ReleaseCallArg_associatedCallSegment)[_K] }): ReleaseCallArg_associatedCallSegment {
        return new ReleaseCallArg_associatedCallSegment(_o.callSegment, _o.releaseCause);
    }


}

/**
 * @summary The Leading Root Component Types of ReleaseCallArg_associatedCallSegment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReleaseCallArg_associatedCallSegment: $.ComponentSpec[] = [
    new $.ComponentSpec("callSegment", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReleaseCallArg_associatedCallSegment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReleaseCallArg_associatedCallSegment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReleaseCallArg_associatedCallSegment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReleaseCallArg_associatedCallSegment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReleaseCallArg_associatedCallSegment: $.ASN1Decoder<ReleaseCallArg_associatedCallSegment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseCallArg_associatedCallSegment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReleaseCallArg_associatedCallSegment (el: _Element): ReleaseCallArg_associatedCallSegment {
    if (!_cached_decoder_for_ReleaseCallArg_associatedCallSegment) { _cached_decoder_for_ReleaseCallArg_associatedCallSegment = function (el: _Element): ReleaseCallArg_associatedCallSegment {
    let callSegment!: INTEGER;
    let releaseCause: OPTIONAL<Cause>;
    const callbacks: $.DecodingMap = {
        "callSegment": (_el: _Element): void => { callSegment = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReleaseCallArg_associatedCallSegment,
        _extension_additions_list_spec_for_ReleaseCallArg_associatedCallSegment,
        _root_component_type_list_2_spec_for_ReleaseCallArg_associatedCallSegment,
        undefined,
    );
    return new ReleaseCallArg_associatedCallSegment(
        callSegment,
        releaseCause
    );
}; }
    return _cached_decoder_for_ReleaseCallArg_associatedCallSegment(el);
}

let _cached_encoder_for_ReleaseCallArg_associatedCallSegment: $.ASN1Encoder<ReleaseCallArg_associatedCallSegment> | null = null;

/**
 * @summary Encodes a(n) ReleaseCallArg_associatedCallSegment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseCallArg_associatedCallSegment, encoded as an ASN.1 Element.
 */
export
function _encode_ReleaseCallArg_associatedCallSegment (value: ReleaseCallArg_associatedCallSegment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReleaseCallArg_associatedCallSegment) { _cached_encoder_for_ReleaseCallArg_associatedCallSegment = function (value: ReleaseCallArg_associatedCallSegment, elGetter: $.ASN1Encoder<ReleaseCallArg_associatedCallSegment>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.callSegment, $.BER));
    if (value.releaseCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Cause, $.BER)(value.releaseCause, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReleaseCallArg_associatedCallSegment(value, elGetter);
}


/* eslint-enable */
