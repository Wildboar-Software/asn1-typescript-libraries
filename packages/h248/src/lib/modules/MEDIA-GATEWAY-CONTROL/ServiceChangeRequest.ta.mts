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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
// export { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
import { ServiceChangeParm, _decode_ServiceChangeParm, _encode_ServiceChangeParm } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeParm.ta.mjs";
// export { ServiceChangeParm, _decode_ServiceChangeParm, _encode_ServiceChangeParm } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeParm.ta.mjs";


/**
 * @summary ServiceChangeRequest
 * @description
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
         * @public
         * @readonly
         */
        readonly terminationID: TerminationIDList,
        /**
         * @summary `serviceChangeParms`.
         * @public
         * @readonly
         */
        readonly serviceChangeParms: ServiceChangeParm,
        /**
         * @summary Extensions that are not recognized.
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
    let terminationID!: TerminationIDList;
    let serviceChangeParms!: ServiceChangeParm;
    terminationID = $._decode_implicit<TerminationIDList>(() => _decode_TerminationIDList)(sequence[0]);
    serviceChangeParms = $._decode_implicit<ServiceChangeParm>(() => _decode_ServiceChangeParm)(sequence[1]);
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
