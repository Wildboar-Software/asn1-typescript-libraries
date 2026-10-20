/* eslint-disable */
import {
    BIT_STRING,
    IA5String,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary URIReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * URIReference ::= SEQUENCE {
 *     uniformResourceIdentifier   IA5String (SIZE (1..urimax)), -- // FIXME: Missing last paren
 *     hashAlgorithm               AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *     hashValue                   BIT STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class URIReference {
    /**
     * @summary `uniformResourceIdentifier`.
     * @public
     * @readonly
     */
    readonly uniformResourceIdentifier: IA5String;
    /**
     * @summary `hashAlgorithm`.
     * @public
     * @readonly
     */
    readonly hashAlgorithm: OPTIONAL<AlgorithmIdentifier>;
    /**
     * @summary `hashValue`.
     * @public
     * @readonly
     */
    readonly hashValue: OPTIONAL<BIT_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        uniformResourceIdentifier: IA5String,
        hashAlgorithm: OPTIONAL<AlgorithmIdentifier>,
        hashValue: OPTIONAL<BIT_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uniformResourceIdentifier = uniformResourceIdentifier;
        this.hashAlgorithm = hashAlgorithm;
        this.hashValue = hashValue;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a URIReference
     * @description
     * 
     * This takes an `object` and converts it to a `URIReference`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `URIReference`.
     * @returns {URIReference}
     */
    public static _from_object (_o: { [_K in keyof (URIReference)]: (URIReference)[_K] }): URIReference {
        return new URIReference(_o.uniformResourceIdentifier, _o.hashAlgorithm, _o.hashValue, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of URIReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_URIReference: $.ComponentSpec[] = [
    new $.ComponentSpec("uniformResourceIdentifier", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("hashAlgorithm", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("hashValue", true, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of URIReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_URIReference: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of URIReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_URIReference: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_URIReference: $.ASN1Decoder<URIReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) URIReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_URIReference (el: _Element): URIReference {
    if (!_cached_decoder_for_URIReference) { _cached_decoder_for_URIReference = function (el: _Element): URIReference {
    let uniformResourceIdentifier!: IA5String;
    let hashAlgorithm: OPTIONAL<AlgorithmIdentifier>;
    let hashValue: OPTIONAL<BIT_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uniformResourceIdentifier": (_el: _Element): void => { uniformResourceIdentifier = $._decodeIA5String(_el); },
        "hashAlgorithm": (_el: _Element): void => { hashAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "hashValue": (_el: _Element): void => { hashValue = $._decodeBitString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_URIReference,
        _extension_additions_list_spec_for_URIReference,
        _root_component_type_list_2_spec_for_URIReference,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new URIReference(
        uniformResourceIdentifier,
        hashAlgorithm,
        hashValue,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_URIReference(el);
}

let _cached_encoder_for_URIReference: $.ASN1Encoder<URIReference> | null = null;

/**
 * @summary Encodes a(n) URIReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URIReference, encoded as an ASN.1 Element.
 */
export
function _encode_URIReference (value: URIReference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_URIReference) { _cached_encoder_for_URIReference = function (value: URIReference, elGetter: $.ASN1Encoder<URIReference>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encodeIA5String(value.uniformResourceIdentifier, $.BER);
    if (value.hashAlgorithm !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_AlgorithmIdentifier(value.hashAlgorithm, $.BER);
    }
    if (value.hashValue !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encodeBitString(value.hashValue, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_URIReference(value, elGetter);
}


/* eslint-enable */
