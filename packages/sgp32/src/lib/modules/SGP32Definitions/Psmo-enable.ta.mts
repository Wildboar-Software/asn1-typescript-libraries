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
import { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";
// export { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";


/**
 * @summary Psmo_enable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Psmo-enable ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Psmo_enable {
    constructor (
        /**
         * @summary `iccid`.
         * @public
         * @readonly
         */
        readonly iccid: Iccid,
        /**
         * @summary `rollbackFlag`.
         * @public
         * @readonly
         */
        readonly rollbackFlag: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a Psmo_enable
     * @description
     * 
     * This takes an `object` and converts it to a `Psmo_enable`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Psmo_enable`.
     * @returns {Psmo_enable}
     */
    public static _from_object (_o: { [_K in keyof (Psmo_enable)]: (Psmo_enable)[_K] }): Psmo_enable {
        return new Psmo_enable(_o.iccid, _o.rollbackFlag);
    }


}

/**
 * @summary The Leading Root Component Types of Psmo_enable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Psmo_enable: $.ComponentSpec[] = [
    new $.ComponentSpec("iccid", false, $.hasTag(_TagClass.application, 26)),
    new $.ComponentSpec("rollbackFlag", true, $.hasTag(_TagClass.universal, 5))
];

/**
 * @summary The Trailing Root Component Types of Psmo_enable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Psmo_enable: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Psmo_enable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Psmo_enable: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Psmo_enable: $.ASN1Decoder<Psmo_enable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Psmo_enable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Psmo_enable (el: _Element): Psmo_enable {
    if (!_cached_decoder_for_Psmo_enable) { _cached_decoder_for_Psmo_enable = function (el: _Element): Psmo_enable {
    let iccid!: Iccid;
    let rollbackFlag: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "iccid": (_el: _Element): void => { iccid = $._decode_implicit<Iccid>(() => _decode_Iccid)(_el); },
        "rollbackFlag": (_el: _Element): void => { rollbackFlag = $._decodeNull(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Psmo_enable,
        _extension_additions_list_spec_for_Psmo_enable,
        _root_component_type_list_2_spec_for_Psmo_enable,
        undefined,
    );
    return new Psmo_enable(
        iccid,
        rollbackFlag
    );
}; }
    return _cached_decoder_for_Psmo_enable(el);
}

let _cached_encoder_for_Psmo_enable: $.ASN1Encoder<Psmo_enable> | null = null;

/**
 * @summary Encodes a(n) Psmo_enable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Psmo_enable, encoded as an ASN.1 Element.
 */
export
function _encode_Psmo_enable (value: Psmo_enable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Psmo_enable) { _cached_encoder_for_Psmo_enable = function (value: Psmo_enable, elGetter: $.ASN1Encoder<Psmo_enable>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 26, () => _encode_Iccid, $.BER)(value.iccid, $.BER),
            /* IF_ABSENT  */ ((value.rollbackFlag === undefined) ? undefined : $._encodeNull(value.rollbackFlag, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Psmo_enable(value, elGetter);
}


/* eslint-enable */
