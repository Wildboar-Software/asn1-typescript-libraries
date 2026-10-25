/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type FiveGSInterworkingIndicator, _decode_FiveGSInterworkingIndicator, _encode_FiveGSInterworkingIndicator } from "../TS33128Payloads/FiveGSInterworkingIndicator.ta.mjs";
// export { FiveGSInterworkingIndicator, _decode_FiveGSInterworkingIndicator, _encode_FiveGSInterworkingIndicator } from "../TS33128Payloads/FiveGSInterworkingIndicator.ta.mjs";
import { type FiveGSInterworkingWithoutN26, _decode_FiveGSInterworkingWithoutN26, _encode_FiveGSInterworkingWithoutN26 } from "../TS33128Payloads/FiveGSInterworkingWithoutN26.ta.mjs";
// export { FiveGSInterworkingWithoutN26, _decode_FiveGSInterworkingWithoutN26, _encode_FiveGSInterworkingWithoutN26 } from "../TS33128Payloads/FiveGSInterworkingWithoutN26.ta.mjs";
import { type FiveGCNotRestrictedSupport, _decode_FiveGCNotRestrictedSupport, _encode_FiveGCNotRestrictedSupport } from "../TS33128Payloads/FiveGCNotRestrictedSupport.ta.mjs";
// export { FiveGCNotRestrictedSupport, _decode_FiveGCNotRestrictedSupport, _encode_FiveGCNotRestrictedSupport } from "../TS33128Payloads/FiveGCNotRestrictedSupport.ta.mjs";


/**
 * @summary FiveGSInterworkingInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSInterworkingInfo ::= SEQUENCE
 * {
 *     fiveGSInterworkingIndicator  [1] FiveGSInterworkingIndicator,
 *     fiveGSInterworkingWithoutN26 [2] FiveGSInterworkingWithoutN26,
 *     fiveGCNotRestrictedSupport   [3] FiveGCNotRestrictedSupport
 * }
 * ```
 * 
 * @class
 */
export
class FiveGSInterworkingInfo {
    /**
     * @summary `fiveGSInterworkingIndicator`.
     * @description
     *
     * Shall be set to TRUE if the 5GSIWKI flag in the Indication IE of the
     * request or response is set to 1. Indicates that the UE supports N1 mode
     * and the PDN connection is not restricted from interworking by the 5GS
     * user subscription. See TS 29.274 [87] clauses 7.2.1 and 8.12.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly fiveGSInterworkingIndicator: FiveGSInterworkingIndicator;
    /**
     * @summary `fiveGSInterworkingWithoutN26`.
     * @description
     *
     * Shall be set to TRUE if the 5GS Interworking without N26 Indication flag
     * in the Indication IE of the request or response is set to 1. If the 5GS
     * Interworking without N26 Indication flag in the Indication IE of the
     * request or response is set to 0 or not present, this parameter shall be
     * set to FALSE. See TS 29.274 [87] clauses 7.2.1 and 8.12.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly fiveGSInterworkingWithoutN26: FiveGSInterworkingWithoutN26;
    /**
     * @summary `fiveGCNotRestrictedSupport`.
     * @description
     *
     * Shall be set to TRUE if the 5GCNRS (5GC Not Restricted Support) flag in
     * the Indication IE of the request or response is set to 1. If the 5GCNRS
     * flag in the Indication IE of the request or response is set to 0 or not
     * present, this parameter shall be set to FALSE. See TS 29.274 [87] clauses
     * 7.2.1 and 8.12.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly fiveGCNotRestrictedSupport: FiveGCNotRestrictedSupport;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        fiveGSInterworkingIndicator: FiveGSInterworkingIndicator,
        fiveGSInterworkingWithoutN26: FiveGSInterworkingWithoutN26,
        fiveGCNotRestrictedSupport: FiveGCNotRestrictedSupport,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.fiveGSInterworkingIndicator = fiveGSInterworkingIndicator;
        this.fiveGSInterworkingWithoutN26 = fiveGSInterworkingWithoutN26;
        this.fiveGCNotRestrictedSupport = fiveGCNotRestrictedSupport;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FiveGSInterworkingInfo
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGSInterworkingInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGSInterworkingInfo`.
     * @returns {FiveGSInterworkingInfo}
     */
    public static _from_object (_o: { [_K in keyof (FiveGSInterworkingInfo)]: (FiveGSInterworkingInfo)[_K] }): FiveGSInterworkingInfo {
        return new FiveGSInterworkingInfo(_o.fiveGSInterworkingIndicator, _o.fiveGSInterworkingWithoutN26, _o.fiveGCNotRestrictedSupport, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGSInterworkingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGSInterworkingInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("fiveGSInterworkingIndicator", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fiveGSInterworkingWithoutN26", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fiveGCNotRestrictedSupport", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FiveGSInterworkingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGSInterworkingInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGSInterworkingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGSInterworkingInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGSInterworkingInfo: $.ASN1Decoder<FiveGSInterworkingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSInterworkingInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGSInterworkingInfo (el: _Element): FiveGSInterworkingInfo {
    if (!_cached_decoder_for_FiveGSInterworkingInfo) { _cached_decoder_for_FiveGSInterworkingInfo = function (el: _Element): FiveGSInterworkingInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("FiveGSInterworkingInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "fiveGSInterworkingIndicator";
    sequence[1].name = "fiveGSInterworkingWithoutN26";
    sequence[2].name = "fiveGCNotRestrictedSupport";
    let fiveGSInterworkingIndicator!: FiveGSInterworkingIndicator;
    let fiveGSInterworkingWithoutN26!: FiveGSInterworkingWithoutN26;
    let fiveGCNotRestrictedSupport!: FiveGCNotRestrictedSupport;
    fiveGSInterworkingIndicator = $._decode_implicit<FiveGSInterworkingIndicator>(() => _decode_FiveGSInterworkingIndicator)(sequence[0]);
    fiveGSInterworkingWithoutN26 = $._decode_implicit<FiveGSInterworkingWithoutN26>(() => _decode_FiveGSInterworkingWithoutN26)(sequence[1]);
    fiveGCNotRestrictedSupport = $._decode_implicit<FiveGCNotRestrictedSupport>(() => _decode_FiveGCNotRestrictedSupport)(sequence[2]);
    return new FiveGSInterworkingInfo(
        fiveGSInterworkingIndicator,
        fiveGSInterworkingWithoutN26,
        fiveGCNotRestrictedSupport,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_FiveGSInterworkingInfo(el);
}

let _cached_encoder_for_FiveGSInterworkingInfo: $.ASN1Encoder<FiveGSInterworkingInfo> | null = null;

/**
 * @summary Encodes a(n) FiveGSInterworkingInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSInterworkingInfo, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGSInterworkingInfo (value: FiveGSInterworkingInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGSInterworkingInfo) { _cached_encoder_for_FiveGSInterworkingInfo = function (value: FiveGSInterworkingInfo, elGetter: $.ASN1Encoder<FiveGSInterworkingInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FiveGSInterworkingIndicator, $.BER)(value.fiveGSInterworkingIndicator, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGSInterworkingWithoutN26, $.BER)(value.fiveGSInterworkingWithoutN26, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_FiveGCNotRestrictedSupport, $.BER)(value.fiveGCNotRestrictedSupport, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FiveGSInterworkingInfo(value, elGetter);
}


/* eslint-enable */
