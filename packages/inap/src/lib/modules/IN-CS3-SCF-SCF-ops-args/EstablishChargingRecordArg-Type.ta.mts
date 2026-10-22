/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-CS3-SCF-SCF-datatypes/UserCredit.ta.mjs";
// export { UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-CS3-SCF-SCF-datatypes/UserCredit.ta.mjs";
import { ChargingParameters, _decode_ChargingParameters, _encode_ChargingParameters } from "../IN-CS3-SCF-SCF-datatypes/ChargingParameters.ta.mjs";
// export { ChargingParameters, _decode_ChargingParameters, _encode_ChargingParameters } from "../IN-CS3-SCF-SCF-datatypes/ChargingParameters.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { ConsumedCreditAction, _decode_ConsumedCreditAction, _encode_ConsumedCreditAction, _enum_for_ConsumedCreditAction } from "../IN-CS3-SCF-SCF-datatypes/ConsumedCreditAction.ta.mjs";
// export { ConsumedCreditAction, _enum_for_ConsumedCreditAction, ConsumedCreditAction_disconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, disconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsumedCreditAction_message /* IMPORTED_LONG_ENUMERATION_ITEM */, message /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsumedCreditAction_tone /* IMPORTED_LONG_ENUMERATION_ITEM */, tone /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConsumedCreditAction, _encode_ConsumedCreditAction } from "../IN-CS3-SCF-SCF-datatypes/ConsumedCreditAction.ta.mjs";
import { ReportDestinationInformation, _decode_ReportDestinationInformation, _encode_ReportDestinationInformation } from "../IN-CS3-SCF-SCF-datatypes/ReportDestinationInformation.ta.mjs";
// export { ReportDestinationInformation, _decode_ReportDestinationInformation, _encode_ReportDestinationInformation } from "../IN-CS3-SCF-SCF-datatypes/ReportDestinationInformation.ta.mjs";
import { FreeContainer, _decode_FreeContainer, _encode_FreeContainer } from "../IN-CS3-SCF-SCF-datatypes/FreeContainer.ta.mjs";
// export { FreeContainer, _decode_FreeContainer, _encode_FreeContainer } from "../IN-CS3-SCF-SCF-datatypes/FreeContainer.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS3-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS3-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { ChargingSignallingInformation, _decode_ChargingSignallingInformation, _encode_ChargingSignallingInformation } from "../IN-CS3-SCF-SCF-datatypes/ChargingSignallingInformation.ta.mjs";
// export { ChargingSignallingInformation, _decode_ChargingSignallingInformation, _encode_ChargingSignallingInformation } from "../IN-CS3-SCF-SCF-datatypes/ChargingSignallingInformation.ta.mjs";
import { ReportConditionEvent, _decode_ReportConditionEvent, _encode_ReportConditionEvent } from "../IN-CS3-SCF-SCF-datatypes/ReportConditionEvent.ta.mjs";
// export { ReportConditionEvent, _decode_ReportConditionEvent, _encode_ReportConditionEvent } from "../IN-CS3-SCF-SCF-datatypes/ReportConditionEvent.ta.mjs";


/**
 * @summary EstablishChargingRecordArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishChargingRecordArg-Type ::=
 * SEQUENCE {
 *   userCredit [0] UserCredit OPTIONAL,
 *   chargingParameters ChargingParameters OPTIONAL,
 *   reportExpected [2] BOOLEAN DEFAULT TRUE,
 *   securityParameters [3] SecurityParameters OPTIONAL,
 *   extensions [4] Extensions OPTIONAL,
 *   consumedCreditAction [10] ConsumedCreditAction OPTIONAL,
 *   newChargingParameters [11] ChargingParameters OPTIONAL,
 *   reportAddress [12] ReportDestinationInformation OPTIONAL,
 *   container [13] FreeContainer OPTIONAL,
 *   correlationId [14] CorrelationID OPTIONAL,
 *   acksequence [15] INTEGER(1..127) OPTIONAL,
 *   splitcharge [16] ChargingSignallingInformation OPTIONAL,
 *   reportCondition [22] ReportConditionEvent OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EstablishChargingRecordArg_Type {
    /**
     * @summary `userCredit`.
     * @public
     * @readonly
     */
    readonly userCredit: OPTIONAL<UserCredit>;
    /**
     * @summary `chargingParameters`.
     * @public
     * @readonly
     */
    readonly chargingParameters: OPTIONAL<ChargingParameters>;
    /**
     * @summary `reportExpected`.
     * @public
     * @readonly
     */
    readonly reportExpected: OPTIONAL<BOOLEAN>;
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
     * @summary `consumedCreditAction`.
     * @public
     * @readonly
     */
    readonly consumedCreditAction: OPTIONAL<ConsumedCreditAction>;
    /**
     * @summary `newChargingParameters`.
     * @public
     * @readonly
     */
    readonly newChargingParameters: OPTIONAL<ChargingParameters>;
    /**
     * @summary `reportAddress`.
     * @public
     * @readonly
     */
    readonly reportAddress: OPTIONAL<ReportDestinationInformation>;
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
     * @summary `splitcharge`.
     * @public
     * @readonly
     */
    readonly splitcharge: OPTIONAL<ChargingSignallingInformation>;
    /**
     * @summary `reportCondition`.
     * @public
     * @readonly
     */
    readonly reportCondition: OPTIONAL<ReportConditionEvent>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        userCredit: OPTIONAL<UserCredit>,
        chargingParameters: OPTIONAL<ChargingParameters>,
        reportExpected: OPTIONAL<BOOLEAN>,
        securityParameters: OPTIONAL<SecurityParameters>,
        extensions: OPTIONAL<Extensions>,
        consumedCreditAction: OPTIONAL<ConsumedCreditAction>,
        newChargingParameters: OPTIONAL<ChargingParameters>,
        reportAddress: OPTIONAL<ReportDestinationInformation>,
        container: OPTIONAL<FreeContainer>,
        correlationId: OPTIONAL<CorrelationID>,
        acksequence: OPTIONAL<INTEGER>,
        splitcharge: OPTIONAL<ChargingSignallingInformation>,
        reportCondition: OPTIONAL<ReportConditionEvent>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.userCredit = userCredit;
        this.chargingParameters = chargingParameters;
        this.reportExpected = reportExpected;
        this.securityParameters = securityParameters;
        this.extensions = extensions;
        this.consumedCreditAction = consumedCreditAction;
        this.newChargingParameters = newChargingParameters;
        this.reportAddress = reportAddress;
        this.container = container;
        this.correlationId = correlationId;
        this.acksequence = acksequence;
        this.splitcharge = splitcharge;
        this.reportCondition = reportCondition;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EstablishChargingRecordArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `EstablishChargingRecordArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EstablishChargingRecordArg_Type`.
     * @returns {EstablishChargingRecordArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (EstablishChargingRecordArg_Type)]: (EstablishChargingRecordArg_Type)[_K] }): EstablishChargingRecordArg_Type {
        return new EstablishChargingRecordArg_Type(_o.userCredit, _o.chargingParameters, _o.reportExpected, _o.securityParameters, _o.extensions, _o.consumedCreditAction, _o.newChargingParameters, _o.reportAddress, _o.container, _o.correlationId, _o.acksequence, _o.splitcharge, _o.reportCondition, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `reportExpected`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_reportExpected () { return true; }        /**
         * @summary The enum used as the type of the component `consumedCreditAction`
         * @public
         * @static
         */

    public static _enum_for_consumedCreditAction = _enum_for_ConsumedCreditAction;
}

/**
 * @summary The Leading Root Component Types of EstablishChargingRecordArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EstablishChargingRecordArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("userCredit", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("chargingParameters", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 20), $.hasTag(_TagClass.context, 21))),
    new $.ComponentSpec("reportExpected", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("consumedCreditAction", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("newChargingParameters", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("reportAddress", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("container", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("correlationId", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("acksequence", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("splitcharge", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("reportCondition", true, $.hasTag(_TagClass.context, 22))
];

/**
 * @summary The Trailing Root Component Types of EstablishChargingRecordArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EstablishChargingRecordArg_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EstablishChargingRecordArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EstablishChargingRecordArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EstablishChargingRecordArg_Type: $.ASN1Decoder<EstablishChargingRecordArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishChargingRecordArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EstablishChargingRecordArg_Type (el: _Element): EstablishChargingRecordArg_Type {
    if (!_cached_decoder_for_EstablishChargingRecordArg_Type) { _cached_decoder_for_EstablishChargingRecordArg_Type = function (el: _Element): EstablishChargingRecordArg_Type {
    let userCredit: OPTIONAL<UserCredit>;
    let chargingParameters: OPTIONAL<ChargingParameters>;
    let reportExpected: OPTIONAL<BOOLEAN> = EstablishChargingRecordArg_Type._default_value_for_reportExpected;
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
        "chargingParameters": (_el: _Element): void => { chargingParameters = _decode_ChargingParameters(_el); },
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
        _root_component_type_list_1_spec_for_EstablishChargingRecordArg_Type,
        _extension_additions_list_spec_for_EstablishChargingRecordArg_Type,
        _root_component_type_list_2_spec_for_EstablishChargingRecordArg_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EstablishChargingRecordArg_Type(
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
}; }
    return _cached_decoder_for_EstablishChargingRecordArg_Type(el);
}

let _cached_encoder_for_EstablishChargingRecordArg_Type: $.ASN1Encoder<EstablishChargingRecordArg_Type> | null = null;

/**
 * @summary Encodes a(n) EstablishChargingRecordArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishChargingRecordArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_EstablishChargingRecordArg_Type (value: EstablishChargingRecordArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EstablishChargingRecordArg_Type) { _cached_encoder_for_EstablishChargingRecordArg_Type = function (value: EstablishChargingRecordArg_Type, elGetter: $.ASN1Encoder<EstablishChargingRecordArg_Type>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(13 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.userCredit !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_UserCredit, $.BER)(value.userCredit, $.BER);
    }
    if (value.chargingParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_ChargingParameters(value.chargingParameters, $.BER);
    }
    if (value.reportExpected !== undefined && !$.deepEq(value.reportExpected, EstablishChargingRecordArg_Type._default_value_for_reportExpected)) {
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
}; }
    return _cached_encoder_for_EstablishChargingRecordArg_Type(value, elGetter);
}


/* eslint-enable */
