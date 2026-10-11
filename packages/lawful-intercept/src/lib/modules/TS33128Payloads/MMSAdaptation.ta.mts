/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSAdaptation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSAdaptation ::= SEQUENCE
 * {
 *     allowed   [1] BOOLEAN,
 *     overriden [2] BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class MMSAdaptation {
    /**
     * @summary `allowed`.
     * @public
     * @readonly
     */
    readonly allowed: BOOLEAN;
    /**
     * @summary `overriden`.
     * @public
     * @readonly
     */
    readonly overriden: BOOLEAN;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        allowed: BOOLEAN,
        overriden: BOOLEAN,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.allowed = allowed;
        this.overriden = overriden;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMSAdaptation
     * @description
     * 
     * This takes an `object` and converts it to a `MMSAdaptation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSAdaptation`.
     * @returns {MMSAdaptation}
     */
    public static _from_object (_o: { [_K in keyof (MMSAdaptation)]: (MMSAdaptation)[_K] }): MMSAdaptation {
        return new MMSAdaptation(_o.allowed, _o.overriden, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MMSAdaptation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSAdaptation: $.ComponentSpec[] = [
    new $.ComponentSpec("allowed", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("overriden", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MMSAdaptation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSAdaptation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSAdaptation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSAdaptation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSAdaptation: $.ASN1Decoder<MMSAdaptation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSAdaptation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSAdaptation (el: _Element): MMSAdaptation {
    if (!_cached_decoder_for_MMSAdaptation) { _cached_decoder_for_MMSAdaptation = function (el: _Element): MMSAdaptation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MMSAdaptation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "allowed";
    sequence[1].name = "overriden";
    let allowed!: BOOLEAN;
    let overriden!: BOOLEAN;
    allowed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[0]);
    overriden = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[1]);
    return new MMSAdaptation(
        allowed,
        overriden,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_MMSAdaptation(el);
}

let _cached_encoder_for_MMSAdaptation: $.ASN1Encoder<MMSAdaptation> | null = null;

/**
 * @summary Encodes a(n) MMSAdaptation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSAdaptation, encoded as an ASN.1 Element.
 */
export
function _encode_MMSAdaptation (value: MMSAdaptation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSAdaptation) { _cached_encoder_for_MMSAdaptation = function (value: MMSAdaptation, _elGetter: $.ASN1Encoder<MMSAdaptation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.allowed, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.overriden, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSAdaptation(value, elGetter);
}


/* eslint-enable */
