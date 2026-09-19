/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HSSIdentities, _decode_HSSIdentities, _encode_HSSIdentities } from "../TS33128Payloads/HSSIdentities.ta.mjs";
// export { HSSIdentities, _decode_HSSIdentities, _encode_HSSIdentities } from "../TS33128Payloads/HSSIdentities.ta.mjs";
import { SubscriberRecordChangePayload, _decode_SubscriberRecordChangePayload, _encode_SubscriberRecordChangePayload } from "../TS33128Payloads/SubscriberRecordChangePayload.ta.mjs";
// export { SubscriberRecordChangePayload, _decode_SubscriberRecordChangePayload, _encode_SubscriberRecordChangePayload } from "../TS33128Payloads/SubscriberRecordChangePayload.ta.mjs";


/**
 * @summary HSSSubscriberRecordChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HSSSubscriberRecordChange ::= SEQUENCE
 * {
 *     hSSIdentities                    [1] SEQUENCE OF HSSIdentities,
 *     subscriberRecordChangePayload    [2] SubscriberRecordChangePayload OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class HSSSubscriberRecordChange {
    constructor (
        /**
         * @summary `hSSIdentities`.
         * @public
         * @readonly
         */
        readonly hSSIdentities: HSSIdentities[],
        /**
         * @summary `subscriberRecordChangePayload`.
         * @public
         * @readonly
         */
        readonly subscriberRecordChangePayload: OPTIONAL<SubscriberRecordChangePayload>
    ) {}

    /**
     * @summary Restructures an object into a HSSSubscriberRecordChange
     * @description
     * 
     * This takes an `object` and converts it to a `HSSSubscriberRecordChange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HSSSubscriberRecordChange`.
     * @returns {HSSSubscriberRecordChange}
     */
    public static _from_object (_o: { [_K in keyof (HSSSubscriberRecordChange)]: (HSSSubscriberRecordChange)[_K] }): HSSSubscriberRecordChange {
        return new HSSSubscriberRecordChange(_o.hSSIdentities, _o.subscriberRecordChangePayload);
    }


}

/**
 * @summary The Leading Root Component Types of HSSSubscriberRecordChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HSSSubscriberRecordChange: $.ComponentSpec[] = [
    new $.ComponentSpec("hSSIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subscriberRecordChangePayload", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of HSSSubscriberRecordChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HSSSubscriberRecordChange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HSSSubscriberRecordChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HSSSubscriberRecordChange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HSSSubscriberRecordChange: $.ASN1Decoder<HSSSubscriberRecordChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HSSSubscriberRecordChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HSSSubscriberRecordChange (el: _Element): HSSSubscriberRecordChange {
    if (!_cached_decoder_for_HSSSubscriberRecordChange) { _cached_decoder_for_HSSSubscriberRecordChange = function (el: _Element): HSSSubscriberRecordChange {
    let hSSIdentities!: HSSIdentities[];
    let subscriberRecordChangePayload: OPTIONAL<SubscriberRecordChangePayload>;
    const callbacks: $.DecodingMap = {
        "hSSIdentities": (_el: _Element): void => { hSSIdentities = $._decode_implicit<HSSIdentities[]>(() => $._decodeSequenceOf<HSSIdentities>(() => _decode_HSSIdentities))(_el); },
        "subscriberRecordChangePayload": (_el: _Element): void => { subscriberRecordChangePayload = $._decode_explicit<SubscriberRecordChangePayload>(() => _decode_SubscriberRecordChangePayload)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HSSSubscriberRecordChange,
        _extension_additions_list_spec_for_HSSSubscriberRecordChange,
        _root_component_type_list_2_spec_for_HSSSubscriberRecordChange,
        undefined,
    );
    return new HSSSubscriberRecordChange(
        hSSIdentities,
        subscriberRecordChangePayload
    );
}; }
    return _cached_decoder_for_HSSSubscriberRecordChange(el);
}

let _cached_encoder_for_HSSSubscriberRecordChange: $.ASN1Encoder<HSSSubscriberRecordChange> | null = null;

/**
 * @summary Encodes a(n) HSSSubscriberRecordChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HSSSubscriberRecordChange, encoded as an ASN.1 Element.
 */
export
function _encode_HSSSubscriberRecordChange (value: HSSSubscriberRecordChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HSSSubscriberRecordChange) { _cached_encoder_for_HSSSubscriberRecordChange = function (value: HSSSubscriberRecordChange, elGetter: $.ASN1Encoder<HSSSubscriberRecordChange>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<HSSIdentities>(() => _encode_HSSIdentities, $.BER), $.BER)(value.hSSIdentities, $.BER),
            /* IF_ABSENT  */ ((value.subscriberRecordChangePayload === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_SubscriberRecordChangePayload, $.BER)(value.subscriberRecordChangePayload, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HSSSubscriberRecordChange(value, elGetter);
}


/* eslint-enable */
