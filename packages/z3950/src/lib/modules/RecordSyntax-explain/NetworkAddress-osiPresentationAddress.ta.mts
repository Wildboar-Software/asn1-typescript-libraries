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
 * @summary NetworkAddress_osiPresentationAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkAddress-osiPresentationAddress ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class NetworkAddress_osiPresentationAddress {
    constructor (
        /**
         * @summary `pSel`.
         * @public
         * @readonly
         */
        readonly pSel: InternationalString,
        /**
         * @summary `sSel`.
         * @public
         * @readonly
         */
        readonly sSel: OPTIONAL<InternationalString>,
        /**
         * @summary `tSel`.
         * @public
         * @readonly
         */
        readonly tSel: OPTIONAL<InternationalString>,
        /**
         * @summary `nSap`.
         * @public
         * @readonly
         */
        readonly nSap: InternationalString
    ) {}

    /**
     * @summary Restructures an object into a NetworkAddress_osiPresentationAddress
     * @description
     * 
     * This takes an `object` and converts it to a `NetworkAddress_osiPresentationAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NetworkAddress_osiPresentationAddress`.
     * @returns {NetworkAddress_osiPresentationAddress}
     */
    public static _from_object (_o: { [_K in keyof (NetworkAddress_osiPresentationAddress)]: (NetworkAddress_osiPresentationAddress)[_K] }): NetworkAddress_osiPresentationAddress {
        return new NetworkAddress_osiPresentationAddress(_o.pSel, _o.sSel, _o.tSel, _o.nSap);
    }


}

/**
 * @summary The Leading Root Component Types of NetworkAddress_osiPresentationAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NetworkAddress_osiPresentationAddress: $.ComponentSpec[] = [
    /* FIXME: pSel COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: sSel COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: tSel COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: nSap COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of NetworkAddress_osiPresentationAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NetworkAddress_osiPresentationAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NetworkAddress_osiPresentationAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NetworkAddress_osiPresentationAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NetworkAddress_osiPresentationAddress: $.ASN1Decoder<NetworkAddress_osiPresentationAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkAddress_osiPresentationAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkAddress_osiPresentationAddress (el: _Element): NetworkAddress_osiPresentationAddress {
    if (!_cached_decoder_for_NetworkAddress_osiPresentationAddress) { _cached_decoder_for_NetworkAddress_osiPresentationAddress = function (el: _Element): NetworkAddress_osiPresentationAddress {
    let pSel!: InternationalString;
    let sSel: OPTIONAL<InternationalString>;
    let tSel: OPTIONAL<InternationalString>;
    let nSap!: InternationalString;
    const callbacks: $.DecodingMap = {
        "pSel": (_el: _Element): void => { pSel = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "sSel": (_el: _Element): void => { sSel = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "tSel": (_el: _Element): void => { tSel = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "nSap": (_el: _Element): void => { nSap = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NetworkAddress_osiPresentationAddress,
        _extension_additions_list_spec_for_NetworkAddress_osiPresentationAddress,
        _root_component_type_list_2_spec_for_NetworkAddress_osiPresentationAddress,
        undefined,
    );
    return new NetworkAddress_osiPresentationAddress(
        pSel,
        sSel,
        tSel,
        nSap
    );
}; }
    return _cached_decoder_for_NetworkAddress_osiPresentationAddress(el);
}

let _cached_encoder_for_NetworkAddress_osiPresentationAddress: $.ASN1Encoder<NetworkAddress_osiPresentationAddress> | null = null;

/**
 * @summary Encodes a(n) NetworkAddress_osiPresentationAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkAddress_osiPresentationAddress, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkAddress_osiPresentationAddress (value: NetworkAddress_osiPresentationAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkAddress_osiPresentationAddress) { _cached_encoder_for_NetworkAddress_osiPresentationAddress = function (value: NetworkAddress_osiPresentationAddress, elGetter: $.ASN1Encoder<NetworkAddress_osiPresentationAddress>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.pSel, $.BER),
            /* IF_ABSENT  */ ((value.sSel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.sSel, $.BER)),
            /* IF_ABSENT  */ ((value.tSel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.tSel, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.nSap, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NetworkAddress_osiPresentationAddress(value, elGetter);
}


/* eslint-enable */
