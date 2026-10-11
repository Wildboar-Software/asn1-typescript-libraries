/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128IdentityAssociation/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128IdentityAssociation/NCGI.ta.mjs";


/**
 * @summary AdditionalNCGI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalNCGI ::= SEQUENCE
 * {
 *     nCGI      [1] NCGI
 * }
 * ```
 * 
 * @class
 */
export
class AdditionalNCGI {
    /**
     * @summary `nCGI`.
     * @public
     * @readonly
     */
    readonly nCGI: NCGI;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        nCGI: NCGI,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.nCGI = nCGI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AdditionalNCGI
     * @description
     * 
     * This takes an `object` and converts it to a `AdditionalNCGI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AdditionalNCGI`.
     * @returns {AdditionalNCGI}
     */
    public static _from_object (_o: { [_K in keyof (AdditionalNCGI)]: (AdditionalNCGI)[_K] }): AdditionalNCGI {
        return new AdditionalNCGI(_o.nCGI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AdditionalNCGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AdditionalNCGI: $.ComponentSpec[] = [
    new $.ComponentSpec("nCGI", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AdditionalNCGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AdditionalNCGI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AdditionalNCGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AdditionalNCGI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AdditionalNCGI: $.ASN1Decoder<AdditionalNCGI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalNCGI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalNCGI (el: _Element): AdditionalNCGI {
    if (!_cached_decoder_for_AdditionalNCGI) { _cached_decoder_for_AdditionalNCGI = function (el: _Element): AdditionalNCGI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("AdditionalNCGI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "nCGI";
    let nCGI!: NCGI;
    nCGI = $._decode_implicit<NCGI>(() => _decode_NCGI)(sequence[0]);
    return new AdditionalNCGI(
        nCGI,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_AdditionalNCGI(el);
}

let _cached_encoder_for_AdditionalNCGI: $.ASN1Encoder<AdditionalNCGI> | null = null;

/**
 * @summary Encodes a(n) AdditionalNCGI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalNCGI, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalNCGI (value: AdditionalNCGI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalNCGI) { _cached_encoder_for_AdditionalNCGI = function (value: AdditionalNCGI, _elGetter: $.ASN1Encoder<AdditionalNCGI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NCGI, $.BER)(value.nCGI, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AdditionalNCGI(value, elGetter);
}


/* eslint-enable */
