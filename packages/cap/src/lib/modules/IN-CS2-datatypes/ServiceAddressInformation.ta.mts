/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS2-datatypes/ServiceKey.ta.mjs";
import { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS2-datatypes/MiscCallInfo.ta.mjs";
import { TriggerType, _enum_for_TriggerType, _decode_TriggerType, _encode_TriggerType } from "../IN-CS2-datatypes/TriggerType.ta.mjs";


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
    if (!_cached_encoder_for_ServiceAddressInformation) { _cached_encoder_for_ServiceAddressInformation = function (value: ServiceAddressInformation): _Element {
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
