/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
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
    /**
     * @summary `nRCGI`.
     * @description
     *
     * Provides the NCGI of the cell serving the mobile IAB-MT.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly nRCGI: NCGI;
    /**
     * @summary `tAI`.
     * @description
     *
     * Provides the TAI supported by the cell which is serving the mobile
     * IAB-MT.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.6.
     *
     * @public
     * @readonly
     */
    readonly tAI: OPTIONAL<TAI>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        nRCGI: NCGI,
        tAI?: OPTIONAL<TAI>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.nRCGI = nRCGI;
        this.tAI = tAI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new IABMTUserLocation(_o.nRCGI, _o.tAI, _o._unrecognizedExtensionsList);
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
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "nRCGI": (_el: _Element): void => { nRCGI = $._decode_implicit<NCGI>(() => _decode_NCGI)(_el); },
        "tAI": (_el: _Element): void => { tAI = $._decode_implicit<TAI>(() => _decode_TAI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IABMTUserLocation,
        _extension_additions_list_spec_for_IABMTUserLocation,
        _root_component_type_list_2_spec_for_IABMTUserLocation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IABMTUserLocation(
        nRCGI,
        tAI,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NCGI, $.BER)(value.nRCGI, $.BER);
    if (value.tAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_TAI, $.BER)(value.tAI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IABMTUserLocation(value, elGetter);
}


/* eslint-enable */
