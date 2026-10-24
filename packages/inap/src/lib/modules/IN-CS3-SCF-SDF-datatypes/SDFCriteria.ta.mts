/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";


/**
 * @summary SDFCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SDFCriteria ::= SEQUENCE {object  [0] IMPLICIT DistinguishedName,
 *                           ...
 * }
 * ```
 * 
 * @class
 */
export
class SDFCriteria {
    /**
     * @summary `object`.
     * @public
     * @readonly
     */
    readonly object: DistinguishedName;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        object: DistinguishedName,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.object = object;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SDFCriteria
     * @description
     * 
     * This takes an `object` and converts it to a `SDFCriteria`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SDFCriteria`.
     * @returns {SDFCriteria}
     */
    public static _from_object (_o: { [_K in keyof (SDFCriteria)]: (SDFCriteria)[_K] }): SDFCriteria {
        return new SDFCriteria(_o.object, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SDFCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SDFCriteria: $.ComponentSpec[] = [
    new $.ComponentSpec("object", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of SDFCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SDFCriteria: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SDFCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SDFCriteria: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SDFCriteria: $.ASN1Decoder<SDFCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SDFCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SDFCriteria (el: _Element): SDFCriteria {
    if (!_cached_decoder_for_SDFCriteria) { _cached_decoder_for_SDFCriteria = function (el: _Element): SDFCriteria {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("SDFCriteria contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "object";
    const object: DistinguishedName = $._decode_implicit<DistinguishedName>(() => _decode_DistinguishedName)(sequence[0]);
    return new SDFCriteria(
        object,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_SDFCriteria(el);
}

let _cached_encoder_for_SDFCriteria: $.ASN1Encoder<SDFCriteria> | null = null;

/**
 * @summary Encodes a(n) SDFCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDFCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_SDFCriteria (value: SDFCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SDFCriteria) { _cached_encoder_for_SDFCriteria = function (value: SDFCriteria, elGetter: $.ASN1Encoder<SDFCriteria>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DistinguishedName, $.BER)(value.object, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SDFCriteria(value, elGetter);
}


/* eslint-enable */
