/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { RoutingAddress, _decode_RoutingAddress, _encode_RoutingAddress } from "../IN-SCF-SCF-datatypes/RoutingAddress.ta.mjs";
// export { RoutingAddress, _decode_RoutingAddress, _encode_RoutingAddress } from "../IN-SCF-SCF-datatypes/RoutingAddress.ta.mjs";
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
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
import { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary HandlingInformationResultArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandlingInformationResultArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {routingAddress          [0]  RoutingAddress OPTIONAL,
 *                highLayerCompatibility  [1]  HighLayerCompatibility OPTIONAL,
 *                supplementaryServices   [2]  SupplementaryServices OPTIONAL,
 *                preferredLanguage       [3]  Language OPTIONAL,
 *                carrier                 [4]  Carrier OPTIONAL,
 *                callingPartyNumber      [5]  CallingPartyNumber OPTIONAL,
 *                originalCalledPartyID   [6]  OriginalCalledPartyID OPTIONAL,
 *                redirectingPartyID      [7]  RedirectingPartyID OPTIONAL,
 *                redirectionInformation  [8]  RedirectionInformation OPTIONAL,
 *                callingPartysCategory   [9]  CallingPartysCategory OPTIONAL,
 *                securityParameters      [10]  SecurityParameters OPTIONAL,
 *                extensions              [11]  Extensions OPTIONAL,
 *                ...}}
 * ```
 */
export
type HandlingInformationResultArg = OPTIONALLY_PROTECTED<{ routingAddress: RoutingAddress; highLayerCompatibility: HighLayerCompatibility; supplementaryServices: SupplementaryServices; preferredLanguage: Language; carrier: Carrier; callingPartyNumber: CallingPartyNumber; originalCalledPartyID: OriginalCalledPartyID; redirectingPartyID: RedirectingPartyID; redirectionInformation: RedirectionInformation; callingPartysCategory: CallingPartysCategory; securityParameters: SecurityParameters; extensions: Extensions }>; // DefinedType

let _cached_decoder_for_HandlingInformationResultArg: $.ASN1Decoder<HandlingInformationResultArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandlingInformationResultArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandlingInformationResultArg (el: _Element): HandlingInformationResultArg {
    if (!_cached_decoder_for_HandlingInformationResultArg) { _cached_decoder_for_HandlingInformationResultArg = _get_decoder_for_OPTIONALLY_PROTECTED<{ routingAddress: RoutingAddress; highLayerCompatibility: HighLayerCompatibility; supplementaryServices: SupplementaryServices; preferredLanguage: Language; carrier: Carrier; callingPartyNumber: CallingPartyNumber; originalCalledPartyID: OriginalCalledPartyID; redirectingPartyID: RedirectingPartyID; redirectionInformation: RedirectionInformation; callingPartysCategory: CallingPartysCategory; securityParameters: SecurityParameters; extensions: Extensions }>(function (el: _Element): OPTIONALLY_PROTECTED {
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
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new OPTIONALLY_PROTECTED(
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
}); }
    return _cached_decoder_for_HandlingInformationResultArg(el);
}

let _cached_encoder_for_HandlingInformationResultArg: $.ASN1Encoder<HandlingInformationResultArg> | null = null;

/**
 * @summary Encodes a(n) HandlingInformationResultArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandlingInformationResultArg, encoded as an ASN.1 Element.
 */
export
function _encode_HandlingInformationResultArg (value: HandlingInformationResultArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandlingInformationResultArg) { _cached_encoder_for_HandlingInformationResultArg = _get_encoder_for_OPTIONALLY_PROTECTED<{ routingAddress: RoutingAddress; highLayerCompatibility: HighLayerCompatibility; supplementaryServices: SupplementaryServices; preferredLanguage: Language; carrier: Carrier; callingPartyNumber: CallingPartyNumber; originalCalledPartyID: OriginalCalledPartyID; redirectingPartyID: RedirectingPartyID; redirectionInformation: RedirectionInformation; callingPartysCategory: CallingPartysCategory; securityParameters: SecurityParameters; extensions: Extensions }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
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
}); }
    return _cached_encoder_for_HandlingInformationResultArg(value, elGetter);
}


/* eslint-enable */
