/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-SSF-SCF-datatypes/DestinationRoutingAddress.ta.mjs";
// export { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-SSF-SCF-datatypes/DestinationRoutingAddress.ta.mjs";
import { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-SSF-SCF-datatypes/HighLayerCompatibility.ta.mjs";
// export { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-SSF-SCF-datatypes/HighLayerCompatibility.ta.mjs";
import { SupplementaryServices, _decode_SupplementaryServices, _encode_SupplementaryServices } from "../IN-SCF-SCF-datatypes/SupplementaryServices.ta.mjs";
// export { SupplementaryServices, SupplementaryServices_callingLineIdentificationPresentation /* IMPORTED_LONG_NAMED_BIT */, callingLineIdentificationPresentation /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callingLineIdentificationRestriction /* IMPORTED_LONG_NAMED_BIT */, callingLineIdentificationRestriction /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_connectedLineIdentificationPresentation /* IMPORTED_LONG_NAMED_BIT */, connectedLineIdentificationPresentation /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_connectedLineIdentificationRestriction /* IMPORTED_LONG_NAMED_BIT */, connectedLineIdentificationRestriction /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callForwardingOnNoReply /* IMPORTED_LONG_NAMED_BIT */, callForwardingOnNoReply /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callForwardingUnconditional /* IMPORTED_LONG_NAMED_BIT */, callForwardingUnconditional /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callForwardingOnBusy /* IMPORTED_LONG_NAMED_BIT */, callForwardingOnBusy /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callForwardingOnNotReachable /* IMPORTED_LONG_NAMED_BIT */, callForwardingOnNotReachable /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callWaiting /* IMPORTED_LONG_NAMED_BIT */, callWaiting /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callHold /* IMPORTED_LONG_NAMED_BIT */, callHold /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_reverseCharging /* IMPORTED_LONG_NAMED_BIT */, reverseCharging /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_explicitCallTransfer /* IMPORTED_LONG_NAMED_BIT */, explicitCallTransfer /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callCompletionOnBusySubscriber /* IMPORTED_LONG_NAMED_BIT */, callCompletionOnBusySubscriber /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_adviceOfChargeOnStart /* IMPORTED_LONG_NAMED_BIT */, adviceOfChargeOnStart /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_adviceOfChargeAtEnd /* IMPORTED_LONG_NAMED_BIT */, adviceOfChargeAtEnd /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_adviceOfChargeDuringCall /* IMPORTED_LONG_NAMED_BIT */, adviceOfChargeDuringCall /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_timeDependentRouting /* IMPORTED_LONG_NAMED_BIT */, timeDependentRouting /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callingPartingDependentRouting /* IMPORTED_LONG_NAMED_BIT */, callingPartingDependentRouting /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_outgoingCallBarring /* IMPORTED_LONG_NAMED_BIT */, outgoingCallBarring /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_incomingCallBarring /* IMPORTED_LONG_NAMED_BIT */, incomingCallBarring /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupplementaryServices, _encode_SupplementaryServices } from "../IN-SCF-SCF-datatypes/SupplementaryServices.ta.mjs";
import { Language, _decode_Language, _encode_Language } from "../IN-SCF-SRF-datatypes/Language.ta.mjs";
// export { Language, _decode_Language, _encode_Language } from "../IN-SCF-SRF-datatypes/Language.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-SSF-SCF-datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-SSF-SCF-datatypes/Carrier.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
import { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";


/**
 * @summary DestinationRelatedInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationRelatedInfo ::= SEQUENCE {
 *   calledPartyNumber       [0]  DestinationRoutingAddress OPTIONAL,
 *   highLayerCompatibility  [1]  HighLayerCompatibility OPTIONAL,
 *   supplementaryServices   [2]  SupplementaryServices OPTIONAL,
 *   preferredLanguage       [3]  Language OPTIONAL,
 *   carrier                 [4]  Carrier OPTIONAL,
 *   callingPartyNumber      [5]  CallingPartyNumber OPTIONAL,
 *   callingPartysCategory   [6]  CallingPartysCategory OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DestinationRelatedInfo {
    /**
     * @summary `calledPartyNumber`.
     * @public
     * @readonly
     */
    readonly calledPartyNumber: OPTIONAL<DestinationRoutingAddress>;
    /**
     * @summary `highLayerCompatibility`.
     * @public
     * @readonly
     */
    readonly highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    /**
     * @summary `supplementaryServices`.
     * @public
     * @readonly
     */
    readonly supplementaryServices: OPTIONAL<SupplementaryServices>;
    /**
     * @summary `preferredLanguage`.
     * @public
     * @readonly
     */
    readonly preferredLanguage: OPTIONAL<Language>;
    /**
     * @summary `carrier`.
     * @public
     * @readonly
     */
    readonly carrier: OPTIONAL<Carrier>;
    /**
     * @summary `callingPartyNumber`.
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    /**
     * @summary `callingPartysCategory`.
     * @public
     * @readonly
     */
    readonly callingPartysCategory: OPTIONAL<CallingPartysCategory>;

    constructor (
        calledPartyNumber: OPTIONAL<DestinationRoutingAddress>,
        highLayerCompatibility: OPTIONAL<HighLayerCompatibility>,
        supplementaryServices: OPTIONAL<SupplementaryServices>,
        preferredLanguage: OPTIONAL<Language>,
        carrier: OPTIONAL<Carrier>,
        callingPartyNumber: OPTIONAL<CallingPartyNumber>,
        callingPartysCategory: OPTIONAL<CallingPartysCategory>
    ) {
        this.calledPartyNumber = calledPartyNumber;
        this.highLayerCompatibility = highLayerCompatibility;
        this.supplementaryServices = supplementaryServices;
        this.preferredLanguage = preferredLanguage;
        this.carrier = carrier;
        this.callingPartyNumber = callingPartyNumber;
        this.callingPartysCategory = callingPartysCategory;
    }

    /**
     * @summary Restructures an object into a DestinationRelatedInfo
     * @description
     * 
     * This takes an `object` and converts it to a `DestinationRelatedInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DestinationRelatedInfo`.
     * @returns {DestinationRelatedInfo}
     */
    public static _from_object (_o: { [_K in keyof (DestinationRelatedInfo)]: (DestinationRelatedInfo)[_K] }): DestinationRelatedInfo {
        return new DestinationRelatedInfo(_o.calledPartyNumber, _o.highLayerCompatibility, _o.supplementaryServices, _o.preferredLanguage, _o.carrier, _o.callingPartyNumber, _o.callingPartysCategory);
    }


}

/**
 * @summary The Leading Root Component Types of DestinationRelatedInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DestinationRelatedInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("calledPartyNumber", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("highLayerCompatibility", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("supplementaryServices", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("preferredLanguage", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of DestinationRelatedInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DestinationRelatedInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DestinationRelatedInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DestinationRelatedInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DestinationRelatedInfo: $.ASN1Decoder<DestinationRelatedInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationRelatedInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationRelatedInfo (el: _Element): DestinationRelatedInfo {
    if (!_cached_decoder_for_DestinationRelatedInfo) { _cached_decoder_for_DestinationRelatedInfo = function (el: _Element): DestinationRelatedInfo {
    let calledPartyNumber: OPTIONAL<DestinationRoutingAddress>;
    let highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    let supplementaryServices: OPTIONAL<SupplementaryServices>;
    let preferredLanguage: OPTIONAL<Language>;
    let carrier: OPTIONAL<Carrier>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    const callbacks: $.DecodingMap = {
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_implicit<DestinationRoutingAddress>(() => _decode_DestinationRoutingAddress)(_el); },
        "highLayerCompatibility": (_el: _Element): void => { highLayerCompatibility = $._decode_implicit<HighLayerCompatibility>(() => _decode_HighLayerCompatibility)(_el); },
        "supplementaryServices": (_el: _Element): void => { supplementaryServices = $._decode_implicit<SupplementaryServices>(() => _decode_SupplementaryServices)(_el); },
        "preferredLanguage": (_el: _Element): void => { preferredLanguage = $._decode_implicit<Language>(() => _decode_Language)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DestinationRelatedInfo,
        _extension_additions_list_spec_for_DestinationRelatedInfo,
        _root_component_type_list_2_spec_for_DestinationRelatedInfo,
        undefined,
    );
    return new DestinationRelatedInfo(
        calledPartyNumber,
        highLayerCompatibility,
        supplementaryServices,
        preferredLanguage,
        carrier,
        callingPartyNumber,
        callingPartysCategory
    );
}; }
    return _cached_decoder_for_DestinationRelatedInfo(el);
}

let _cached_encoder_for_DestinationRelatedInfo: $.ASN1Encoder<DestinationRelatedInfo> | null = null;

/**
 * @summary Encodes a(n) DestinationRelatedInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationRelatedInfo, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationRelatedInfo (value: DestinationRelatedInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationRelatedInfo) { _cached_encoder_for_DestinationRelatedInfo = function (value: DestinationRelatedInfo, elGetter: $.ASN1Encoder<DestinationRelatedInfo>): _Element {
    const _components: _Element[] = [];
    if (value.calledPartyNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_DestinationRoutingAddress, $.BER)(value.calledPartyNumber, $.BER));
    }
    if (value.highLayerCompatibility !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_HighLayerCompatibility, $.BER)(value.highLayerCompatibility, $.BER));
    }
    if (value.supplementaryServices !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SupplementaryServices, $.BER)(value.supplementaryServices, $.BER));
    }
    if (value.preferredLanguage !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Language, $.BER)(value.preferredLanguage, $.BER));
    }
    if (value.carrier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Carrier, $.BER)(value.carrier, $.BER));
    }
    if (value.callingPartyNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER));
    }
    if (value.callingPartysCategory !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DestinationRelatedInfo(value, elGetter);
}


/* eslint-enable */
