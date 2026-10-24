/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RoutingAddress, _decode_RoutingAddress, _encode_RoutingAddress } from "../IN-CS3-SCF-SCF-datatypes/RoutingAddress.ta.mjs";
// export { RoutingAddress, _decode_RoutingAddress, _encode_RoutingAddress } from "../IN-CS3-SCF-SCF-datatypes/RoutingAddress.ta.mjs";
import { type HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-CS3-SSF-SCF-datatypes/HighLayerCompatibility.ta.mjs";
// export { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-CS3-SSF-SCF-datatypes/HighLayerCompatibility.ta.mjs";
import { type SupplementaryServices, _decode_SupplementaryServices, _encode_SupplementaryServices } from "../IN-CS3-SCF-SCF-datatypes/SupplementaryServices.ta.mjs";
// export { SupplementaryServices, SupplementaryServices_callingLineIdentificationPresentation /* IMPORTED_LONG_NAMED_BIT */, callingLineIdentificationPresentation /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callingLineIdentificationRestriction /* IMPORTED_LONG_NAMED_BIT */, callingLineIdentificationRestriction /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_connectedLineIdentificationPresentation /* IMPORTED_LONG_NAMED_BIT */, connectedLineIdentificationPresentation /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_connectedLineIdentificationRestriction /* IMPORTED_LONG_NAMED_BIT */, connectedLineIdentificationRestriction /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callForwardingOnNoReply /* IMPORTED_LONG_NAMED_BIT */, callForwardingOnNoReply /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callForwardingUnconditional /* IMPORTED_LONG_NAMED_BIT */, callForwardingUnconditional /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callForwardingOnBusy /* IMPORTED_LONG_NAMED_BIT */, callForwardingOnBusy /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callForwardingOnNotReachable /* IMPORTED_LONG_NAMED_BIT */, callForwardingOnNotReachable /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callWaiting /* IMPORTED_LONG_NAMED_BIT */, callWaiting /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callHold /* IMPORTED_LONG_NAMED_BIT */, callHold /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_reverseCharging /* IMPORTED_LONG_NAMED_BIT */, reverseCharging /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_explicitCallTransfer /* IMPORTED_LONG_NAMED_BIT */, explicitCallTransfer /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callCompletionOnBusySubscriber /* IMPORTED_LONG_NAMED_BIT */, callCompletionOnBusySubscriber /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_adviceOfChargeOnStart /* IMPORTED_LONG_NAMED_BIT */, adviceOfChargeOnStart /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_adviceOfChargeAtEnd /* IMPORTED_LONG_NAMED_BIT */, adviceOfChargeAtEnd /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_adviceOfChargeDuringCall /* IMPORTED_LONG_NAMED_BIT */, adviceOfChargeDuringCall /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_timeDependentRouting /* IMPORTED_LONG_NAMED_BIT */, timeDependentRouting /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callingPartingDependentRouting /* IMPORTED_LONG_NAMED_BIT */, callingPartingDependentRouting /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_outgoingCallBarring /* IMPORTED_LONG_NAMED_BIT */, outgoingCallBarring /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_incomingCallBarring /* IMPORTED_LONG_NAMED_BIT */, incomingCallBarring /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupplementaryServices, _encode_SupplementaryServices } from "../IN-CS3-SCF-SCF-datatypes/SupplementaryServices.ta.mjs";
import { type Language, _decode_Language, _encode_Language } from "../IN-CS3-SCF-SRF-datatypes/Language.ta.mjs";
// export { Language, _decode_Language, _encode_Language } from "../IN-CS3-SCF-SRF-datatypes/Language.ta.mjs";
import { type Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS3-SSF-SCF-datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS3-SSF-SCF-datatypes/Carrier.ta.mjs";
import { type CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
import { type OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
import { type RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-CS3-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-CS3-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
import { type RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-CS3-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-CS3-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
import { type CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-CS3-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-CS3-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary HandlingInformationResultArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandlingInformationResultArg-Type ::=
 * SEQUENCE {
 *   routingAddress [0] RoutingAddress OPTIONAL,
 *   highLayerCompatibility [1] HighLayerCompatibility OPTIONAL,
 *   supplementaryServices [2] SupplementaryServices OPTIONAL,
 *   preferredLanguage [3] Language OPTIONAL,
 *   carrier [4] Carrier OPTIONAL,
 *   callingPartyNumber [5] CallingPartyNumber OPTIONAL,
 *   originalCalledPartyID [6] OriginalCalledPartyID OPTIONAL,
 *   redirectingPartyID [7] RedirectingPartyID OPTIONAL,
 *   redirectionInformation [8] RedirectionInformation OPTIONAL,
 *   callingPartysCategory [9] CallingPartysCategory OPTIONAL,
 *   securityParameters [10] SecurityParameters OPTIONAL,
 *   extensions [11] Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class HandlingInformationResultArg_Type {
    /**
     * @summary `routingAddress`.
     * @public
     * @readonly
     */
    readonly routingAddress: OPTIONAL<RoutingAddress>;
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
     * @summary `originalCalledPartyID`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    /**
     * @summary `redirectingPartyID`.
     * @public
     * @readonly
     */
    readonly redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    /**
     * @summary `redirectionInformation`.
     * @public
     * @readonly
     */
    readonly redirectionInformation: OPTIONAL<RedirectionInformation>;
    /**
     * @summary `callingPartysCategory`.
     * @public
     * @readonly
     */
    readonly callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        routingAddress?: OPTIONAL<RoutingAddress>,
        highLayerCompatibility?: OPTIONAL<HighLayerCompatibility>,
        supplementaryServices?: OPTIONAL<SupplementaryServices>,
        preferredLanguage?: OPTIONAL<Language>,
        carrier?: OPTIONAL<Carrier>,
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        originalCalledPartyID?: OPTIONAL<OriginalCalledPartyID>,
        redirectingPartyID?: OPTIONAL<RedirectingPartyID>,
        redirectionInformation?: OPTIONAL<RedirectionInformation>,
        callingPartysCategory?: OPTIONAL<CallingPartysCategory>,
        securityParameters?: OPTIONAL<SecurityParameters>,
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.routingAddress = routingAddress;
        this.highLayerCompatibility = highLayerCompatibility;
        this.supplementaryServices = supplementaryServices;
        this.preferredLanguage = preferredLanguage;
        this.carrier = carrier;
        this.callingPartyNumber = callingPartyNumber;
        this.originalCalledPartyID = originalCalledPartyID;
        this.redirectingPartyID = redirectingPartyID;
        this.redirectionInformation = redirectionInformation;
        this.callingPartysCategory = callingPartysCategory;
        this.securityParameters = securityParameters;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a HandlingInformationResultArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `HandlingInformationResultArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HandlingInformationResultArg_Type`.
     * @returns {HandlingInformationResultArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (HandlingInformationResultArg_Type)]: (HandlingInformationResultArg_Type)[_K] }): HandlingInformationResultArg_Type {
        return new HandlingInformationResultArg_Type(_o.routingAddress, _o.highLayerCompatibility, _o.supplementaryServices, _o.preferredLanguage, _o.carrier, _o.callingPartyNumber, _o.originalCalledPartyID, _o.redirectingPartyID, _o.redirectionInformation, _o.callingPartysCategory, _o.securityParameters, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of HandlingInformationResultArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HandlingInformationResultArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("routingAddress", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("highLayerCompatibility", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("supplementaryServices", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("preferredLanguage", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of HandlingInformationResultArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HandlingInformationResultArg_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HandlingInformationResultArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HandlingInformationResultArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HandlingInformationResultArg_Type: $.ASN1Decoder<HandlingInformationResultArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandlingInformationResultArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandlingInformationResultArg_Type (el: _Element): HandlingInformationResultArg_Type {
    if (!_cached_decoder_for_HandlingInformationResultArg_Type) { _cached_decoder_for_HandlingInformationResultArg_Type = function (el: _Element): HandlingInformationResultArg_Type {
    let routingAddress: OPTIONAL<RoutingAddress>;
    let highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    let supplementaryServices: OPTIONAL<SupplementaryServices>;
    let preferredLanguage: OPTIONAL<Language>;
    let carrier: OPTIONAL<Carrier>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "routingAddress": (_el: _Element): void => { routingAddress = $._decode_explicit<RoutingAddress>(() => _decode_RoutingAddress)(_el); },
        "highLayerCompatibility": (_el: _Element): void => { highLayerCompatibility = $._decode_implicit<HighLayerCompatibility>(() => _decode_HighLayerCompatibility)(_el); },
        "supplementaryServices": (_el: _Element): void => { supplementaryServices = $._decode_implicit<SupplementaryServices>(() => _decode_SupplementaryServices)(_el); },
        "preferredLanguage": (_el: _Element): void => { preferredLanguage = $._decode_implicit<Language>(() => _decode_Language)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HandlingInformationResultArg_Type,
        _extension_additions_list_spec_for_HandlingInformationResultArg_Type,
        _root_component_type_list_2_spec_for_HandlingInformationResultArg_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new HandlingInformationResultArg_Type(
        routingAddress,
        highLayerCompatibility,
        supplementaryServices,
        preferredLanguage,
        carrier,
        callingPartyNumber,
        originalCalledPartyID,
        redirectingPartyID,
        redirectionInformation,
        callingPartysCategory,
        securityParameters,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_HandlingInformationResultArg_Type(el);
}

let _cached_encoder_for_HandlingInformationResultArg_Type: $.ASN1Encoder<HandlingInformationResultArg_Type> | null = null;

/**
 * @summary Encodes a(n) HandlingInformationResultArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandlingInformationResultArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_HandlingInformationResultArg_Type (value: HandlingInformationResultArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandlingInformationResultArg_Type) { _cached_encoder_for_HandlingInformationResultArg_Type = function (value: HandlingInformationResultArg_Type, elGetter: $.ASN1Encoder<HandlingInformationResultArg_Type>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(12 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.routingAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_RoutingAddress, $.BER)(value.routingAddress, $.BER);
    }
    if (value.highLayerCompatibility !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_HighLayerCompatibility, $.BER)(value.highLayerCompatibility, $.BER);
    }
    if (value.supplementaryServices !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SupplementaryServices, $.BER)(value.supplementaryServices, $.BER);
    }
    if (value.preferredLanguage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Language, $.BER)(value.preferredLanguage, $.BER);
    }
    if (value.carrier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Carrier, $.BER)(value.carrier, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.redirectingPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER);
    }
    if (value.redirectionInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER);
    }
    if (value.callingPartysCategory !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_HandlingInformationResultArg_Type(value, elGetter);
}


/* eslint-enable */
