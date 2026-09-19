/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EUTRALocation, _decode_EUTRALocation, _encode_EUTRALocation } from "../TS33128Payloads/EUTRALocation.ta.mjs";
// export { EUTRALocation, _decode_EUTRALocation, _encode_EUTRALocation } from "../TS33128Payloads/EUTRALocation.ta.mjs";
import { NRLocation, _decode_NRLocation, _encode_NRLocation } from "../TS33128Payloads/NRLocation.ta.mjs";
// export { NRLocation, _decode_NRLocation, _encode_NRLocation } from "../TS33128Payloads/NRLocation.ta.mjs";
import { N3GALocation, _decode_N3GALocation, _encode_N3GALocation } from "../TS33128Payloads/N3GALocation.ta.mjs";
// export { N3GALocation, _decode_N3GALocation, _encode_N3GALocation } from "../TS33128Payloads/N3GALocation.ta.mjs";
import { UTRALocation, _decode_UTRALocation, _encode_UTRALocation } from "../TS33128Payloads/UTRALocation.ta.mjs";
// export { UTRALocation, _decode_UTRALocation, _encode_UTRALocation } from "../TS33128Payloads/UTRALocation.ta.mjs";
import { GERALocation, _decode_GERALocation, _encode_GERALocation } from "../TS33128Payloads/GERALocation.ta.mjs";
// export { GERALocation, _decode_GERALocation, _encode_GERALocation } from "../TS33128Payloads/GERALocation.ta.mjs";


/**
 * @summary UserLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserLocation ::= SEQUENCE
 * {
 *     eUTRALocation               [1] EUTRALocation OPTIONAL,
 *     nRLocation                  [2] NRLocation OPTIONAL,
 *     n3GALocation                [3] N3GALocation OPTIONAL,
 *     uTRALocation                [4] UTRALocation OPTIONAL,
 *     gERALocation                [5] GERALocation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UserLocation {
    constructor (
        /**
         * @summary `eUTRALocation`.
         * @public
         * @readonly
         */
        readonly eUTRALocation: OPTIONAL<EUTRALocation>,
        /**
         * @summary `nRLocation`.
         * @public
         * @readonly
         */
        readonly nRLocation: OPTIONAL<NRLocation>,
        /**
         * @summary `n3GALocation`.
         * @public
         * @readonly
         */
        readonly n3GALocation: OPTIONAL<N3GALocation>,
        /**
         * @summary `uTRALocation`.
         * @public
         * @readonly
         */
        readonly uTRALocation: OPTIONAL<UTRALocation>,
        /**
         * @summary `gERALocation`.
         * @public
         * @readonly
         */
        readonly gERALocation: OPTIONAL<GERALocation>
    ) {}

    /**
     * @summary Restructures an object into a UserLocation
     * @description
     * 
     * This takes an `object` and converts it to a `UserLocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserLocation`.
     * @returns {UserLocation}
     */
    public static _from_object (_o: { [_K in keyof (UserLocation)]: (UserLocation)[_K] }): UserLocation {
        return new UserLocation(_o.eUTRALocation, _o.nRLocation, _o.n3GALocation, _o.uTRALocation, _o.gERALocation);
    }


}

/**
 * @summary The Leading Root Component Types of UserLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UserLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("eUTRALocation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nRLocation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("n3GALocation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uTRALocation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gERALocation", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of UserLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UserLocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UserLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UserLocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UserLocation: $.ASN1Decoder<UserLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserLocation (el: _Element): UserLocation {
    if (!_cached_decoder_for_UserLocation) { _cached_decoder_for_UserLocation = function (el: _Element): UserLocation {
    let eUTRALocation: OPTIONAL<EUTRALocation>;
    let nRLocation: OPTIONAL<NRLocation>;
    let n3GALocation: OPTIONAL<N3GALocation>;
    let uTRALocation: OPTIONAL<UTRALocation>;
    let gERALocation: OPTIONAL<GERALocation>;
    const callbacks: $.DecodingMap = {
        "eUTRALocation": (_el: _Element): void => { eUTRALocation = $._decode_implicit<EUTRALocation>(() => _decode_EUTRALocation)(_el); },
        "nRLocation": (_el: _Element): void => { nRLocation = $._decode_implicit<NRLocation>(() => _decode_NRLocation)(_el); },
        "n3GALocation": (_el: _Element): void => { n3GALocation = $._decode_implicit<N3GALocation>(() => _decode_N3GALocation)(_el); },
        "uTRALocation": (_el: _Element): void => { uTRALocation = $._decode_implicit<UTRALocation>(() => _decode_UTRALocation)(_el); },
        "gERALocation": (_el: _Element): void => { gERALocation = $._decode_implicit<GERALocation>(() => _decode_GERALocation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UserLocation,
        _extension_additions_list_spec_for_UserLocation,
        _root_component_type_list_2_spec_for_UserLocation,
        undefined,
    );
    return new UserLocation(
        eUTRALocation,
        nRLocation,
        n3GALocation,
        uTRALocation,
        gERALocation
    );
}; }
    return _cached_decoder_for_UserLocation(el);
}

let _cached_encoder_for_UserLocation: $.ASN1Encoder<UserLocation> | null = null;

/**
 * @summary Encodes a(n) UserLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserLocation, encoded as an ASN.1 Element.
 */
export
function _encode_UserLocation (value: UserLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserLocation) { _cached_encoder_for_UserLocation = function (value: UserLocation, elGetter: $.ASN1Encoder<UserLocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.eUTRALocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EUTRALocation, $.BER)(value.eUTRALocation, $.BER)),
            /* IF_ABSENT  */ ((value.nRLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NRLocation, $.BER)(value.nRLocation, $.BER)),
            /* IF_ABSENT  */ ((value.n3GALocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_N3GALocation, $.BER)(value.n3GALocation, $.BER)),
            /* IF_ABSENT  */ ((value.uTRALocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_UTRALocation, $.BER)(value.uTRALocation, $.BER)),
            /* IF_ABSENT  */ ((value.gERALocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_GERALocation, $.BER)(value.gERALocation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UserLocation(value, elGetter);
}


/* eslint-enable */
