/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";
// export { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";


/**
 * @summary PLMNSupportItem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMNSupportItem ::= SEQUENCE
 * {
 *     pLMNIdentity        [1] PLMNID,
 *     nPNSupport          [2] NID OPTIONAL,
 *     onboardingSupport   [3] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PLMNSupportItem {
    constructor (
        /**
         * @summary `pLMNIdentity`.
         * @public
         * @readonly
         */
        readonly pLMNIdentity: PLMNID,
        /**
         * @summary `nPNSupport`.
         * @public
         * @readonly
         */
        readonly nPNSupport: OPTIONAL<NID>,
        /**
         * @summary `onboardingSupport`.
         * @public
         * @readonly
         */
        readonly onboardingSupport: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a PLMNSupportItem
     * @description
     * 
     * This takes an `object` and converts it to a `PLMNSupportItem`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PLMNSupportItem`.
     * @returns {PLMNSupportItem}
     */
    public static _from_object (_o: { [_K in keyof (PLMNSupportItem)]: (PLMNSupportItem)[_K] }): PLMNSupportItem {
        return new PLMNSupportItem(_o.pLMNIdentity, _o.nPNSupport, _o.onboardingSupport);
    }


}

/**
 * @summary The Leading Root Component Types of PLMNSupportItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PLMNSupportItem: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNIdentity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nPNSupport", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("onboardingSupport", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PLMNSupportItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PLMNSupportItem: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PLMNSupportItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PLMNSupportItem: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PLMNSupportItem: $.ASN1Decoder<PLMNSupportItem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PLMNSupportItem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PLMNSupportItem (el: _Element): PLMNSupportItem {
    if (!_cached_decoder_for_PLMNSupportItem) { _cached_decoder_for_PLMNSupportItem = function (el: _Element): PLMNSupportItem {
    let pLMNIdentity!: PLMNID;
    let nPNSupport: OPTIONAL<NID>;
    let onboardingSupport: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "pLMNIdentity": (_el: _Element): void => { pLMNIdentity = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "nPNSupport": (_el: _Element): void => { nPNSupport = $._decode_implicit<NID>(() => _decode_NID)(_el); },
        "onboardingSupport": (_el: _Element): void => { onboardingSupport = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PLMNSupportItem,
        _extension_additions_list_spec_for_PLMNSupportItem,
        _root_component_type_list_2_spec_for_PLMNSupportItem,
        undefined,
    );
    return new PLMNSupportItem(
        pLMNIdentity,
        nPNSupport,
        onboardingSupport
    );
}; }
    return _cached_decoder_for_PLMNSupportItem(el);
}

let _cached_encoder_for_PLMNSupportItem: $.ASN1Encoder<PLMNSupportItem> | null = null;

/**
 * @summary Encodes a(n) PLMNSupportItem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PLMNSupportItem, encoded as an ASN.1 Element.
 */
export
function _encode_PLMNSupportItem (value: PLMNSupportItem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PLMNSupportItem) { _cached_encoder_for_PLMNSupportItem = function (value: PLMNSupportItem, elGetter: $.ASN1Encoder<PLMNSupportItem>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNIdentity, $.BER),
            /* IF_ABSENT  */ ((value.nPNSupport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NID, $.BER)(value.nPNSupport, $.BER)),
            /* IF_ABSENT  */ ((value.onboardingSupport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.onboardingSupport, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PLMNSupportItem(value, elGetter);
}


/* eslint-enable */
