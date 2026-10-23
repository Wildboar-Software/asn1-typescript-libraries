/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
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
 * @summary ReportChargingInformationArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportChargingInformationArg-Type ::=
 * SEQUENCE {
 *   callRecord [0] CallRecord OPTIONAL,
 *   remainingUserCredit [1] UserCredit OPTIONAL,
 *   uniqueCallID [2] CallIdentifier OPTIONAL,
 *   accountNumber [3] AccountNumber OPTIONAL,
 *   securityParameters [4] SecurityParameters OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ReportChargingInformationArg_Type {
    /**
     * @summary `callRecord`.
     * @public
     * @readonly
     */
    readonly callRecord: OPTIONAL<CallRecord>;
    /**
     * @summary `remainingUserCredit`.
     * @public
     * @readonly
     */
    readonly remainingUserCredit: OPTIONAL<UserCredit>;
    /**
     * @summary `uniqueCallID`.
     * @public
     * @readonly
     */
    readonly uniqueCallID: OPTIONAL<CallIdentifier>;
    /**
     * @summary `accountNumber`.
     * @public
     * @readonly
     */
    readonly accountNumber: OPTIONAL<AccountNumber>;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;

    constructor (
        callRecord: OPTIONAL<CallRecord>,
        remainingUserCredit: OPTIONAL<UserCredit>,
        uniqueCallID: OPTIONAL<CallIdentifier>,
        accountNumber: OPTIONAL<AccountNumber>,
        securityParameters: OPTIONAL<SecurityParameters>
    ) {
        this.callRecord = callRecord;
        this.remainingUserCredit = remainingUserCredit;
        this.uniqueCallID = uniqueCallID;
        this.accountNumber = accountNumber;
        this.securityParameters = securityParameters;
    }

    /**
     * @summary Restructures an object into a ReportChargingInformationArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `ReportChargingInformationArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportChargingInformationArg_Type`.
     * @returns {ReportChargingInformationArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (ReportChargingInformationArg_Type)]: (ReportChargingInformationArg_Type)[_K] }): ReportChargingInformationArg_Type {
        return new ReportChargingInformationArg_Type(_o.callRecord, _o.remainingUserCredit, _o.uniqueCallID, _o.accountNumber, _o.securityParameters);
    }


}

/**
 * @summary The Leading Root Component Types of ReportChargingInformationArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportChargingInformationArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("callRecord", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("remainingUserCredit", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uniqueCallID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accountNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ReportChargingInformationArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportChargingInformationArg_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportChargingInformationArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportChargingInformationArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportChargingInformationArg_Type: $.ASN1Decoder<ReportChargingInformationArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportChargingInformationArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportChargingInformationArg_Type (el: _Element): ReportChargingInformationArg_Type {
    if (!_cached_decoder_for_ReportChargingInformationArg_Type) { _cached_decoder_for_ReportChargingInformationArg_Type = function (el: _Element): ReportChargingInformationArg_Type {
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
        _root_component_type_list_1_spec_for_ReportChargingInformationArg_Type,
        _extension_additions_list_spec_for_ReportChargingInformationArg_Type,
        _root_component_type_list_2_spec_for_ReportChargingInformationArg_Type,
        undefined,
    );
    return new ReportChargingInformationArg_Type(
        callRecord,
        remainingUserCredit,
        uniqueCallID,
        accountNumber,
        securityParameters
    );
}; }
    return _cached_decoder_for_ReportChargingInformationArg_Type(el);
}

let _cached_encoder_for_ReportChargingInformationArg_Type: $.ASN1Encoder<ReportChargingInformationArg_Type> | null = null;

/**
 * @summary Encodes a(n) ReportChargingInformationArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportChargingInformationArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_ReportChargingInformationArg_Type (value: ReportChargingInformationArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportChargingInformationArg_Type) { _cached_encoder_for_ReportChargingInformationArg_Type = function (value: ReportChargingInformationArg_Type, elGetter: $.ASN1Encoder<ReportChargingInformationArg_Type>): _Element {
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
}; }
    return _cached_encoder_for_ReportChargingInformationArg_Type(value, elGetter);
}


/* eslint-enable */
