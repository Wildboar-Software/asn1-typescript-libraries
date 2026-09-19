/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
import { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
// export { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";


/**
 * @summary IABMTUserLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IABMTUserLocation ::= SEQUENCE
 * {
 *     nRCGI             [1] NCGI,
 *     tAI               [2] TAI OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IABMTUserLocation {
    constructor (
        /**
         * @summary `nRCGI`.
         * @public
         * @readonly
         */
        readonly nRCGI: NCGI,
        /**
         * @summary `tAI`.
         * @public
         * @readonly
         */
        readonly tAI: OPTIONAL<TAI>
    ) {}

    /**
     * @summary Restructures an object into a IABMTUserLocation
     * @description
     * 
     * This takes an `object` and converts it to a `IABMTUserLocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IABMTUserLocation`.
     * @returns {IABMTUserLocation}
     */
    public static _from_object (_o: { [_K in keyof (IABMTUserLocation)]: (IABMTUserLocation)[_K] }): IABMTUserLocation {
        return new IABMTUserLocation(_o.nRCGI, _o.tAI);
    }


}

/**
 * @summary The Leading Root Component Types of IABMTUserLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IABMTUserLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("nRCGI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tAI", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IABMTUserLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IABMTUserLocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IABMTUserLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IABMTUserLocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IABMTUserLocation: $.ASN1Decoder<IABMTUserLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IABMTUserLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IABMTUserLocation (el: _Element): IABMTUserLocation {
    if (!_cached_decoder_for_IABMTUserLocation) { _cached_decoder_for_IABMTUserLocation = function (el: _Element): IABMTUserLocation {
    let nRCGI!: NCGI;
    let tAI: OPTIONAL<TAI>;
    const callbacks: $.DecodingMap = {
        "nRCGI": (_el: _Element): void => { nRCGI = $._decode_implicit<NCGI>(() => _decode_NCGI)(_el); },
        "tAI": (_el: _Element): void => { tAI = $._decode_implicit<TAI>(() => _decode_TAI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IABMTUserLocation,
        _extension_additions_list_spec_for_IABMTUserLocation,
        _root_component_type_list_2_spec_for_IABMTUserLocation,
        undefined,
    );
    return new IABMTUserLocation(
        nRCGI,
        tAI
    );
}; }
    return _cached_decoder_for_IABMTUserLocation(el);
}

let _cached_encoder_for_IABMTUserLocation: $.ASN1Encoder<IABMTUserLocation> | null = null;

/**
 * @summary Encodes a(n) IABMTUserLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IABMTUserLocation, encoded as an ASN.1 Element.
 */
export
function _encode_IABMTUserLocation (value: IABMTUserLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IABMTUserLocation) { _cached_encoder_for_IABMTUserLocation = function (value: IABMTUserLocation, elGetter: $.ASN1Encoder<IABMTUserLocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NCGI, $.BER)(value.nRCGI, $.BER),
            /* IF_ABSENT  */ ((value.tAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TAI, $.BER)(value.tAI, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IABMTUserLocation(value, elGetter);
}


/* eslint-enable */
