/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
// export { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
import { ServiceChangeResult, _decode_ServiceChangeResult, _encode_ServiceChangeResult } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeResult.ta.mjs";
// export { ServiceChangeResult, _decode_ServiceChangeResult, _encode_ServiceChangeResult } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeResult.ta.mjs";


/**
 * @summary ServiceChangeReply
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeReply ::= SEQUENCE
 *     {
 *         terminationID                [0] TerminationIDList,
 *         serviceChangeResult            [1] ServiceChangeResult,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class ServiceChangeReply {
    constructor (
        /**
         * @summary `terminationID`.
         * @public
         * @readonly
         */
        readonly terminationID: TerminationIDList,
        /**
         * @summary `serviceChangeResult`.
         * @public
         * @readonly
         */
        readonly serviceChangeResult: ServiceChangeResult,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ServiceChangeReply
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceChangeReply`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceChangeReply`.
     * @returns {ServiceChangeReply}
     */
    public static _from_object (_o: { [_K in keyof (ServiceChangeReply)]: (ServiceChangeReply)[_K] }): ServiceChangeReply {
        return new ServiceChangeReply(_o.terminationID, _o.serviceChangeResult, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceChangeReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceChangeReply: $.ComponentSpec[] = [
    new $.ComponentSpec("terminationID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceChangeResult", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ServiceChangeReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceChangeReply: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceChangeReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceChangeReply: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceChangeReply: $.ASN1Decoder<ServiceChangeReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceChangeReply
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceChangeReply (el: _Element): ServiceChangeReply {
    if (!_cached_decoder_for_ServiceChangeReply) { _cached_decoder_for_ServiceChangeReply = function (el: _Element): ServiceChangeReply {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ServiceChangeReply contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "terminationID";
    sequence[1].name = "serviceChangeResult";
    let terminationID!: TerminationIDList;
    let serviceChangeResult!: ServiceChangeResult;
    terminationID = $._decode_implicit<TerminationIDList>(() => _decode_TerminationIDList)(sequence[0]);
    serviceChangeResult = $._decode_explicit<ServiceChangeResult>(() => _decode_ServiceChangeResult)(sequence[1]);
    return new ServiceChangeReply(
        terminationID,
        serviceChangeResult,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_ServiceChangeReply(el);
}

let _cached_encoder_for_ServiceChangeReply: $.ASN1Encoder<ServiceChangeReply> | null = null;

/**
 * @summary Encodes a(n) ServiceChangeReply into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceChangeReply, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceChangeReply (value: ServiceChangeReply, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceChangeReply) { _cached_encoder_for_ServiceChangeReply = function (value: ServiceChangeReply, elGetter: $.ASN1Encoder<ServiceChangeReply>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationIDList, $.BER)(value.terminationID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ServiceChangeResult, $.BER)(value.serviceChangeResult, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceChangeReply(value, elGetter);
}


/* eslint-enable */
