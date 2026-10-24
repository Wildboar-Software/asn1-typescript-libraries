/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HSSIdentities, _decode_HSSIdentities, _encode_HSSIdentities } from "../TS33128Payloads/HSSIdentities.ta.mjs";
// export { HSSIdentities, _decode_HSSIdentities, _encode_HSSIdentities } from "../TS33128Payloads/HSSIdentities.ta.mjs";
import { SubscriptionDataSets, _decode_SubscriptionDataSets, _encode_SubscriptionDataSets } from "../TS33128Payloads/SubscriptionDataSets.ta.mjs";
// export { SubscriptionDataSets, _decode_SubscriptionDataSets, _encode_SubscriptionDataSets } from "../TS33128Payloads/SubscriptionDataSets.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary HSSStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * The IRI-POI in the HSS shall generate an xIRI containing the
 * HSSStartOfInterceptionWithRegisteredTarget record when the IRI-POI present in
 * the HSS detects that interception is activated for a UE that has already been
 * registered at the HSS.
 *
 * The HSS may have stored target subscription data for both EPC and IMS. In
 * such a case, a single HSS Start of Interception with Registered Target xIRI
 * shall be generated containing the target context.
 *
 * 3GPP TS 33.128, clause 7.2.3.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HSSStartOfInterceptionWithRegisteredTarget ::= SEQUENCE
 * {
 *     hSSIdentities              [1] HSSIdentities,
 *     subscriptionDataSets       [2] SubscriptionDataSets,
 *     pSUserState                [3] SBIType
 * }
 * ```
 * 
 * @class
 */
export
class HSSStartOfInterceptionWithRegisteredTarget {
    /**
     * @summary `hSSIdentities`.
     * @description
     *
     * Indicates the identifiers for which the subscription data sets apply.
     * Shall include one or more subscriber identifier. See TS 29.562 [101]
     * clause 6.2.3.1.
     *
     * 3GPP TS 33.128, clause 7.2.3.3.3.
     *
     * @public
     * @readonly
     */
    readonly hSSIdentities: HSSIdentities;
    /**
     * @summary `subscriptionDataSets`.
     * @description
     *
     * Includes current subscription information for the target UE stored at the
     * HSS. Encoded according to TS 29.562 [101] clause 6.2.6.2.4. The
     * SBIReference for this parameter shall be populated with
     * 'TS29562_Nhss_imsSDM.yaml#/components/schemas/ImsProfileData'.
     *
     * 3GPP TS 33.128, clause 7.2.3.3.3.
     *
     * @public
     * @readonly
     */
    readonly subscriptionDataSets: SubscriptionDataSets;
    /**
     * @summary `pSUserState`.
     * @description
     *
     * Indicates the user state in the PS domain as known at the HSS. Encoded
     * according to TS 29.562 [101] clause 6.2.6.3.15. The SBIReference for this
     * parameter shall be populated with 'TS29562_Nhss_imsSDM.yaml
     * #/components/schemas/PsUserState'.
     *
     * 3GPP TS 33.128, clause 7.2.3.3.3.
     *
     * @public
     * @readonly
     */
    readonly pSUserState: SBIType;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hSSIdentities: HSSIdentities,
        subscriptionDataSets: SubscriptionDataSets,
        pSUserState: SBIType,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hSSIdentities = hSSIdentities;
        this.subscriptionDataSets = subscriptionDataSets;
        this.pSUserState = pSUserState;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a HSSStartOfInterceptionWithRegisteredTarget
     * @description
     * 
     * This takes an `object` and converts it to a `HSSStartOfInterceptionWithRegisteredTarget`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HSSStartOfInterceptionWithRegisteredTarget`.
     * @returns {HSSStartOfInterceptionWithRegisteredTarget}
     */
    public static _from_object (_o: { [_K in keyof (HSSStartOfInterceptionWithRegisteredTarget)]: (HSSStartOfInterceptionWithRegisteredTarget)[_K] }): HSSStartOfInterceptionWithRegisteredTarget {
        return new HSSStartOfInterceptionWithRegisteredTarget(_o.hSSIdentities, _o.subscriptionDataSets, _o.pSUserState, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of HSSStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HSSStartOfInterceptionWithRegisteredTarget: $.ComponentSpec[] = [
    new $.ComponentSpec("hSSIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subscriptionDataSets", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pSUserState", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of HSSStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HSSStartOfInterceptionWithRegisteredTarget: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HSSStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HSSStartOfInterceptionWithRegisteredTarget: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HSSStartOfInterceptionWithRegisteredTarget: $.ASN1Decoder<HSSStartOfInterceptionWithRegisteredTarget> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HSSStartOfInterceptionWithRegisteredTarget
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HSSStartOfInterceptionWithRegisteredTarget (el: _Element): HSSStartOfInterceptionWithRegisteredTarget {
    if (!_cached_decoder_for_HSSStartOfInterceptionWithRegisteredTarget) { _cached_decoder_for_HSSStartOfInterceptionWithRegisteredTarget = function (el: _Element): HSSStartOfInterceptionWithRegisteredTarget {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("HSSStartOfInterceptionWithRegisteredTarget contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hSSIdentities";
    sequence[1].name = "subscriptionDataSets";
    sequence[2].name = "pSUserState";
    let hSSIdentities!: HSSIdentities;
    let subscriptionDataSets!: SubscriptionDataSets;
    let pSUserState!: SBIType;
    hSSIdentities = $._decode_implicit<HSSIdentities>(() => _decode_HSSIdentities)(sequence[0]);
    subscriptionDataSets = $._decode_explicit<SubscriptionDataSets>(() => _decode_SubscriptionDataSets)(sequence[1]);
    pSUserState = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[2]);
    return new HSSStartOfInterceptionWithRegisteredTarget(
        hSSIdentities,
        subscriptionDataSets,
        pSUserState,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_HSSStartOfInterceptionWithRegisteredTarget(el);
}

let _cached_encoder_for_HSSStartOfInterceptionWithRegisteredTarget: $.ASN1Encoder<HSSStartOfInterceptionWithRegisteredTarget> | null = null;

/**
 * @summary Encodes a(n) HSSStartOfInterceptionWithRegisteredTarget into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HSSStartOfInterceptionWithRegisteredTarget, encoded as an ASN.1 Element.
 */
export
function _encode_HSSStartOfInterceptionWithRegisteredTarget (value: HSSStartOfInterceptionWithRegisteredTarget, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HSSStartOfInterceptionWithRegisteredTarget) { _cached_encoder_for_HSSStartOfInterceptionWithRegisteredTarget = function (value: HSSStartOfInterceptionWithRegisteredTarget, elGetter: $.ASN1Encoder<HSSStartOfInterceptionWithRegisteredTarget>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_HSSIdentities, $.BER)(value.hSSIdentities, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_SubscriptionDataSets, $.BER)(value.subscriptionDataSets, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.pSUserState, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_HSSStartOfInterceptionWithRegisteredTarget(value, elGetter);
}


/* eslint-enable */
