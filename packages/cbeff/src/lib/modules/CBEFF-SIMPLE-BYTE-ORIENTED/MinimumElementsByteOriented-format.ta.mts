/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MinimumElementsByteOriented_format
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MinimumElementsByteOriented-format ::= SEQUENCE {
 *     owner   INTEGER (1..65535) DEFAULT 257,
 *     -- 257 is the biometric organization identifier of ISO/IEC JTC 1/SC 37
 *     type    INTEGER (1..63, ..., 64..65535)
 * }
 * ```
 * 
 * @class
 */
export
class MinimumElementsByteOriented_format {
    /**
     * @summary `owner`.
     * @public
     * @readonly
     */
    readonly owner: OPTIONAL<INTEGER>;
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: INTEGER;

    constructor (
        owner: OPTIONAL<INTEGER>,
        type_: INTEGER
    ) {
        this.owner = owner;
        this.type_ = type_;
    }

    /**
     * @summary Restructures an object into a MinimumElementsByteOriented_format
     * @description
     * 
     * This takes an `object` and converts it to a `MinimumElementsByteOriented_format`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MinimumElementsByteOriented_format`.
     * @returns {MinimumElementsByteOriented_format}
     */
    public static _from_object (_o: { [_K in keyof (MinimumElementsByteOriented_format)]: (MinimumElementsByteOriented_format)[_K] }): MinimumElementsByteOriented_format {
        return new MinimumElementsByteOriented_format(_o.owner, _o.type_);
    }

    /**
     * @summary Getter that returns the default value for `owner`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_owner () { return 257; }
}

/**
 * @summary The Leading Root Component Types of MinimumElementsByteOriented_format
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MinimumElementsByteOriented_format: $.ComponentSpec[] = [
    new $.ComponentSpec("owner", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MinimumElementsByteOriented_format
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MinimumElementsByteOriented_format: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MinimumElementsByteOriented_format
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MinimumElementsByteOriented_format: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MinimumElementsByteOriented_format: $.ASN1Decoder<MinimumElementsByteOriented_format> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MinimumElementsByteOriented_format
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MinimumElementsByteOriented_format (el: _Element): MinimumElementsByteOriented_format {
    if (!_cached_decoder_for_MinimumElementsByteOriented_format) { _cached_decoder_for_MinimumElementsByteOriented_format = function (el: _Element): MinimumElementsByteOriented_format {
    let owner: OPTIONAL<INTEGER> = MinimumElementsByteOriented_format._default_value_for_owner;
    let type_!: INTEGER;
    const callbacks: $.DecodingMap = {
        "owner": (_el: _Element): void => { owner = $._decodeInteger(_el); },
        "type": (_el: _Element): void => { type_ = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MinimumElementsByteOriented_format,
        _extension_additions_list_spec_for_MinimumElementsByteOriented_format,
        _root_component_type_list_2_spec_for_MinimumElementsByteOriented_format,
        undefined,
    );
    return new MinimumElementsByteOriented_format(
        owner,
        type_
    );
}; }
    return _cached_decoder_for_MinimumElementsByteOriented_format(el);
}

let _cached_encoder_for_MinimumElementsByteOriented_format: $.ASN1Encoder<MinimumElementsByteOriented_format> | null = null;

/**
 * @summary Encodes a(n) MinimumElementsByteOriented_format into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MinimumElementsByteOriented_format, encoded as an ASN.1 Element.
 */
export
function _encode_MinimumElementsByteOriented_format (value: MinimumElementsByteOriented_format, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MinimumElementsByteOriented_format) { _cached_encoder_for_MinimumElementsByteOriented_format = function (value: MinimumElementsByteOriented_format, elGetter: $.ASN1Encoder<MinimumElementsByteOriented_format>): _Element {
    const _components: _Element[] = [];
    if (value.owner !== undefined && !$.deepEq(value.owner, MinimumElementsByteOriented_format._default_value_for_owner)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.owner, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.type_, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MinimumElementsByteOriented_format(value, elGetter);
}


/* eslint-enable */
