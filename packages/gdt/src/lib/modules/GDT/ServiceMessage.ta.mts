/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceId, _decode_ServiceId, _encode_ServiceId } from "../GDT/ServiceId.ta.mjs";
// export { ServiceId, ServiceId_sid_stp_routing /* IMPORTED_LONG_NAMED_INTEGER */, sid_stp_routing /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceId_sid_sgn_forward /* IMPORTED_LONG_NAMED_INTEGER */, sid_sgn_forward /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceId_sid_fgn_filtering /* IMPORTED_LONG_NAMED_INTEGER */, sid_fgn_filtering /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceId_sid_security /* IMPORTED_LONG_NAMED_INTEGER */, sid_security /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceId_sid_pdn_filtering /* IMPORTED_LONG_NAMED_INTEGER */, sid_pdn_filtering /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceId_sid_sysagent /* IMPORTED_LONG_NAMED_INTEGER */, sid_sysagent /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceId, _encode_ServiceId } from "../GDT/ServiceId.ta.mjs";
import { ServiceAction, _decode_ServiceAction, _encode_ServiceAction } from "../GDT/ServiceAction.ta.mjs";
// export { ServiceAction, ServiceAction_srvca_request /* IMPORTED_LONG_NAMED_INTEGER */, srvca_request /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceAction_srvca_result /* IMPORTED_LONG_NAMED_INTEGER */, srvca_result /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceAction_srvca_default /* IMPORTED_LONG_NAMED_INTEGER */, srvca_default /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceAction_srvca_na /* IMPORTED_LONG_NAMED_INTEGER */, srvca_na /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceAction, _encode_ServiceAction } from "../GDT/ServiceAction.ta.mjs";
import { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";
// export { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";


/**
 * @summary ServiceMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceMessage ::= SEQUENCE {
 *     service-id      ServiceId,
 *     service-action  ServiceAction,
 *     params          Parameters OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ServiceMessage {
    constructor (
        /**
         * @summary `service_id`.
         * @public
         * @readonly
         */
        readonly service_id: ServiceId,
        /**
         * @summary `service_action`.
         * @public
         * @readonly
         */
        readonly service_action: ServiceAction,
        /**
         * @summary `params`.
         * @public
         * @readonly
         */
        readonly params: OPTIONAL<Parameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ServiceMessage
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceMessage`.
     * @returns {ServiceMessage}
     */
    public static _from_object (_o: { [_K in keyof (ServiceMessage)]: (ServiceMessage)[_K] }): ServiceMessage {
        return new ServiceMessage(_o.service_id, _o.service_action, _o.params, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("service-id", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("service-action", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("params", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ServiceMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceMessage: $.ASN1Decoder<ServiceMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceMessage (el: _Element): ServiceMessage {
    if (!_cached_decoder_for_ServiceMessage) { _cached_decoder_for_ServiceMessage = function (el: _Element): ServiceMessage {
    let service_id!: ServiceId;
    let service_action!: ServiceAction;
    let params: OPTIONAL<Parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "service-id": (_el: _Element): void => { service_id = _decode_ServiceId(_el); },
        "service-action": (_el: _Element): void => { service_action = _decode_ServiceAction(_el); },
        "params": (_el: _Element): void => { params = _decode_Parameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceMessage,
        _extension_additions_list_spec_for_ServiceMessage,
        _root_component_type_list_2_spec_for_ServiceMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServiceMessage(
        service_id,
        service_action,
        params,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ServiceMessage(el);
}

let _cached_encoder_for_ServiceMessage: $.ASN1Encoder<ServiceMessage> | null = null;

/**
 * @summary Encodes a(n) ServiceMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceMessage, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceMessage (value: ServiceMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceMessage) { _cached_encoder_for_ServiceMessage = function (value: ServiceMessage, elGetter: $.ASN1Encoder<ServiceMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ServiceId(value.service_id, $.BER),
            /* REQUIRED   */ _encode_ServiceAction(value.service_action, $.BER),
            /* IF_ABSENT  */ ((value.params === undefined) ? undefined : _encode_Parameters(value.params, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceMessage(value, elGetter);
}


/* eslint-enable */
