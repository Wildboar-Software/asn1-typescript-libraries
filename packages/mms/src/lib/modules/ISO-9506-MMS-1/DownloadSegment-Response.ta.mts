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
import { LoadData, _decode_LoadData, _encode_LoadData } from "../ISO-9506-MMS-1/LoadData.ta.mjs";
// export { LoadData, _decode_LoadData, _encode_LoadData } from "../ISO-9506-MMS-1/LoadData.ta.mjs";


/**
 * @summary DownloadSegment_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DownloadSegment-Response ::= SEQUENCE {
 *    loadData               LoadData,
 *    moreFollows            [1] IMPLICIT BOOLEAN DEFAULT TRUE }
 * ```
 * 
 * @class
 */
export
class DownloadSegment_Response {
    constructor (
        /**
         * @summary `loadData`.
         * @public
         * @readonly
         */
        readonly loadData: LoadData,
        /**
         * @summary `moreFollows`.
         * @public
         * @readonly
         */
        readonly moreFollows: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a DownloadSegment_Response
     * @description
     * 
     * This takes an `object` and converts it to a `DownloadSegment_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DownloadSegment_Response`.
     * @returns {DownloadSegment_Response}
     */
    public static _from_object (_o: { [_K in keyof (DownloadSegment_Response)]: (DownloadSegment_Response)[_K] }): DownloadSegment_Response {
        return new DownloadSegment_Response(_o.loadData, _o.moreFollows);
    }

    /**
     * @summary Getter that returns the default value for `moreFollows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_moreFollows () { return true; }
}

/**
 * @summary The Leading Root Component Types of DownloadSegment_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DownloadSegment_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("loadData", false, $.hasAnyTag),
    new $.ComponentSpec("moreFollows", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DownloadSegment_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DownloadSegment_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DownloadSegment_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DownloadSegment_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DownloadSegment_Response: $.ASN1Decoder<DownloadSegment_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DownloadSegment_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DownloadSegment_Response (el: _Element): DownloadSegment_Response {
    if (!_cached_decoder_for_DownloadSegment_Response) { _cached_decoder_for_DownloadSegment_Response = function (el: _Element): DownloadSegment_Response {
    let loadData!: LoadData;
    let moreFollows: OPTIONAL<BOOLEAN> = DownloadSegment_Response._default_value_for_moreFollows;
    const callbacks: $.DecodingMap = {
        "loadData": (_el: _Element): void => { loadData = _decode_LoadData(_el); },
        "moreFollows": (_el: _Element): void => { moreFollows = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DownloadSegment_Response,
        _extension_additions_list_spec_for_DownloadSegment_Response,
        _root_component_type_list_2_spec_for_DownloadSegment_Response,
        undefined,
    );
    return new DownloadSegment_Response(
        loadData,
        moreFollows
    );
}; }
    return _cached_decoder_for_DownloadSegment_Response(el);
}

let _cached_encoder_for_DownloadSegment_Response: $.ASN1Encoder<DownloadSegment_Response> | null = null;

/**
 * @summary Encodes a(n) DownloadSegment_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DownloadSegment_Response, encoded as an ASN.1 Element.
 */
export
function _encode_DownloadSegment_Response (value: DownloadSegment_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DownloadSegment_Response) { _cached_encoder_for_DownloadSegment_Response = function (value: DownloadSegment_Response, elGetter: $.ASN1Encoder<DownloadSegment_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LoadData(value.loadData, $.BER),
            /* IF_DEFAULT */ (value.moreFollows === undefined || $.deepEq(value.moreFollows, DownloadSegment_Response._default_value_for_moreFollows) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.moreFollows, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DownloadSegment_Response(value, elGetter);
}


/* eslint-enable */
