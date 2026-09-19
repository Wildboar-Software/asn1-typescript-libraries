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
import { IndAudLocalControlDescriptor, _decode_IndAudLocalControlDescriptor, _encode_IndAudLocalControlDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudLocalControlDescriptor.ta.mjs";
// export { IndAudLocalControlDescriptor, _decode_IndAudLocalControlDescriptor, _encode_IndAudLocalControlDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudLocalControlDescriptor.ta.mjs";
import { IndAudLocalRemoteDescriptor, _decode_IndAudLocalRemoteDescriptor, _encode_IndAudLocalRemoteDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudLocalRemoteDescriptor.ta.mjs";
// export { IndAudLocalRemoteDescriptor, _decode_IndAudLocalRemoteDescriptor, _encode_IndAudLocalRemoteDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudLocalRemoteDescriptor.ta.mjs";
import { IndAudStatisticsDescriptor, _decode_IndAudStatisticsDescriptor, _encode_IndAudStatisticsDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudStatisticsDescriptor.ta.mjs";
// export { IndAudStatisticsDescriptor, _decode_IndAudStatisticsDescriptor, _encode_IndAudStatisticsDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudStatisticsDescriptor.ta.mjs";


/**
 * @summary IndAudStreamParms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudStreamParms ::= SEQUENCE
 *     {
 *         localControlDescriptor        [0] IndAudLocalControlDescriptor OPTIONAL,
 *         localDescriptor                [1] IndAudLocalRemoteDescriptor OPTIONAL,
 *         remoteDescriptor            [2] IndAudLocalRemoteDescriptor OPTIONAL,
 *         ...,
 *         statisticsDescriptor        [3] IndAudStatisticsDescriptor OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class IndAudStreamParms {
    constructor (
        /**
         * @summary `localControlDescriptor`.
         * @public
         * @readonly
         */
        readonly localControlDescriptor: OPTIONAL<IndAudLocalControlDescriptor>,
        /**
         * @summary `localDescriptor`.
         * @public
         * @readonly
         */
        readonly localDescriptor: OPTIONAL<IndAudLocalRemoteDescriptor>,
        /**
         * @summary `remoteDescriptor`.
         * @public
         * @readonly
         */
        readonly remoteDescriptor: OPTIONAL<IndAudLocalRemoteDescriptor>,
        /**
         * @summary `statisticsDescriptor`.
         * @public
         * @readonly
         */
        readonly statisticsDescriptor: OPTIONAL<IndAudStatisticsDescriptor>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IndAudStreamParms
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudStreamParms`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudStreamParms`.
     * @returns {IndAudStreamParms}
     */
    public static _from_object (_o: { [_K in keyof (IndAudStreamParms)]: (IndAudStreamParms)[_K] }): IndAudStreamParms {
        return new IndAudStreamParms(_o.localControlDescriptor, _o.localDescriptor, _o.remoteDescriptor, _o.statisticsDescriptor, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IndAudStreamParms
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudStreamParms: $.ComponentSpec[] = [
    new $.ComponentSpec("localControlDescriptor", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("localDescriptor", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("remoteDescriptor", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IndAudStreamParms
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudStreamParms: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudStreamParms
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudStreamParms: $.ComponentSpec[] = [
    new $.ComponentSpec("statisticsDescriptor", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_IndAudStreamParms: $.ASN1Decoder<IndAudStreamParms> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudStreamParms
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudStreamParms (el: _Element): IndAudStreamParms {
    if (!_cached_decoder_for_IndAudStreamParms) { _cached_decoder_for_IndAudStreamParms = function (el: _Element): IndAudStreamParms {
    let localControlDescriptor: OPTIONAL<IndAudLocalControlDescriptor>;
    let localDescriptor: OPTIONAL<IndAudLocalRemoteDescriptor>;
    let remoteDescriptor: OPTIONAL<IndAudLocalRemoteDescriptor>;
    let statisticsDescriptor: OPTIONAL<IndAudStatisticsDescriptor>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "localControlDescriptor": (_el: _Element): void => { localControlDescriptor = $._decode_implicit<IndAudLocalControlDescriptor>(() => _decode_IndAudLocalControlDescriptor)(_el); },
        "localDescriptor": (_el: _Element): void => { localDescriptor = $._decode_implicit<IndAudLocalRemoteDescriptor>(() => _decode_IndAudLocalRemoteDescriptor)(_el); },
        "remoteDescriptor": (_el: _Element): void => { remoteDescriptor = $._decode_implicit<IndAudLocalRemoteDescriptor>(() => _decode_IndAudLocalRemoteDescriptor)(_el); },
        "statisticsDescriptor": (_el: _Element): void => { statisticsDescriptor = $._decode_implicit<IndAudStatisticsDescriptor>(() => _decode_IndAudStatisticsDescriptor)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IndAudStreamParms,
        _extension_additions_list_spec_for_IndAudStreamParms,
        _root_component_type_list_2_spec_for_IndAudStreamParms,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IndAudStreamParms(
        localControlDescriptor,
        localDescriptor,
        remoteDescriptor,
        statisticsDescriptor,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IndAudStreamParms(el);
}

let _cached_encoder_for_IndAudStreamParms: $.ASN1Encoder<IndAudStreamParms> | null = null;

/**
 * @summary Encodes a(n) IndAudStreamParms into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudStreamParms, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudStreamParms (value: IndAudStreamParms, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudStreamParms) { _cached_encoder_for_IndAudStreamParms = function (value: IndAudStreamParms, elGetter: $.ASN1Encoder<IndAudStreamParms>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.localControlDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_IndAudLocalControlDescriptor, $.BER)(value.localControlDescriptor, $.BER)),
            /* IF_ABSENT  */ ((value.localDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IndAudLocalRemoteDescriptor, $.BER)(value.localDescriptor, $.BER)),
            /* IF_ABSENT  */ ((value.remoteDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IndAudLocalRemoteDescriptor, $.BER)(value.remoteDescriptor, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.statisticsDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IndAudStatisticsDescriptor, $.BER)(value.statisticsDescriptor, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudStreamParms(value, elGetter);
}


/* eslint-enable */
