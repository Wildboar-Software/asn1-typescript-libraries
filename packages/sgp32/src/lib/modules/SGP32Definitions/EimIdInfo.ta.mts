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
import { EimIdType, EimIdType_eimIdTypeOid /* IMPORTED_LONG_NAMED_INTEGER */, eimIdTypeOid /* IMPORTED_SHORT_NAMED_INTEGER */, EimIdType_eimIdTypeFqdn /* IMPORTED_LONG_NAMED_INTEGER */, eimIdTypeFqdn /* IMPORTED_SHORT_NAMED_INTEGER */, EimIdType_eimIdTypeProprietary /* IMPORTED_LONG_NAMED_INTEGER */, eimIdTypeProprietary /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EimIdType, _encode_EimIdType } from "../SGP32Definitions/EimIdType.ta.mjs";
// export { EimIdType, EimIdType_eimIdTypeOid /* IMPORTED_LONG_NAMED_INTEGER */, eimIdTypeOid /* IMPORTED_SHORT_NAMED_INTEGER */, EimIdType_eimIdTypeFqdn /* IMPORTED_LONG_NAMED_INTEGER */, eimIdTypeFqdn /* IMPORTED_SHORT_NAMED_INTEGER */, EimIdType_eimIdTypeProprietary /* IMPORTED_LONG_NAMED_INTEGER */, eimIdTypeProprietary /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EimIdType, _encode_EimIdType } from "../SGP32Definitions/EimIdType.ta.mjs";


/**
 * @summary EimIdInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimIdInfo ::= SEQUENCE {
 *     eimId [0] UTF8String (SIZE(1..128)),
 *     eimIdType [2] EimIdType OPTIONAL -- present in case of eimIdTypeOid and eimIdTypeFqdn
 * }
 * ```
 * 
 * @class
 */
export
class EimIdInfo {
    constructor (
        /**
         * @summary `eimId`.
         * @public
         * @readonly
         */
        readonly eimId: UTF8String,
        /**
         * @summary `eimIdType`.
         * @public
         * @readonly
         */
        readonly eimIdType: OPTIONAL<EimIdType>
    ) {}

    /**
     * @summary Restructures an object into a EimIdInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EimIdInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EimIdInfo`.
     * @returns {EimIdInfo}
     */
    public static _from_object (_o: { [_K in keyof (EimIdInfo)]: (EimIdInfo)[_K] }): EimIdInfo {
        return new EimIdInfo(_o.eimId, _o.eimIdType);
    }


}

/**
 * @summary The Leading Root Component Types of EimIdInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EimIdInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("eimId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eimIdType", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EimIdInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EimIdInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EimIdInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EimIdInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EimIdInfo: $.ASN1Decoder<EimIdInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimIdInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimIdInfo (el: _Element): EimIdInfo {
    if (!_cached_decoder_for_EimIdInfo) { _cached_decoder_for_EimIdInfo = function (el: _Element): EimIdInfo {
    let eimId!: UTF8String;
    let eimIdType: OPTIONAL<EimIdType>;
    const callbacks: $.DecodingMap = {
        "eimId": (_el: _Element): void => { eimId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eimIdType": (_el: _Element): void => { eimIdType = $._decode_implicit<EimIdType>(() => _decode_EimIdType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EimIdInfo,
        _extension_additions_list_spec_for_EimIdInfo,
        _root_component_type_list_2_spec_for_EimIdInfo,
        undefined,
    );
    return new EimIdInfo(
        eimId,
        eimIdType
    );
}; }
    return _cached_decoder_for_EimIdInfo(el);
}

let _cached_encoder_for_EimIdInfo: $.ASN1Encoder<EimIdInfo> | null = null;

/**
 * @summary Encodes a(n) EimIdInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimIdInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EimIdInfo (value: EimIdInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimIdInfo) { _cached_encoder_for_EimIdInfo = function (value: EimIdInfo, elGetter: $.ASN1Encoder<EimIdInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.eimId, $.BER),
            /* IF_ABSENT  */ ((value.eimIdType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EimIdType, $.BER)(value.eimIdType, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EimIdInfo(value, elGetter);
}


/* eslint-enable */
