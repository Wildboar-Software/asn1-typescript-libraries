/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallContentLinkCharacteristics, _decode_CallContentLinkCharacteristics, _encode_CallContentLinkCharacteristics } from "../TETRA-HI2Operations/CallContentLinkCharacteristics.ta.mjs";
// export { CallContentLinkCharacteristics, _decode_CallContentLinkCharacteristics, _encode_CallContentLinkCharacteristics } from "../TETRA-HI2Operations/CallContentLinkCharacteristics.ta.mjs";


/**
 * @summary Tetra_IRI_Parameters_callContentLinkInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Tetra-IRI-Parameters-callContentLinkInformation ::= SEQUENCE
 * {
 *     cCLink1Characteristics    [1] CallContentLinkCharacteristics OPTIONAL,
 *     -- Information concerning the Content of Communication Link Tx channel established
 *     -- toward the LEMF (or the sum signal channel, in case of mono mode)
 *     cCLink2Characteristics    [2] CallContentLinkCharacteristics OPTIONAL,
 *     -- Information concerning the Content of Communication Link Rx channel established
 *     -- toward the LEMF
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Tetra_IRI_Parameters_callContentLinkInformation {
    /**
     * @summary `cCLink1Characteristics`.
     * @public
     * @readonly
     */
    readonly cCLink1Characteristics: OPTIONAL<CallContentLinkCharacteristics>;
    /**
     * @summary `cCLink2Characteristics`.
     * @public
     * @readonly
     */
    readonly cCLink2Characteristics: OPTIONAL<CallContentLinkCharacteristics>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cCLink1Characteristics: OPTIONAL<CallContentLinkCharacteristics>,
        cCLink2Characteristics: OPTIONAL<CallContentLinkCharacteristics>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cCLink1Characteristics = cCLink1Characteristics;
        this.cCLink2Characteristics = cCLink2Characteristics;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Tetra_IRI_Parameters_callContentLinkInformation
     * @description
     * 
     * This takes an `object` and converts it to a `Tetra_IRI_Parameters_callContentLinkInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Tetra_IRI_Parameters_callContentLinkInformation`.
     * @returns {Tetra_IRI_Parameters_callContentLinkInformation}
     */
    public static _from_object (_o: { [_K in keyof (Tetra_IRI_Parameters_callContentLinkInformation)]: (Tetra_IRI_Parameters_callContentLinkInformation)[_K] }): Tetra_IRI_Parameters_callContentLinkInformation {
        return new Tetra_IRI_Parameters_callContentLinkInformation(_o.cCLink1Characteristics, _o.cCLink2Characteristics, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Tetra_IRI_Parameters_callContentLinkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Tetra_IRI_Parameters_callContentLinkInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("cCLink1Characteristics", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cCLink2Characteristics", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Tetra_IRI_Parameters_callContentLinkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Tetra_IRI_Parameters_callContentLinkInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Tetra_IRI_Parameters_callContentLinkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Tetra_IRI_Parameters_callContentLinkInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Tetra_IRI_Parameters_callContentLinkInformation: $.ASN1Decoder<Tetra_IRI_Parameters_callContentLinkInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Tetra_IRI_Parameters_callContentLinkInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Tetra_IRI_Parameters_callContentLinkInformation (el: _Element): Tetra_IRI_Parameters_callContentLinkInformation {
    if (!_cached_decoder_for_Tetra_IRI_Parameters_callContentLinkInformation) { _cached_decoder_for_Tetra_IRI_Parameters_callContentLinkInformation = function (el: _Element): Tetra_IRI_Parameters_callContentLinkInformation {
    let cCLink1Characteristics: OPTIONAL<CallContentLinkCharacteristics>;
    let cCLink2Characteristics: OPTIONAL<CallContentLinkCharacteristics>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cCLink1Characteristics": (_el: _Element): void => { cCLink1Characteristics = $._decode_implicit<CallContentLinkCharacteristics>(() => _decode_CallContentLinkCharacteristics)(_el); },
        "cCLink2Characteristics": (_el: _Element): void => { cCLink2Characteristics = $._decode_implicit<CallContentLinkCharacteristics>(() => _decode_CallContentLinkCharacteristics)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Tetra_IRI_Parameters_callContentLinkInformation,
        _extension_additions_list_spec_for_Tetra_IRI_Parameters_callContentLinkInformation,
        _root_component_type_list_2_spec_for_Tetra_IRI_Parameters_callContentLinkInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Tetra_IRI_Parameters_callContentLinkInformation(
        cCLink1Characteristics,
        cCLink2Characteristics,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Tetra_IRI_Parameters_callContentLinkInformation(el);
}

let _cached_encoder_for_Tetra_IRI_Parameters_callContentLinkInformation: $.ASN1Encoder<Tetra_IRI_Parameters_callContentLinkInformation> | null = null;

/**
 * @summary Encodes a(n) Tetra_IRI_Parameters_callContentLinkInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Tetra_IRI_Parameters_callContentLinkInformation, encoded as an ASN.1 Element.
 */
export
function _encode_Tetra_IRI_Parameters_callContentLinkInformation (value: Tetra_IRI_Parameters_callContentLinkInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Tetra_IRI_Parameters_callContentLinkInformation) { _cached_encoder_for_Tetra_IRI_Parameters_callContentLinkInformation = function (value: Tetra_IRI_Parameters_callContentLinkInformation, elGetter: $.ASN1Encoder<Tetra_IRI_Parameters_callContentLinkInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.cCLink1Characteristics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallContentLinkCharacteristics, $.BER)(value.cCLink1Characteristics, $.BER);
    }
    if (value.cCLink2Characteristics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CallContentLinkCharacteristics, $.BER)(value.cCLink2Characteristics, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Tetra_IRI_Parameters_callContentLinkInformation(value, elGetter);
}


/* eslint-enable */
