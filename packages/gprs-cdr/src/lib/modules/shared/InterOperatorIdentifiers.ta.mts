/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GraphicString,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InterOperatorIdentifiers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterOperatorIdentifiers ::= SEQUENCE {
 *    originatingIOI   [0] IMPLICIT GraphicString OPTIONAL,
 *    terminatingIOI   [1] IMPLICIT GraphicString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class InterOperatorIdentifiers {
    /**
     * @summary `originatingIOI`.
     * @public
     * @readonly
     */
    readonly originatingIOI: OPTIONAL<GraphicString>;
    /**
     * @summary `terminatingIOI`.
     * @public
     * @readonly
     */
    readonly terminatingIOI: OPTIONAL<GraphicString>;

    constructor (
        originatingIOI: OPTIONAL<GraphicString>,
        terminatingIOI: OPTIONAL<GraphicString>
    ) {
        this.originatingIOI = originatingIOI;
        this.terminatingIOI = terminatingIOI;
    }

    /**
     * @summary Restructures an object into a InterOperatorIdentifiers
     * @description
     * 
     * This takes an `object` and converts it to a `InterOperatorIdentifiers`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InterOperatorIdentifiers`.
     * @returns {InterOperatorIdentifiers}
     */
    public static _from_object (_o: { [_K in keyof (InterOperatorIdentifiers)]: (InterOperatorIdentifiers)[_K] }): InterOperatorIdentifiers {
        return new InterOperatorIdentifiers(_o.originatingIOI, _o.terminatingIOI);
    }


}

/**
 * @summary The Leading Root Component Types of InterOperatorIdentifiers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InterOperatorIdentifiers: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingIOI", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("terminatingIOI", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of InterOperatorIdentifiers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InterOperatorIdentifiers: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InterOperatorIdentifiers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InterOperatorIdentifiers: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InterOperatorIdentifiers: $.ASN1Decoder<InterOperatorIdentifiers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InterOperatorIdentifiers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InterOperatorIdentifiers (el: _Element): InterOperatorIdentifiers {
    if (!_cached_decoder_for_InterOperatorIdentifiers) { _cached_decoder_for_InterOperatorIdentifiers = function (el: _Element): InterOperatorIdentifiers {
    let originatingIOI: OPTIONAL<GraphicString>;
    let terminatingIOI: OPTIONAL<GraphicString>;
    const callbacks: $.DecodingMap = {
        "originatingIOI": (_el: _Element): void => { originatingIOI = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "terminatingIOI": (_el: _Element): void => { terminatingIOI = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InterOperatorIdentifiers,
        _extension_additions_list_spec_for_InterOperatorIdentifiers,
        _root_component_type_list_2_spec_for_InterOperatorIdentifiers,
        undefined,
    );
    return new InterOperatorIdentifiers(
        originatingIOI,
        terminatingIOI
    );
}; }
    return _cached_decoder_for_InterOperatorIdentifiers(el);
}

let _cached_encoder_for_InterOperatorIdentifiers: $.ASN1Encoder<InterOperatorIdentifiers> | null = null;

/**
 * @summary Encodes a(n) InterOperatorIdentifiers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterOperatorIdentifiers, encoded as an ASN.1 Element.
 */
export
function _encode_InterOperatorIdentifiers (value: InterOperatorIdentifiers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InterOperatorIdentifiers) { _cached_encoder_for_InterOperatorIdentifiers = function (value: InterOperatorIdentifiers, _elGetter: $.ASN1Encoder<InterOperatorIdentifiers>): _Element {
    const _components: _Element[] = [];
    if (value.originatingIOI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeGraphicString, $.BER)(value.originatingIOI, $.BER));
    }
    if (value.terminatingIOI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGraphicString, $.BER)(value.terminatingIOI, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InterOperatorIdentifiers(value, elGetter);
}


/* eslint-enable */
