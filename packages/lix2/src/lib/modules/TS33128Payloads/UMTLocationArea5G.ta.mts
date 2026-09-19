/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
// export { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
import { NRLocation, _decode_NRLocation, _encode_NRLocation } from "../TS33128Payloads/NRLocation.ta.mjs";
// export { NRLocation, _decode_NRLocation, _encode_NRLocation } from "../TS33128Payloads/NRLocation.ta.mjs";


/**
 * @summary UMTLocationArea5G
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UMTLocationArea5G ::= SEQUENCE
 * {
 *     timeOfDay        [1] Daytime,
 *     durationSec      [2] INTEGER,
 *     location         [3] NRLocation
 * }
 * ```
 * 
 * @class
 */
export
class UMTLocationArea5G {
    constructor (
        /**
         * @summary `timeOfDay`.
         * @public
         * @readonly
         */
        readonly timeOfDay: Daytime,
        /**
         * @summary `durationSec`.
         * @public
         * @readonly
         */
        readonly durationSec: INTEGER,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: NRLocation
    ) {}

    /**
     * @summary Restructures an object into a UMTLocationArea5G
     * @description
     * 
     * This takes an `object` and converts it to a `UMTLocationArea5G`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UMTLocationArea5G`.
     * @returns {UMTLocationArea5G}
     */
    public static _from_object (_o: { [_K in keyof (UMTLocationArea5G)]: (UMTLocationArea5G)[_K] }): UMTLocationArea5G {
        return new UMTLocationArea5G(_o.timeOfDay, _o.durationSec, _o.location);
    }


}

/**
 * @summary The Leading Root Component Types of UMTLocationArea5G
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UMTLocationArea5G: $.ComponentSpec[] = [
    new $.ComponentSpec("timeOfDay", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("durationSec", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("location", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of UMTLocationArea5G
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UMTLocationArea5G: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UMTLocationArea5G
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UMTLocationArea5G: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UMTLocationArea5G: $.ASN1Decoder<UMTLocationArea5G> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UMTLocationArea5G
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UMTLocationArea5G (el: _Element): UMTLocationArea5G {
    if (!_cached_decoder_for_UMTLocationArea5G) { _cached_decoder_for_UMTLocationArea5G = function (el: _Element): UMTLocationArea5G {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("UMTLocationArea5G contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "timeOfDay";
    sequence[1].name = "durationSec";
    sequence[2].name = "location";
    let timeOfDay!: Daytime;
    let durationSec!: INTEGER;
    let location!: NRLocation;
    timeOfDay = $._decode_implicit<Daytime>(() => _decode_Daytime)(sequence[0]);
    durationSec = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    location = $._decode_implicit<NRLocation>(() => _decode_NRLocation)(sequence[2]);
    return new UMTLocationArea5G(
        timeOfDay,
        durationSec,
        location,

    );
}; }
    return _cached_decoder_for_UMTLocationArea5G(el);
}

let _cached_encoder_for_UMTLocationArea5G: $.ASN1Encoder<UMTLocationArea5G> | null = null;

/**
 * @summary Encodes a(n) UMTLocationArea5G into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UMTLocationArea5G, encoded as an ASN.1 Element.
 */
export
function _encode_UMTLocationArea5G (value: UMTLocationArea5G, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UMTLocationArea5G) { _cached_encoder_for_UMTLocationArea5G = function (value: UMTLocationArea5G, elGetter: $.ASN1Encoder<UMTLocationArea5G>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Daytime, $.BER)(value.timeOfDay, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.durationSec, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_NRLocation, $.BER)(value.location, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UMTLocationArea5G(value, elGetter);
}


/* eslint-enable */
