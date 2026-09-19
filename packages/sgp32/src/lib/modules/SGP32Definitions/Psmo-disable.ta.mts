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
 * @summary Psmo_disable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Psmo-disable ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Psmo_disable {
    constructor (
        /**
         * @summary `iccid`.
         * @public
         * @readonly
         */
        readonly iccid: Iccid
    ) {}

    /**
     * @summary Restructures an object into a Psmo_disable
     * @description
     * 
     * This takes an `object` and converts it to a `Psmo_disable`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Psmo_disable`.
     * @returns {Psmo_disable}
     */
    public static _from_object (_o: { [_K in keyof (Psmo_disable)]: (Psmo_disable)[_K] }): Psmo_disable {
        return new Psmo_disable(_o.iccid);
    }


}

/**
 * @summary The Leading Root Component Types of Psmo_disable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Psmo_disable: $.ComponentSpec[] = [
    new $.ComponentSpec("iccid", false, $.hasTag(_TagClass.application, 26))
];

/**
 * @summary The Trailing Root Component Types of Psmo_disable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Psmo_disable: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Psmo_disable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Psmo_disable: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Psmo_disable: $.ASN1Decoder<Psmo_disable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Psmo_disable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Psmo_disable (el: _Element): Psmo_disable {
    if (!_cached_decoder_for_Psmo_disable) { _cached_decoder_for_Psmo_disable = function (el: _Element): Psmo_disable {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("Psmo-disable contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iccid";
    let iccid!: Iccid;
    iccid = $._decode_implicit<Iccid>(() => _decode_Iccid)(sequence[0]);
    return new Psmo_disable(
        iccid,

    );
}; }
    return _cached_decoder_for_Psmo_disable(el);
}

let _cached_encoder_for_Psmo_disable: $.ASN1Encoder<Psmo_disable> | null = null;

/**
 * @summary Encodes a(n) Psmo_disable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Psmo_disable, encoded as an ASN.1 Element.
 */
export
function _encode_Psmo_disable (value: Psmo_disable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Psmo_disable) { _cached_encoder_for_Psmo_disable = function (value: Psmo_disable, elGetter: $.ASN1Encoder<Psmo_disable>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 26, () => _encode_Iccid, $.BER)(value.iccid, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Psmo_disable(value, elGetter);
}


/* eslint-enable */
