/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Location, _decode_Location, _encode_Location } from "../UmtsHI2Operations/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../UmtsHI2Operations/Location.ta.mjs";


/**
 * @summary PANI_Location
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PANI-Location ::= SEQUENCE
 * {
 *     raw-Location     [1] OCTET STRING    OPTIONAL,
 *     -- raw copy of the location string from the P-Access-Network-Info header
 *     location          [2] Location         OPTIONAL,
 * 
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PANI_Location {
    /**
     * @summary `raw_Location`.
     * @public
     * @readonly
     */
    readonly raw_Location: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        raw_Location: OPTIONAL<OCTET_STRING>,
        location: OPTIONAL<Location>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.raw_Location = raw_Location;
        this.location = location;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PANI_Location
     * @description
     * 
     * This takes an `object` and converts it to a `PANI_Location`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PANI_Location`.
     * @returns {PANI_Location}
     */
    public static _from_object (_o: { [_K in keyof (PANI_Location)]: (PANI_Location)[_K] }): PANI_Location {
        return new PANI_Location(_o.raw_Location, _o.location, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PANI_Location
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PANI_Location: $.ComponentSpec[] = [
    new $.ComponentSpec("raw-Location", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PANI_Location
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PANI_Location: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PANI_Location
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PANI_Location: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PANI_Location: $.ASN1Decoder<PANI_Location> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PANI_Location
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PANI_Location (el: _Element): PANI_Location {
    if (!_cached_decoder_for_PANI_Location) { _cached_decoder_for_PANI_Location = function (el: _Element): PANI_Location {
    let raw_Location: OPTIONAL<OCTET_STRING>;
    let location: OPTIONAL<Location>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "raw-Location": (_el: _Element): void => { raw_Location = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PANI_Location,
        _extension_additions_list_spec_for_PANI_Location,
        _root_component_type_list_2_spec_for_PANI_Location,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PANI_Location(
        raw_Location,
        location,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PANI_Location(el);
}

let _cached_encoder_for_PANI_Location: $.ASN1Encoder<PANI_Location> | null = null;

/**
 * @summary Encodes a(n) PANI_Location into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PANI_Location, encoded as an ASN.1 Element.
 */
export
function _encode_PANI_Location (value: PANI_Location, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PANI_Location) { _cached_encoder_for_PANI_Location = function (value: PANI_Location, elGetter: $.ASN1Encoder<PANI_Location>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.raw_Location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.raw_Location, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PANI_Location(value, elGetter);
}


/* eslint-enable */
