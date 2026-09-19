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
 * @summary Psmo_configureImmediateEnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Psmo-configureImmediateEnable ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Psmo_configureImmediateEnable {
    constructor (
        /**
         * @summary `immediateEnableFlag`.
         * @public
         * @readonly
         */
        readonly immediateEnableFlag: OPTIONAL<NULL>,
        /**
         * @summary `defaultSmdpOid`.
         * @public
         * @readonly
         */
        readonly defaultSmdpOid: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `defaultSmdpAddress`.
         * @public
         * @readonly
         */
        readonly defaultSmdpAddress: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a Psmo_configureImmediateEnable
     * @description
     * 
     * This takes an `object` and converts it to a `Psmo_configureImmediateEnable`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Psmo_configureImmediateEnable`.
     * @returns {Psmo_configureImmediateEnable}
     */
    public static _from_object (_o: { [_K in keyof (Psmo_configureImmediateEnable)]: (Psmo_configureImmediateEnable)[_K] }): Psmo_configureImmediateEnable {
        return new Psmo_configureImmediateEnable(_o.immediateEnableFlag, _o.defaultSmdpOid, _o.defaultSmdpAddress);
    }


}

/**
 * @summary The Leading Root Component Types of Psmo_configureImmediateEnable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Psmo_configureImmediateEnable: $.ComponentSpec[] = [
    new $.ComponentSpec("immediateEnableFlag", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("defaultSmdpOid", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("defaultSmdpAddress", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Psmo_configureImmediateEnable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Psmo_configureImmediateEnable: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Psmo_configureImmediateEnable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Psmo_configureImmediateEnable: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Psmo_configureImmediateEnable: $.ASN1Decoder<Psmo_configureImmediateEnable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Psmo_configureImmediateEnable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Psmo_configureImmediateEnable (el: _Element): Psmo_configureImmediateEnable {
    if (!_cached_decoder_for_Psmo_configureImmediateEnable) { _cached_decoder_for_Psmo_configureImmediateEnable = function (el: _Element): Psmo_configureImmediateEnable {
    let immediateEnableFlag: OPTIONAL<NULL>;
    let defaultSmdpOid: OPTIONAL<OBJECT_IDENTIFIER>;
    let defaultSmdpAddress: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "immediateEnableFlag": (_el: _Element): void => { immediateEnableFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "defaultSmdpOid": (_el: _Element): void => { defaultSmdpOid = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "defaultSmdpAddress": (_el: _Element): void => { defaultSmdpAddress = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Psmo_configureImmediateEnable,
        _extension_additions_list_spec_for_Psmo_configureImmediateEnable,
        _root_component_type_list_2_spec_for_Psmo_configureImmediateEnable,
        undefined,
    );
    return new Psmo_configureImmediateEnable(
        immediateEnableFlag,
        defaultSmdpOid,
        defaultSmdpAddress
    );
}; }
    return _cached_decoder_for_Psmo_configureImmediateEnable(el);
}

let _cached_encoder_for_Psmo_configureImmediateEnable: $.ASN1Encoder<Psmo_configureImmediateEnable> | null = null;

/**
 * @summary Encodes a(n) Psmo_configureImmediateEnable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Psmo_configureImmediateEnable, encoded as an ASN.1 Element.
 */
export
function _encode_Psmo_configureImmediateEnable (value: Psmo_configureImmediateEnable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Psmo_configureImmediateEnable) { _cached_encoder_for_Psmo_configureImmediateEnable = function (value: Psmo_configureImmediateEnable, elGetter: $.ASN1Encoder<Psmo_configureImmediateEnable>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.immediateEnableFlag === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.immediateEnableFlag, $.BER)),
            /* IF_ABSENT  */ ((value.defaultSmdpOid === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.defaultSmdpOid, $.BER)),
            /* IF_ABSENT  */ ((value.defaultSmdpAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.defaultSmdpAddress, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Psmo_configureImmediateEnable(value, elGetter);
}


/* eslint-enable */
