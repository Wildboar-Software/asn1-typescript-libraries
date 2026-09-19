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
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";
// export { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";


/**
 * @summary IMEIUpdateResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEIUpdateResponse ::= SEQUENCE
 * {
 *     previousIMEI    [1] IMEI OPTIONAL,
 *     previousIMEISV  [2] IMEISV OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMEIUpdateResponse {
    constructor (
        /**
         * @summary `previousIMEI`.
         * @public
         * @readonly
         */
        readonly previousIMEI: OPTIONAL<IMEI>,
        /**
         * @summary `previousIMEISV`.
         * @public
         * @readonly
         */
        readonly previousIMEISV: OPTIONAL<IMEISV>
    ) {}

    /**
     * @summary Restructures an object into a IMEIUpdateResponse
     * @description
     * 
     * This takes an `object` and converts it to a `IMEIUpdateResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMEIUpdateResponse`.
     * @returns {IMEIUpdateResponse}
     */
    public static _from_object (_o: { [_K in keyof (IMEIUpdateResponse)]: (IMEIUpdateResponse)[_K] }): IMEIUpdateResponse {
        return new IMEIUpdateResponse(_o.previousIMEI, _o.previousIMEISV);
    }


}

/**
 * @summary The Leading Root Component Types of IMEIUpdateResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMEIUpdateResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("previousIMEI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("previousIMEISV", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IMEIUpdateResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMEIUpdateResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMEIUpdateResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMEIUpdateResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMEIUpdateResponse: $.ASN1Decoder<IMEIUpdateResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMEIUpdateResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMEIUpdateResponse (el: _Element): IMEIUpdateResponse {
    if (!_cached_decoder_for_IMEIUpdateResponse) { _cached_decoder_for_IMEIUpdateResponse = function (el: _Element): IMEIUpdateResponse {
    let previousIMEI: OPTIONAL<IMEI>;
    let previousIMEISV: OPTIONAL<IMEISV>;
    const callbacks: $.DecodingMap = {
        "previousIMEI": (_el: _Element): void => { previousIMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "previousIMEISV": (_el: _Element): void => { previousIMEISV = $._decode_implicit<IMEISV>(() => _decode_IMEISV)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMEIUpdateResponse,
        _extension_additions_list_spec_for_IMEIUpdateResponse,
        _root_component_type_list_2_spec_for_IMEIUpdateResponse,
        undefined,
    );
    return new IMEIUpdateResponse(
        previousIMEI,
        previousIMEISV
    );
}; }
    return _cached_decoder_for_IMEIUpdateResponse(el);
}

let _cached_encoder_for_IMEIUpdateResponse: $.ASN1Encoder<IMEIUpdateResponse> | null = null;

/**
 * @summary Encodes a(n) IMEIUpdateResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMEIUpdateResponse, encoded as an ASN.1 Element.
 */
export
function _encode_IMEIUpdateResponse (value: IMEIUpdateResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMEIUpdateResponse) { _cached_encoder_for_IMEIUpdateResponse = function (value: IMEIUpdateResponse, elGetter: $.ASN1Encoder<IMEIUpdateResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.previousIMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IMEI, $.BER)(value.previousIMEI, $.BER)),
            /* IF_ABSENT  */ ((value.previousIMEISV === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IMEISV, $.BER)(value.previousIMEISV, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IMEIUpdateResponse(value, elGetter);
}


/* eslint-enable */
