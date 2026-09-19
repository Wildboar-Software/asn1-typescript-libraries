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



/**
 * @summary ServiceKPIs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceKPIs ::= SEQUENCE
 * {
 *     connectionBandwidth      [1] INTEGER OPTIONAL,
 *     requestRate              [2] INTEGER OPTIONAL,
 *     responseTime             [3] INTEGER OPTIONAL,
 *     requestedAvailability    [4] INTEGER OPTIONAL,
 *     requestedCompute         [5] OCTET STRING OPTIONAL,
 *     requestedGraphCompute    [6] OCTET STRING OPTIONAL,
 *     requestedMemory          [7] OCTET STRING OPTIONAL,
 *     requestedStorage         [8] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ServiceKPIs {
    constructor (
        /**
         * @summary `connectionBandwidth`.
         * @public
         * @readonly
         */
        readonly connectionBandwidth: OPTIONAL<INTEGER>,
        /**
         * @summary `requestRate`.
         * @public
         * @readonly
         */
        readonly requestRate: OPTIONAL<INTEGER>,
        /**
         * @summary `responseTime`.
         * @public
         * @readonly
         */
        readonly responseTime: OPTIONAL<INTEGER>,
        /**
         * @summary `requestedAvailability`.
         * @public
         * @readonly
         */
        readonly requestedAvailability: OPTIONAL<INTEGER>,
        /**
         * @summary `requestedCompute`.
         * @public
         * @readonly
         */
        readonly requestedCompute: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `requestedGraphCompute`.
         * @public
         * @readonly
         */
        readonly requestedGraphCompute: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `requestedMemory`.
         * @public
         * @readonly
         */
        readonly requestedMemory: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `requestedStorage`.
         * @public
         * @readonly
         */
        readonly requestedStorage: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a ServiceKPIs
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceKPIs`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceKPIs`.
     * @returns {ServiceKPIs}
     */
    public static _from_object (_o: { [_K in keyof (ServiceKPIs)]: (ServiceKPIs)[_K] }): ServiceKPIs {
        return new ServiceKPIs(_o.connectionBandwidth, _o.requestRate, _o.responseTime, _o.requestedAvailability, _o.requestedCompute, _o.requestedGraphCompute, _o.requestedMemory, _o.requestedStorage);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceKPIs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceKPIs: $.ComponentSpec[] = [
    new $.ComponentSpec("connectionBandwidth", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("requestRate", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("responseTime", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("requestedAvailability", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("requestedCompute", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("requestedGraphCompute", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("requestedMemory", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("requestedStorage", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of ServiceKPIs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceKPIs: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceKPIs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceKPIs: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceKPIs: $.ASN1Decoder<ServiceKPIs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceKPIs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceKPIs (el: _Element): ServiceKPIs {
    if (!_cached_decoder_for_ServiceKPIs) { _cached_decoder_for_ServiceKPIs = function (el: _Element): ServiceKPIs {
    let connectionBandwidth: OPTIONAL<INTEGER>;
    let requestRate: OPTIONAL<INTEGER>;
    let responseTime: OPTIONAL<INTEGER>;
    let requestedAvailability: OPTIONAL<INTEGER>;
    let requestedCompute: OPTIONAL<OCTET_STRING>;
    let requestedGraphCompute: OPTIONAL<OCTET_STRING>;
    let requestedMemory: OPTIONAL<OCTET_STRING>;
    let requestedStorage: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "connectionBandwidth": (_el: _Element): void => { connectionBandwidth = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "requestRate": (_el: _Element): void => { requestRate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "responseTime": (_el: _Element): void => { responseTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "requestedAvailability": (_el: _Element): void => { requestedAvailability = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "requestedCompute": (_el: _Element): void => { requestedCompute = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requestedGraphCompute": (_el: _Element): void => { requestedGraphCompute = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requestedMemory": (_el: _Element): void => { requestedMemory = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requestedStorage": (_el: _Element): void => { requestedStorage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceKPIs,
        _extension_additions_list_spec_for_ServiceKPIs,
        _root_component_type_list_2_spec_for_ServiceKPIs,
        undefined,
    );
    return new ServiceKPIs(
        connectionBandwidth,
        requestRate,
        responseTime,
        requestedAvailability,
        requestedCompute,
        requestedGraphCompute,
        requestedMemory,
        requestedStorage
    );
}; }
    return _cached_decoder_for_ServiceKPIs(el);
}

let _cached_encoder_for_ServiceKPIs: $.ASN1Encoder<ServiceKPIs> | null = null;

/**
 * @summary Encodes a(n) ServiceKPIs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceKPIs, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceKPIs (value: ServiceKPIs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceKPIs) { _cached_encoder_for_ServiceKPIs = function (value: ServiceKPIs, elGetter: $.ASN1Encoder<ServiceKPIs>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.connectionBandwidth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.connectionBandwidth, $.BER)),
            /* IF_ABSENT  */ ((value.requestRate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.requestRate, $.BER)),
            /* IF_ABSENT  */ ((value.responseTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.responseTime, $.BER)),
            /* IF_ABSENT  */ ((value.requestedAvailability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.requestedAvailability, $.BER)),
            /* IF_ABSENT  */ ((value.requestedCompute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.requestedCompute, $.BER)),
            /* IF_ABSENT  */ ((value.requestedGraphCompute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.requestedGraphCompute, $.BER)),
            /* IF_ABSENT  */ ((value.requestedMemory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.requestedMemory, $.BER)),
            /* IF_ABSENT  */ ((value.requestedStorage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.requestedStorage, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceKPIs(value, elGetter);
}


/* eslint-enable */
