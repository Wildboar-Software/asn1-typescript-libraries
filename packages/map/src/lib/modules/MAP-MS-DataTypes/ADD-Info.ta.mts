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
import { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";


/**
 * @summary ADD_Info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ADD-Info ::= SEQUENCE {
 *     imeisv    [0] IMEI,
 *     skipSubscriberDataUpdate    [1] NULL    OPTIONAL,
 *     -- The skipSubscriberDataUpdate parameter in the UpdateLocationArg and the ADD-Info
 *     -- structures carry the same semantic.
 *     ...}
 * ```
 * 
 * @class
 */
export
class ADD_Info {
    constructor (
        /**
         * @summary `imeisv`.
         * @public
         * @readonly
         */
        readonly imeisv: IMEI,
        /**
         * @summary `skipSubscriberDataUpdate`.
         * @public
         * @readonly
         */
        readonly skipSubscriberDataUpdate: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ADD_Info
     * @description
     * 
     * This takes an `object` and converts it to a `ADD_Info`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ADD_Info`.
     * @returns {ADD_Info}
     */
    public static _from_object (_o: { [_K in keyof (ADD_Info)]: (ADD_Info)[_K] }): ADD_Info {
        return new ADD_Info(_o.imeisv, _o.skipSubscriberDataUpdate, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ADD_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ADD_Info: $.ComponentSpec[] = [
    new $.ComponentSpec("imeisv", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("skipSubscriberDataUpdate", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ADD_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ADD_Info: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ADD_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ADD_Info: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ADD_Info: $.ASN1Decoder<ADD_Info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ADD_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ADD_Info (el: _Element): ADD_Info {
    if (!_cached_decoder_for_ADD_Info) { _cached_decoder_for_ADD_Info = function (el: _Element): ADD_Info {
    let imeisv!: IMEI;
    let skipSubscriberDataUpdate: OPTIONAL<NULL> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imeisv": (_el: _Element): void => { imeisv = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "skipSubscriberDataUpdate": (_el: _Element): void => { skipSubscriberDataUpdate = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ADD_Info,
        _extension_additions_list_spec_for_ADD_Info,
        _root_component_type_list_2_spec_for_ADD_Info,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ADD_Info(
        imeisv,
        skipSubscriberDataUpdate,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ADD_Info(el);
}

let _cached_encoder_for_ADD_Info: $.ASN1Encoder<ADD_Info> | null = null;

/**
 * @summary Encodes a(n) ADD_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ADD_Info, encoded as an ASN.1 Element.
 */
export
function _encode_ADD_Info (value: ADD_Info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ADD_Info) { _cached_encoder_for_ADD_Info = function (value: ADD_Info, elGetter: $.ASN1Encoder<ADD_Info>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IMEI, $.BER)(value.imeisv, $.BER),
            /* IF_ABSENT  */ ((value.skipSubscriberDataUpdate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.skipSubscriberDataUpdate, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ADD_Info(value, elGetter);
}


/* eslint-enable */
