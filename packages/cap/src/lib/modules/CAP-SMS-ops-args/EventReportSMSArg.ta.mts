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
import { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS2-datatypes/MiscCallInfo.ta.mjs";
// export { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS2-datatypes/MiscCallInfo.ta.mjs";


/**
 * @summary EventReportSMSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventReportSMSArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     eventTypeSMS            [0] EventTypeSMS,
 *     eventSpecificInformationSMS        [1] EventSpecificInformationSMS        OPTIONAL,
 *     miscCallInfo            [2] MiscCallInfo DEFAULT {messageType request},
 *     extensions                [10] Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class EventReportSMSArg {
    constructor (
        /**
         * @summary `eventTypeSMS`.
         * @public
         * @readonly
         */
        readonly eventTypeSMS: EventTypeSMS,
        /**
         * @summary `eventSpecificInformationSMS`.
         * @public
         * @readonly
         */
        readonly eventSpecificInformationSMS: OPTIONAL<EventSpecificInformationSMS>,
        /**
         * @summary `miscCallInfo`.
         * @public
         * @readonly
         */
        readonly miscCallInfo: OPTIONAL<MiscCallInfo>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventReportSMSArg
     * @description
     * 
     * This takes an `object` and converts it to a `EventReportSMSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventReportSMSArg`.
     * @returns {EventReportSMSArg}
     */
    public static _from_object (_o: { [_K in keyof (EventReportSMSArg)]: (EventReportSMSArg)[_K] }): EventReportSMSArg {
        return new EventReportSMSArg(_o.eventTypeSMS, _o.eventSpecificInformationSMS, _o.miscCallInfo, _o.extensions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `miscCallInfo`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_miscCallInfo () { return MiscCallInfo._from_object({ messageType: MiscCallInfo._enum_for_messageType.request }); }
}

/**
 * @summary The Leading Root Component Types of EventReportSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventReportSMSArg: $.ComponentSpec[] = [
    /* FIXME: eventTypeSMS COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: eventSpecificInformationSMS COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("miscCallInfo", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    /* FIXME: extensions COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of EventReportSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventReportSMSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventReportSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventReportSMSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventReportSMSArg: $.ASN1Decoder<EventReportSMSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventReportSMSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventReportSMSArg (el: _Element): EventReportSMSArg {
    if (!_cached_decoder_for_EventReportSMSArg) { _cached_decoder_for_EventReportSMSArg = function (el: _Element): EventReportSMSArg {
    let eventTypeSMS!: EventTypeSMS;
    let eventSpecificInformationSMS: OPTIONAL<EventSpecificInformationSMS>;
    let miscCallInfo: OPTIONAL<MiscCallInfo> = EventReportSMSArg._default_value_for_miscCallInfo;
    let extensions: OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eventTypeSMS": (_el: _Element): void => { eventTypeSMS = $._decode_implicit<EventTypeSMS>(() => _decode_EventTypeSMS)(_el); },
        "eventSpecificInformationSMS": (_el: _Element): void => { eventSpecificInformationSMS = $._decode_implicit<EventSpecificInformationSMS>(() => _decode_EventSpecificInformationSMS)(_el); },
        "miscCallInfo": (_el: _Element): void => { miscCallInfo = $._decode_implicit<MiscCallInfo>(() => _decode_MiscCallInfo)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventReportSMSArg,
        _extension_additions_list_spec_for_EventReportSMSArg,
        _root_component_type_list_2_spec_for_EventReportSMSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventReportSMSArg(
        eventTypeSMS,
        eventSpecificInformationSMS,
        miscCallInfo,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventReportSMSArg(el);
}

let _cached_encoder_for_EventReportSMSArg: $.ASN1Encoder<EventReportSMSArg> | null = null;

/**
 * @summary Encodes a(n) EventReportSMSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventReportSMSArg, encoded as an ASN.1 Element.
 */
export
function _encode_EventReportSMSArg (value: EventReportSMSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventReportSMSArg) { _cached_encoder_for_EventReportSMSArg = function (value: EventReportSMSArg, elGetter: $.ASN1Encoder<EventReportSMSArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeSMS, $.BER)(value.eventTypeSMS, $.BER),
            /* IF_ABSENT  */ ((value.eventSpecificInformationSMS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EventSpecificInformationSMS, $.BER)(value.eventSpecificInformationSMS, $.BER)),
            /* IF_DEFAULT */ (value.miscCallInfo === undefined || $.deepEq(value.miscCallInfo, EventReportSMSArg._default_value_for_miscCallInfo) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MiscCallInfo, $.BER)(value.miscCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventReportSMSArg(value, elGetter);
}


/* eslint-enable */
