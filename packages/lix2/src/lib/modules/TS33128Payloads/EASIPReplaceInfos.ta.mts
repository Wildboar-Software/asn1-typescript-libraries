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
import { EASServerAddress, _decode_EASServerAddress, _encode_EASServerAddress } from "../TS33128Payloads/EASServerAddress.ta.mjs";
// export { EASServerAddress, _decode_EASServerAddress, _encode_EASServerAddress } from "../TS33128Payloads/EASServerAddress.ta.mjs";


/**
 * @summary EASIPReplaceInfos
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASIPReplaceInfos ::= SEQUENCE
 * {
 *     sourceEASAddress [1] EASServerAddress,
 *     targetEASAddress [2] EASServerAddress
 * }
 * ```
 * 
 * @class
 */
export
class EASIPReplaceInfos {
    constructor (
        /**
         * @summary `sourceEASAddress`.
         * @public
         * @readonly
         */
        readonly sourceEASAddress: EASServerAddress,
        /**
         * @summary `targetEASAddress`.
         * @public
         * @readonly
         */
        readonly targetEASAddress: EASServerAddress
    ) {}

    /**
     * @summary Restructures an object into a EASIPReplaceInfos
     * @description
     * 
     * This takes an `object` and converts it to a `EASIPReplaceInfos`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EASIPReplaceInfos`.
     * @returns {EASIPReplaceInfos}
     */
    public static _from_object (_o: { [_K in keyof (EASIPReplaceInfos)]: (EASIPReplaceInfos)[_K] }): EASIPReplaceInfos {
        return new EASIPReplaceInfos(_o.sourceEASAddress, _o.targetEASAddress);
    }


}

/**
 * @summary The Leading Root Component Types of EASIPReplaceInfos
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EASIPReplaceInfos: $.ComponentSpec[] = [
    new $.ComponentSpec("sourceEASAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("targetEASAddress", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EASIPReplaceInfos
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EASIPReplaceInfos: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EASIPReplaceInfos
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EASIPReplaceInfos: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EASIPReplaceInfos: $.ASN1Decoder<EASIPReplaceInfos> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASIPReplaceInfos
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASIPReplaceInfos (el: _Element): EASIPReplaceInfos {
    if (!_cached_decoder_for_EASIPReplaceInfos) { _cached_decoder_for_EASIPReplaceInfos = function (el: _Element): EASIPReplaceInfos {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EASIPReplaceInfos contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sourceEASAddress";
    sequence[1].name = "targetEASAddress";
    let sourceEASAddress!: EASServerAddress;
    let targetEASAddress!: EASServerAddress;
    sourceEASAddress = $._decode_implicit<EASServerAddress>(() => _decode_EASServerAddress)(sequence[0]);
    targetEASAddress = $._decode_implicit<EASServerAddress>(() => _decode_EASServerAddress)(sequence[1]);
    return new EASIPReplaceInfos(
        sourceEASAddress,
        targetEASAddress,

    );
}; }
    return _cached_decoder_for_EASIPReplaceInfos(el);
}

let _cached_encoder_for_EASIPReplaceInfos: $.ASN1Encoder<EASIPReplaceInfos> | null = null;

/**
 * @summary Encodes a(n) EASIPReplaceInfos into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASIPReplaceInfos, encoded as an ASN.1 Element.
 */
export
function _encode_EASIPReplaceInfos (value: EASIPReplaceInfos, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASIPReplaceInfos) { _cached_encoder_for_EASIPReplaceInfos = function (value: EASIPReplaceInfos, elGetter: $.ASN1Encoder<EASIPReplaceInfos>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EASServerAddress, $.BER)(value.sourceEASAddress, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EASServerAddress, $.BER)(value.targetEASAddress, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EASIPReplaceInfos(value, elGetter);
}


/* eslint-enable */
