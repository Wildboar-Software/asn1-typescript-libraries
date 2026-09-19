/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Location, _decode_Location, _encode_Location } from "../EpsHI2Operations/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../EpsHI2Operations/Location.ta.mjs";
import { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";
// export { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";


/**
 * @summary PANI_Location
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PANI-Location ::= SEQUENCE
 * {
 *  raw-Location [1] OCTET STRING OPTIONAL,
 *  -- raw copy of the location string from the P-Access-Network-Info header
 *  location [2] Location OPTIONAL,
 *  ePSLocation [3] EPSLocation OPTIONAL,
 *  ...
 * }
 * ```
 * 
 * @class
 */
export
class PANI_Location {
    constructor (
        /**
         * @summary `raw_Location`.
         * @public
         * @readonly
         */
        readonly raw_Location: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `ePSLocation`.
         * @public
         * @readonly
         */
        readonly ePSLocation: OPTIONAL<EPSLocation>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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
        return new PANI_Location(_o.raw_Location, _o.location, _o.ePSLocation, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ePSLocation", true, $.hasTag(_TagClass.context, 3))
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
    let ePSLocation: OPTIONAL<EPSLocation>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "raw-Location": (_el: _Element): void => { raw_Location = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "ePSLocation": (_el: _Element): void => { ePSLocation = $._decode_implicit<EPSLocation>(() => _decode_EPSLocation)(_el); }
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
        ePSLocation,
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.raw_Location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.raw_Location, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.ePSLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_EPSLocation, $.BER)(value.ePSLocation, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PANI_Location(value, elGetter);
}


/* eslint-enable */
