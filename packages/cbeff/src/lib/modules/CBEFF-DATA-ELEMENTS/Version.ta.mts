/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Version ::= SEQUENCE {
 *     major   INTEGER (0..255),
 *     minor   INTEGER (0..255)
 *     -- noValueAvailable is encoded by {major 0, minor 0}
 * }
 * ```
 * 
 * @class
 */
export
class Version {
    /**
     * @summary `major`.
     * @public
     * @readonly
     */
    readonly major: INTEGER;
    /**
     * @summary `minor`.
     * @public
     * @readonly
     */
    readonly minor: INTEGER;

    constructor (
        major: INTEGER,
        minor: INTEGER
    ) {
        this.major = major;
        this.minor = minor;
    }

    /**
     * @summary Restructures an object into a Version
     * @description
     * 
     * This takes an `object` and converts it to a `Version`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Version`.
     * @returns {Version}
     */
    public static _from_object (_o: { [_K in keyof (Version)]: (Version)[_K] }): Version {
        return new Version(_o.major, _o.minor);
    }


}

/**
 * @summary The Leading Root Component Types of Version
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Version: $.ComponentSpec[] = [
    new $.ComponentSpec("major", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("minor", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Version
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Version: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Version
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Version: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Version: $.ASN1Decoder<Version> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Version
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Version (el: _Element): Version {
    if (!_cached_decoder_for_Version) { _cached_decoder_for_Version = function (el: _Element): Version {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Version contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "major";
    sequence[1].name = "minor";
    const major: INTEGER = $._decodeInteger(sequence[0]);
    const minor: INTEGER = $._decodeInteger(sequence[1]);
    return new Version(
        major,
        minor,

    );
}; }
    return _cached_decoder_for_Version(el);
}

let _cached_encoder_for_Version: $.ASN1Encoder<Version> | null = null;

/**
 * @summary Encodes a(n) Version into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Version, encoded as an ASN.1 Element.
 */
export
function _encode_Version (value: Version, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Version) { _cached_encoder_for_Version = function (value: Version, elGetter: $.ASN1Encoder<Version>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.major, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.minor, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Version(value, elGetter);
}


/* eslint-enable */
