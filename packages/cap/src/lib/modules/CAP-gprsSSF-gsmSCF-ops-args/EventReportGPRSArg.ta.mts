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
import { type GPRSEventSpecificInformation, _decode_GPRSEventSpecificInformation, _encode_GPRSEventSpecificInformation } from "../CAP-datatypes/GPRSEventSpecificInformation.ta.mjs";
import { GPRSEventType, _decode_GPRSEventType, _encode_GPRSEventType } from "../CAP-datatypes/GPRSEventType.ta.mjs";
import { type PDPID, _decode_PDPID, _encode_PDPID } from "../CAP-datatypes/PDPID.ta.mjs";
import { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS2-datatypes/MiscCallInfo.ta.mjs";
// export { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS2-datatypes/MiscCallInfo.ta.mjs";


/**
 * @summary EventReportGPRSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventReportGPRSArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     gPRSEventType            [0] GPRSEventType,
 *     miscGPRSInfo            [1] MiscCallInfo DEFAULT {messageType request},
 *     gPRSEventSpecificInformation    [2]    GPRSEventSpecificInformation {bound}    OPTIONAL,
 *     pDPID                [3]    PDPID OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class EventReportGPRSArg {
    constructor (
        /**
         * @summary `gPRSEventType`.
         * @public
         * @readonly
         */
        readonly gPRSEventType: GPRSEventType,
        /**
         * @summary `miscGPRSInfo`.
         * @public
         * @readonly
         */
        readonly miscGPRSInfo: OPTIONAL<MiscCallInfo>,
        /**
         * @summary `gPRSEventSpecificInformation`.
         * @public
         * @readonly
         */
        readonly gPRSEventSpecificInformation: OPTIONAL<GPRSEventSpecificInformation>,
        /**
         * @summary `pDPID`.
         * @public
         * @readonly
         */
        readonly pDPID: OPTIONAL<PDPID>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventReportGPRSArg
     * @description
     * 
     * This takes an `object` and converts it to a `EventReportGPRSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventReportGPRSArg`.
     * @returns {EventReportGPRSArg}
     */
    public static _from_object (_o: { [_K in keyof (EventReportGPRSArg)]: (EventReportGPRSArg)[_K] }): EventReportGPRSArg {
        return new EventReportGPRSArg(_o.gPRSEventType, _o.miscGPRSInfo, _o.gPRSEventSpecificInformation, _o.pDPID, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `miscGPRSInfo`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_miscGPRSInfo () { return MiscCallInfo._from_object({ messageType: MiscCallInfo._enum_for_messageType.request }); }
}

/**
 * @summary The Leading Root Component Types of EventReportGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventReportGPRSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("gPRSEventType", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("miscGPRSInfo", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("gPRSEventSpecificInformation", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("pDPID", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EventReportGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventReportGPRSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventReportGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventReportGPRSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventReportGPRSArg: $.ASN1Decoder<EventReportGPRSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventReportGPRSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventReportGPRSArg (el: _Element): EventReportGPRSArg {
    if (!_cached_decoder_for_EventReportGPRSArg) { _cached_decoder_for_EventReportGPRSArg = function (el: _Element): EventReportGPRSArg {
    let gPRSEventType!: GPRSEventType;
    let miscGPRSInfo: OPTIONAL<MiscCallInfo> = EventReportGPRSArg._default_value_for_miscGPRSInfo;
    let gPRSEventSpecificInformation: OPTIONAL<GPRSEventSpecificInformation>;
    let pDPID: OPTIONAL<PDPID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gPRSEventType": (_el: _Element): void => { gPRSEventType = $._decode_implicit<GPRSEventType>(() => _decode_GPRSEventType)(_el); },
        "miscGPRSInfo": (_el: _Element): void => { miscGPRSInfo = $._decode_implicit<MiscCallInfo>(() => _decode_MiscCallInfo)(_el); },
        "gPRSEventSpecificInformation": (_el: _Element): void => { gPRSEventSpecificInformation = $._decode_implicit<GPRSEventSpecificInformation>(() => _decode_GPRSEventSpecificInformation)(_el); },
        "pDPID": (_el: _Element): void => { pDPID = $._decode_implicit<PDPID>(() => _decode_PDPID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventReportGPRSArg,
        _extension_additions_list_spec_for_EventReportGPRSArg,
        _root_component_type_list_2_spec_for_EventReportGPRSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventReportGPRSArg(
        gPRSEventType,
        miscGPRSInfo,
        gPRSEventSpecificInformation,
        pDPID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventReportGPRSArg(el);
}

let _cached_encoder_for_EventReportGPRSArg: $.ASN1Encoder<EventReportGPRSArg> | null = null;

/**
 * @summary Encodes a(n) EventReportGPRSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventReportGPRSArg, encoded as an ASN.1 Element.
 */
export
function _encode_EventReportGPRSArg (value: EventReportGPRSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventReportGPRSArg) { _cached_encoder_for_EventReportGPRSArg = function (value: EventReportGPRSArg, elGetter: $.ASN1Encoder<EventReportGPRSArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_GPRSEventType, $.BER)(value.gPRSEventType, $.BER),
            /* IF_DEFAULT */ (value.miscGPRSInfo === undefined || $.deepEq(value.miscGPRSInfo, EventReportGPRSArg._default_value_for_miscGPRSInfo) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MiscCallInfo, $.BER)(value.miscGPRSInfo, $.BER)),
            /* IF_ABSENT  */ ((value.gPRSEventSpecificInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GPRSEventSpecificInformation, $.BER)(value.gPRSEventSpecificInformation, $.BER)),
            /* IF_ABSENT  */ ((value.pDPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PDPID, $.BER)(value.pDPID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventReportGPRSArg(value, elGetter);
}


/* eslint-enable */
