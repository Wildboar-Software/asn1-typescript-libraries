/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS2-datatypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS2-datatypes/ServiceKey.ta.mjs";
import { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS2-datatypes/MiscCallInfo.ta.mjs";
// export { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS2-datatypes/MiscCallInfo.ta.mjs";
import { TriggerType, _enum_for_TriggerType, TriggerType_featureActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, featureActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_verticalServiceCode /* IMPORTED_LONG_ENUMERATION_ITEM */, verticalServiceCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_customizedAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, customizedAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_customizedIntercom /* IMPORTED_LONG_ENUMERATION_ITEM */, customizedIntercom /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_emergencyService /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyService /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_aFR /* IMPORTED_LONG_ENUMERATION_ITEM */, aFR /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_sharedIOTrunk /* IMPORTED_LONG_ENUMERATION_ITEM */, sharedIOTrunk /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_offHookDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, offHookDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_channelSetupPRI /* IMPORTED_LONG_ENUMERATION_ITEM */, channelSetupPRI /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_originationAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, originationAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TriggerType, _encode_TriggerType } from "../IN-CS2-datatypes/TriggerType.ta.mjs";
// export { TriggerType, _enum_for_TriggerType, TriggerType_featureActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, featureActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_verticalServiceCode /* IMPORTED_LONG_ENUMERATION_ITEM */, verticalServiceCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_customizedAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, customizedAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_customizedIntercom /* IMPORTED_LONG_ENUMERATION_ITEM */, customizedIntercom /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_emergencyService /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyService /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_aFR /* IMPORTED_LONG_ENUMERATION_ITEM */, aFR /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_sharedIOTrunk /* IMPORTED_LONG_ENUMERATION_ITEM */, sharedIOTrunk /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_offHookDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, offHookDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_channelSetupPRI /* IMPORTED_LONG_ENUMERATION_ITEM */, channelSetupPRI /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_originationAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, originationAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TriggerType, _encode_TriggerType } from "../IN-CS2-datatypes/TriggerType.ta.mjs";


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
 *   triggerType   [2]  TriggerType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ServiceAddressInformation {
    constructor (
        /**
         * @summary `serviceKey`.
         * @public
         * @readonly
         */
        readonly serviceKey: OPTIONAL<ServiceKey>,
        /**
         * @summary `miscCallInfo`.
         * @public
         * @readonly
         */
        readonly miscCallInfo: MiscCallInfo,
        /**
         * @summary `triggerType`.
         * @public
         * @readonly
         */
        readonly triggerType: OPTIONAL<TriggerType>
    ) {}

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
        return new ServiceAddressInformation(_o.serviceKey, _o.miscCallInfo, _o.triggerType);
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
    new $.ComponentSpec("serviceKey", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("miscCallInfo", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("triggerType", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
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
    const callbacks: $.DecodingMap = {
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "miscCallInfo": (_el: _Element): void => { miscCallInfo = $._decode_implicit<MiscCallInfo>(() => _decode_MiscCallInfo)(_el); },
        "triggerType": (_el: _Element): void => { triggerType = $._decode_implicit<TriggerType>(() => _decode_TriggerType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceAddressInformation,
        _extension_additions_list_spec_for_ServiceAddressInformation,
        _root_component_type_list_2_spec_for_ServiceAddressInformation,
        undefined,
    );
    return new ServiceAddressInformation(
        serviceKey,
        miscCallInfo,
        triggerType
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.serviceKey === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MiscCallInfo, $.BER)(value.miscCallInfo, $.BER),
            /* IF_ABSENT  */ ((value.triggerType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TriggerType, $.BER)(value.triggerType, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceAddressInformation(value, elGetter);
}


/* eslint-enable */
