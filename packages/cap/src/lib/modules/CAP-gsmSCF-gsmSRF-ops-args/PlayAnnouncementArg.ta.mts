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
 * @summary PlayAnnouncementArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlayAnnouncementArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     informationToSend            [0] InformationToSend {bound},
 *     disconnectFromIPForbidden        [1] BOOLEAN DEFAULT TRUE,
 *     requestAnnouncementCompleteNotification    [2] BOOLEAN DEFAULT TRUE,
 *     extensions                [3] Extensions {bound}            OPTIONAL,
 *     callSegmentID            [5] CallSegmentID {bound}            OPTIONAL,
 *     requestAnnouncementStartedNotification    [51] BOOLEAN DEFAULT FALSE,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class PlayAnnouncementArg {
    constructor (
        /**
         * @summary `informationToSend`.
         * @public
         * @readonly
         */
        readonly informationToSend: InformationToSend,
        /**
         * @summary `disconnectFromIPForbidden`.
         * @public
         * @readonly
         */
        readonly disconnectFromIPForbidden: OPTIONAL<BOOLEAN>,
        /**
         * @summary `requestAnnouncementCompleteNotification`.
         * @public
         * @readonly
         */
        readonly requestAnnouncementCompleteNotification: OPTIONAL<BOOLEAN>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `callSegmentID`.
         * @public
         * @readonly
         */
        readonly callSegmentID: OPTIONAL<CallSegmentID>,
        /**
         * @summary `requestAnnouncementStartedNotification`.
         * @public
         * @readonly
         */
        readonly requestAnnouncementStartedNotification: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PlayAnnouncementArg
     * @description
     * 
     * This takes an `object` and converts it to a `PlayAnnouncementArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PlayAnnouncementArg`.
     * @returns {PlayAnnouncementArg}
     */
    public static _from_object (_o: { [_K in keyof (PlayAnnouncementArg)]: (PlayAnnouncementArg)[_K] }): PlayAnnouncementArg {
        return new PlayAnnouncementArg(_o.informationToSend, _o.disconnectFromIPForbidden, _o.requestAnnouncementCompleteNotification, _o.extensions, _o.callSegmentID, _o.requestAnnouncementStartedNotification, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `disconnectFromIPForbidden`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_disconnectFromIPForbidden () { return true; }
    /**
     * @summary Getter that returns the default value for `requestAnnouncementCompleteNotification`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_requestAnnouncementCompleteNotification () { return true; }
    /**
     * @summary Getter that returns the default value for `requestAnnouncementStartedNotification`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_requestAnnouncementStartedNotification () { return false; }
}

/**
 * @summary The Leading Root Component Types of PlayAnnouncementArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PlayAnnouncementArg: $.ComponentSpec[] = [
    /* FIXME: informationToSend COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("disconnectFromIPForbidden", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("requestAnnouncementCompleteNotification", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    /* FIXME: extensions COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: callSegmentID COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("requestAnnouncementStartedNotification", true, $.hasTag(_TagClass.context, 51), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PlayAnnouncementArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PlayAnnouncementArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PlayAnnouncementArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PlayAnnouncementArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PlayAnnouncementArg: $.ASN1Decoder<PlayAnnouncementArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PlayAnnouncementArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PlayAnnouncementArg (el: _Element): PlayAnnouncementArg {
    if (!_cached_decoder_for_PlayAnnouncementArg) { _cached_decoder_for_PlayAnnouncementArg = function (el: _Element): PlayAnnouncementArg {
    let informationToSend!: InformationToSend;
    let disconnectFromIPForbidden: OPTIONAL<BOOLEAN> = PlayAnnouncementArg._default_value_for_disconnectFromIPForbidden;
    let requestAnnouncementCompleteNotification: OPTIONAL<BOOLEAN> = PlayAnnouncementArg._default_value_for_requestAnnouncementCompleteNotification;
    let extensions: OPTIONAL<Extensions>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    let requestAnnouncementStartedNotification: OPTIONAL<BOOLEAN> = PlayAnnouncementArg._default_value_for_requestAnnouncementStartedNotification;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "informationToSend": (_el: _Element): void => { informationToSend = $._decode_implicit<InformationToSend>(() => _decode_InformationToSend)(_el); },
        "disconnectFromIPForbidden": (_el: _Element): void => { disconnectFromIPForbidden = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "requestAnnouncementCompleteNotification": (_el: _Element): void => { requestAnnouncementCompleteNotification = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "requestAnnouncementStartedNotification": (_el: _Element): void => { requestAnnouncementStartedNotification = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PlayAnnouncementArg,
        _extension_additions_list_spec_for_PlayAnnouncementArg,
        _root_component_type_list_2_spec_for_PlayAnnouncementArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PlayAnnouncementArg(
        informationToSend,
        disconnectFromIPForbidden,
        requestAnnouncementCompleteNotification,
        extensions,
        callSegmentID,
        requestAnnouncementStartedNotification,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PlayAnnouncementArg(el);
}

let _cached_encoder_for_PlayAnnouncementArg: $.ASN1Encoder<PlayAnnouncementArg> | null = null;

/**
 * @summary Encodes a(n) PlayAnnouncementArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PlayAnnouncementArg, encoded as an ASN.1 Element.
 */
export
function _encode_PlayAnnouncementArg (value: PlayAnnouncementArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PlayAnnouncementArg) { _cached_encoder_for_PlayAnnouncementArg = function (value: PlayAnnouncementArg, elGetter: $.ASN1Encoder<PlayAnnouncementArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_InformationToSend, $.BER)(value.informationToSend, $.BER),
            /* IF_DEFAULT */ (value.disconnectFromIPForbidden === undefined || $.deepEq(value.disconnectFromIPForbidden, PlayAnnouncementArg._default_value_for_disconnectFromIPForbidden) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.disconnectFromIPForbidden, $.BER)),
            /* IF_DEFAULT */ (value.requestAnnouncementCompleteNotification === undefined || $.deepEq(value.requestAnnouncementCompleteNotification, PlayAnnouncementArg._default_value_for_requestAnnouncementCompleteNotification) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.requestAnnouncementCompleteNotification, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.callSegmentID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER)),
            /* IF_DEFAULT */ (value.requestAnnouncementStartedNotification === undefined || $.deepEq(value.requestAnnouncementStartedNotification, PlayAnnouncementArg._default_value_for_requestAnnouncementStartedNotification) ? undefined : $._encode_implicit(_TagClass.context, 51, () => $._encodeBoolean, $.BER)(value.requestAnnouncementStartedNotification, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PlayAnnouncementArg(value, elGetter);
}


/* eslint-enable */
