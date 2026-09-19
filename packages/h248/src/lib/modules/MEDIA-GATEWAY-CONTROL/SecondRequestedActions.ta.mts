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
import { EventDM, _decode_EventDM, _encode_EventDM } from "../MEDIA-GATEWAY-CONTROL/EventDM.ta.mjs";
// export { EventDM, _decode_EventDM, _encode_EventDM } from "../MEDIA-GATEWAY-CONTROL/EventDM.ta.mjs";
import { SignalsDescriptor, _decode_SignalsDescriptor, _encode_SignalsDescriptor } from "../MEDIA-GATEWAY-CONTROL/SignalsDescriptor.ta.mjs";
// export { SignalsDescriptor, _decode_SignalsDescriptor, _encode_SignalsDescriptor } from "../MEDIA-GATEWAY-CONTROL/SignalsDescriptor.ta.mjs";
import { NotifyBehaviour, _decode_NotifyBehaviour, _encode_NotifyBehaviour } from "../MEDIA-GATEWAY-CONTROL/NotifyBehaviour.ta.mjs";
// export { NotifyBehaviour, _decode_NotifyBehaviour, _encode_NotifyBehaviour } from "../MEDIA-GATEWAY-CONTROL/NotifyBehaviour.ta.mjs";


/**
 * @summary SecondRequestedActions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecondRequestedActions ::= SEQUENCE
 *     {
 *         keepActive                [0] BOOLEAN OPTIONAL,
 *         eventDM                    [1] EventDM OPTIONAL,
 *         signalsDescriptor        [2] SignalsDescriptor OPTIONAL,
 *         ...,
 *         notifyBehaviour            [3] NotifyBehaviour OPTIONAL,
 *         resetEventsDescriptor    [4] NULL OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class SecondRequestedActions {
    constructor (
        /**
         * @summary `keepActive`.
         * @public
         * @readonly
         */
        readonly keepActive: OPTIONAL<BOOLEAN>,
        /**
         * @summary `eventDM`.
         * @public
         * @readonly
         */
        readonly eventDM: OPTIONAL<EventDM>,
        /**
         * @summary `signalsDescriptor`.
         * @public
         * @readonly
         */
        readonly signalsDescriptor: OPTIONAL<SignalsDescriptor>,
        /**
         * @summary `notifyBehaviour`.
         * @public
         * @readonly
         */
        readonly notifyBehaviour: OPTIONAL<NotifyBehaviour>,
        /**
         * @summary `resetEventsDescriptor`.
         * @public
         * @readonly
         */
        readonly resetEventsDescriptor: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SecondRequestedActions
     * @description
     * 
     * This takes an `object` and converts it to a `SecondRequestedActions`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecondRequestedActions`.
     * @returns {SecondRequestedActions}
     */
    public static _from_object (_o: { [_K in keyof (SecondRequestedActions)]: (SecondRequestedActions)[_K] }): SecondRequestedActions {
        return new SecondRequestedActions(_o.keepActive, _o.eventDM, _o.signalsDescriptor, _o.notifyBehaviour, _o.resetEventsDescriptor, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SecondRequestedActions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecondRequestedActions: $.ComponentSpec[] = [
    new $.ComponentSpec("keepActive", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventDM", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("signalsDescriptor", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SecondRequestedActions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecondRequestedActions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecondRequestedActions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecondRequestedActions: $.ComponentSpec[] = [
    new $.ComponentSpec("notifyBehaviour", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("resetEventsDescriptor", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_SecondRequestedActions: $.ASN1Decoder<SecondRequestedActions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecondRequestedActions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecondRequestedActions (el: _Element): SecondRequestedActions {
    if (!_cached_decoder_for_SecondRequestedActions) { _cached_decoder_for_SecondRequestedActions = function (el: _Element): SecondRequestedActions {
    let keepActive: OPTIONAL<BOOLEAN>;
    let eventDM: OPTIONAL<EventDM>;
    let signalsDescriptor: OPTIONAL<SignalsDescriptor>;
    let notifyBehaviour: OPTIONAL<NotifyBehaviour>;
    let resetEventsDescriptor: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "keepActive": (_el: _Element): void => { keepActive = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "eventDM": (_el: _Element): void => { eventDM = $._decode_explicit<EventDM>(() => _decode_EventDM)(_el); },
        "signalsDescriptor": (_el: _Element): void => { signalsDescriptor = $._decode_implicit<SignalsDescriptor>(() => _decode_SignalsDescriptor)(_el); },
        "notifyBehaviour": (_el: _Element): void => { notifyBehaviour = $._decode_explicit<NotifyBehaviour>(() => _decode_NotifyBehaviour)(_el); },
        "resetEventsDescriptor": (_el: _Element): void => { resetEventsDescriptor = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SecondRequestedActions,
        _extension_additions_list_spec_for_SecondRequestedActions,
        _root_component_type_list_2_spec_for_SecondRequestedActions,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SecondRequestedActions(
        keepActive,
        eventDM,
        signalsDescriptor,
        notifyBehaviour,
        resetEventsDescriptor,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SecondRequestedActions(el);
}

let _cached_encoder_for_SecondRequestedActions: $.ASN1Encoder<SecondRequestedActions> | null = null;

/**
 * @summary Encodes a(n) SecondRequestedActions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecondRequestedActions, encoded as an ASN.1 Element.
 */
export
function _encode_SecondRequestedActions (value: SecondRequestedActions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecondRequestedActions) { _cached_encoder_for_SecondRequestedActions = function (value: SecondRequestedActions, elGetter: $.ASN1Encoder<SecondRequestedActions>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.keepActive === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.keepActive, $.BER)),
            /* IF_ABSENT  */ ((value.eventDM === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_EventDM, $.BER)(value.eventDM, $.BER)),
            /* IF_ABSENT  */ ((value.signalsDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SignalsDescriptor, $.BER)(value.signalsDescriptor, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.notifyBehaviour === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_NotifyBehaviour, $.BER)(value.notifyBehaviour, $.BER)),
            /* IF_ABSENT  */ ((value.resetEventsDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.resetEventsDescriptor, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SecondRequestedActions(value, elGetter);
}


/* eslint-enable */
