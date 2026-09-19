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
import { IndAudPropertyParm, _decode_IndAudPropertyParm, _encode_IndAudPropertyParm } from "../MEDIA-GATEWAY-CONTROL/IndAudPropertyParm.ta.mjs";
// export { IndAudPropertyParm, _decode_IndAudPropertyParm, _encode_IndAudPropertyParm } from "../MEDIA-GATEWAY-CONTROL/IndAudPropertyParm.ta.mjs";
import { ServiceState, _enum_for_ServiceState, ServiceState_test /* IMPORTED_LONG_ENUMERATION_ITEM */, test /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceState_outOfSvc /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfSvc /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceState_inSvc /* IMPORTED_LONG_ENUMERATION_ITEM */, inSvc /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ServiceState, _encode_ServiceState } from "../MEDIA-GATEWAY-CONTROL/ServiceState.ta.mjs";
// export { ServiceState, _enum_for_ServiceState, ServiceState_test /* IMPORTED_LONG_ENUMERATION_ITEM */, test /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceState_outOfSvc /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfSvc /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceState_inSvc /* IMPORTED_LONG_ENUMERATION_ITEM */, inSvc /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ServiceState, _encode_ServiceState } from "../MEDIA-GATEWAY-CONTROL/ServiceState.ta.mjs";


/**
 * @summary IndAudTerminationStateDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudTerminationStateDescriptor ::= SEQUENCE
 *     {
 *         propertyParms                [0] SEQUENCE OF IndAudPropertyParm,
 *         eventBufferControl            [1] NULL OPTIONAL,
 *         serviceState                [2] NULL OPTIONAL,
 *         ...,
 *         serviceStateSel                [3] ServiceState OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class IndAudTerminationStateDescriptor {
    constructor (
        /**
         * @summary `propertyParms`.
         * @public
         * @readonly
         */
        readonly propertyParms: IndAudPropertyParm[],
        /**
         * @summary `eventBufferControl`.
         * @public
         * @readonly
         */
        readonly eventBufferControl: OPTIONAL<NULL>,
        /**
         * @summary `serviceState`.
         * @public
         * @readonly
         */
        readonly serviceState: OPTIONAL<NULL>,
        /**
         * @summary `serviceStateSel`.
         * @public
         * @readonly
         */
        readonly serviceStateSel: OPTIONAL<ServiceState>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IndAudTerminationStateDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudTerminationStateDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudTerminationStateDescriptor`.
     * @returns {IndAudTerminationStateDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (IndAudTerminationStateDescriptor)]: (IndAudTerminationStateDescriptor)[_K] }): IndAudTerminationStateDescriptor {
        return new IndAudTerminationStateDescriptor(_o.propertyParms, _o.eventBufferControl, _o.serviceState, _o.serviceStateSel, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `serviceStateSel`
         * @public
         * @static
         */

    public static _enum_for_serviceStateSel = _enum_for_ServiceState;
}

/**
 * @summary The Leading Root Component Types of IndAudTerminationStateDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudTerminationStateDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("propertyParms", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventBufferControl", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceState", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IndAudTerminationStateDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudTerminationStateDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudTerminationStateDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudTerminationStateDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceStateSel", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_IndAudTerminationStateDescriptor: $.ASN1Decoder<IndAudTerminationStateDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudTerminationStateDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudTerminationStateDescriptor (el: _Element): IndAudTerminationStateDescriptor {
    if (!_cached_decoder_for_IndAudTerminationStateDescriptor) { _cached_decoder_for_IndAudTerminationStateDescriptor = function (el: _Element): IndAudTerminationStateDescriptor {
    let propertyParms!: IndAudPropertyParm[];
    let eventBufferControl: OPTIONAL<NULL>;
    let serviceState: OPTIONAL<NULL>;
    let serviceStateSel: OPTIONAL<ServiceState>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "propertyParms": (_el: _Element): void => { propertyParms = $._decode_implicit<IndAudPropertyParm[]>(() => $._decodeSequenceOf<IndAudPropertyParm>(() => _decode_IndAudPropertyParm))(_el); },
        "eventBufferControl": (_el: _Element): void => { eventBufferControl = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "serviceState": (_el: _Element): void => { serviceState = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "serviceStateSel": (_el: _Element): void => { serviceStateSel = $._decode_implicit<ServiceState>(() => _decode_ServiceState)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IndAudTerminationStateDescriptor,
        _extension_additions_list_spec_for_IndAudTerminationStateDescriptor,
        _root_component_type_list_2_spec_for_IndAudTerminationStateDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IndAudTerminationStateDescriptor(
        propertyParms,
        eventBufferControl,
        serviceState,
        serviceStateSel,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IndAudTerminationStateDescriptor(el);
}

let _cached_encoder_for_IndAudTerminationStateDescriptor: $.ASN1Encoder<IndAudTerminationStateDescriptor> | null = null;

/**
 * @summary Encodes a(n) IndAudTerminationStateDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudTerminationStateDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudTerminationStateDescriptor (value: IndAudTerminationStateDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudTerminationStateDescriptor) { _cached_encoder_for_IndAudTerminationStateDescriptor = function (value: IndAudTerminationStateDescriptor, elGetter: $.ASN1Encoder<IndAudTerminationStateDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<IndAudPropertyParm>(() => _encode_IndAudPropertyParm, $.BER), $.BER)(value.propertyParms, $.BER),
            /* IF_ABSENT  */ ((value.eventBufferControl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.eventBufferControl, $.BER)),
            /* IF_ABSENT  */ ((value.serviceState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.serviceState, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.serviceStateSel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ServiceState, $.BER)(value.serviceStateSel, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudTerminationStateDescriptor(value, elGetter);
}


/* eslint-enable */
