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
import { SignalName, _decode_SignalName, _encode_SignalName } from "../MEDIA-GATEWAY-CONTROL/SignalName.ta.mjs";
// export { SignalName, _decode_SignalName, _encode_SignalName } from "../MEDIA-GATEWAY-CONTROL/SignalName.ta.mjs";
import { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
// export { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
import { SignalType, _enum_for_SignalType, SignalType_brief /* IMPORTED_LONG_ENUMERATION_ITEM */, brief /* IMPORTED_SHORT_ENUMERATION_ITEM */, SignalType_onOff /* IMPORTED_LONG_ENUMERATION_ITEM */, onOff /* IMPORTED_SHORT_ENUMERATION_ITEM */, SignalType_timeOut /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOut /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SignalType, _encode_SignalType } from "../MEDIA-GATEWAY-CONTROL/SignalType.ta.mjs";
// export { SignalType, _enum_for_SignalType, SignalType_brief /* IMPORTED_LONG_ENUMERATION_ITEM */, brief /* IMPORTED_SHORT_ENUMERATION_ITEM */, SignalType_onOff /* IMPORTED_LONG_ENUMERATION_ITEM */, onOff /* IMPORTED_SHORT_ENUMERATION_ITEM */, SignalType_timeOut /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOut /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SignalType, _encode_SignalType } from "../MEDIA-GATEWAY-CONTROL/SignalType.ta.mjs";
import { NotifyCompletion, NotifyCompletion_onTimeOut /* IMPORTED_LONG_NAMED_BIT */, onTimeOut /* IMPORTED_SHORT_NAMED_BIT */, NotifyCompletion_onInterruptByEvent /* IMPORTED_LONG_NAMED_BIT */, onInterruptByEvent /* IMPORTED_SHORT_NAMED_BIT */, NotifyCompletion_onInterruptByNewSignalDescr /* IMPORTED_LONG_NAMED_BIT */, onInterruptByNewSignalDescr /* IMPORTED_SHORT_NAMED_BIT */, NotifyCompletion_otherReason /* IMPORTED_LONG_NAMED_BIT */, otherReason /* IMPORTED_SHORT_NAMED_BIT */, NotifyCompletion_onIteration /* IMPORTED_LONG_NAMED_BIT */, onIteration /* IMPORTED_SHORT_NAMED_BIT */, _decode_NotifyCompletion, _encode_NotifyCompletion } from "../MEDIA-GATEWAY-CONTROL/NotifyCompletion.ta.mjs";
// export { NotifyCompletion, NotifyCompletion_onTimeOut /* IMPORTED_LONG_NAMED_BIT */, onTimeOut /* IMPORTED_SHORT_NAMED_BIT */, NotifyCompletion_onInterruptByEvent /* IMPORTED_LONG_NAMED_BIT */, onInterruptByEvent /* IMPORTED_SHORT_NAMED_BIT */, NotifyCompletion_onInterruptByNewSignalDescr /* IMPORTED_LONG_NAMED_BIT */, onInterruptByNewSignalDescr /* IMPORTED_SHORT_NAMED_BIT */, NotifyCompletion_otherReason /* IMPORTED_LONG_NAMED_BIT */, otherReason /* IMPORTED_SHORT_NAMED_BIT */, NotifyCompletion_onIteration /* IMPORTED_LONG_NAMED_BIT */, onIteration /* IMPORTED_SHORT_NAMED_BIT */, _decode_NotifyCompletion, _encode_NotifyCompletion } from "../MEDIA-GATEWAY-CONTROL/NotifyCompletion.ta.mjs";
import { SigParameter, _decode_SigParameter, _encode_SigParameter } from "../MEDIA-GATEWAY-CONTROL/SigParameter.ta.mjs";
// export { SigParameter, _decode_SigParameter, _encode_SigParameter } from "../MEDIA-GATEWAY-CONTROL/SigParameter.ta.mjs";
import { SignalDirection, _enum_for_SignalDirection, SignalDirection_internal /* IMPORTED_LONG_ENUMERATION_ITEM */, internal /* IMPORTED_SHORT_ENUMERATION_ITEM */, SignalDirection_external /* IMPORTED_LONG_ENUMERATION_ITEM */, external /* IMPORTED_SHORT_ENUMERATION_ITEM */, SignalDirection_both /* IMPORTED_LONG_ENUMERATION_ITEM */, both /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SignalDirection, _encode_SignalDirection } from "../MEDIA-GATEWAY-CONTROL/SignalDirection.ta.mjs";
// export { SignalDirection, _enum_for_SignalDirection, SignalDirection_internal /* IMPORTED_LONG_ENUMERATION_ITEM */, internal /* IMPORTED_SHORT_ENUMERATION_ITEM */, SignalDirection_external /* IMPORTED_LONG_ENUMERATION_ITEM */, external /* IMPORTED_SHORT_ENUMERATION_ITEM */, SignalDirection_both /* IMPORTED_LONG_ENUMERATION_ITEM */, both /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SignalDirection, _encode_SignalDirection } from "../MEDIA-GATEWAY-CONTROL/SignalDirection.ta.mjs";
import { RequestID, _decode_RequestID, _encode_RequestID } from "../MEDIA-GATEWAY-CONTROL/RequestID.ta.mjs";
// export { RequestID, _decode_RequestID, _encode_RequestID } from "../MEDIA-GATEWAY-CONTROL/RequestID.ta.mjs";


/**
 * @summary Signal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Signal ::= SEQUENCE
 *     {
 *         signalName                [0] SignalName,
 *         streamID                [1] StreamID OPTIONAL,
 *         sigType                    [2] SignalType OPTIONAL,
 *         duration                [3] INTEGER (0..65535) OPTIONAL,
 *         notifyCompletion        [4] NotifyCompletion OPTIONAL,
 *         keepActive                [5] BOOLEAN OPTIONAL,
 *         sigParList                [6] SEQUENCE OF SigParameter,
 *         ...,
 *         direction                [7] SignalDirection OPTIONAL,
 *         requestID                [8] RequestID OPTIONAL,
 *         intersigDelay            [9] INTEGER (0..65535) OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class Signal {
    constructor (
        /**
         * @summary `signalName`.
         * @public
         * @readonly
         */
        readonly signalName: SignalName,
        /**
         * @summary `streamID`.
         * @public
         * @readonly
         */
        readonly streamID: OPTIONAL<StreamID>,
        /**
         * @summary `sigType`.
         * @public
         * @readonly
         */
        readonly sigType: OPTIONAL<SignalType>,
        /**
         * @summary `duration`.
         * @public
         * @readonly
         */
        readonly duration: OPTIONAL<INTEGER>,
        /**
         * @summary `notifyCompletion`.
         * @public
         * @readonly
         */
        readonly notifyCompletion: OPTIONAL<NotifyCompletion>,
        /**
         * @summary `keepActive`.
         * @public
         * @readonly
         */
        readonly keepActive: OPTIONAL<BOOLEAN>,
        /**
         * @summary `sigParList`.
         * @public
         * @readonly
         */
        readonly sigParList: SigParameter[],
        /**
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: OPTIONAL<SignalDirection>,
        /**
         * @summary `requestID`.
         * @public
         * @readonly
         */
        readonly requestID: OPTIONAL<RequestID>,
        /**
         * @summary `intersigDelay`.
         * @public
         * @readonly
         */
        readonly intersigDelay: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Signal
     * @description
     * 
     * This takes an `object` and converts it to a `Signal`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Signal`.
     * @returns {Signal}
     */
    public static _from_object (_o: { [_K in keyof (Signal)]: (Signal)[_K] }): Signal {
        return new Signal(_o.signalName, _o.streamID, _o.sigType, _o.duration, _o.notifyCompletion, _o.keepActive, _o.sigParList, _o.direction, _o.requestID, _o.intersigDelay, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sigType`
         * @public
         * @static
         */

    public static _enum_for_sigType = _enum_for_SignalType;        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_SignalDirection;
}

/**
 * @summary The Leading Root Component Types of Signal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Signal: $.ComponentSpec[] = [
    new $.ComponentSpec("signalName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("streamID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sigType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("notifyCompletion", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("keepActive", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sigParList", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of Signal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Signal: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Signal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Signal: $.ComponentSpec[] = [
    new $.ComponentSpec("direction", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("requestID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("intersigDelay", true, $.hasTag(_TagClass.context, 9))
];

let _cached_decoder_for_Signal: $.ASN1Decoder<Signal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Signal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Signal (el: _Element): Signal {
    if (!_cached_decoder_for_Signal) { _cached_decoder_for_Signal = function (el: _Element): Signal {
    let signalName!: SignalName;
    let streamID: OPTIONAL<StreamID>;
    let sigType: OPTIONAL<SignalType>;
    let duration: OPTIONAL<INTEGER>;
    let notifyCompletion: OPTIONAL<NotifyCompletion>;
    let keepActive: OPTIONAL<BOOLEAN>;
    let sigParList!: SigParameter[];
    let direction: OPTIONAL<SignalDirection>;
    let requestID: OPTIONAL<RequestID>;
    let intersigDelay: OPTIONAL<INTEGER>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "signalName": (_el: _Element): void => { signalName = $._decode_implicit<SignalName>(() => _decode_SignalName)(_el); },
        "streamID": (_el: _Element): void => { streamID = $._decode_implicit<StreamID>(() => _decode_StreamID)(_el); },
        "sigType": (_el: _Element): void => { sigType = $._decode_implicit<SignalType>(() => _decode_SignalType)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "notifyCompletion": (_el: _Element): void => { notifyCompletion = $._decode_implicit<NotifyCompletion>(() => _decode_NotifyCompletion)(_el); },
        "keepActive": (_el: _Element): void => { keepActive = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "sigParList": (_el: _Element): void => { sigParList = $._decode_implicit<SigParameter[]>(() => $._decodeSequenceOf<SigParameter>(() => _decode_SigParameter))(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<SignalDirection>(() => _decode_SignalDirection)(_el); },
        "requestID": (_el: _Element): void => { requestID = $._decode_implicit<RequestID>(() => _decode_RequestID)(_el); },
        "intersigDelay": (_el: _Element): void => { intersigDelay = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Signal,
        _extension_additions_list_spec_for_Signal,
        _root_component_type_list_2_spec_for_Signal,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Signal(
        signalName,
        streamID,
        sigType,
        duration,
        notifyCompletion,
        keepActive,
        sigParList,
        direction,
        requestID,
        intersigDelay,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Signal(el);
}

let _cached_encoder_for_Signal: $.ASN1Encoder<Signal> | null = null;

/**
 * @summary Encodes a(n) Signal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signal, encoded as an ASN.1 Element.
 */
export
function _encode_Signal (value: Signal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Signal) { _cached_encoder_for_Signal = function (value: Signal, elGetter: $.ASN1Encoder<Signal>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SignalName, $.BER)(value.signalName, $.BER),
            /* IF_ABSENT  */ ((value.streamID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_StreamID, $.BER)(value.streamID, $.BER)),
            /* IF_ABSENT  */ ((value.sigType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SignalType, $.BER)(value.sigType, $.BER)),
            /* IF_ABSENT  */ ((value.duration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.duration, $.BER)),
            /* IF_ABSENT  */ ((value.notifyCompletion === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_NotifyCompletion, $.BER)(value.notifyCompletion, $.BER)),
            /* IF_ABSENT  */ ((value.keepActive === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.keepActive, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<SigParameter>(() => _encode_SigParameter, $.BER), $.BER)(value.sigParList, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.direction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SignalDirection, $.BER)(value.direction, $.BER)),
            /* IF_ABSENT  */ ((value.requestID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_RequestID, $.BER)(value.requestID, $.BER)),
            /* IF_ABSENT  */ ((value.intersigDelay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.intersigDelay, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Signal(value, elGetter);
}


/* eslint-enable */
