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
 * @summary COupdate_objectUpdate_multiElement_Item_update_booleanUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * COupdate-objectUpdate-multiElement-Item-update-booleanUpdate ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class COupdate_objectUpdate_multiElement_Item_update_booleanUpdate {
    constructor (
        /**
         * @summary `values`.
         * @public
         * @readonly
         */
        readonly values: BIT_STRING,
        /**
         * @summary `mask`.
         * @public
         * @readonly
         */
        readonly mask: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a COupdate_objectUpdate_multiElement_Item_update_booleanUpdate
     * @description
     * 
     * This takes an `object` and converts it to a `COupdate_objectUpdate_multiElement_Item_update_booleanUpdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `COupdate_objectUpdate_multiElement_Item_update_booleanUpdate`.
     * @returns {COupdate_objectUpdate_multiElement_Item_update_booleanUpdate}
     */
    public static _from_object (_o: { [_K in keyof (COupdate_objectUpdate_multiElement_Item_update_booleanUpdate)]: (COupdate_objectUpdate_multiElement_Item_update_booleanUpdate)[_K] }): COupdate_objectUpdate_multiElement_Item_update_booleanUpdate {
        return new COupdate_objectUpdate_multiElement_Item_update_booleanUpdate(_o.values, _o.mask);
    }


}

/**
 * @summary The Leading Root Component Types of COupdate_objectUpdate_multiElement_Item_update_booleanUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate: $.ComponentSpec[] = [
    new $.ComponentSpec("values", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mask", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of COupdate_objectUpdate_multiElement_Item_update_booleanUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of COupdate_objectUpdate_multiElement_Item_update_booleanUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate: $.ASN1Decoder<COupdate_objectUpdate_multiElement_Item_update_booleanUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) COupdate_objectUpdate_multiElement_Item_update_booleanUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate (el: _Element): COupdate_objectUpdate_multiElement_Item_update_booleanUpdate {
    if (!_cached_decoder_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate) { _cached_decoder_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate = function (el: _Element): COupdate_objectUpdate_multiElement_Item_update_booleanUpdate {
    let values!: BIT_STRING;
    let mask: OPTIONAL<BIT_STRING>;
    const callbacks: $.DecodingMap = {
        "values": (_el: _Element): void => { values = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "mask": (_el: _Element): void => { mask = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate,
        _extension_additions_list_spec_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate,
        _root_component_type_list_2_spec_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate,
        undefined,
    );
    return new COupdate_objectUpdate_multiElement_Item_update_booleanUpdate(
        values,
        mask
    );
}; }
    return _cached_decoder_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate(el);
}

let _cached_encoder_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate: $.ASN1Encoder<COupdate_objectUpdate_multiElement_Item_update_booleanUpdate> | null = null;

/**
 * @summary Encodes a(n) COupdate_objectUpdate_multiElement_Item_update_booleanUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The COupdate_objectUpdate_multiElement_Item_update_booleanUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate (value: COupdate_objectUpdate_multiElement_Item_update_booleanUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate) { _cached_encoder_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate = function (value: COupdate_objectUpdate_multiElement_Item_update_booleanUpdate, elGetter: $.ASN1Encoder<COupdate_objectUpdate_multiElement_Item_update_booleanUpdate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBitString, $.BER)(value.values, $.BER),
            /* IF_ABSENT  */ ((value.mask === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBitString, $.BER)(value.mask, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate(value, elGetter);
}


/* eslint-enable */
