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
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
// export { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary DigitsGeneratedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigitsGeneratedEvent ::= SEQUENCE
 * {    connection            ConnectionID,
 *     digitGeneratedList        IA5String,
 *     digitDurationList        [0] IMPLICIT SEQUENCE OF INTEGER    OPTIONAL,
 *     pauseDurationList        [1] IMPLICIT SEQUENCE OF INTEGER    OPTIONAL,
 *     connectionInfo            ConnectionInformation            OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DigitsGeneratedEvent {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `digitGeneratedList`.
         * @public
         * @readonly
         */
        readonly digitGeneratedList: IA5String,
        /**
         * @summary `digitDurationList`.
         * @public
         * @readonly
         */
        readonly digitDurationList: OPTIONAL<INTEGER[]>,
        /**
         * @summary `pauseDurationList`.
         * @public
         * @readonly
         */
        readonly pauseDurationList: OPTIONAL<INTEGER[]>,
        /**
         * @summary `connectionInfo`.
         * @public
         * @readonly
         */
        readonly connectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a DigitsGeneratedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `DigitsGeneratedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DigitsGeneratedEvent`.
     * @returns {DigitsGeneratedEvent}
     */
    public static _from_object (_o: { [_K in keyof (DigitsGeneratedEvent)]: (DigitsGeneratedEvent)[_K] }): DigitsGeneratedEvent {
        return new DigitsGeneratedEvent(_o.connection, _o.digitGeneratedList, _o.digitDurationList, _o.pauseDurationList, _o.connectionInfo, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of DigitsGeneratedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DigitsGeneratedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("digitGeneratedList", false, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("digitDurationList", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("pauseDurationList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("connectionInfo", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DigitsGeneratedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DigitsGeneratedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DigitsGeneratedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DigitsGeneratedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DigitsGeneratedEvent: $.ASN1Decoder<DigitsGeneratedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigitsGeneratedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigitsGeneratedEvent (el: _Element): DigitsGeneratedEvent {
    if (!_cached_decoder_for_DigitsGeneratedEvent) { _cached_decoder_for_DigitsGeneratedEvent = function (el: _Element): DigitsGeneratedEvent {
    let connection!: ConnectionID;
    let digitGeneratedList!: IA5String;
    let digitDurationList: OPTIONAL<INTEGER[]>;
    let pauseDurationList: OPTIONAL<INTEGER[]>;
    let connectionInfo: OPTIONAL<ConnectionInformation>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "digitGeneratedList": (_el: _Element): void => { digitGeneratedList = $._decodeIA5String(_el); },
        "digitDurationList": (_el: _Element): void => { digitDurationList = $._decode_implicit<INTEGER[]>(() => $._decodeSequenceOf<INTEGER>(() => $._decodeInteger))(_el); },
        "pauseDurationList": (_el: _Element): void => { pauseDurationList = $._decode_implicit<INTEGER[]>(() => $._decodeSequenceOf<INTEGER>(() => $._decodeInteger))(_el); },
        "connectionInfo": (_el: _Element): void => { connectionInfo = _decode_ConnectionInformation(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DigitsGeneratedEvent,
        _extension_additions_list_spec_for_DigitsGeneratedEvent,
        _root_component_type_list_2_spec_for_DigitsGeneratedEvent,
        undefined,
    );
    return new DigitsGeneratedEvent(
        connection,
        digitGeneratedList,
        digitDurationList,
        pauseDurationList,
        connectionInfo,
        extensions
    );
}; }
    return _cached_decoder_for_DigitsGeneratedEvent(el);
}

let _cached_encoder_for_DigitsGeneratedEvent: $.ASN1Encoder<DigitsGeneratedEvent> | null = null;

/**
 * @summary Encodes a(n) DigitsGeneratedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigitsGeneratedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_DigitsGeneratedEvent (value: DigitsGeneratedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigitsGeneratedEvent) { _cached_encoder_for_DigitsGeneratedEvent = function (value: DigitsGeneratedEvent, elGetter: $.ASN1Encoder<DigitsGeneratedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.digitGeneratedList, $.BER),
            /* IF_ABSENT  */ ((value.digitDurationList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER), $.BER)(value.digitDurationList, $.BER)),
            /* IF_ABSENT  */ ((value.pauseDurationList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER), $.BER)(value.pauseDurationList, $.BER)),
            /* IF_ABSENT  */ ((value.connectionInfo === undefined) ? undefined : _encode_ConnectionInformation(value.connectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DigitsGeneratedEvent(value, elGetter);
}


/* eslint-enable */
