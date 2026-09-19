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



/**
 * @summary PresentationAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentationAddress ::= SEQUENCE {
 *     pSelector     [0] EXPLICIT OCTET STRING OPTIONAL,
 *     sSelector     [1] EXPLICIT OCTET STRING OPTIONAL,
 *     tSelector     [2] EXPLICIT OCTET STRING OPTIONAL,
 *     nAddresses    [3] EXPLICIT SET SIZE (1..MAX) OF OCTET STRING }
 * ```
 * 
 * @class
 */
export
class PresentationAddress {
    constructor (
        /**
         * @summary `pSelector`.
         * @public
         * @readonly
         */
        readonly pSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `sSelector`.
         * @public
         * @readonly
         */
        readonly sSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tSelector`.
         * @public
         * @readonly
         */
        readonly tSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `nAddresses`.
         * @public
         * @readonly
         */
        readonly nAddresses: OCTET_STRING[]
    ) {}

    /**
     * @summary Restructures an object into a PresentationAddress
     * @description
     * 
     * This takes an `object` and converts it to a `PresentationAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PresentationAddress`.
     * @returns {PresentationAddress}
     */
    public static _from_object (_o: { [_K in keyof (PresentationAddress)]: (PresentationAddress)[_K] }): PresentationAddress {
        return new PresentationAddress(_o.pSelector, _o.sSelector, _o.tSelector, _o.nAddresses);
    }


}

/**
 * @summary The Leading Root Component Types of PresentationAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PresentationAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("pSelector", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sSelector", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tSelector", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nAddresses", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PresentationAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PresentationAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PresentationAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PresentationAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PresentationAddress: $.ASN1Decoder<PresentationAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresentationAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresentationAddress (el: _Element): PresentationAddress {
    if (!_cached_decoder_for_PresentationAddress) { _cached_decoder_for_PresentationAddress = function (el: _Element): PresentationAddress {
    let pSelector: OPTIONAL<OCTET_STRING>;
    let sSelector: OPTIONAL<OCTET_STRING>;
    let tSelector: OPTIONAL<OCTET_STRING>;
    let nAddresses!: OCTET_STRING[];
    const callbacks: $.DecodingMap = {
        "pSelector": (_el: _Element): void => { pSelector = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sSelector": (_el: _Element): void => { sSelector = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tSelector": (_el: _Element): void => { tSelector = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "nAddresses": (_el: _Element): void => { nAddresses = $._decode_explicit<OCTET_STRING[]>(() => $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PresentationAddress,
        _extension_additions_list_spec_for_PresentationAddress,
        _root_component_type_list_2_spec_for_PresentationAddress,
        undefined,
    );
    return new PresentationAddress(
        pSelector,
        sSelector,
        tSelector,
        nAddresses
    );
}; }
    return _cached_decoder_for_PresentationAddress(el);
}

let _cached_encoder_for_PresentationAddress: $.ASN1Encoder<PresentationAddress> | null = null;

/**
 * @summary Encodes a(n) PresentationAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentationAddress, encoded as an ASN.1 Element.
 */
export
function _encode_PresentationAddress (value: PresentationAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresentationAddress) { _cached_encoder_for_PresentationAddress = function (value: PresentationAddress, elGetter: $.ASN1Encoder<PresentationAddress>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pSelector === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.pSelector, $.BER)),
            /* IF_ABSENT  */ ((value.sSelector === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.sSelector, $.BER)),
            /* IF_ABSENT  */ ((value.tSelector === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.tSelector, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.nAddresses, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PresentationAddress(value, elGetter);
}


/* eslint-enable */
