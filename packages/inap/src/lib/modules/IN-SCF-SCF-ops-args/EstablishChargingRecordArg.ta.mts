/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-SCF-SCF-datatypes/UserCredit.ta.mjs";
// export { UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-SCF-SCF-datatypes/UserCredit.ta.mjs";
import { ChargingParameters, _decode_ChargingParameters, _encode_ChargingParameters } from "../IN-SCF-SCF-datatypes/ChargingParameters.ta.mjs";
// export { ChargingParameters, _decode_ChargingParameters, _encode_ChargingParameters } from "../IN-SCF-SCF-datatypes/ChargingParameters.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { ConsumedCreditAction, _decode_ConsumedCreditAction, _encode_ConsumedCreditAction } from "../IN-SCF-SCF-datatypes/ConsumedCreditAction.ta.mjs";
// export { ConsumedCreditAction, _enum_for_ConsumedCreditAction, ConsumedCreditAction_disconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, disconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsumedCreditAction_message /* IMPORTED_LONG_ENUMERATION_ITEM */, message /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsumedCreditAction_tone /* IMPORTED_LONG_ENUMERATION_ITEM */, tone /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConsumedCreditAction, _encode_ConsumedCreditAction } from "../IN-SCF-SCF-datatypes/ConsumedCreditAction.ta.mjs";
import { ReportDestinationInformation, _decode_ReportDestinationInformation, _encode_ReportDestinationInformation } from "../IN-SCF-SCF-datatypes/ReportDestinationInformation.ta.mjs";
// export { ReportDestinationInformation, _decode_ReportDestinationInformation, _encode_ReportDestinationInformation } from "../IN-SCF-SCF-datatypes/ReportDestinationInformation.ta.mjs";
import { FreeContainer, _decode_FreeContainer, _encode_FreeContainer } from "../IN-SCF-SCF-datatypes/FreeContainer.ta.mjs";
// export { FreeContainer, _decode_FreeContainer, _encode_FreeContainer } from "../IN-SCF-SCF-datatypes/FreeContainer.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { ChargingSignallingInformation, _decode_ChargingSignallingInformation, _encode_ChargingSignallingInformation } from "../IN-SCF-SCF-datatypes/ChargingSignallingInformation.ta.mjs";
// export { ChargingSignallingInformation, _decode_ChargingSignallingInformation, _encode_ChargingSignallingInformation } from "../IN-SCF-SCF-datatypes/ChargingSignallingInformation.ta.mjs";
import { ReportConditionEvent, _decode_ReportConditionEvent, _encode_ReportConditionEvent } from "../IN-SCF-SCF-datatypes/ReportConditionEvent.ta.mjs";
// export { ReportConditionEvent, _decode_ReportConditionEvent, _encode_ReportConditionEvent } from "../IN-SCF-SCF-datatypes/ReportConditionEvent.ta.mjs";


/**
 * @summary EstablishChargingRecordArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishChargingRecordArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {userCredit             [0]  UserCredit OPTIONAL,
 *                chargingParameters     [1]  ChargingParameters OPTIONAL,
 *                reportExpected         [2]  BOOLEAN DEFAULT TRUE,
 *                securityParameters     [3]  SecurityParameters OPTIONAL,
 *                extensions             [4]  Extensions OPTIONAL,
 *                consumedCreditAction   [10]  ConsumedCreditAction OPTIONAL,
 *                newChargingParameters  [11]  ChargingParameters OPTIONAL,
 *                reportAddress
 *                  [12]  ReportDestinationInformation OPTIONAL,
 *                container              [13]  FreeContainer OPTIONAL,
 *                correlationId          [14]  CorrelationID OPTIONAL,
 *                acksequence            [15]  INTEGER(1..127) OPTIONAL,
 *                splitcharge
 *                  [16]  ChargingSignallingInformation OPTIONAL,
 *                reportCondition        [22]  ReportConditionEvent OPTIONAL,
 *                ...}}
 * ```
 */
export
type EstablishChargingRecordArg = OPTIONALLY_PROTECTED<{ userCredit: UserCredit; chargingParameters: ChargingParameters; reportExpected: BOOLEAN; securityParameters: SecurityParameters; extensions: Extensions; consumedCreditAction: ConsumedCreditAction; newChargingParameters: ChargingParameters; reportAddress: ReportDestinationInformation; container: FreeContainer; correlationId: CorrelationID; acksequence: INTEGER; splitcharge: ChargingSignallingInformation; reportCondition: ReportConditionEvent }>; // DefinedType

let _cached_decoder_for_EstablishChargingRecordArg: $.ASN1Decoder<EstablishChargingRecordArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishChargingRecordArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EstablishChargingRecordArg (el: _Element): EstablishChargingRecordArg {
    if (!_cached_decoder_for_EstablishChargingRecordArg) { _cached_decoder_for_EstablishChargingRecordArg = _get_decoder_for_OPTIONALLY_PROTECTED<{ userCredit: UserCredit; chargingParameters: ChargingParameters; reportExpected: BOOLEAN; securityParameters: SecurityParameters; extensions: Extensions; consumedCreditAction: ConsumedCreditAction; newChargingParameters: ChargingParameters; reportAddress: ReportDestinationInformation; container: FreeContainer; correlationId: CorrelationID; acksequence: INTEGER; splitcharge: ChargingSignallingInformation; reportCondition: ReportConditionEvent }>(function (el: _Element): OPTIONALLY_PROTECTED {
    let userCredit: OPTIONAL<UserCredit>;
    let chargingParameters: OPTIONAL<ChargingParameters>;
    let reportExpected: OPTIONAL<BOOLEAN> = OPTIONALLY_PROTECTED._default_value_for_reportExpected;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<Extensions>;
    let consumedCreditAction: OPTIONAL<ConsumedCreditAction>;
    let newChargingParameters: OPTIONAL<ChargingParameters>;
    let reportAddress: OPTIONAL<ReportDestinationInformation>;
    let container: OPTIONAL<FreeContainer>;
    let correlationId: OPTIONAL<CorrelationID>;
    let acksequence: OPTIONAL<INTEGER>;
    let splitcharge: OPTIONAL<ChargingSignallingInformation>;
    let reportCondition: OPTIONAL<ReportConditionEvent>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "userCredit": (_el: _Element): void => { userCredit = $._decode_explicit<UserCredit>(() => _decode_UserCredit)(_el); },
        "chargingParameters": (_el: _Element): void => { chargingParameters = $._decode_explicit<ChargingParameters>(() => _decode_ChargingParameters)(_el); },
        "reportExpected": (_el: _Element): void => { reportExpected = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "consumedCreditAction": (_el: _Element): void => { consumedCreditAction = $._decode_implicit<ConsumedCreditAction>(() => _decode_ConsumedCreditAction)(_el); },
        "newChargingParameters": (_el: _Element): void => { newChargingParameters = $._decode_explicit<ChargingParameters>(() => _decode_ChargingParameters)(_el); },
        "reportAddress": (_el: _Element): void => { reportAddress = $._decode_implicit<ReportDestinationInformation>(() => _decode_ReportDestinationInformation)(_el); },
        "container": (_el: _Element): void => { container = $._decode_implicit<FreeContainer>(() => _decode_FreeContainer)(_el); },
        "correlationId": (_el: _Element): void => { correlationId = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "acksequence": (_el: _Element): void => { acksequence = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "splitcharge": (_el: _Element): void => { splitcharge = $._decode_implicit<ChargingSignallingInformation>(() => _decode_ChargingSignallingInformation)(_el); },
        "reportCondition": (_el: _Element): void => { reportCondition = $._decode_implicit<ReportConditionEvent>(() => _decode_ReportConditionEvent)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new OPTIONALLY_PROTECTED(
        userCredit,
        chargingParameters,
        reportExpected,
        securityParameters,
        extensions,
        consumedCreditAction,
        newChargingParameters,
        reportAddress,
        container,
        correlationId,
        acksequence,
        splitcharge,
        reportCondition,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_EstablishChargingRecordArg(el);
}

let _cached_encoder_for_EstablishChargingRecordArg: $.ASN1Encoder<EstablishChargingRecordArg> | null = null;

/**
 * @summary Encodes a(n) EstablishChargingRecordArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishChargingRecordArg, encoded as an ASN.1 Element.
 */
export
function _encode_EstablishChargingRecordArg (value: EstablishChargingRecordArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EstablishChargingRecordArg) { _cached_encoder_for_EstablishChargingRecordArg = _get_encoder_for_OPTIONALLY_PROTECTED<{ userCredit: UserCredit; chargingParameters: ChargingParameters; reportExpected: BOOLEAN; securityParameters: SecurityParameters; extensions: Extensions; consumedCreditAction: ConsumedCreditAction; newChargingParameters: ChargingParameters; reportAddress: ReportDestinationInformation; container: FreeContainer; correlationId: CorrelationID; acksequence: INTEGER; splitcharge: ChargingSignallingInformation; reportCondition: ReportConditionEvent }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(13 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.userCredit !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_UserCredit, $.BER)(value.userCredit, $.BER);
    }
    if (value.chargingParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_ChargingParameters, $.BER)(value.chargingParameters, $.BER);
    }
    if (value.reportExpected !== undefined && !$.deepEq(value.reportExpected, OPTIONALLY_PROTECTED._default_value_for_reportExpected)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.reportExpected, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.consumedCreditAction !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_ConsumedCreditAction, $.BER)(value.consumedCreditAction, $.BER);
    }
    if (value.newChargingParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_ChargingParameters, $.BER)(value.newChargingParameters, $.BER);
    }
    if (value.reportAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_ReportDestinationInformation, $.BER)(value.reportAddress, $.BER);
    }
    if (value.container !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_FreeContainer, $.BER)(value.container, $.BER);
    }
    if (value.correlationId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_CorrelationID, $.BER)(value.correlationId, $.BER);
    }
    if (value.acksequence !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.acksequence, $.BER);
    }
    if (value.splitcharge !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_ChargingSignallingInformation, $.BER)(value.splitcharge, $.BER);
    }
    if (value.reportCondition !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_ReportConditionEvent, $.BER)(value.reportCondition, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_EstablishChargingRecordArg(value, elGetter);
}


/* eslint-enable */
