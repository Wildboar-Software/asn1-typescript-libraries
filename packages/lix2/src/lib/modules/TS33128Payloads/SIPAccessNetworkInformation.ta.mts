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
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";


/**
 * @summary SIPAccessNetworkInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPAccessNetworkInformation ::= SEQUENCE
 * {
 *     accessNetworkInfo [1] UTF8String,
 *     servingPLMN       [2] PLMNID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SIPAccessNetworkInformation {
    constructor (
        /**
         * @summary `accessNetworkInfo`.
         * @public
         * @readonly
         */
        readonly accessNetworkInfo: UTF8String,
        /**
         * @summary `servingPLMN`.
         * @public
         * @readonly
         */
        readonly servingPLMN: OPTIONAL<PLMNID>
    ) {}

    /**
     * @summary Restructures an object into a SIPAccessNetworkInformation
     * @description
     * 
     * This takes an `object` and converts it to a `SIPAccessNetworkInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIPAccessNetworkInformation`.
     * @returns {SIPAccessNetworkInformation}
     */
    public static _from_object (_o: { [_K in keyof (SIPAccessNetworkInformation)]: (SIPAccessNetworkInformation)[_K] }): SIPAccessNetworkInformation {
        return new SIPAccessNetworkInformation(_o.accessNetworkInfo, _o.servingPLMN);
    }


}

/**
 * @summary The Leading Root Component Types of SIPAccessNetworkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SIPAccessNetworkInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("accessNetworkInfo", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servingPLMN", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SIPAccessNetworkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SIPAccessNetworkInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SIPAccessNetworkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SIPAccessNetworkInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SIPAccessNetworkInformation: $.ASN1Decoder<SIPAccessNetworkInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPAccessNetworkInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPAccessNetworkInformation (el: _Element): SIPAccessNetworkInformation {
    if (!_cached_decoder_for_SIPAccessNetworkInformation) { _cached_decoder_for_SIPAccessNetworkInformation = function (el: _Element): SIPAccessNetworkInformation {
    let accessNetworkInfo!: UTF8String;
    let servingPLMN: OPTIONAL<PLMNID>;
    const callbacks: $.DecodingMap = {
        "accessNetworkInfo": (_el: _Element): void => { accessNetworkInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "servingPLMN": (_el: _Element): void => { servingPLMN = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIPAccessNetworkInformation,
        _extension_additions_list_spec_for_SIPAccessNetworkInformation,
        _root_component_type_list_2_spec_for_SIPAccessNetworkInformation,
        undefined,
    );
    return new SIPAccessNetworkInformation(
        accessNetworkInfo,
        servingPLMN
    );
}; }
    return _cached_decoder_for_SIPAccessNetworkInformation(el);
}

let _cached_encoder_for_SIPAccessNetworkInformation: $.ASN1Encoder<SIPAccessNetworkInformation> | null = null;

/**
 * @summary Encodes a(n) SIPAccessNetworkInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPAccessNetworkInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SIPAccessNetworkInformation (value: SIPAccessNetworkInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPAccessNetworkInformation) { _cached_encoder_for_SIPAccessNetworkInformation = function (value: SIPAccessNetworkInformation, elGetter: $.ASN1Encoder<SIPAccessNetworkInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.accessNetworkInfo, $.BER),
            /* IF_ABSENT  */ ((value.servingPLMN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PLMNID, $.BER)(value.servingPLMN, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SIPAccessNetworkInformation(value, elGetter);
}


/* eslint-enable */
