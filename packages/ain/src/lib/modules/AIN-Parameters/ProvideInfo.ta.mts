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
import { RequestGroups, _decode_RequestGroups, _encode_RequestGroups } from "../AIN-Parameters/RequestGroups.ta.mjs";
// export { RequestGroups, _decode_RequestGroups, _encode_RequestGroups } from "../AIN-Parameters/RequestGroups.ta.mjs";
import { RequestMemorySlot, RequestMemorySlot_incoming /* IMPORTED_LONG_NAMED_BIT */, incoming /* IMPORTED_SHORT_NAMED_BIT */, RequestMemorySlot_outgoing /* IMPORTED_LONG_NAMED_BIT */, outgoing /* IMPORTED_SHORT_NAMED_BIT */, _decode_RequestMemorySlot, _encode_RequestMemorySlot } from "../AIN-Parameters/RequestMemorySlot.ta.mjs";
// export { RequestMemorySlot, RequestMemorySlot_incoming /* IMPORTED_LONG_NAMED_BIT */, incoming /* IMPORTED_SHORT_NAMED_BIT */, RequestMemorySlot_outgoing /* IMPORTED_LONG_NAMED_BIT */, outgoing /* IMPORTED_SHORT_NAMED_BIT */, _decode_RequestMemorySlot, _encode_RequestMemorySlot } from "../AIN-Parameters/RequestMemorySlot.ta.mjs";


/**
 * @summary ProvideInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideInfo ::= [114] IMPLICIT SEQUENCE{
 *         requestGroups       RequestGroups OPTIONAL,
 *         requestMemorySlot   [11] IMPLICIT RequestMemorySlot OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ProvideInfo {
    constructor (
        /**
         * @summary `requestGroups`.
         * @public
         * @readonly
         */
        readonly requestGroups: OPTIONAL<RequestGroups>,
        /**
         * @summary `requestMemorySlot`.
         * @public
         * @readonly
         */
        readonly requestMemorySlot: OPTIONAL<RequestMemorySlot>
    ) {}

    /**
     * @summary Restructures an object into a ProvideInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ProvideInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProvideInfo`.
     * @returns {ProvideInfo}
     */
    public static _from_object (_o: { [_K in keyof (ProvideInfo)]: (ProvideInfo)[_K] }): ProvideInfo {
        return new ProvideInfo(_o.requestGroups, _o.requestMemorySlot);
    }


}

/**
 * @summary The Leading Root Component Types of ProvideInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProvideInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("requestGroups", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6))),
    new $.ComponentSpec("requestMemorySlot", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of ProvideInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProvideInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProvideInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProvideInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProvideInfo: $.ASN1Decoder<ProvideInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideInfo (el: _Element): ProvideInfo {
    if (!_cached_decoder_for_ProvideInfo) { _cached_decoder_for_ProvideInfo = $._decode_implicit<ProvideInfo>(() => function (el: _Element): ProvideInfo {
    let requestGroups: OPTIONAL<RequestGroups>;
    let requestMemorySlot: OPTIONAL<RequestMemorySlot>;
    const callbacks: $.DecodingMap = {
        "requestGroups": (_el: _Element): void => { requestGroups = _decode_RequestGroups(_el); },
        "requestMemorySlot": (_el: _Element): void => { requestMemorySlot = $._decode_implicit<RequestMemorySlot>(() => _decode_RequestMemorySlot)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProvideInfo,
        _extension_additions_list_spec_for_ProvideInfo,
        _root_component_type_list_2_spec_for_ProvideInfo,
        undefined,
    );
    return new ProvideInfo(
        requestGroups,
        requestMemorySlot
    );
}); }
    return _cached_decoder_for_ProvideInfo(el);
}

let _cached_encoder_for_ProvideInfo: $.ASN1Encoder<ProvideInfo> | null = null;

/**
 * @summary Encodes a(n) ProvideInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideInfo (value: ProvideInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideInfo) { _cached_encoder_for_ProvideInfo = $._encode_implicit(_TagClass.context, 114, () => function (value: ProvideInfo, elGetter: $.ASN1Encoder<ProvideInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.requestGroups === undefined) ? undefined : _encode_RequestGroups(value.requestGroups, $.BER)),
            /* IF_ABSENT  */ ((value.requestMemorySlot === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_RequestMemorySlot, $.BER)(value.requestMemorySlot, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ProvideInfo(value, elGetter);
}


/* eslint-enable */
