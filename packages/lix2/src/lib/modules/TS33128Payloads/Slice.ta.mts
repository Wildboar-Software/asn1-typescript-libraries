/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
// export { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
import { RejectedNSSAI, _decode_RejectedNSSAI, _encode_RejectedNSSAI } from "../TS33128Payloads/RejectedNSSAI.ta.mjs";
// export { RejectedNSSAI, _decode_RejectedNSSAI, _encode_RejectedNSSAI } from "../TS33128Payloads/RejectedNSSAI.ta.mjs";


/**
 * @summary Slice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Slice ::= SEQUENCE
 * {
 *     allowedNSSAI        [1] NSSAI OPTIONAL,
 *     configuredNSSAI     [2] NSSAI OPTIONAL,
 *     rejectedNSSAI       [3] RejectedNSSAI OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Slice {
    constructor (
        /**
         * @summary `allowedNSSAI`.
         * @public
         * @readonly
         */
        readonly allowedNSSAI: OPTIONAL<NSSAI>,
        /**
         * @summary `configuredNSSAI`.
         * @public
         * @readonly
         */
        readonly configuredNSSAI: OPTIONAL<NSSAI>,
        /**
         * @summary `rejectedNSSAI`.
         * @public
         * @readonly
         */
        readonly rejectedNSSAI: OPTIONAL<RejectedNSSAI>
    ) {}

    /**
     * @summary Restructures an object into a Slice
     * @description
     * 
     * This takes an `object` and converts it to a `Slice`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Slice`.
     * @returns {Slice}
     */
    public static _from_object (_o: { [_K in keyof (Slice)]: (Slice)[_K] }): Slice {
        return new Slice(_o.allowedNSSAI, _o.configuredNSSAI, _o.rejectedNSSAI);
    }


}

/**
 * @summary The Leading Root Component Types of Slice
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Slice: $.ComponentSpec[] = [
    new $.ComponentSpec("allowedNSSAI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("configuredNSSAI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rejectedNSSAI", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Slice
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Slice: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Slice
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Slice: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Slice: $.ASN1Decoder<Slice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Slice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Slice (el: _Element): Slice {
    if (!_cached_decoder_for_Slice) { _cached_decoder_for_Slice = function (el: _Element): Slice {
    let allowedNSSAI: OPTIONAL<NSSAI>;
    let configuredNSSAI: OPTIONAL<NSSAI>;
    let rejectedNSSAI: OPTIONAL<RejectedNSSAI>;
    const callbacks: $.DecodingMap = {
        "allowedNSSAI": (_el: _Element): void => { allowedNSSAI = $._decode_implicit<NSSAI>(() => _decode_NSSAI)(_el); },
        "configuredNSSAI": (_el: _Element): void => { configuredNSSAI = $._decode_implicit<NSSAI>(() => _decode_NSSAI)(_el); },
        "rejectedNSSAI": (_el: _Element): void => { rejectedNSSAI = $._decode_implicit<RejectedNSSAI>(() => _decode_RejectedNSSAI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Slice,
        _extension_additions_list_spec_for_Slice,
        _root_component_type_list_2_spec_for_Slice,
        undefined,
    );
    return new Slice(
        allowedNSSAI,
        configuredNSSAI,
        rejectedNSSAI
    );
}; }
    return _cached_decoder_for_Slice(el);
}

let _cached_encoder_for_Slice: $.ASN1Encoder<Slice> | null = null;

/**
 * @summary Encodes a(n) Slice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Slice, encoded as an ASN.1 Element.
 */
export
function _encode_Slice (value: Slice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Slice) { _cached_encoder_for_Slice = function (value: Slice, elGetter: $.ASN1Encoder<Slice>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.allowedNSSAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_NSSAI, $.BER)(value.allowedNSSAI, $.BER)),
            /* IF_ABSENT  */ ((value.configuredNSSAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NSSAI, $.BER)(value.configuredNSSAI, $.BER)),
            /* IF_ABSENT  */ ((value.rejectedNSSAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_RejectedNSSAI, $.BER)(value.rejectedNSSAI, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Slice(value, elGetter);
}


/* eslint-enable */
