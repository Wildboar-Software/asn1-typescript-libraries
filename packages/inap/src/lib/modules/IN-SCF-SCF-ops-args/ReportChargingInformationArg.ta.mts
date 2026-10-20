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
import { CallRecord, _decode_CallRecord, _encode_CallRecord } from "../IN-SCF-SCF-datatypes/CallRecord.ta.mjs";
// export { CallRecord, _decode_CallRecord, _encode_CallRecord } from "../IN-SCF-SCF-datatypes/CallRecord.ta.mjs";
import { UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-SCF-SCF-datatypes/UserCredit.ta.mjs";
// export { UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-SCF-SCF-datatypes/UserCredit.ta.mjs";
import { CallIdentifier, _decode_CallIdentifier, _encode_CallIdentifier } from "../IN-SCF-SCF-datatypes/CallIdentifier.ta.mjs";
// export { CallIdentifier, _decode_CallIdentifier, _encode_CallIdentifier } from "../IN-SCF-SCF-datatypes/CallIdentifier.ta.mjs";
import { AccountNumber, _decode_AccountNumber, _encode_AccountNumber } from "../IN-SCF-SCF-datatypes/AccountNumber.ta.mjs";
// export { AccountNumber, _decode_AccountNumber, _encode_AccountNumber } from "../IN-SCF-SCF-datatypes/AccountNumber.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Meters, _decode_Meters, _encode_Meters } from "../IN-SCF-SCF-datatypes/Meters.ta.mjs";
// export { Meters, _decode_Meters, _encode_Meters } from "../IN-SCF-SCF-datatypes/Meters.ta.mjs";
import { FreeContainer, _decode_FreeContainer, _encode_FreeContainer } from "../IN-SCF-SCF-datatypes/FreeContainer.ta.mjs";
// export { FreeContainer, _decode_FreeContainer, _encode_FreeContainer } from "../IN-SCF-SCF-datatypes/FreeContainer.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary ReportChargingInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportChargingInformationArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {callRecord                  [0]  CallRecord OPTIONAL,
 *                remainingUserCredit         [1]  UserCredit OPTIONAL,
 *                uniqueCallID                [2]  CallIdentifier OPTIONAL,
 *                accountNumber               [3]  AccountNumber OPTIONAL,
 *                securityParameters          [4]  SecurityParameters OPTIONAL,
 *                countersValues              [5]  Meters OPTIONAL,
 *                resetOfTransmittedCounters  [6]  BOOLEAN DEFAULT FALSE,
 *                container                   [13]  FreeContainer OPTIONAL,
 *                correlationId               [14]  CorrelationID OPTIONAL,
 *                acksequence                 [15]  INTEGER OPTIONAL,
 *                ...,
 *                ...,
 *                extensions                  [31]  Extensions OPTIONAL
 *     }}
 * ```
 */
export
type ReportChargingInformationArg = OPTIONALLY_PROTECTED<{ callRecord: CallRecord; remainingUserCredit: UserCredit; uniqueCallID: CallIdentifier; accountNumber: AccountNumber; securityParameters: SecurityParameters; countersValues: Meters; resetOfTransmittedCounters: BOOLEAN; container: FreeContainer; correlationId: CorrelationID; acksequence: INTEGER; extensions: Extensions }>; // DefinedType

let _cached_decoder_for_ReportChargingInformationArg: $.ASN1Decoder<ReportChargingInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportChargingInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportChargingInformationArg (el: _Element): ReportChargingInformationArg {
    if (!_cached_decoder_for_ReportChargingInformationArg) { _cached_decoder_for_ReportChargingInformationArg = _get_decoder_for_OPTIONALLY_PROTECTED<{ callRecord: CallRecord; remainingUserCredit: UserCredit; uniqueCallID: CallIdentifier; accountNumber: AccountNumber; securityParameters: SecurityParameters; countersValues: Meters; resetOfTransmittedCounters: BOOLEAN; container: FreeContainer; correlationId: CorrelationID; acksequence: INTEGER; extensions: Extensions }>(function (el: _Element): OPTIONALLY_PROTECTED {
    let callRecord: OPTIONAL<CallRecord>;
    let remainingUserCredit: OPTIONAL<UserCredit>;
    let uniqueCallID: OPTIONAL<CallIdentifier>;
    let accountNumber: OPTIONAL<AccountNumber>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let countersValues: OPTIONAL<Meters>;
    let resetOfTransmittedCounters: OPTIONAL<BOOLEAN> = OPTIONALLY_PROTECTED._default_value_for_resetOfTransmittedCounters;
    let container: OPTIONAL<FreeContainer>;
    let correlationId: OPTIONAL<CorrelationID>;
    let acksequence: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "callRecord": (_el: _Element): void => { callRecord = $._decode_implicit<CallRecord>(() => _decode_CallRecord)(_el); },
        "remainingUserCredit": (_el: _Element): void => { remainingUserCredit = $._decode_explicit<UserCredit>(() => _decode_UserCredit)(_el); },
        "uniqueCallID": (_el: _Element): void => { uniqueCallID = $._decode_implicit<CallIdentifier>(() => _decode_CallIdentifier)(_el); },
        "accountNumber": (_el: _Element): void => { accountNumber = $._decode_implicit<AccountNumber>(() => _decode_AccountNumber)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "countersValues": (_el: _Element): void => { countersValues = $._decode_implicit<Meters>(() => _decode_Meters)(_el); },
        "resetOfTransmittedCounters": (_el: _Element): void => { resetOfTransmittedCounters = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "container": (_el: _Element): void => { container = $._decode_implicit<FreeContainer>(() => _decode_FreeContainer)(_el); },
        "correlationId": (_el: _Element): void => { correlationId = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "acksequence": (_el: _Element): void => { acksequence = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new OPTIONALLY_PROTECTED(
        callRecord,
        remainingUserCredit,
        uniqueCallID,
        accountNumber,
        securityParameters,
        countersValues,
        resetOfTransmittedCounters,
        container,
        correlationId,
        acksequence,
        _unrecognizedExtensionsList,
        extensions
    );
}); }
    return _cached_decoder_for_ReportChargingInformationArg(el);
}

let _cached_encoder_for_ReportChargingInformationArg: $.ASN1Encoder<ReportChargingInformationArg> | null = null;

/**
 * @summary Encodes a(n) ReportChargingInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportChargingInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReportChargingInformationArg (value: ReportChargingInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportChargingInformationArg) { _cached_encoder_for_ReportChargingInformationArg = _get_encoder_for_OPTIONALLY_PROTECTED<{ callRecord: CallRecord; remainingUserCredit: UserCredit; uniqueCallID: CallIdentifier; accountNumber: AccountNumber; securityParameters: SecurityParameters; countersValues: Meters; resetOfTransmittedCounters: BOOLEAN; container: FreeContainer; correlationId: CorrelationID; acksequence: INTEGER; extensions: Extensions }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.callRecord !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CallRecord, $.BER)(value.callRecord, $.BER);
    }
    if (value.remainingUserCredit !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_UserCredit, $.BER)(value.remainingUserCredit, $.BER);
    }
    if (value.uniqueCallID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CallIdentifier, $.BER)(value.uniqueCallID, $.BER);
    }
    if (value.accountNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_AccountNumber, $.BER)(value.accountNumber, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (value.countersValues !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Meters, $.BER)(value.countersValues, $.BER);
    }
    if (value.resetOfTransmittedCounters !== undefined && !$.deepEq(value.resetOfTransmittedCounters, OPTIONALLY_PROTECTED._default_value_for_resetOfTransmittedCounters)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.resetOfTransmittedCounters, $.BER);
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
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_ReportChargingInformationArg(value, elGetter);
}


/* eslint-enable */
