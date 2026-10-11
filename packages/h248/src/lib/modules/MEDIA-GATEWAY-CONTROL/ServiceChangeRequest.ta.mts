/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
import { ServiceChangeParm, _decode_ServiceChangeParm, _encode_ServiceChangeParm } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeParm.ta.mjs";


/**
 * @summary ServiceChangeRequest
 * @description
 * 
 * ServiceChange, sent by either the MG or the MGC (ITU-T Rec. H.248.1 (03/2013)
 * clause 7.2.8 and Annex F).
 *
 * On Root it registers the gateway, announces a restart or failover, or hands
 * the association to another controller. On any other termination it takes that
 * termination into or out of service. CHOOSE is not used. A TerminationIDList
 * is not valid in the initial version-1 registration command. A message that
 * registers Root with method Restart or Failover contains no other commands.
 *
 * The registration message itself is encoded as version 1, whatever version is
 * being negotiated (clause 11.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeRequest ::= SEQUENCE
 *     {
 *         terminationID                [0] TerminationIDList,
 *         serviceChangeParms            [1] ServiceChangeParm,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class ServiceChangeRequest {
    constructor (
        /**
         * @summary `terminationID`.
         * @description
         *
         * Terminations affected. Root means the whole gateway. Wildcarding is
         * allowed; CHOOSE is not (clause 7.2.8).
         *
         * @public
         * @readonly
         */
        readonly terminationID: TerminationIDList,
        /**
         * @summary `serviceChangeParms`.
         * @description
         *
         * Method, reason, and the optional parameters of clause 7.2.8.1.
         *
         * @public
         * @readonly
         */
        readonly serviceChangeParms: ServiceChangeParm,
        /**
         * @summary Extensions that are not recognized.
         * @description
         *
         * Extension additions this version does not define. Kept so a later
         * peer can still carry them (ITU-T Rec. H.248.1 (03/2013) clause 11.7).
         *
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ServiceChangeRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceChangeRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceChangeRequest`.
     * @returns {ServiceChangeRequest}
     */
    public static _from_object (_o: { [_K in keyof (ServiceChangeRequest)]: (ServiceChangeRequest)[_K] }): ServiceChangeRequest {
        return new ServiceChangeRequest(_o.terminationID, _o.serviceChangeParms, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceChangeRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceChangeRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("terminationID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceChangeParms", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ServiceChangeRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceChangeRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceChangeRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceChangeRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceChangeRequest: $.ASN1Decoder<ServiceChangeRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceChangeRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceChangeRequest (el: _Element): ServiceChangeRequest {
    if (!_cached_decoder_for_ServiceChangeRequest) { _cached_decoder_for_ServiceChangeRequest = function (el: _Element): ServiceChangeRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ServiceChangeRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "terminationID";
    sequence[1].name = "serviceChangeParms";
    const terminationID: TerminationIDList = $._decode_implicit<TerminationIDList>(() => _decode_TerminationIDList)(sequence[0]);
    const serviceChangeParms: ServiceChangeParm = $._decode_implicit<ServiceChangeParm>(() => _decode_ServiceChangeParm)(sequence[1]);
    return new ServiceChangeRequest(
        terminationID,
        serviceChangeParms,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_ServiceChangeRequest(el);
}

let _cached_encoder_for_ServiceChangeRequest: $.ASN1Encoder<ServiceChangeRequest> | null = null;

/**
 * @summary Encodes a(n) ServiceChangeRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceChangeRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceChangeRequest (value: ServiceChangeRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceChangeRequest) { _cached_encoder_for_ServiceChangeRequest = function (value: ServiceChangeRequest, elGetter: $.ASN1Encoder<ServiceChangeRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationIDList, $.BER)(value.terminationID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceChangeParm, $.BER)(value.serviceChangeParms, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceChangeRequest(value, elGetter);
}


/* eslint-enable */
