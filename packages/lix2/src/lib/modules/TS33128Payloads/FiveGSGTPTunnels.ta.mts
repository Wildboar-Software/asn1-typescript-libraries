/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
// export { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
import { FTEIDList, _decode_FTEIDList, _encode_FTEIDList } from "../TS33128Payloads/FTEIDList.ta.mjs";
// export { FTEIDList, _decode_FTEIDList, _encode_FTEIDList } from "../TS33128Payloads/FTEIDList.ta.mjs";
import { DLRANTunnelInformation, _decode_DLRANTunnelInformation, _encode_DLRANTunnelInformation } from "../TS33128Payloads/DLRANTunnelInformation.ta.mjs";
// export { DLRANTunnelInformation, _decode_DLRANTunnelInformation, _encode_DLRANTunnelInformation } from "../TS33128Payloads/DLRANTunnelInformation.ta.mjs";


/**
 * @summary FiveGSGTPTunnels
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSGTPTunnels ::= SEQUENCE
 * {
 *     uLNGUUPTunnelInformation           [1] FTEID OPTIONAL,
 *     additionalULNGUUPTunnelInformation [2] FTEIDList OPTIONAL,
 *     dLRANTunnelInformation             [3] DLRANTunnelInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FiveGSGTPTunnels {
    constructor (
        /**
         * @summary `uLNGUUPTunnelInformation`.
         * @public
         * @readonly
         */
        readonly uLNGUUPTunnelInformation: OPTIONAL<FTEID>,
        /**
         * @summary `additionalULNGUUPTunnelInformation`.
         * @public
         * @readonly
         */
        readonly additionalULNGUUPTunnelInformation: OPTIONAL<FTEIDList>,
        /**
         * @summary `dLRANTunnelInformation`.
         * @public
         * @readonly
         */
        readonly dLRANTunnelInformation: OPTIONAL<DLRANTunnelInformation>
    ) {}

    /**
     * @summary Restructures an object into a FiveGSGTPTunnels
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGSGTPTunnels`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGSGTPTunnels`.
     * @returns {FiveGSGTPTunnels}
     */
    public static _from_object (_o: { [_K in keyof (FiveGSGTPTunnels)]: (FiveGSGTPTunnels)[_K] }): FiveGSGTPTunnels {
        return new FiveGSGTPTunnels(_o.uLNGUUPTunnelInformation, _o.additionalULNGUUPTunnelInformation, _o.dLRANTunnelInformation);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGSGTPTunnels
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGSGTPTunnels: $.ComponentSpec[] = [
    new $.ComponentSpec("uLNGUUPTunnelInformation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("additionalULNGUUPTunnelInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dLRANTunnelInformation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FiveGSGTPTunnels
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGSGTPTunnels: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGSGTPTunnels
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGSGTPTunnels: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGSGTPTunnels: $.ASN1Decoder<FiveGSGTPTunnels> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSGTPTunnels
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGSGTPTunnels (el: _Element): FiveGSGTPTunnels {
    if (!_cached_decoder_for_FiveGSGTPTunnels) { _cached_decoder_for_FiveGSGTPTunnels = function (el: _Element): FiveGSGTPTunnels {
    let uLNGUUPTunnelInformation: OPTIONAL<FTEID>;
    let additionalULNGUUPTunnelInformation: OPTIONAL<FTEIDList>;
    let dLRANTunnelInformation: OPTIONAL<DLRANTunnelInformation>;
    const callbacks: $.DecodingMap = {
        "uLNGUUPTunnelInformation": (_el: _Element): void => { uLNGUUPTunnelInformation = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); },
        "additionalULNGUUPTunnelInformation": (_el: _Element): void => { additionalULNGUUPTunnelInformation = $._decode_implicit<FTEIDList>(() => _decode_FTEIDList)(_el); },
        "dLRANTunnelInformation": (_el: _Element): void => { dLRANTunnelInformation = $._decode_implicit<DLRANTunnelInformation>(() => _decode_DLRANTunnelInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FiveGSGTPTunnels,
        _extension_additions_list_spec_for_FiveGSGTPTunnels,
        _root_component_type_list_2_spec_for_FiveGSGTPTunnels,
        undefined,
    );
    return new FiveGSGTPTunnels(
        uLNGUUPTunnelInformation,
        additionalULNGUUPTunnelInformation,
        dLRANTunnelInformation
    );
}; }
    return _cached_decoder_for_FiveGSGTPTunnels(el);
}

let _cached_encoder_for_FiveGSGTPTunnels: $.ASN1Encoder<FiveGSGTPTunnels> | null = null;

/**
 * @summary Encodes a(n) FiveGSGTPTunnels into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSGTPTunnels, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGSGTPTunnels (value: FiveGSGTPTunnels, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGSGTPTunnels) { _cached_encoder_for_FiveGSGTPTunnels = function (value: FiveGSGTPTunnels, elGetter: $.ASN1Encoder<FiveGSGTPTunnels>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.uLNGUUPTunnelInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_FTEID, $.BER)(value.uLNGUUPTunnelInformation, $.BER)),
            /* IF_ABSENT  */ ((value.additionalULNGUUPTunnelInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_FTEIDList, $.BER)(value.additionalULNGUUPTunnelInformation, $.BER)),
            /* IF_ABSENT  */ ((value.dLRANTunnelInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DLRANTunnelInformation, $.BER)(value.dLRANTunnelInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGSGTPTunnels(value, elGetter);
}


/* eslint-enable */
