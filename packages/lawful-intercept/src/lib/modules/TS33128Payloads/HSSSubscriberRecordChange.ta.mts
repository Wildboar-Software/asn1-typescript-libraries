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
 * The IRI-POI in the HSS supporting the Nhss SBI shall generate an xIRI
 * containing the HSSSubscriberRecordChange record when the IRI-POI present in
 * the HSS detects that the EPC UE Context Management information has been
 * updated for the target at the HSS (see TS 29.563 [100] clause 5.4.2.3).
 * Accordingly, example triggers for this record include:
 *
 * - The HSS receives an Nhss_UECM_IMEIUpdateInfo (see TS 29.563 [100] clause
 *   6.3.4.3) for which the HSS observes a change to the target's:
 *
 * - IMEI.
 *
 * - IMSI.
 *
 * - The HSS sends a Nhss_UECM_IMEIUpdateResponse (see TS 29.563 [100] clause
 *   6.3.6.2.4) containing the target's:
 *
 * - Previous IMEI.
 *
 * 3GPP TS 33.128, clause 7.2.3.3.4.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @summary `hSSIdentities`.
     * @description
     *
     * Indicates the UE Identies provided in the UE context management service
     * operation.
     *
     * 3GPP TS 33.128, clause 7.2.3.3.4.
     *
     * @public
     * @readonly
     */
    readonly hSSIdentities: HSSIdentities[];
    /**
     * @summary `subscriberRecordChangePayload`.
     * @description
     *
     * Includes the payload related to the subscriberRecordChangeType indicated
     * in the UECM Data type, see TS 29.563 [100] clause 6.3.6.1. Shall indicate
     * either IMEIUpdateInfo, IMEIUpdateResponse.
     *
     * 3GPP TS 33.128, clause 7.2.3.3.4.
     *
     * @public
     * @readonly
     */
    readonly subscriberRecordChangePayload: OPTIONAL<SubscriberRecordChangePayload>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hSSIdentities: HSSIdentities[],
        subscriberRecordChangePayload: OPTIONAL<SubscriberRecordChangePayload>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hSSIdentities = hSSIdentities;
        this.subscriberRecordChangePayload = subscriberRecordChangePayload;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new HSSSubscriberRecordChange(_o.hSSIdentities, _o.subscriberRecordChangePayload, _o._unrecognizedExtensionsList);
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
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hSSIdentities": (_el: _Element): void => { hSSIdentities = $._decode_implicit<HSSIdentities[]>(() => $._decodeSequenceOf<HSSIdentities>(() => _decode_HSSIdentities))(_el); },
        "subscriberRecordChangePayload": (_el: _Element): void => { subscriberRecordChangePayload = $._decode_explicit<SubscriberRecordChangePayload>(() => _decode_SubscriberRecordChangePayload)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HSSSubscriberRecordChange,
        _extension_additions_list_spec_for_HSSSubscriberRecordChange,
        _root_component_type_list_2_spec_for_HSSSubscriberRecordChange,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new HSSSubscriberRecordChange(
        hSSIdentities,
        subscriberRecordChangePayload,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<HSSIdentities>(() => _encode_HSSIdentities, $.BER), $.BER)(value.hSSIdentities, $.BER);
    if (value.subscriberRecordChangePayload !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_SubscriberRecordChangePayload, $.BER)(value.subscriberRecordChangePayload, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_HSSSubscriberRecordChange(value, elGetter);
}


/* eslint-enable */
