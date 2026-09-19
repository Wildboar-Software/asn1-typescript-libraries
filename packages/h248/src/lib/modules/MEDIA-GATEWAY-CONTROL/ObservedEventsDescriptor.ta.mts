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
import { ObservedEvent, _decode_ObservedEvent, _encode_ObservedEvent } from "../MEDIA-GATEWAY-CONTROL/ObservedEvent.ta.mjs";
// export { ObservedEvent, _decode_ObservedEvent, _encode_ObservedEvent } from "../MEDIA-GATEWAY-CONTROL/ObservedEvent.ta.mjs";


/**
 * @summary ObservedEventsDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObservedEventsDescriptor ::= SEQUENCE
 *     {
 *         requestId                    [0] RequestID,
 *         observedEventLst            [1] SEQUENCE OF ObservedEvent
 *     }
 * ```
 * 
 * @class
 */
export
class ObservedEventsDescriptor {
    constructor (
        /**
         * @summary `requestId`.
         * @public
         * @readonly
         */
        readonly requestId: RequestID,
        /**
         * @summary `observedEventLst`.
         * @public
         * @readonly
         */
        readonly observedEventLst: ObservedEvent[]
    ) {}

    /**
     * @summary Restructures an object into a ObservedEventsDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `ObservedEventsDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObservedEventsDescriptor`.
     * @returns {ObservedEventsDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (ObservedEventsDescriptor)]: (ObservedEventsDescriptor)[_K] }): ObservedEventsDescriptor {
        return new ObservedEventsDescriptor(_o.requestId, _o.observedEventLst);
    }


}

/**
 * @summary The Leading Root Component Types of ObservedEventsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ObservedEventsDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("requestId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("observedEventLst", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ObservedEventsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ObservedEventsDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ObservedEventsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ObservedEventsDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ObservedEventsDescriptor: $.ASN1Decoder<ObservedEventsDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObservedEventsDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObservedEventsDescriptor (el: _Element): ObservedEventsDescriptor {
    if (!_cached_decoder_for_ObservedEventsDescriptor) { _cached_decoder_for_ObservedEventsDescriptor = function (el: _Element): ObservedEventsDescriptor {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ObservedEventsDescriptor contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "requestId";
    sequence[1].name = "observedEventLst";
    let requestId!: RequestID;
    let observedEventLst!: ObservedEvent[];
    requestId = $._decode_implicit<RequestID>(() => _decode_RequestID)(sequence[0]);
    observedEventLst = $._decode_implicit<ObservedEvent[]>(() => $._decodeSequenceOf<ObservedEvent>(() => _decode_ObservedEvent))(sequence[1]);
    return new ObservedEventsDescriptor(
        requestId,
        observedEventLst,

    );
}; }
    return _cached_decoder_for_ObservedEventsDescriptor(el);
}

let _cached_encoder_for_ObservedEventsDescriptor: $.ASN1Encoder<ObservedEventsDescriptor> | null = null;

/**
 * @summary Encodes a(n) ObservedEventsDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObservedEventsDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_ObservedEventsDescriptor (value: ObservedEventsDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObservedEventsDescriptor) { _cached_encoder_for_ObservedEventsDescriptor = function (value: ObservedEventsDescriptor, elGetter: $.ASN1Encoder<ObservedEventsDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestID, $.BER)(value.requestId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ObservedEvent>(() => _encode_ObservedEvent, $.BER), $.BER)(value.observedEventLst, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ObservedEventsDescriptor(value, elGetter);
}


/* eslint-enable */
