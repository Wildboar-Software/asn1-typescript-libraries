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
import { AuditDescriptor_auditToken, AuditDescriptor_auditToken_muxToken /* IMPORTED_LONG_NAMED_BIT */, muxToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_modemToken /* IMPORTED_LONG_NAMED_BIT */, modemToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_mediaToken /* IMPORTED_LONG_NAMED_BIT */, mediaToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_eventsToken /* IMPORTED_LONG_NAMED_BIT */, eventsToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_signalsToken /* IMPORTED_LONG_NAMED_BIT */, signalsToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_digitMapToken /* IMPORTED_LONG_NAMED_BIT */, digitMapToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_statsToken /* IMPORTED_LONG_NAMED_BIT */, statsToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_observedEventsToken /* IMPORTED_LONG_NAMED_BIT */, observedEventsToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_packagesToken /* IMPORTED_LONG_NAMED_BIT */, packagesToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_eventBufferToken /* IMPORTED_LONG_NAMED_BIT */, eventBufferToken /* IMPORTED_SHORT_NAMED_BIT */, _decode_AuditDescriptor_auditToken, _encode_AuditDescriptor_auditToken } from "../MEDIA-GATEWAY-CONTROL/AuditDescriptor-auditToken.ta.mjs";
// export { AuditDescriptor_auditToken, AuditDescriptor_auditToken_muxToken /* IMPORTED_LONG_NAMED_BIT */, muxToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_modemToken /* IMPORTED_LONG_NAMED_BIT */, modemToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_mediaToken /* IMPORTED_LONG_NAMED_BIT */, mediaToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_eventsToken /* IMPORTED_LONG_NAMED_BIT */, eventsToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_signalsToken /* IMPORTED_LONG_NAMED_BIT */, signalsToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_digitMapToken /* IMPORTED_LONG_NAMED_BIT */, digitMapToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_statsToken /* IMPORTED_LONG_NAMED_BIT */, statsToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_observedEventsToken /* IMPORTED_LONG_NAMED_BIT */, observedEventsToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_packagesToken /* IMPORTED_LONG_NAMED_BIT */, packagesToken /* IMPORTED_SHORT_NAMED_BIT */, AuditDescriptor_auditToken_eventBufferToken /* IMPORTED_LONG_NAMED_BIT */, eventBufferToken /* IMPORTED_SHORT_NAMED_BIT */, _decode_AuditDescriptor_auditToken, _encode_AuditDescriptor_auditToken } from "../MEDIA-GATEWAY-CONTROL/AuditDescriptor-auditToken.ta.mjs";
import { IndAuditParameter, _decode_IndAuditParameter, _encode_IndAuditParameter } from "../MEDIA-GATEWAY-CONTROL/IndAuditParameter.ta.mjs";
// export { IndAuditParameter, _decode_IndAuditParameter, _encode_IndAuditParameter } from "../MEDIA-GATEWAY-CONTROL/IndAuditParameter.ta.mjs";


/**
 * @summary AuditDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditDescriptor ::= SEQUENCE
 *     {
 *         auditToken                    [0] BIT STRING
 *         {
 *             muxToken(0),
 *             modemToken(1),
 *             mediaToken(2),
 *             eventsToken(3),
 *             signalsToken(4),
 *             digitMapToken(5),
 *             statsToken(6),
 *             observedEventsToken(7),
 *             packagesToken(8),
 *             eventBufferToken(9)
 *         } OPTIONAL,
 *         ...,
 *         auditPropertyToken            [1] SEQUENCE OF IndAuditParameter OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class AuditDescriptor {
    constructor (
        /**
         * @summary `auditToken`.
         * @public
         * @readonly
         */
        readonly auditToken: OPTIONAL<AuditDescriptor_auditToken>,
        /**
         * @summary `auditPropertyToken`.
         * @public
         * @readonly
         */
        readonly auditPropertyToken: OPTIONAL<IndAuditParameter[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AuditDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `AuditDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuditDescriptor`.
     * @returns {AuditDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (AuditDescriptor)]: (AuditDescriptor)[_K] }): AuditDescriptor {
        return new AuditDescriptor(_o.auditToken, _o.auditPropertyToken, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AuditDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuditDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("auditToken", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of AuditDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuditDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuditDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuditDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("auditPropertyToken", true, $.hasTag(_TagClass.context, 1))
];

let _cached_decoder_for_AuditDescriptor: $.ASN1Decoder<AuditDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditDescriptor (el: _Element): AuditDescriptor {
    if (!_cached_decoder_for_AuditDescriptor) { _cached_decoder_for_AuditDescriptor = function (el: _Element): AuditDescriptor {
    let auditToken: OPTIONAL<AuditDescriptor_auditToken>;
    let auditPropertyToken: OPTIONAL<IndAuditParameter[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "auditToken": (_el: _Element): void => { auditToken = $._decode_implicit<AuditDescriptor_auditToken>(() => _decode_AuditDescriptor_auditToken)(_el); },
        "auditPropertyToken": (_el: _Element): void => { auditPropertyToken = $._decode_implicit<IndAuditParameter[]>(() => $._decodeSequenceOf<IndAuditParameter>(() => _decode_IndAuditParameter))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuditDescriptor,
        _extension_additions_list_spec_for_AuditDescriptor,
        _root_component_type_list_2_spec_for_AuditDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AuditDescriptor(
        auditToken,
        auditPropertyToken,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AuditDescriptor(el);
}

let _cached_encoder_for_AuditDescriptor: $.ASN1Encoder<AuditDescriptor> | null = null;

/**
 * @summary Encodes a(n) AuditDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_AuditDescriptor (value: AuditDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditDescriptor) { _cached_encoder_for_AuditDescriptor = function (value: AuditDescriptor, elGetter: $.ASN1Encoder<AuditDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.auditToken === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AuditDescriptor_auditToken, $.BER)(value.auditToken, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.auditPropertyToken === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<IndAuditParameter>(() => _encode_IndAuditParameter, $.BER), $.BER)(value.auditPropertyToken, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuditDescriptor(value, elGetter);
}


/* eslint-enable */
