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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS2-datatypes/MiscCallInfo.ta.mjs";
// export { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS2-datatypes/MiscCallInfo.ta.mjs";


/**
 * @summary EventReportBCSMArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventReportBCSMArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     eventTypeBCSM            [0] EventTypeBCSM,
 *     eventSpecificInformationBCSM    [2] EventSpecificInformationBCSM {bound}    OPTIONAL,
 *     legID                [3] ReceivingSideID                OPTIONAL,
 *     miscCallInfo            [4] MiscCallInfo DEFAULT {messageType request},
 *     extensions                [5] Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class EventReportBCSMArg {
    constructor (
        /**
         * @summary `eventTypeBCSM`.
         * @public
         * @readonly
         */
        readonly eventTypeBCSM: EventTypeBCSM,
        /**
         * @summary `eventSpecificInformationBCSM`.
         * @public
         * @readonly
         */
        readonly eventSpecificInformationBCSM: OPTIONAL<EventSpecificInformationBCSM>,
        /**
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: OPTIONAL<ReceivingSideID>,
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
     * @summary Restructures an object into a EventReportBCSMArg
     * @description
     * 
     * This takes an `object` and converts it to a `EventReportBCSMArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventReportBCSMArg`.
     * @returns {EventReportBCSMArg}
     */
    public static _from_object (_o: { [_K in keyof (EventReportBCSMArg)]: (EventReportBCSMArg)[_K] }): EventReportBCSMArg {
        return new EventReportBCSMArg(_o.eventTypeBCSM, _o.eventSpecificInformationBCSM, _o.legID, _o.miscCallInfo, _o.extensions, _o._unrecognizedExtensionsList);
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
 * @summary The Leading Root Component Types of EventReportBCSMArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventReportBCSMArg: $.ComponentSpec[] = [
    /* FIXME: eventTypeBCSM COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: eventSpecificInformationBCSM COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: legID COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("miscCallInfo", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    /* FIXME: extensions COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of EventReportBCSMArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventReportBCSMArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventReportBCSMArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventReportBCSMArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventReportBCSMArg: $.ASN1Decoder<EventReportBCSMArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventReportBCSMArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventReportBCSMArg (el: _Element): EventReportBCSMArg {
    if (!_cached_decoder_for_EventReportBCSMArg) { _cached_decoder_for_EventReportBCSMArg = function (el: _Element): EventReportBCSMArg {
    let eventTypeBCSM!: EventTypeBCSM;
    let eventSpecificInformationBCSM: OPTIONAL<EventSpecificInformationBCSM>;
    let legID: OPTIONAL<ReceivingSideID>;
    let miscCallInfo: OPTIONAL<MiscCallInfo> = EventReportBCSMArg._default_value_for_miscCallInfo;
    let extensions: OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eventTypeBCSM": (_el: _Element): void => { eventTypeBCSM = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "eventSpecificInformationBCSM": (_el: _Element): void => { eventSpecificInformationBCSM = $._decode_implicit<EventSpecificInformationBCSM>(() => _decode_EventSpecificInformationBCSM)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_implicit<ReceivingSideID>(() => _decode_ReceivingSideID)(_el); },
        "miscCallInfo": (_el: _Element): void => { miscCallInfo = $._decode_implicit<MiscCallInfo>(() => _decode_MiscCallInfo)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventReportBCSMArg,
        _extension_additions_list_spec_for_EventReportBCSMArg,
        _root_component_type_list_2_spec_for_EventReportBCSMArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventReportBCSMArg(
        eventTypeBCSM,
        eventSpecificInformationBCSM,
        legID,
        miscCallInfo,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventReportBCSMArg(el);
}

let _cached_encoder_for_EventReportBCSMArg: $.ASN1Encoder<EventReportBCSMArg> | null = null;

/**
 * @summary Encodes a(n) EventReportBCSMArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventReportBCSMArg, encoded as an ASN.1 Element.
 */
export
function _encode_EventReportBCSMArg (value: EventReportBCSMArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventReportBCSMArg) { _cached_encoder_for_EventReportBCSMArg = function (value: EventReportBCSMArg, elGetter: $.ASN1Encoder<EventReportBCSMArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeBCSM, $.BER)(value.eventTypeBCSM, $.BER),
            /* IF_ABSENT  */ ((value.eventSpecificInformationBCSM === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EventSpecificInformationBCSM, $.BER)(value.eventSpecificInformationBCSM, $.BER)),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ReceivingSideID, $.BER)(value.legID, $.BER)),
            /* IF_DEFAULT */ (value.miscCallInfo === undefined || $.deepEq(value.miscCallInfo, EventReportBCSMArg._default_value_for_miscCallInfo) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_MiscCallInfo, $.BER)(value.miscCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventReportBCSMArg(value, elGetter);
}


/* eslint-enable */
