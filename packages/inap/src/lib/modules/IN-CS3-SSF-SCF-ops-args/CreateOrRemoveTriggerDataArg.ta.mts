/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CreateOrRemoveIndicator, CreateOrRemoveIndicator_create /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_CreateOrRemoveIndicator, _encode_CreateOrRemoveIndicator, _enum_for_CreateOrRemoveIndicator } from "../IN-CS3-SSF-SCF-datatypes/CreateOrRemoveIndicator.ta.mjs";
// export { CreateOrRemoveIndicator, _enum_for_CreateOrRemoveIndicator, CreateOrRemoveIndicator_create /* IMPORTED_LONG_ENUMERATION_ITEM */, create /* IMPORTED_SHORT_ENUMERATION_ITEM */, CreateOrRemoveIndicator_remove /* IMPORTED_LONG_ENUMERATION_ITEM */, remove /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CreateOrRemoveIndicator, _encode_CreateOrRemoveIndicator } from "../IN-CS3-SSF-SCF-datatypes/CreateOrRemoveIndicator.ta.mjs";
import { EventTypeBCSM, _decode_EventTypeBCSM, _encode_EventTypeBCSM, _enum_for_EventTypeBCSM } from "../IN-CS3-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";
// export { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analysedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analysedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oTermSeized /* IMPORTED_LONG_ENUMERATION_ITEM */, oTermSeized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oSuspend /* IMPORTED_LONG_ENUMERATION_ITEM */, oSuspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tSuspend /* IMPORTED_LONG_ENUMERATION_ITEM */, tSuspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_origAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_facilitySelectedAndAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, facilitySelectedAndAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_callAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, callAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_authorizeRouteFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, authorizeRouteFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_originationAttemptDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, originationAttemptDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_terminationAttemptDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationAttemptDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../IN-CS3-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";
import { TriggerDPType, TriggerDPType_tdp_r /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_TriggerDPType, _encode_TriggerDPType, _enum_for_TriggerDPType } from "../IN-CS3-SSF-SCF-datatypes/TriggerDPType.ta.mjs";
// export { TriggerDPType, _enum_for_TriggerDPType, TriggerDPType_tdp_r /* IMPORTED_LONG_ENUMERATION_ITEM */, tdp_r /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerDPType_tdp_n /* IMPORTED_LONG_ENUMERATION_ITEM */, tdp_n /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TriggerDPType, _encode_TriggerDPType } from "../IN-CS3-SSF-SCF-datatypes/TriggerDPType.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS3-SSF-SCF-datatypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS3-SSF-SCF-datatypes/ServiceKey.ta.mjs";
import { ProfileIdentifier, _decode_ProfileIdentifier, _encode_ProfileIdentifier } from "../IN-CS3-SSF-SCF-datatypes/ProfileIdentifier.ta.mjs";
// export { ProfileIdentifier, _decode_ProfileIdentifier, _encode_ProfileIdentifier } from "../IN-CS3-SSF-SCF-datatypes/ProfileIdentifier.ta.mjs";
import { TriggerData, _decode_TriggerData, _encode_TriggerData } from "../IN-CS3-SSF-SCF-datatypes/TriggerData.ta.mjs";
// export { TriggerData, _decode_TriggerData, _encode_TriggerData } from "../IN-CS3-SSF-SCF-datatypes/TriggerData.ta.mjs";
import { DefaultFaultHandling, _decode_DefaultFaultHandling, _encode_DefaultFaultHandling } from "../IN-CS3-SSF-SCF-datatypes/DefaultFaultHandling.ta.mjs";
// export { DefaultFaultHandling, _decode_DefaultFaultHandling, _encode_DefaultFaultHandling } from "../IN-CS3-SSF-SCF-datatypes/DefaultFaultHandling.ta.mjs";
import { TDPIdentifier, _decode_TDPIdentifier, _encode_TDPIdentifier } from "../IN-CS3-SSF-SCF-datatypes/TDPIdentifier.ta.mjs";
// export { TDPIdentifier, _decode_TDPIdentifier, _encode_TDPIdentifier } from "../IN-CS3-SSF-SCF-datatypes/TDPIdentifier.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary CreateOrRemoveTriggerDataArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateOrRemoveTriggerDataArg ::= SEQUENCE {
 *   createOrRemove        [0]  CreateOrRemoveIndicator DEFAULT create,
 *   dPName                [1]  EventTypeBCSM OPTIONAL,
 *   triggerDPType         [2]  TriggerDPType DEFAULT tdp-r,
 *   serviceKey            [3]  ServiceKey OPTIONAL,
 *   profile               [4]  ProfileIdentifier OPTIONAL,
 *   triggerData           [5]  TriggerData OPTIONAL,
 *   defaultFaultHandling  [6]  DefaultFaultHandling OPTIONAL,
 *   tDPIdentifier         [7]  TDPIdentifier OPTIONAL,
 *   ...,
 *   ...,
 *   extensions            [30]  Extensions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CreateOrRemoveTriggerDataArg {
    /**
     * @summary `createOrRemove`.
     * @public
     * @readonly
     */
    readonly createOrRemove: OPTIONAL<CreateOrRemoveIndicator>;
    /**
     * @summary `dPName`.
     * @public
     * @readonly
     */
    readonly dPName: OPTIONAL<EventTypeBCSM>;
    /**
     * @summary `triggerDPType`.
     * @public
     * @readonly
     */
    readonly triggerDPType: OPTIONAL<TriggerDPType>;
    /**
     * @summary `serviceKey`.
     * @public
     * @readonly
     */
    readonly serviceKey: OPTIONAL<ServiceKey>;
    /**
     * @summary `profile`.
     * @public
     * @readonly
     */
    readonly profile: OPTIONAL<ProfileIdentifier>;
    /**
     * @summary `triggerData`.
     * @public
     * @readonly
     */
    readonly triggerData: OPTIONAL<TriggerData>;
    /**
     * @summary `defaultFaultHandling`.
     * @public
     * @readonly
     */
    readonly defaultFaultHandling: OPTIONAL<DefaultFaultHandling>;
    /**
     * @summary `tDPIdentifier`.
     * @public
     * @readonly
     */
    readonly tDPIdentifier: OPTIONAL<TDPIdentifier>;
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
        createOrRemove?: OPTIONAL<CreateOrRemoveIndicator>,
        dPName?: OPTIONAL<EventTypeBCSM>,
        triggerDPType?: OPTIONAL<TriggerDPType>,
        serviceKey?: OPTIONAL<ServiceKey>,
        profile?: OPTIONAL<ProfileIdentifier>,
        triggerData?: OPTIONAL<TriggerData>,
        defaultFaultHandling?: OPTIONAL<DefaultFaultHandling>,
        tDPIdentifier?: OPTIONAL<TDPIdentifier>,
        _unrecognizedExtensionsList: _Element[] = [],
        extensions?: OPTIONAL<Extensions>
    ) {
        this.createOrRemove = createOrRemove;
        this.dPName = dPName;
        this.triggerDPType = triggerDPType;
        this.serviceKey = serviceKey;
        this.profile = profile;
        this.triggerData = triggerData;
        this.defaultFaultHandling = defaultFaultHandling;
        this.tDPIdentifier = tDPIdentifier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        this.extensions = extensions;
    }

    /**
     * @summary Restructures an object into a CreateOrRemoveTriggerDataArg
     * @description
     * 
     * This takes an `object` and converts it to a `CreateOrRemoveTriggerDataArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CreateOrRemoveTriggerDataArg`.
     * @returns {CreateOrRemoveTriggerDataArg}
     */
    public static _from_object (_o: { [_K in keyof (CreateOrRemoveTriggerDataArg)]: (CreateOrRemoveTriggerDataArg)[_K] }): CreateOrRemoveTriggerDataArg {
        return new CreateOrRemoveTriggerDataArg(_o.createOrRemove, _o.dPName, _o.triggerDPType, _o.serviceKey, _o.profile, _o.triggerData, _o.defaultFaultHandling, _o.tDPIdentifier, _o._unrecognizedExtensionsList, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `createOrRemove`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_createOrRemove () { return CreateOrRemoveIndicator_create; }
    /**
     * @summary Getter that returns the default value for `triggerDPType`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_triggerDPType () { return TriggerDPType_tdp_r; }        /**
         * @summary The enum used as the type of the component `createOrRemove`
         * @public
         * @static
         */

    public static _enum_for_createOrRemove = _enum_for_CreateOrRemoveIndicator;        /**
         * @summary The enum used as the type of the component `dPName`
         * @public
         * @static
         */

    public static _enum_for_dPName = _enum_for_EventTypeBCSM;        /**
         * @summary The enum used as the type of the component `triggerDPType`
         * @public
         * @static
         */

    public static _enum_for_triggerDPType = _enum_for_TriggerDPType;
}

/**
 * @summary The Leading Root Component Types of CreateOrRemoveTriggerDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CreateOrRemoveTriggerDataArg: $.ComponentSpec[] = [
    new $.ComponentSpec("createOrRemove", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dPName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("triggerDPType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("serviceKey", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("profile", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("triggerData", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("defaultFaultHandling", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("tDPIdentifier", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of CreateOrRemoveTriggerDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CreateOrRemoveTriggerDataArg: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Extension Addition Component Types of CreateOrRemoveTriggerDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CreateOrRemoveTriggerDataArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CreateOrRemoveTriggerDataArg: $.ASN1Decoder<CreateOrRemoveTriggerDataArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CreateOrRemoveTriggerDataArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CreateOrRemoveTriggerDataArg (el: _Element): CreateOrRemoveTriggerDataArg {
    if (!_cached_decoder_for_CreateOrRemoveTriggerDataArg) { _cached_decoder_for_CreateOrRemoveTriggerDataArg = function (el: _Element): CreateOrRemoveTriggerDataArg {
    let createOrRemove: OPTIONAL<CreateOrRemoveIndicator> = CreateOrRemoveTriggerDataArg._default_value_for_createOrRemove;
    let dPName: OPTIONAL<EventTypeBCSM>;
    let triggerDPType: OPTIONAL<TriggerDPType> = CreateOrRemoveTriggerDataArg._default_value_for_triggerDPType;
    let serviceKey: OPTIONAL<ServiceKey>;
    let profile: OPTIONAL<ProfileIdentifier>;
    let triggerData: OPTIONAL<TriggerData>;
    let defaultFaultHandling: OPTIONAL<DefaultFaultHandling>;
    let tDPIdentifier: OPTIONAL<TDPIdentifier>;
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "createOrRemove": (_el: _Element): void => { createOrRemove = $._decode_implicit<CreateOrRemoveIndicator>(() => _decode_CreateOrRemoveIndicator)(_el); },
        "dPName": (_el: _Element): void => { dPName = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "triggerDPType": (_el: _Element): void => { triggerDPType = $._decode_implicit<TriggerDPType>(() => _decode_TriggerDPType)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "profile": (_el: _Element): void => { profile = $._decode_explicit<ProfileIdentifier>(() => _decode_ProfileIdentifier)(_el); },
        "triggerData": (_el: _Element): void => { triggerData = $._decode_implicit<TriggerData>(() => _decode_TriggerData)(_el); },
        "defaultFaultHandling": (_el: _Element): void => { defaultFaultHandling = $._decode_implicit<DefaultFaultHandling>(() => _decode_DefaultFaultHandling)(_el); },
        "tDPIdentifier": (_el: _Element): void => { tDPIdentifier = $._decode_explicit<TDPIdentifier>(() => _decode_TDPIdentifier)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CreateOrRemoveTriggerDataArg,
        _extension_additions_list_spec_for_CreateOrRemoveTriggerDataArg,
        _root_component_type_list_2_spec_for_CreateOrRemoveTriggerDataArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CreateOrRemoveTriggerDataArg(
        createOrRemove,
        dPName,
        triggerDPType,
        serviceKey,
        profile,
        triggerData,
        defaultFaultHandling,
        tDPIdentifier,
        _unrecognizedExtensionsList,
        extensions
    );
}; }
    return _cached_decoder_for_CreateOrRemoveTriggerDataArg(el);
}

let _cached_encoder_for_CreateOrRemoveTriggerDataArg: $.ASN1Encoder<CreateOrRemoveTriggerDataArg> | null = null;

/**
 * @summary Encodes a(n) CreateOrRemoveTriggerDataArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateOrRemoveTriggerDataArg, encoded as an ASN.1 Element.
 */
export
function _encode_CreateOrRemoveTriggerDataArg (value: CreateOrRemoveTriggerDataArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CreateOrRemoveTriggerDataArg) { _cached_encoder_for_CreateOrRemoveTriggerDataArg = function (value: CreateOrRemoveTriggerDataArg, elGetter: $.ASN1Encoder<CreateOrRemoveTriggerDataArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.createOrRemove !== undefined && !$.deepEq(value.createOrRemove, CreateOrRemoveTriggerDataArg._default_value_for_createOrRemove)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => _encode_CreateOrRemoveIndicator, $.BER)(value.createOrRemove, $.BER);
    }
    if (value.dPName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_EventTypeBCSM, $.BER)(value.dPName, $.BER);
    }
    if (value.triggerDPType !== undefined && !$.deepEq(value.triggerDPType, CreateOrRemoveTriggerDataArg._default_value_for_triggerDPType)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 2, () => _encode_TriggerDPType, $.BER)(value.triggerDPType, $.BER);
    }
    if (value.serviceKey !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER);
    }
    if (value.profile !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_ProfileIdentifier, $.BER)(value.profile, $.BER);
    }
    if (value.triggerData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_TriggerData, $.BER)(value.triggerData, $.BER);
    }
    if (value.defaultFaultHandling !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_DefaultFaultHandling, $.BER)(value.defaultFaultHandling, $.BER);
    }
    if (value.tDPIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_TDPIdentifier, $.BER)(value.tDPIdentifier, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CreateOrRemoveTriggerDataArg(value, elGetter);
}


/* eslint-enable */
