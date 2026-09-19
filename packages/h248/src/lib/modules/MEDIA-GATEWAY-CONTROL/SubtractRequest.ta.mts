/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
// export { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
import { AuditDescriptor, _decode_AuditDescriptor, _encode_AuditDescriptor } from "../MEDIA-GATEWAY-CONTROL/AuditDescriptor.ta.mjs";
// export { AuditDescriptor, _decode_AuditDescriptor, _encode_AuditDescriptor } from "../MEDIA-GATEWAY-CONTROL/AuditDescriptor.ta.mjs";


/**
 * @summary SubtractRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubtractRequest ::= SEQUENCE
 *     {
 *         terminationID                [0] TerminationIDList,
 *         auditDescriptor                [1] AuditDescriptor OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class SubtractRequest {
    constructor (
        /**
         * @summary `terminationID`.
         * @public
         * @readonly
         */
        readonly terminationID: TerminationIDList,
        /**
         * @summary `auditDescriptor`.
         * @public
         * @readonly
         */
        readonly auditDescriptor: OPTIONAL<AuditDescriptor>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubtractRequest
     * @description
     * 
     * This takes an `object` and converts it to a `SubtractRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubtractRequest`.
     * @returns {SubtractRequest}
     */
    public static _from_object (_o: { [_K in keyof (SubtractRequest)]: (SubtractRequest)[_K] }): SubtractRequest {
        return new SubtractRequest(_o.terminationID, _o.auditDescriptor, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SubtractRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubtractRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("terminationID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("auditDescriptor", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SubtractRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubtractRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubtractRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubtractRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SubtractRequest: $.ASN1Decoder<SubtractRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubtractRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubtractRequest (el: _Element): SubtractRequest {
    if (!_cached_decoder_for_SubtractRequest) { _cached_decoder_for_SubtractRequest = function (el: _Element): SubtractRequest {
    let terminationID!: TerminationIDList;
    let auditDescriptor: OPTIONAL<AuditDescriptor>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "terminationID": (_el: _Element): void => { terminationID = $._decode_implicit<TerminationIDList>(() => _decode_TerminationIDList)(_el); },
        "auditDescriptor": (_el: _Element): void => { auditDescriptor = $._decode_implicit<AuditDescriptor>(() => _decode_AuditDescriptor)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SubtractRequest,
        _extension_additions_list_spec_for_SubtractRequest,
        _root_component_type_list_2_spec_for_SubtractRequest,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SubtractRequest(
        terminationID,
        auditDescriptor,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SubtractRequest(el);
}

let _cached_encoder_for_SubtractRequest: $.ASN1Encoder<SubtractRequest> | null = null;

/**
 * @summary Encodes a(n) SubtractRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubtractRequest, encoded as an ASN.1 Element.
 */
export
function _encode_SubtractRequest (value: SubtractRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubtractRequest) { _cached_encoder_for_SubtractRequest = function (value: SubtractRequest, elGetter: $.ASN1Encoder<SubtractRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationIDList, $.BER)(value.terminationID, $.BER),
            /* IF_ABSENT  */ ((value.auditDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AuditDescriptor, $.BER)(value.auditDescriptor, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SubtractRequest(value, elGetter);
}


/* eslint-enable */
