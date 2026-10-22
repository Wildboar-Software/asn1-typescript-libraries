/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BearerCapabilities, _decode_BearerCapabilities, _encode_BearerCapabilities } from "../IN-CS3-SCF-SCF-datatypes/BearerCapabilities.ta.mjs";
// export { BearerCapabilities, BearerCapabilities_speech /* IMPORTED_LONG_NAMED_BIT */, speech /* IMPORTED_SHORT_NAMED_BIT */, BearerCapabilities_bc64kbits /* IMPORTED_LONG_NAMED_BIT */, bc64kbits /* IMPORTED_SHORT_NAMED_BIT */, BearerCapabilities_bc2x64kbits /* IMPORTED_LONG_NAMED_BIT */, bc2x64kbits /* IMPORTED_SHORT_NAMED_BIT */, BearerCapabilities_bc384kbits /* IMPORTED_LONG_NAMED_BIT */, bc384kbits /* IMPORTED_SHORT_NAMED_BIT */, BearerCapabilities_bc1536kbits /* IMPORTED_LONG_NAMED_BIT */, bc1536kbits /* IMPORTED_SHORT_NAMED_BIT */, BearerCapabilities_bc1920kbits /* IMPORTED_LONG_NAMED_BIT */, bc1920kbits /* IMPORTED_SHORT_NAMED_BIT */, BearerCapabilities_multirate /* IMPORTED_LONG_NAMED_BIT */, multirate /* IMPORTED_SHORT_NAMED_BIT */, BearerCapabilities_restrictedDigitalInfo /* IMPORTED_LONG_NAMED_BIT */, restrictedDigitalInfo /* IMPORTED_SHORT_NAMED_BIT */, BearerCapabilities_bc3_1khzAudio /* IMPORTED_LONG_NAMED_BIT */, bc3_1khzAudio /* IMPORTED_SHORT_NAMED_BIT */, BearerCapabilities_bc7khzAudio /* IMPORTED_LONG_NAMED_BIT */, bc7khzAudio /* IMPORTED_SHORT_NAMED_BIT */, BearerCapabilities_video /* IMPORTED_LONG_NAMED_BIT */, video /* IMPORTED_SHORT_NAMED_BIT */, _decode_BearerCapabilities, _encode_BearerCapabilities } from "../IN-CS3-SCF-SCF-datatypes/BearerCapabilities.ta.mjs";
import { HighLayerCompatibilities, _decode_HighLayerCompatibilities, _encode_HighLayerCompatibilities } from "../IN-CS3-SCF-SCF-datatypes/HighLayerCompatibilities.ta.mjs";
// export { HighLayerCompatibilities, HighLayerCompatibilities_telephony /* IMPORTED_LONG_NAMED_BIT */, telephony /* IMPORTED_SHORT_NAMED_BIT */, HighLayerCompatibilities_facsimileGroup2_3 /* IMPORTED_LONG_NAMED_BIT */, facsimileGroup2_3 /* IMPORTED_SHORT_NAMED_BIT */, HighLayerCompatibilities_facsimileGroup4classeI /* IMPORTED_LONG_NAMED_BIT */, facsimileGroup4classeI /* IMPORTED_SHORT_NAMED_BIT */, HighLayerCompatibilities_teletexMixedMode /* IMPORTED_LONG_NAMED_BIT */, teletexMixedMode /* IMPORTED_SHORT_NAMED_BIT */, HighLayerCompatibilities_teletexProcessableMode /* IMPORTED_LONG_NAMED_BIT */, teletexProcessableMode /* IMPORTED_SHORT_NAMED_BIT */, HighLayerCompatibilities_teletexBasicMode /* IMPORTED_LONG_NAMED_BIT */, teletexBasicMode /* IMPORTED_SHORT_NAMED_BIT */, HighLayerCompatibilities_syntaxBasedVideotex /* IMPORTED_LONG_NAMED_BIT */, syntaxBasedVideotex /* IMPORTED_SHORT_NAMED_BIT */, HighLayerCompatibilities_internationalVideotex /* IMPORTED_LONG_NAMED_BIT */, internationalVideotex /* IMPORTED_SHORT_NAMED_BIT */, HighLayerCompatibilities_telexService /* IMPORTED_LONG_NAMED_BIT */, telexService /* IMPORTED_SHORT_NAMED_BIT */, HighLayerCompatibilities_messageHandlingSystem /* IMPORTED_LONG_NAMED_BIT */, messageHandlingSystem /* IMPORTED_SHORT_NAMED_BIT */, HighLayerCompatibilities_osiApplication /* IMPORTED_LONG_NAMED_BIT */, osiApplication /* IMPORTED_SHORT_NAMED_BIT */, HighLayerCompatibilities_audioVisual /* IMPORTED_LONG_NAMED_BIT */, audioVisual /* IMPORTED_SHORT_NAMED_BIT */, _decode_HighLayerCompatibilities, _encode_HighLayerCompatibilities } from "../IN-CS3-SCF-SCF-datatypes/HighLayerCompatibilities.ta.mjs";
import { SupplementaryServices, _decode_SupplementaryServices, _encode_SupplementaryServices } from "../IN-CS3-SCF-SCF-datatypes/SupplementaryServices.ta.mjs";
// export { SupplementaryServices, SupplementaryServices_callingLineIdentificationPresentation /* IMPORTED_LONG_NAMED_BIT */, callingLineIdentificationPresentation /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callingLineIdentificationRestriction /* IMPORTED_LONG_NAMED_BIT */, callingLineIdentificationRestriction /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_connectedLineIdentificationPresentation /* IMPORTED_LONG_NAMED_BIT */, connectedLineIdentificationPresentation /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_connectedLineIdentificationRestriction /* IMPORTED_LONG_NAMED_BIT */, connectedLineIdentificationRestriction /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callForwardingOnNoReply /* IMPORTED_LONG_NAMED_BIT */, callForwardingOnNoReply /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callForwardingUnconditional /* IMPORTED_LONG_NAMED_BIT */, callForwardingUnconditional /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callForwardingOnBusy /* IMPORTED_LONG_NAMED_BIT */, callForwardingOnBusy /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callForwardingOnNotReachable /* IMPORTED_LONG_NAMED_BIT */, callForwardingOnNotReachable /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callWaiting /* IMPORTED_LONG_NAMED_BIT */, callWaiting /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callHold /* IMPORTED_LONG_NAMED_BIT */, callHold /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_reverseCharging /* IMPORTED_LONG_NAMED_BIT */, reverseCharging /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_explicitCallTransfer /* IMPORTED_LONG_NAMED_BIT */, explicitCallTransfer /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callCompletionOnBusySubscriber /* IMPORTED_LONG_NAMED_BIT */, callCompletionOnBusySubscriber /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_adviceOfChargeOnStart /* IMPORTED_LONG_NAMED_BIT */, adviceOfChargeOnStart /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_adviceOfChargeAtEnd /* IMPORTED_LONG_NAMED_BIT */, adviceOfChargeAtEnd /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_adviceOfChargeDuringCall /* IMPORTED_LONG_NAMED_BIT */, adviceOfChargeDuringCall /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_timeDependentRouting /* IMPORTED_LONG_NAMED_BIT */, timeDependentRouting /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_callingPartingDependentRouting /* IMPORTED_LONG_NAMED_BIT */, callingPartingDependentRouting /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_outgoingCallBarring /* IMPORTED_LONG_NAMED_BIT */, outgoingCallBarring /* IMPORTED_SHORT_NAMED_BIT */, SupplementaryServices_incomingCallBarring /* IMPORTED_LONG_NAMED_BIT */, incomingCallBarring /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupplementaryServices, _encode_SupplementaryServices } from "../IN-CS3-SCF-SCF-datatypes/SupplementaryServices.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary NetworkCapabilityResultArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCapabilityResultArg-Type ::=
 * SEQUENCE {
 *   bearerCapabilities [0] BearerCapabilities OPTIONAL,
 *   highLayerCompatibilities [1] HighLayerCompatibilities OPTIONAL,
 *   supplementaryServices [2] SupplementaryServices OPTIONAL,
 *   securityParameters [3] SecurityParameters OPTIONAL,
 *   extensions [4] Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class NetworkCapabilityResultArg_Type {
    /**
     * @summary `bearerCapabilities`.
     * @public
     * @readonly
     */
    readonly bearerCapabilities: OPTIONAL<BearerCapabilities>;
    /**
     * @summary `highLayerCompatibilities`.
     * @public
     * @readonly
     */
    readonly highLayerCompatibilities: OPTIONAL<HighLayerCompatibilities>;
    /**
     * @summary `supplementaryServices`.
     * @public
     * @readonly
     */
    readonly supplementaryServices: OPTIONAL<SupplementaryServices>;
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
        bearerCapabilities: OPTIONAL<BearerCapabilities>,
        highLayerCompatibilities: OPTIONAL<HighLayerCompatibilities>,
        supplementaryServices: OPTIONAL<SupplementaryServices>,
        securityParameters: OPTIONAL<SecurityParameters>,
        extensions: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.bearerCapabilities = bearerCapabilities;
        this.highLayerCompatibilities = highLayerCompatibilities;
        this.supplementaryServices = supplementaryServices;
        this.securityParameters = securityParameters;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NetworkCapabilityResultArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `NetworkCapabilityResultArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NetworkCapabilityResultArg_Type`.
     * @returns {NetworkCapabilityResultArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (NetworkCapabilityResultArg_Type)]: (NetworkCapabilityResultArg_Type)[_K] }): NetworkCapabilityResultArg_Type {
        return new NetworkCapabilityResultArg_Type(_o.bearerCapabilities, _o.highLayerCompatibilities, _o.supplementaryServices, _o.securityParameters, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NetworkCapabilityResultArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NetworkCapabilityResultArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("bearerCapabilities", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("highLayerCompatibilities", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("supplementaryServices", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of NetworkCapabilityResultArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NetworkCapabilityResultArg_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NetworkCapabilityResultArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NetworkCapabilityResultArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NetworkCapabilityResultArg_Type: $.ASN1Decoder<NetworkCapabilityResultArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkCapabilityResultArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkCapabilityResultArg_Type (el: _Element): NetworkCapabilityResultArg_Type {
    if (!_cached_decoder_for_NetworkCapabilityResultArg_Type) { _cached_decoder_for_NetworkCapabilityResultArg_Type = function (el: _Element): NetworkCapabilityResultArg_Type {
    let bearerCapabilities: OPTIONAL<BearerCapabilities>;
    let highLayerCompatibilities: OPTIONAL<HighLayerCompatibilities>;
    let supplementaryServices: OPTIONAL<SupplementaryServices>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "bearerCapabilities": (_el: _Element): void => { bearerCapabilities = $._decode_implicit<BearerCapabilities>(() => _decode_BearerCapabilities)(_el); },
        "highLayerCompatibilities": (_el: _Element): void => { highLayerCompatibilities = $._decode_implicit<HighLayerCompatibilities>(() => _decode_HighLayerCompatibilities)(_el); },
        "supplementaryServices": (_el: _Element): void => { supplementaryServices = $._decode_implicit<SupplementaryServices>(() => _decode_SupplementaryServices)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NetworkCapabilityResultArg_Type,
        _extension_additions_list_spec_for_NetworkCapabilityResultArg_Type,
        _root_component_type_list_2_spec_for_NetworkCapabilityResultArg_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NetworkCapabilityResultArg_Type(
        bearerCapabilities,
        highLayerCompatibilities,
        supplementaryServices,
        securityParameters,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NetworkCapabilityResultArg_Type(el);
}

let _cached_encoder_for_NetworkCapabilityResultArg_Type: $.ASN1Encoder<NetworkCapabilityResultArg_Type> | null = null;

/**
 * @summary Encodes a(n) NetworkCapabilityResultArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkCapabilityResultArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkCapabilityResultArg_Type (value: NetworkCapabilityResultArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkCapabilityResultArg_Type) { _cached_encoder_for_NetworkCapabilityResultArg_Type = function (value: NetworkCapabilityResultArg_Type, elGetter: $.ASN1Encoder<NetworkCapabilityResultArg_Type>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.bearerCapabilities !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_BearerCapabilities, $.BER)(value.bearerCapabilities, $.BER);
    }
    if (value.highLayerCompatibilities !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_HighLayerCompatibilities, $.BER)(value.highLayerCompatibilities, $.BER);
    }
    if (value.supplementaryServices !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SupplementaryServices, $.BER)(value.supplementaryServices, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NetworkCapabilityResultArg_Type(value, elGetter);
}


/* eslint-enable */
