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
import { RequestID, _decode_RequestID, _encode_RequestID } from "../MEDIA-GATEWAY-CONTROL/RequestID.ta.mjs";
// export { RequestID, _decode_RequestID, _encode_RequestID } from "../MEDIA-GATEWAY-CONTROL/RequestID.ta.mjs";
import { SecondRequestedEvent, _decode_SecondRequestedEvent, _encode_SecondRequestedEvent } from "../MEDIA-GATEWAY-CONTROL/SecondRequestedEvent.ta.mjs";
// export { SecondRequestedEvent, _decode_SecondRequestedEvent, _encode_SecondRequestedEvent } from "../MEDIA-GATEWAY-CONTROL/SecondRequestedEvent.ta.mjs";


/**
 * @summary SecondEventsDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecondEventsDescriptor ::= SEQUENCE
 *     {
 *         requestID                [0] RequestID OPTIONAL,
 *         eventList                [1] SEQUENCE OF SecondRequestedEvent,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class SecondEventsDescriptor {
    constructor (
        /**
         * @summary `requestID`.
         * @public
         * @readonly
         */
        readonly requestID: OPTIONAL<RequestID>,
        /**
         * @summary `eventList`.
         * @public
         * @readonly
         */
        readonly eventList: SecondRequestedEvent[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SecondEventsDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `SecondEventsDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecondEventsDescriptor`.
     * @returns {SecondEventsDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (SecondEventsDescriptor)]: (SecondEventsDescriptor)[_K] }): SecondEventsDescriptor {
        return new SecondEventsDescriptor(_o.requestID, _o.eventList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SecondEventsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecondEventsDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("requestID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventList", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SecondEventsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecondEventsDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecondEventsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecondEventsDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SecondEventsDescriptor: $.ASN1Decoder<SecondEventsDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecondEventsDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecondEventsDescriptor (el: _Element): SecondEventsDescriptor {
    if (!_cached_decoder_for_SecondEventsDescriptor) { _cached_decoder_for_SecondEventsDescriptor = function (el: _Element): SecondEventsDescriptor {
    let requestID: OPTIONAL<RequestID>;
    let eventList!: SecondRequestedEvent[];
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestID": (_el: _Element): void => { requestID = $._decode_implicit<RequestID>(() => _decode_RequestID)(_el); },
        "eventList": (_el: _Element): void => { eventList = $._decode_implicit<SecondRequestedEvent[]>(() => $._decodeSequenceOf<SecondRequestedEvent>(() => _decode_SecondRequestedEvent))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SecondEventsDescriptor,
        _extension_additions_list_spec_for_SecondEventsDescriptor,
        _root_component_type_list_2_spec_for_SecondEventsDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SecondEventsDescriptor(
        requestID,
        eventList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SecondEventsDescriptor(el);
}

let _cached_encoder_for_SecondEventsDescriptor: $.ASN1Encoder<SecondEventsDescriptor> | null = null;

/**
 * @summary Encodes a(n) SecondEventsDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecondEventsDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_SecondEventsDescriptor (value: SecondEventsDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecondEventsDescriptor) { _cached_encoder_for_SecondEventsDescriptor = function (value: SecondEventsDescriptor, elGetter: $.ASN1Encoder<SecondEventsDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.requestID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RequestID, $.BER)(value.requestID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<SecondRequestedEvent>(() => _encode_SecondRequestedEvent, $.BER), $.BER)(value.eventList, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SecondEventsDescriptor(value, elGetter);
}


/* eslint-enable */
