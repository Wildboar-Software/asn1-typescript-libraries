/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AdditionalNCGI, _decode_AdditionalNCGI, _encode_AdditionalNCGI } from "../TS33128IdentityAssociation/AdditionalNCGI.ta.mjs";
// export { AdditionalNCGI, _decode_AdditionalNCGI, _encode_AdditionalNCGI } from "../TS33128IdentityAssociation/AdditionalNCGI.ta.mjs";


/**
 * @summary AdditionalCGIs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalCGIs ::= SEQUENCE
 * {
 *     additionalNCGIList [1] SEQUENCE (SIZE (1..MAX)) OF AdditionalNCGI OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AdditionalCGIs {
    /**
     * @summary `additionalNCGIList`.
     * @public
     * @readonly
     */
    readonly additionalNCGIList: OPTIONAL<AdditionalNCGI[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        additionalNCGIList: OPTIONAL<AdditionalNCGI[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.additionalNCGIList = additionalNCGIList;
        if (this.additionalNCGIList !== undefined && (this.additionalNCGIList.length < 1)) {
            throw new ASN1SizeError("additionalNCGIList violates the SIZE constraint");
        }
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AdditionalCGIs
     * @description
     * 
     * This takes an `object` and converts it to a `AdditionalCGIs`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AdditionalCGIs`.
     * @returns {AdditionalCGIs}
     */
    public static _from_object (_o: { [_K in keyof (AdditionalCGIs)]: (AdditionalCGIs)[_K] }): AdditionalCGIs {
        return new AdditionalCGIs(_o.additionalNCGIList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AdditionalCGIs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AdditionalCGIs: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalNCGIList", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AdditionalCGIs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AdditionalCGIs: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AdditionalCGIs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AdditionalCGIs: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AdditionalCGIs: $.ASN1Decoder<AdditionalCGIs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalCGIs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalCGIs (el: _Element): AdditionalCGIs {
    if (!_cached_decoder_for_AdditionalCGIs) { _cached_decoder_for_AdditionalCGIs = function (el: _Element): AdditionalCGIs {
    let additionalNCGIList: OPTIONAL<AdditionalNCGI[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "additionalNCGIList": (_el: _Element): void => { additionalNCGIList = $._decode_implicit<AdditionalNCGI[]>(() => $._decodeSequenceOf<AdditionalNCGI>(() => _decode_AdditionalNCGI))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AdditionalCGIs,
        _extension_additions_list_spec_for_AdditionalCGIs,
        _root_component_type_list_2_spec_for_AdditionalCGIs,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AdditionalCGIs(
        additionalNCGIList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AdditionalCGIs(el);
}

let _cached_encoder_for_AdditionalCGIs: $.ASN1Encoder<AdditionalCGIs> | null = null;

/**
 * @summary Encodes a(n) AdditionalCGIs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalCGIs, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalCGIs (value: AdditionalCGIs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalCGIs) { _cached_encoder_for_AdditionalCGIs = function (value: AdditionalCGIs, _elGetter: $.ASN1Encoder<AdditionalCGIs>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.additionalNCGIList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<AdditionalNCGI>(() => _encode_AdditionalNCGI, $.BER), $.BER)(value.additionalNCGIList, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AdditionalCGIs(value, elGetter);
}


/* eslint-enable */
