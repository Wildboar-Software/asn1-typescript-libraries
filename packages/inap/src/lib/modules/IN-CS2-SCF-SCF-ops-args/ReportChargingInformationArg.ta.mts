/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { CallRecord, _decode_CallRecord, _encode_CallRecord } from "../IN-CS2-datatypes/CallRecord.ta.mjs";
// export { CallRecord, _decode_CallRecord, _encode_CallRecord } from "../IN-CS2-datatypes/CallRecord.ta.mjs";
import { UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-CS2-datatypes/UserCredit.ta.mjs";
// export { UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-CS2-datatypes/UserCredit.ta.mjs";
import { CallIdentifier, _decode_CallIdentifier, _encode_CallIdentifier } from "../IN-CS2-SCF-SCF-ops-args/CallIdentifier.ta.mjs";
// export { CallIdentifier, _decode_CallIdentifier, _encode_CallIdentifier } from "../IN-CS2-SCF-SCF-ops-args/CallIdentifier.ta.mjs";
import { AccountNumber, _decode_AccountNumber, _encode_AccountNumber } from "../IN-CS2-datatypes/AccountNumber.ta.mjs";
// export { AccountNumber, _decode_AccountNumber, _encode_AccountNumber } from "../IN-CS2-datatypes/AccountNumber.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";


/**
 * @summary ReportChargingInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportChargingInformationArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {callRecord           [0]  CallRecord OPTIONAL,
 *                remainingUserCredit  [1]  UserCredit OPTIONAL,
 *                uniqueCallID         [2]  CallIdentifier OPTIONAL,
 *                accountNumber        [3]  AccountNumber OPTIONAL,
 *                securityParameters   [4]  SecurityParameters OPTIONAL
 *     }}
 * ```
 */
export
interface ReportChargingInformationArg_sequence {
    callRecord?: OPTIONAL<CallRecord>;
    remainingUserCredit?: OPTIONAL<UserCredit>;
    uniqueCallID?: OPTIONAL<CallIdentifier>;
    accountNumber?: OPTIONAL<AccountNumber>;
    securityParameters?: OPTIONAL<SecurityParameters>;
}

export
type ReportChargingInformationArg = OPTIONALLY_PROTECTED<ReportChargingInformationArg_sequence>; // DefinedType

const _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [
    new $.ComponentSpec("callRecord", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("remainingUserCredit", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uniqueCallID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accountNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 4)),
];

const _extension_additions_list_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [];

const _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [];

let _cached_decoder_for_ReportChargingInformationArg: $.ASN1Decoder<ReportChargingInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportChargingInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportChargingInformationArg (el: _Element): ReportChargingInformationArg {
    if (!_cached_decoder_for_ReportChargingInformationArg) { _cached_decoder_for_ReportChargingInformationArg = _get_decoder_for_OPTIONALLY_PROTECTED<ReportChargingInformationArg_sequence>(function (el: _Element): ReportChargingInformationArg_sequence {
    let callRecord: OPTIONAL<CallRecord>;
    let remainingUserCredit: OPTIONAL<UserCredit>;
    let uniqueCallID: OPTIONAL<CallIdentifier>;
    let accountNumber: OPTIONAL<AccountNumber>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    const callbacks: $.DecodingMap = {
        "callRecord": (_el: _Element): void => { callRecord = $._decode_implicit<CallRecord>(() => _decode_CallRecord)(_el); },
        "remainingUserCredit": (_el: _Element): void => { remainingUserCredit = $._decode_explicit<UserCredit>(() => _decode_UserCredit)(_el); },
        "uniqueCallID": (_el: _Element): void => { uniqueCallID = $._decode_implicit<CallIdentifier>(() => _decode_CallIdentifier)(_el); },
        "accountNumber": (_el: _Element): void => { accountNumber = $._decode_implicit<AccountNumber>(() => _decode_AccountNumber)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        undefined,
    );
    return { callRecord, remainingUserCredit, uniqueCallID, accountNumber, securityParameters };
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
    if (!_cached_encoder_for_ReportChargingInformationArg) { _cached_encoder_for_ReportChargingInformationArg = _get_encoder_for_OPTIONALLY_PROTECTED<ReportChargingInformationArg_sequence>(function (value: ReportChargingInformationArg_sequence, elGetter: $.ASN1Encoder<ReportChargingInformationArg_sequence>): _Element {
    const _components: _Element[] = [];
    if (value.callRecord !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CallRecord, $.BER)(value.callRecord, $.BER));
    }
    if (value.remainingUserCredit !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_UserCredit, $.BER)(value.remainingUserCredit, $.BER));
    }
    if (value.uniqueCallID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CallIdentifier, $.BER)(value.uniqueCallID, $.BER));
    }
    if (value.accountNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_AccountNumber, $.BER)(value.accountNumber, $.BER));
    }
    if (value.securityParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_ReportChargingInformationArg(value, elGetter);
}


/* eslint-enable */
