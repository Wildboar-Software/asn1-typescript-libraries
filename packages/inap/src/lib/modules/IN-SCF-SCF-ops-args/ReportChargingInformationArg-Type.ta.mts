/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
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
 *   securityParameters [4] SecurityParameters OPTIONAL,
 *   countersValues [5] Meters OPTIONAL,
 *   resetOfTransmittedCounters [6] BOOLEAN DEFAULT FALSE,
 *   container [13] FreeContainer OPTIONAL,
 *   correlationId [14] CorrelationID OPTIONAL,
 *   acksequence [15] INTEGER OPTIONAL,
 *   ...,
 *   ...,
 *   extensions [31] Extensions OPTIONAL
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
    /**
     * @summary `countersValues`.
     * @public
     * @readonly
     */
    readonly countersValues: OPTIONAL<Meters>;
    /**
     * @summary `resetOfTransmittedCounters`.
     * @public
     * @readonly
     */
    readonly resetOfTransmittedCounters: OPTIONAL<BOOLEAN>;
    /**
     * @summary `container`.
     * @public
     * @readonly
     */
    readonly container: OPTIONAL<FreeContainer>;
    /**
     * @summary `correlationId`.
     * @public
     * @readonly
     */
    readonly correlationId: OPTIONAL<CorrelationID>;
    /**
     * @summary `acksequence`.
     * @public
     * @readonly
     */
    readonly acksequence: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;

    constructor (
        callRecord?: OPTIONAL<CallRecord>,
        remainingUserCredit?: OPTIONAL<UserCredit>,
        uniqueCallID?: OPTIONAL<CallIdentifier>,
        accountNumber?: OPTIONAL<AccountNumber>,
        securityParameters?: OPTIONAL<SecurityParameters>,
        countersValues?: OPTIONAL<Meters>,
        resetOfTransmittedCounters?: OPTIONAL<BOOLEAN>,
        container?: OPTIONAL<FreeContainer>,
        correlationId?: OPTIONAL<CorrelationID>,
        acksequence?: OPTIONAL<INTEGER>,
        _unrecognizedExtensionsList: _Element[] = [],
        extensions?: OPTIONAL<Extensions>
    ) {
        this.callRecord = callRecord;
        this.remainingUserCredit = remainingUserCredit;
        this.uniqueCallID = uniqueCallID;
        this.accountNumber = accountNumber;
        this.securityParameters = securityParameters;
        this.countersValues = countersValues;
        this.resetOfTransmittedCounters = resetOfTransmittedCounters;
        this.container = container;
        this.correlationId = correlationId;
        this.acksequence = acksequence;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        this.extensions = extensions;
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
        return new ReportChargingInformationArg_Type(_o.callRecord, _o.remainingUserCredit, _o.uniqueCallID, _o.accountNumber, _o.securityParameters, _o.countersValues, _o.resetOfTransmittedCounters, _o.container, _o.correlationId, _o.acksequence, _o._unrecognizedExtensionsList, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `resetOfTransmittedCounters`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_resetOfTransmittedCounters () { return false; }
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
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("countersValues", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("resetOfTransmittedCounters", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("container", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("correlationId", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("acksequence", true, $.hasTag(_TagClass.context, 15))
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
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 31))
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
    let countersValues: OPTIONAL<Meters>;
    let resetOfTransmittedCounters: OPTIONAL<BOOLEAN> = ReportChargingInformationArg_Type._default_value_for_resetOfTransmittedCounters;
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
        _root_component_type_list_1_spec_for_ReportChargingInformationArg_Type,
        _extension_additions_list_spec_for_ReportChargingInformationArg_Type,
        _root_component_type_list_2_spec_for_ReportChargingInformationArg_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ReportChargingInformationArg_Type(
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
    if (value.resetOfTransmittedCounters !== undefined && !$.deepEq(value.resetOfTransmittedCounters, ReportChargingInformationArg_Type._default_value_for_resetOfTransmittedCounters)) {
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
}; }
    return _cached_encoder_for_ReportChargingInformationArg_Type(value, elGetter);
}


/* eslint-enable */
