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
import { BasicServiceCode, _decode_BasicServiceCode, _encode_BasicServiceCode } from "../MAP-CommonDataTypes/BasicServiceCode.ta.mjs";
import { SS_Status, _decode_SS_Status, _encode_SS_Status } from "../MAP-SS-DataTypes/SS-Status.ta.mjs";


/**
 * @summary CallBarringFeature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBarringFeature ::= SEQUENCE {
 *     basicService    BasicServiceCode    OPTIONAL,
 *     ss-Status    [4] SS-Status    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CallBarringFeature {
    constructor (
        /**
         * @summary `basicService`.
         * @public
         * @readonly
         */
        readonly basicService: OPTIONAL<BasicServiceCode>,
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: OPTIONAL<SS_Status>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CallBarringFeature
     * @description
     * 
     * This takes an `object` and converts it to a `CallBarringFeature`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallBarringFeature`.
     * @returns {CallBarringFeature}
     */
    public static _from_object (_o: { [_K in keyof (CallBarringFeature)]: (CallBarringFeature)[_K] }): CallBarringFeature {
        return new CallBarringFeature(_o.basicService, _o.ss_Status, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CallBarringFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallBarringFeature: $.ComponentSpec[] = [
    new $.ComponentSpec("basicService", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3))),
    new $.ComponentSpec("ss-Status", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CallBarringFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallBarringFeature: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallBarringFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallBarringFeature: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallBarringFeature: $.ASN1Decoder<CallBarringFeature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBarringFeature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBarringFeature (el: _Element): CallBarringFeature {
    if (!_cached_decoder_for_CallBarringFeature) { _cached_decoder_for_CallBarringFeature = function (el: _Element): CallBarringFeature {
    let basicService: OPTIONAL<BasicServiceCode> = undefined;
    let ss_Status: OPTIONAL<SS_Status> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "basicService": (_el: _Element): void => { basicService = _decode_BasicServiceCode(_el); },
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<SS_Status>(() => _decode_SS_Status)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallBarringFeature,
        _extension_additions_list_spec_for_CallBarringFeature,
        _root_component_type_list_2_spec_for_CallBarringFeature,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallBarringFeature(
        basicService,
        ss_Status,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallBarringFeature(el);
}

let _cached_encoder_for_CallBarringFeature: $.ASN1Encoder<CallBarringFeature> | null = null;

/**
 * @summary Encodes a(n) CallBarringFeature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBarringFeature, encoded as an ASN.1 Element.
 */
export
function _encode_CallBarringFeature (value: CallBarringFeature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBarringFeature) { _cached_encoder_for_CallBarringFeature = function (value: CallBarringFeature, elGetter: $.ASN1Encoder<CallBarringFeature>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.basicService === undefined) ? undefined : _encode_BasicServiceCode(value.basicService, $.BER)),
            /* IF_ABSENT  */ ((value.ss_Status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SS_Status, $.BER)(value.ss_Status, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallBarringFeature(value, elGetter);
}


/* eslint-enable */
