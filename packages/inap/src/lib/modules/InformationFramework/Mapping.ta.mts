/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Mapping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Mapping ::= SEQUENCE {
 *   mappingFunction
 *     OBJECT IDENTIFIER
 *       (CONSTRAINED BY {-- shall be an--
 * 
 *          -- object identifier of a mapping-based matching algorithm -- }),
 *   level            INTEGER DEFAULT 0
 * }
 * ```
 * 
 * @class
 */
export
class Mapping {
    /**
     * @summary `mappingFunction`.
     * @public
     * @readonly
     */
    readonly mappingFunction: OBJECT_IDENTIFIER;
    /**
     * @summary `level`.
     * @public
     * @readonly
     */
    readonly level: OPTIONAL<INTEGER>;

    constructor (
        mappingFunction: OBJECT_IDENTIFIER,
        level: OPTIONAL<INTEGER>
    ) {
        this.mappingFunction = mappingFunction;
        this.level = level;
    }

    /**
     * @summary Restructures an object into a Mapping
     * @description
     * 
     * This takes an `object` and converts it to a `Mapping`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Mapping`.
     * @returns {Mapping}
     */
    public static _from_object (_o: { [_K in keyof (Mapping)]: (Mapping)[_K] }): Mapping {
        return new Mapping(_o.mappingFunction, _o.level);
    }

    /**
     * @summary Getter that returns the default value for `level`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_level () { return 0; }
}

/**
 * @summary The Leading Root Component Types of Mapping
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Mapping: $.ComponentSpec[] = [
    new $.ComponentSpec("mappingFunction", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("level", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of Mapping
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Mapping: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Mapping
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Mapping: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Mapping: $.ASN1Decoder<Mapping> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Mapping
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Mapping (el: _Element): Mapping {
    if (!_cached_decoder_for_Mapping) { _cached_decoder_for_Mapping = function (el: _Element): Mapping {
    let mappingFunction!: OBJECT_IDENTIFIER;
    let level: OPTIONAL<INTEGER> = Mapping._default_value_for_level;
    const callbacks: $.DecodingMap = {
        "mappingFunction": (_el: _Element): void => { mappingFunction = $._decodeObjectIdentifier(_el); },
        "level": (_el: _Element): void => { level = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Mapping,
        _extension_additions_list_spec_for_Mapping,
        _root_component_type_list_2_spec_for_Mapping,
        undefined,
    );
    return new Mapping(
        mappingFunction,
        level
    );
}; }
    return _cached_decoder_for_Mapping(el);
}

let _cached_encoder_for_Mapping: $.ASN1Encoder<Mapping> | null = null;

/**
 * @summary Encodes a(n) Mapping into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Mapping, encoded as an ASN.1 Element.
 */
export
function _encode_Mapping (value: Mapping, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Mapping) { _cached_encoder_for_Mapping = function (value: Mapping, elGetter: $.ASN1Encoder<Mapping>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.mappingFunction, $.BER));
    if (value.level !== undefined && !$.deepEq(value.level, Mapping._default_value_for_level)) {
        _components.push(/* IF_DEFAULT */ $._encodeInteger(value.level, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Mapping(value, elGetter);
}


/* eslint-enable */
