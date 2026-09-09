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
 * @summary EstablishTemporaryConnectionArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishTemporaryConnectionArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     assistingSSPIPRoutingAddress    [0] AssistingSSPIPRoutingAddress {bound},
 *     correlationID            [1] CorrelationID {bound}            OPTIONAL,
 *     scfID                [3] ScfID {bound}                OPTIONAL,
 *     extensions                [4] Extensions {bound}            OPTIONAL,
 *     carrier                [5] Carrier {bound}                OPTIONAL,
 *     serviceInteractionIndicatorsTwo    [6] ServiceInteractionIndicatorsTwo        OPTIONAL,
 *     callSegmentID            [7]    CallSegmentID {bound}            OPTIONAL,
 *     naOliInfo                [50] NAOliInfo                OPTIONAL,
 *     chargeNumber            [51] ChargeNumber {bound}            OPTIONAL,
 *     ...,
 *     originalCalledPartyID        [52] OriginalCalledPartyID {bound}        OPTIONAL,
 *     callingPartyNumber            [53] CallingPartyNumber {bound}        OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class EstablishTemporaryConnectionArg {
    constructor (
        /**
         * @summary `assistingSSPIPRoutingAddress`.
         * @public
         * @readonly
         */
        readonly assistingSSPIPRoutingAddress: AssistingSSPIPRoutingAddress,
        /**
         * @summary `correlationID`.
         * @public
         * @readonly
         */
        readonly correlationID: OPTIONAL<CorrelationID>,
        /**
         * @summary `scfID`.
         * @public
         * @readonly
         */
        readonly scfID: OPTIONAL<ScfID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `carrier`.
         * @public
         * @readonly
         */
        readonly carrier: OPTIONAL<Carrier>,
        /**
         * @summary `serviceInteractionIndicatorsTwo`.
         * @public
         * @readonly
         */
        readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        /**
         * @summary `callSegmentID`.
         * @public
         * @readonly
         */
        readonly callSegmentID: OPTIONAL<CallSegmentID>,
        /**
         * @summary `naOliInfo`.
         * @public
         * @readonly
         */
        readonly naOliInfo: OPTIONAL<NAOliInfo>,
        /**
         * @summary `chargeNumber`.
         * @public
         * @readonly
         */
        readonly chargeNumber: OPTIONAL<ChargeNumber>,
        /**
         * @summary `originalCalledPartyID`.
         * @public
         * @readonly
         */
        readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
        /**
         * @summary `callingPartyNumber`.
         * @public
         * @readonly
         */
        readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EstablishTemporaryConnectionArg
     * @description
     * 
     * This takes an `object` and converts it to a `EstablishTemporaryConnectionArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EstablishTemporaryConnectionArg`.
     * @returns {EstablishTemporaryConnectionArg}
     */
    public static _from_object (_o: { [_K in keyof (EstablishTemporaryConnectionArg)]: (EstablishTemporaryConnectionArg)[_K] }): EstablishTemporaryConnectionArg {
        return new EstablishTemporaryConnectionArg(_o.assistingSSPIPRoutingAddress, _o.correlationID, _o.scfID, _o.extensions, _o.carrier, _o.serviceInteractionIndicatorsTwo, _o.callSegmentID, _o.naOliInfo, _o.chargeNumber, _o.originalCalledPartyID, _o.callingPartyNumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EstablishTemporaryConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EstablishTemporaryConnectionArg: $.ComponentSpec[] = [
    new $.ComponentSpec("assistingSSPIPRoutingAddress", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("naOliInfo", true, $.hasTag(_TagClass.context, 50), undefined, undefined),
    new $.ComponentSpec("chargeNumber", true, $.hasTag(_TagClass.context, 51), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EstablishTemporaryConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EstablishTemporaryConnectionArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EstablishTemporaryConnectionArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EstablishTemporaryConnectionArg: $.ComponentSpec[] = [
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 52), undefined, undefined),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 53), undefined, undefined)
];

let _cached_decoder_for_EstablishTemporaryConnectionArg: $.ASN1Decoder<EstablishTemporaryConnectionArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishTemporaryConnectionArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EstablishTemporaryConnectionArg (el: _Element): EstablishTemporaryConnectionArg {
    if (!_cached_decoder_for_EstablishTemporaryConnectionArg) { _cached_decoder_for_EstablishTemporaryConnectionArg = function (el: _Element): EstablishTemporaryConnectionArg {
    let assistingSSPIPRoutingAddress!: AssistingSSPIPRoutingAddress;
    let correlationID: OPTIONAL<CorrelationID>;
    let scfID: OPTIONAL<ScfID>;
    let extensions: OPTIONAL<Extensions>;
    let carrier: OPTIONAL<Carrier>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    let naOliInfo: OPTIONAL<NAOliInfo>;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "assistingSSPIPRoutingAddress": (_el: _Element): void => { assistingSSPIPRoutingAddress = $._decode_implicit<AssistingSSPIPRoutingAddress>(() => _decode_AssistingSSPIPRoutingAddress)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "naOliInfo": (_el: _Element): void => { naOliInfo = $._decode_implicit<NAOliInfo>(() => _decode_NAOliInfo)(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = $._decode_implicit<ChargeNumber>(() => _decode_ChargeNumber)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EstablishTemporaryConnectionArg,
        _extension_additions_list_spec_for_EstablishTemporaryConnectionArg,
        _root_component_type_list_2_spec_for_EstablishTemporaryConnectionArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EstablishTemporaryConnectionArg(
        assistingSSPIPRoutingAddress,
        correlationID,
        scfID,
        extensions,
        carrier,
        serviceInteractionIndicatorsTwo,
        callSegmentID,
        naOliInfo,
        chargeNumber,
        originalCalledPartyID,
        callingPartyNumber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EstablishTemporaryConnectionArg(el);
}

let _cached_encoder_for_EstablishTemporaryConnectionArg: $.ASN1Encoder<EstablishTemporaryConnectionArg> | null = null;

/**
 * @summary Encodes a(n) EstablishTemporaryConnectionArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishTemporaryConnectionArg, encoded as an ASN.1 Element.
 */
export
function _encode_EstablishTemporaryConnectionArg (value: EstablishTemporaryConnectionArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EstablishTemporaryConnectionArg) { _cached_encoder_for_EstablishTemporaryConnectionArg = function (value: EstablishTemporaryConnectionArg, elGetter: $.ASN1Encoder<EstablishTemporaryConnectionArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AssistingSSPIPRoutingAddress, $.BER)(value.assistingSSPIPRoutingAddress, $.BER),
            /* IF_ABSENT  */ ((value.correlationID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER)),
            /* IF_ABSENT  */ ((value.scfID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ScfID, $.BER)(value.scfID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Carrier, $.BER)(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.serviceInteractionIndicatorsTwo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER)),
            /* IF_ABSENT  */ ((value.callSegmentID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER)),
            /* IF_ABSENT  */ ((value.naOliInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => _encode_NAOliInfo, $.BER)(value.naOliInfo, $.BER)),
            /* IF_ABSENT  */ ((value.chargeNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 51, () => _encode_ChargeNumber, $.BER)(value.chargeNumber, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.originalCalledPartyID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 52, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 53, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EstablishTemporaryConnectionArg(value, elGetter);
}


/* eslint-enable */
