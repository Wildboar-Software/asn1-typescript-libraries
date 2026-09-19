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
import { PresenceInfo, _decode_PresenceInfo, _encode_PresenceInfo } from "../TS33128Payloads/PresenceInfo.ta.mjs";
// export { PresenceInfo, _decode_PresenceInfo, _encode_PresenceInfo } from "../TS33128Payloads/PresenceInfo.ta.mjs";
import { LADNInfo, _decode_LADNInfo, _encode_LADNInfo } from "../TS33128Payloads/LADNInfo.ta.mjs";
// export { LADNInfo, _decode_LADNInfo, _encode_LADNInfo } from "../TS33128Payloads/LADNInfo.ta.mjs";


/**
 * @summary AMFEventArea
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFEventArea ::= SEQUENCE
 * {
 *     presenceInfo                [1] PresenceInfo OPTIONAL,
 *     lADNInfo                    [2] LADNInfo OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFEventArea {
    constructor (
        /**
         * @summary `presenceInfo`.
         * @public
         * @readonly
         */
        readonly presenceInfo: OPTIONAL<PresenceInfo>,
        /**
         * @summary `lADNInfo`.
         * @public
         * @readonly
         */
        readonly lADNInfo: OPTIONAL<LADNInfo>
    ) {}

    /**
     * @summary Restructures an object into a AMFEventArea
     * @description
     * 
     * This takes an `object` and converts it to a `AMFEventArea`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFEventArea`.
     * @returns {AMFEventArea}
     */
    public static _from_object (_o: { [_K in keyof (AMFEventArea)]: (AMFEventArea)[_K] }): AMFEventArea {
        return new AMFEventArea(_o.presenceInfo, _o.lADNInfo);
    }


}

/**
 * @summary The Leading Root Component Types of AMFEventArea
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFEventArea: $.ComponentSpec[] = [
    new $.ComponentSpec("presenceInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lADNInfo", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AMFEventArea
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFEventArea: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFEventArea
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFEventArea: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFEventArea: $.ASN1Decoder<AMFEventArea> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFEventArea
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFEventArea (el: _Element): AMFEventArea {
    if (!_cached_decoder_for_AMFEventArea) { _cached_decoder_for_AMFEventArea = function (el: _Element): AMFEventArea {
    let presenceInfo: OPTIONAL<PresenceInfo>;
    let lADNInfo: OPTIONAL<LADNInfo>;
    const callbacks: $.DecodingMap = {
        "presenceInfo": (_el: _Element): void => { presenceInfo = $._decode_implicit<PresenceInfo>(() => _decode_PresenceInfo)(_el); },
        "lADNInfo": (_el: _Element): void => { lADNInfo = $._decode_implicit<LADNInfo>(() => _decode_LADNInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFEventArea,
        _extension_additions_list_spec_for_AMFEventArea,
        _root_component_type_list_2_spec_for_AMFEventArea,
        undefined,
    );
    return new AMFEventArea(
        presenceInfo,
        lADNInfo
    );
}; }
    return _cached_decoder_for_AMFEventArea(el);
}

let _cached_encoder_for_AMFEventArea: $.ASN1Encoder<AMFEventArea> | null = null;

/**
 * @summary Encodes a(n) AMFEventArea into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFEventArea, encoded as an ASN.1 Element.
 */
export
function _encode_AMFEventArea (value: AMFEventArea, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFEventArea) { _cached_encoder_for_AMFEventArea = function (value: AMFEventArea, elGetter: $.ASN1Encoder<AMFEventArea>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.presenceInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PresenceInfo, $.BER)(value.presenceInfo, $.BER)),
            /* IF_ABSENT  */ ((value.lADNInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LADNInfo, $.BER)(value.lADNInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFEventArea(value, elGetter);
}


/* eslint-enable */
