/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-SSF-SCF-datatypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-SSF-SCF-datatypes/ServiceKey.ta.mjs";
import { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-SSF-SCF-datatypes/MiscCallInfo.ta.mjs";
// export { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-SSF-SCF-datatypes/MiscCallInfo.ta.mjs";
import { TriggerType, _decode_TriggerType, _encode_TriggerType, _enum_for_TriggerType } from "../IN-SSF-SCF-datatypes/TriggerType.ta.mjs";
// export { TriggerType, _enum_for_TriggerType, TriggerType_featureActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, featureActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_verticalServiceCode /* IMPORTED_LONG_ENUMERATION_ITEM */, verticalServiceCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_customizedAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, customizedAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_customizedIntercom /* IMPORTED_LONG_ENUMERATION_ITEM */, customizedIntercom /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_emergencyService /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyService /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_aFR /* IMPORTED_LONG_ENUMERATION_ITEM */, aFR /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_sharedIOTrunk /* IMPORTED_LONG_ENUMERATION_ITEM */, sharedIOTrunk /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_offHookDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, offHookDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_channelSetupPRI /* IMPORTED_LONG_ENUMERATION_ITEM */, channelSetupPRI /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_originationAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, originationAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oModifyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, oModifyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tModifyRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, tModifyRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TriggerType, _encode_TriggerType } from "../IN-SSF-SCF-datatypes/TriggerType.ta.mjs";


/**
 * @summary ServiceAddressInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAddressInformation ::= SEQUENCE {
 *   serviceKey    [0]  ServiceKey OPTIONAL,
 *   miscCallInfo  [1]  MiscCallInfo,
 *   triggerType   [2]  TriggerType OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ServiceAddressInformation {
    /**
     * @summary `serviceKey`.
     * @public
     * @readonly
     */
    readonly serviceKey: OPTIONAL<ServiceKey>;
    /**
     * @summary `miscCallInfo`.
     * @public
     * @readonly
     */
    readonly miscCallInfo: MiscCallInfo;
    /**
     * @summary `triggerType`.
     * @public
     * @readonly
     */
    readonly triggerType: OPTIONAL<TriggerType>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        serviceKey: OPTIONAL<ServiceKey>,
        miscCallInfo: MiscCallInfo,
        triggerType?: OPTIONAL<TriggerType>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.serviceKey = serviceKey;
        this.miscCallInfo = miscCallInfo;
        this.triggerType = triggerType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ServiceAddressInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceAddressInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceAddressInformation`.
     * @returns {ServiceAddressInformation}
     */
    public static _from_object (_o: { [_K in keyof (ServiceAddressInformation)]: (ServiceAddressInformation)[_K] }): ServiceAddressInformation {
        return new ServiceAddressInformation(_o.serviceKey, _o.miscCallInfo, _o.triggerType, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `triggerType`
         * @public
         * @static
         */

    public static _enum_for_triggerType = _enum_for_TriggerType;
}

/**
 * @summary The Leading Root Component Types of ServiceAddressInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceAddressInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceKey", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("miscCallInfo", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("triggerType", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ServiceAddressInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceAddressInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceAddressInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceAddressInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceAddressInformation: $.ASN1Decoder<ServiceAddressInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceAddressInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceAddressInformation (el: _Element): ServiceAddressInformation {
    if (!_cached_decoder_for_ServiceAddressInformation) { _cached_decoder_for_ServiceAddressInformation = function (el: _Element): ServiceAddressInformation {
    let serviceKey: OPTIONAL<ServiceKey>;
    let miscCallInfo!: MiscCallInfo;
    let triggerType: OPTIONAL<TriggerType>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "miscCallInfo": (_el: _Element): void => { miscCallInfo = $._decode_implicit<MiscCallInfo>(() => _decode_MiscCallInfo)(_el); },
        "triggerType": (_el: _Element): void => { triggerType = $._decode_implicit<TriggerType>(() => _decode_TriggerType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceAddressInformation,
        _extension_additions_list_spec_for_ServiceAddressInformation,
        _root_component_type_list_2_spec_for_ServiceAddressInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServiceAddressInformation(
        serviceKey,
        miscCallInfo,
        triggerType,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ServiceAddressInformation(el);
}

let _cached_encoder_for_ServiceAddressInformation: $.ASN1Encoder<ServiceAddressInformation> | null = null;

/**
 * @summary Encodes a(n) ServiceAddressInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceAddressInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceAddressInformation (value: ServiceAddressInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceAddressInformation) { _cached_encoder_for_ServiceAddressInformation = function (value: ServiceAddressInformation, elGetter: $.ASN1Encoder<ServiceAddressInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.serviceKey !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MiscCallInfo, $.BER)(value.miscCallInfo, $.BER);
    if (value.triggerType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_TriggerType, $.BER)(value.triggerType, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServiceAddressInformation(value, elGetter);
}


/* eslint-enable */
