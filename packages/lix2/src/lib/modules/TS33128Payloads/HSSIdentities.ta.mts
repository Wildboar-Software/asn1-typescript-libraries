/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
// export { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
import { IMSSubscriberIDs, _decode_IMSSubscriberIDs, _encode_IMSSubscriberIDs } from "../TS33128Payloads/IMSSubscriberIDs.ta.mjs";
// export { IMSSubscriberIDs, _decode_IMSSubscriberIDs, _encode_IMSSubscriberIDs } from "../TS33128Payloads/IMSSubscriberIDs.ta.mjs";


/**
 * @summary HSSIdentities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HSSIdentities ::= SEQUENCE
 * {
 *     ePSSubscriberIDs          [1] EPSSubscriberIDs OPTIONAL,
 *     iMSSubscriberIDs          [2] IMSSubscriberIDs OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class HSSIdentities {
    constructor (
        /**
         * @summary `ePSSubscriberIDs`.
         * @public
         * @readonly
         */
        readonly ePSSubscriberIDs: OPTIONAL<EPSSubscriberIDs>,
        /**
         * @summary `iMSSubscriberIDs`.
         * @public
         * @readonly
         */
        readonly iMSSubscriberIDs: OPTIONAL<IMSSubscriberIDs>
    ) {}

    /**
     * @summary Restructures an object into a HSSIdentities
     * @description
     * 
     * This takes an `object` and converts it to a `HSSIdentities`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HSSIdentities`.
     * @returns {HSSIdentities}
     */
    public static _from_object (_o: { [_K in keyof (HSSIdentities)]: (HSSIdentities)[_K] }): HSSIdentities {
        return new HSSIdentities(_o.ePSSubscriberIDs, _o.iMSSubscriberIDs);
    }


}

/**
 * @summary The Leading Root Component Types of HSSIdentities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HSSIdentities: $.ComponentSpec[] = [
    new $.ComponentSpec("ePSSubscriberIDs", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMSSubscriberIDs", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of HSSIdentities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HSSIdentities: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HSSIdentities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HSSIdentities: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HSSIdentities: $.ASN1Decoder<HSSIdentities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HSSIdentities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HSSIdentities (el: _Element): HSSIdentities {
    if (!_cached_decoder_for_HSSIdentities) { _cached_decoder_for_HSSIdentities = function (el: _Element): HSSIdentities {
    let ePSSubscriberIDs: OPTIONAL<EPSSubscriberIDs>;
    let iMSSubscriberIDs: OPTIONAL<IMSSubscriberIDs>;
    const callbacks: $.DecodingMap = {
        "ePSSubscriberIDs": (_el: _Element): void => { ePSSubscriberIDs = $._decode_implicit<EPSSubscriberIDs>(() => _decode_EPSSubscriberIDs)(_el); },
        "iMSSubscriberIDs": (_el: _Element): void => { iMSSubscriberIDs = $._decode_explicit<IMSSubscriberIDs>(() => _decode_IMSSubscriberIDs)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HSSIdentities,
        _extension_additions_list_spec_for_HSSIdentities,
        _root_component_type_list_2_spec_for_HSSIdentities,
        undefined,
    );
    return new HSSIdentities(
        ePSSubscriberIDs,
        iMSSubscriberIDs
    );
}; }
    return _cached_decoder_for_HSSIdentities(el);
}

let _cached_encoder_for_HSSIdentities: $.ASN1Encoder<HSSIdentities> | null = null;

/**
 * @summary Encodes a(n) HSSIdentities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HSSIdentities, encoded as an ASN.1 Element.
 */
export
function _encode_HSSIdentities (value: HSSIdentities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HSSIdentities) { _cached_encoder_for_HSSIdentities = function (value: HSSIdentities, elGetter: $.ASN1Encoder<HSSIdentities>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ePSSubscriberIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EPSSubscriberIDs, $.BER)(value.ePSSubscriberIDs, $.BER)),
            /* IF_ABSENT  */ ((value.iMSSubscriberIDs === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_IMSSubscriberIDs, $.BER)(value.iMSSubscriberIDs, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HSSIdentities(value, elGetter);
}


/* eslint-enable */
